import {app} from './express.app.js';
import conn from './db.js';
import {sendWelcomeEmail} from './emailing.js';

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/join', async (req, res) => {
  console.log('Join Called ...');
  const { fullName, email, filiere, team} = req.body;
  
  const checkEmail = await conn.promise().query('SELECT * FROM users WHERE email = "' + email+'"');
  if (checkEmail[0].length > 0) {
    console.log('Join finished: Email already exists ❌');
    return res.status(402).send('Email already exists');
  }

  if (!fullName || !email || !filiere || !team) {
    return res.status(400).send('Full Name and Email are required.');
  }
  const newUser = { fullName, email, filiere, team};
  const sql = 'INSERT INTO users SET ?';
  try {
    await conn.promise().query(sql, newUser);
    //await sendWelcomeEmail(fullName, email, team);
    res.status(200).send('User Created');
    console.log('Join Finished ✅');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured');
  }
});