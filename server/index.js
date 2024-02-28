const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
//const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8000;

//const client = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');

// Create a nodemailer transporter
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'mouhsine.elmoudir@gmail.com', // your email address
        pass: 'jsul ente vmtq xdem' // your email password
    }
});

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// Route to get user's team color
app.get('/', (req, res) => {
    let teamColor = req.cookies.teamColor;
    const colors = ['red', 'blue', 'green', 'yellow'];

    if (!teamColor || !colors.includes(teamColor)) {
        teamColor = colors[Math.floor(Math.random() * colors.length)];
        res.cookie('teamColor', teamColor);
    }

    // Render HTML with the team color
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Color</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <div class="jumbotron" style="background-color: ${teamColor};">
      <h1 class="display-4">You are in team <span class="badge badge-secondary">${teamColor}</span></h1>
      <p class="lead">Welcome to the team!</p>
      <hr class="my-4">
      <p>Click below to join the team:</p>
      <a class="btn btn-primary btn-lg" href="/join" role="button">Join the Team</a>
    </div>
  </div>
</body>
</html>
  `);
});

app.get('/join',(req,res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Join Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h2>Join the Team</h2>
    <form action="/submitForm" method="POST">
  <div class="form-group">
    <label for="fullName">Full Name:</label>
    <input type="text" class="form-control" id="fullName" name="fullName" required>
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" name="email" required>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
  </div>
</body>
</html>`)
})


// Route to handle form submission
app.post('/submitForm', (req, res) => {
    const { fullName, email } = req.body;
    const teamColor = req.cookies.teamColor;

    if (!fullName || !email) {
        return res.status(400).send('Full Name and Email are required.');
    }

    const newUser = { fullName, email, teamColor };
    const sql = 'INSERT INTO users SET ?';

    db.query(sql, newUser, (err, result) => {
        if (err) {
            console.error('Error saving user to the database:', err);
            return res.status(500).send('Error saving user to the database.');
        }
        console.log('User added to the database.');

        // Send email to the user
        let mailOptions = {
            from: 'opening@itech-club.com', // sender address
            to: email, // list of receivers
            subject: 'Welcome to the Team', // Subject line
            text: `Hello ${fullName}, thanks for filling up the form. You are in the team ${teamColor}.` // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).send('User added to the database and email sent.');
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});