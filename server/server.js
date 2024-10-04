const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
//const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
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
    let team = req.cookies.team;
  const colors = [
    'rgb(236, 170, 54)',   // 1
    'rgb(212, 22, 60)',    // 2
    'rgb(59, 130, 246)',    // 3
    'rgb(222, 248, 249)',   // 4
    'rgb(211, 162, 10)',    // 5
    'rgb(43, 79, 11)',      // 6
    'rgb(47, 45, 146)',     // 7
    'rgb(244, 184, 66)',    // 8
    'rgb(240, 200, 44)',    // 9
    'rgb(160, 21, 167)',    // 10
    'rgb(177, 153, 166)',   // 11
    'rgb(214, 208, 183)',   // 12
    'rgb(159, 12, 62)',     // 13
    'rgb(5, 185, 226)',      // 14
    'rgb(167, 224, 52)',    // 15
    'rgb(130, 194, 109)',   // 16
    'rgb(255, 87, 34)',     // 17
    'rgb(191, 4, 112)',     // 18
    'rgb(165, 215, 245)',   // 19
    'rgb(211, 184, 198)',   // 20
    'rgb(233, 183, 198)',   // 21
    'rgb(220, 214, 214)',   // 22
    'rgb(211, 245, 214)',   // 23
    'rgb(140, 26, 32)',     // 24
    'rgb(200, 60, 145)',    // 25
    'rgb(149, 196, 109)',   // 26
    'rgb(241, 243, 245)',   // 27
    'rgb(230, 201, 206)',   // 28
    'rgb(64, 183, 227)',    // 29
    'rgb(240, 162, 169)',   // 30
    'rgb(200, 179, 164)',   // 31
    'rgb(224, 162, 123)',   // 32
    'rgb(251, 144, 1)',     // 33
    'rgb(162, 78, 79)',     // 34
    'rgb(62, 173, 149)',    // 35
    'rgb(163, 178, 48)',    // 36
    'rgb(28, 79, 145)',     // 37
    'rgb(222, 252, 44)',    // 38
    'rgb(63, 110, 56)',     // 39
    'rgb(232, 129, 182)',   // 40
    'rgb(176, 157, 122)',   // 41
    'rgb(236, 169, 40)',    // 42
    'rgb(194, 5, 216)',     // 43
    'rgb(41, 251, 182)',    // 44
    'rgb(209, 210, 10)',    // 45
    'rgb(204, 4, 243)',     // 46
    'rgb(214, 162, 38)',    // 47
    'rgb(219, 243, 243)',   // 48
    'rgb(243, 106, 22)',    // 49
    'rgb(198, 162, 50)',    // 50
    'rgb(215, 127, 137)',   // 51
    'rgb(240, 177, 209)',   // 52
    'rgb(169, 211, 227)',   // 53
    'rgb(14, 109, 77)',     // 54
    'rgb(212, 123, 107)',   // 55
    'rgb(167, 218, 141)',   // 56
    'rgb(255, 104, 193)',   // 57
    'rgb(248, 193, 225)',   // 58
    'rgb(243, 32, 57)',     // 59
    'rgb(178, 56, 56)',     // 60
    'rgb(111, 20, 248)',    // 61
    'rgb(186, 37, 115)',    // 62
    'rgb(164, 138, 3)',     // 63
    'rgb(50, 224, 62)',     // 64
    'rgb(229, 181, 213)',   // 65
    'rgb(192, 138, 2)',     // 66
    'rgb(92, 155, 154)',    // 67
    'rgb(126, 9, 214)',     // 68
    'rgb(209, 177, 153)',   // 69
    'rgb(239, 48, 36)',     // 70
    'rgb(76, 90, 14)',      // 71
    'rgb(184, 30, 183)',    // 72
    'rgb(220, 140, 86)',    // 73
    'rgb(168, 50, 18)',     // 74
    'rgb(92, 122, 28)',     // 75
    'rgb(227, 255, 57)',    // 76
    'rgb(244, 94, 214)',    // 77
    'rgb(174, 189, 171)',   // 78
    'rgb(177, 152, 225)',   // 79
    'rgb(74, 31, 115)',     // 80
    'rgb(30, 185, 11)',     // 81
    'rgb(229, 0, 218)',     // 82
    'rgb(116, 69, 138)',    // 83
    'rgb(35, 182, 72)',     // 84
    'rgb(52, 211, 69)',     // 85
    'rgb(244, 204, 27)',    // 86
    'rgb(210, 176, 188)',   // 87
    'rgb(197, 88, 0)',      // 88
    'rgb(226, 143, 119)',   // 89
    'rgb(31, 138, 100)',    // 90
    'rgb(255, 155, 83)',    // 91
    'rgb(229, 0, 218)',     // 92
    'rgb(149, 185, 125)',   // 93
    'rgb(241, 228, 192)',   // 94
    'rgb(115, 213, 59)',    // 95
    'rgb(178, 86, 39)',     // 96
    'rgb(241, 228, 192)',   // 97
    'rgb(215, 193, 178)',   // 98
    'rgb(231, 29, 124)',    // 99
    'rgb(200, 209, 96)'     // 100
  ];

    if (!team || !colors.includes(team)) {
        team = colors[Math.floor(Math.random() * colors.length)];
        res.cookie('team', team);
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
    <div class="jumbotron" style="background-color: ${team};">
      <h1 class="display-4">Your Secret Number is  <span class="badge badge-secondary">${team}</span></h1>
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
    const { fullName, email, filiere, team } = req.body;

    if (!fullName || !email) {
        return res.status(400).send('Full Name and Email are required.');
    }

    const newUser = { fullName, email, filiere, team};
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
            text: `Hello ${fullName}, thanks for filling up the form. Your  ${team}.` // plain text body
        };

        // send mail with defined transport object
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.error('Error sending email:', error);
        //     } else {
        //         console.log('Email sent:', info.response);
        //     }
        // });

        res.status(200).send('User added to the database and email sent.');
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});