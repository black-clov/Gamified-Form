import dotenv from 'dotenv';
dotenv.config();
import SibApiV3Sdk from 'sib-api-v3-sdk';

export async function sendWelcomeEmail(fullName, email, team) {
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    // Configure API key authorization
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.EMAIL_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    const colorMap = new Map()
    colorMap.set('Earth', '#ECAA36');
    colorMap.set('Fire', '#D4163C');
    colorMap.set('Water', '#3B82F6');
    colorMap.set('Air', '#DEF8F9');

    const color = colorMap.get(team);

    let year = new Date().getFullYear();

    sendSmtpEmail.subject = "Welcome to iTech";
    sendSmtpEmail.htmlContent = `<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Welcome Email</title><style>body{font-family:Arial,sans-serif;font-size:16px;background-color:${color};margin:0;padding:0}.email-container{max-width:600px;margin:40px auto;background:#fff;border:1px solid #ddd}.email-header{background-color:${color};color:#fff;padding:20px;text-align:center}.email-body{padding:20px;text-align:center}.code{font-size:24px;color:${color};margin:20px 0;padding:10px;border:1px dashed ${color};display:inline-block}.footer{text-align:center;color:#777;font-size:14px;padding:20px}</style></head><body><div class="email-container"><div class="email-header"><h1>Welcome to iTech Club</h1></div><div class="email-body"><p>Hello ${fullName},</p><p>Thank you for taking part in the start of our journey! Here is your team :</p><div class="code">${team}</div><p>Remember this team, find out who else is in your team and share it with all the Ensamians and let's meet the <b></bold>7th of march 2024</bold></p><p>If you have any questions, feel free to contact us.</p><a href="mailto:questions@itech-club.com" style="color:#007bff">questions@itech-club.com</a></div><div class="footer">&copy; ${year} iTech Club. All rights reserved.</div></div></body></html>`;
    sendSmtpEmail.sender = { "name": "iTech Club", "email": "no-reply@itech-club.com" };
    sendSmtpEmail.to = [{ "email": email }];

    try {
        let data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent Succesfully');
    } catch (error) {
        
        console.error(error);
        return error;
    }
}