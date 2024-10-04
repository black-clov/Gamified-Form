import conn from "./db";
import { sendReminderEmail } from "./emailing";

async function sendReminderEmails() {
  const users = await conn.promise().query("SELECT * FROM users");
  users[0].forEach(async (user) => {
    await sendReminderEmail(user.fullName, user.email, user.team);
    await new Promise((resolve) => setTimeout(resolve, (Math.random()*30)*100 + 300 ));
    console.log("Email sent to "+ user.id + user.fullName);
  });
}

await sendReminderEmails();