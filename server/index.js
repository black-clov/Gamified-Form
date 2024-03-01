import {app} from './express.app.js';
import conn from './db.js';
import {sendWelcomeEmail} from './emailing.js';

app.post('/join', async (req, res) => {
  console.log('Join Called ...');
  const { fullName, email, filiere, team} = req.body;
  if (!fullName || !email || !filiere || !team) {
    return res.status(400).send('Full Name and Email are required.');
  }
  const newUser = { fullName, email, filiere, team};
  const sql = 'INSERT INTO users SET ?';
  try {
    await conn.promise().query(sql, newUser);
    await sendWelcomeEmail(fullName, email, team);
    res.status(200).send('User Created');
    console.log('Join Finished ✅');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured');
  }
});