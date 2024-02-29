import {app} from './express.app.js';
import conn from './db.js';
import {sendWelcomeEmail} from './emailing.js';

app.post('/join', (req, res) => {
  console.log('Join Called ...');
  const { fullName, email, filiere, team} = req.body;
  if (!fullName || !email || !filiere || !team) {
    return res.status(400).send('Full Name and Email are required.');
  }
  const newUser = { fullName, email, filiere, team};
  const sql = 'INSERT INTO users SET ?';
  conn.query(sql, newUser, (err, result) => {
    if (err) {
      console.error('Error saving user to the database:', err);
      return res.status(500).send('Error saving user to the database.');
    }
    console.log('User added to the database.');
    //sendWelcomeEmail(fullName, email, filiere, team);
    res.status(200).send('User added to the database and email sent.');
  });
  console.log('Join Finished ✅');
});