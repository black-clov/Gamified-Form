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
            colorMap.set('1', 'rgb(236, 170, 54)');   // 1
            colorMap.set('2', 'rgb(212, 22, 60)');    // 2
            colorMap.set('3', 'rgb(59, 130, 246)');    // 3
            colorMap.set('4', 'rgb(222, 248, 249)');   // 4
            colorMap.set('5', 'rgb(211, 162, 10)');    // 5
            colorMap.set('6', 'rgb(43, 79, 11)');      // 6
            colorMap.set('7', 'rgb(47, 45, 146)');     // 7
            colorMap.set('8', 'rgb(244, 184, 66)');    // 8
            colorMap.set('9', 'rgb(240, 200, 44)');    // 9
            colorMap.set('10', 'rgb(160, 21, 167)');   // 10
            colorMap.set('11', 'rgb(177, 153, 166)');   // 11
            colorMap.set('12', 'rgb(214, 208, 183)');   // 12
            colorMap.set('13', 'rgb(159, 12, 62)');     // 13
            colorMap.set('14', 'rgb(5, 185, 226)');      // 14
            colorMap.set('15', 'rgb(167, 224, 52)');    // 15
            colorMap.set('16', 'rgb(130, 194, 109)');   // 16
            colorMap.set('17', 'rgb(255, 87, 34)');     // 17
            colorMap.set('18', 'rgb(191, 4, 112)');     // 18
            colorMap.set('19', 'rgb(165, 215, 245)');   // 19
            colorMap.set('20', 'rgb(211, 184, 198)');   // 20
            colorMap.set('21', 'rgb(233, 183, 198)');   // 21
            colorMap.set('22', 'rgb(220, 214, 214)');   // 22
            colorMap.set('23', 'rgb(211, 245, 214)');   // 23
            colorMap.set('24', 'rgb(140, 26, 32)');     // 24
            colorMap.set('25', 'rgb(200, 60, 145)');    // 25
            colorMap.set('26', 'rgb(149, 196, 109)');   // 26
            colorMap.set('27', 'rgb(241, 243, 245)');   // 27
            colorMap.set('28', 'rgb(230, 201, 206)');   // 28
            colorMap.set('29', 'rgb(64, 183, 227)');    // 29
            colorMap.set('30', 'rgb(240, 162, 169)');   // 30
            colorMap.set('31', 'rgb(200, 179, 164)');   // 31
            colorMap.set('32', 'rgb(224, 162, 123)');   // 32
            colorMap.set('33', 'rgb(251, 144, 1)');     // 33
            colorMap.set('34', 'rgb(162, 78, 79)');     // 34
            colorMap.set('35', 'rgb(62, 173, 149)');    // 35
            colorMap.set('36', 'rgb(163, 178, 48)');    // 36
            colorMap.set('37', 'rgb(28, 79, 145)');     // 37
            colorMap.set('38', 'rgb(222, 252, 44)');    // 38
            colorMap.set('39', 'rgb(63, 110, 56)');     // 39
            colorMap.set('40', 'rgb(232, 129, 182)');   // 40
            colorMap.set('41', 'rgb(176, 157, 122)');   // 41
            colorMap.set('42', 'rgb(236, 169, 40)');    // 42
            colorMap.set('43', 'rgb(194, 5, 216)');     // 43
            colorMap.set('44', 'rgb(41, 251, 182)');    // 44
            colorMap.set('45', 'rgb(209, 210, 10)');    // 45
            colorMap.set('46', 'rgb(204, 4, 243)');     // 46
            colorMap.set('47', 'rgb(214, 162, 38)');    // 47
            colorMap.set('48', 'rgb(219, 243, 243)');   // 48
            colorMap.set('49', 'rgb(243, 106, 22)');    // 49
            colorMap.set('50', 'rgb(198, 162, 50)');    // 50
            colorMap.set('51', 'rgb(215, 127, 137)');   // 51
            colorMap.set('52', 'rgb(240, 177, 209)');   // 52
            colorMap.set('53', 'rgb(169, 211, 227)');   // 53
            colorMap.set('54', 'rgb(14, 109, 77)');     // 54
            colorMap.set('55', 'rgb(212, 123, 107)');   // 55
            colorMap.set('56', 'rgb(167, 218, 141)');   // 56
            colorMap.set('57', 'rgb(255, 104, 193)');   // 57
            colorMap.set('58', 'rgb(248, 193, 225)');   // 58
            colorMap.set('59', 'rgb(243, 32, 57)');     // 59
            colorMap.set('60', 'rgb(178, 56, 56)');     // 60
            colorMap.set('61', 'rgb(111, 20, 248)');    // 61
            colorMap.set('62', 'rgb(186, 37, 115)');    // 62
            colorMap.set('63', 'rgb(164, 138, 3)');     // 63
            colorMap.set('64', 'rgb(50, 224, 62)');     // 64
            colorMap.set('65', 'rgb(229, 181, 213)');   // 65
            colorMap.set('66', 'rgb(192, 138, 2)');     // 66
            colorMap.set('67', 'rgb(92, 155, 154)');    // 67
            colorMap.set('68', 'rgb(126, 9, 214)');     // 68
            colorMap.set('69', 'rgb(209, 177, 153)');   // 69
            colorMap.set('70', 'rgb(239, 48, 36)');     // 70
            colorMap.set('71', 'rgb(76, 90, 14)');      // 71
            colorMap.set('72', 'rgb(184, 30, 183)');    // 72
            colorMap.set('73', 'rgb(220, 140, 86)');    // 73
            colorMap.set('74', 'rgb(168, 50, 18)');     // 74
            colorMap.set('75', 'rgb(92, 122, 28)');     // 75
            colorMap.set('76', 'rgb(227, 255, 57)');    // 76
            colorMap.set('77', 'rgb(244, 94, 214)');    // 77
            colorMap.set('78', 'rgb(174, 189, 171)');   // 78
            colorMap.set('79', 'rgb(177, 152, 225)');   // 79
            colorMap.set('80', 'rgb(74, 31, 115)');     // 80
            colorMap.set('81', 'rgb(30, 185, 11)');     // 81
            colorMap.set('82', 'rgb(229, 0, 218)');     // 82
            colorMap.set('83', 'rgb(116, 69, 138)');    // 83
            colorMap.set('84', 'rgb(35, 182, 72)');     // 84
            colorMap.set('85', 'rgb(52, 211, 69)');     // 85
            colorMap.set('86', 'rgb(244, 204, 27)');    // 86
            colorMap.set('87', 'rgb(210, 176, 188)');   // 87
            colorMap.set('88', 'rgb(197, 88, 0)');      // 88
            colorMap.set('89', 'rgb(226, 143, 119)');   // 89
            colorMap.set('90', 'rgb(31, 138, 100)');    // 90
            colorMap.set('91', 'rgb(255, 155, 83)');    // 91
            colorMap.set('92', 'rgb(229, 0, 218)');     // 92
            colorMap.set('93', 'rgb(149, 185, 125)');   // 93
            colorMap.set('94', 'rgb(241, 228, 192)');   // 94
            colorMap.set('95', 'rgb(115, 213, 59)');    // 95
            colorMap.set('96', 'rgb(178, 86, 39)');     // 96
            colorMap.set('97', 'rgb(241, 228, 192)');   // 97
            colorMap.set('98', 'rgb(215, 193, 178)');   // 98
            colorMap.set('99', 'rgb(231, 29, 124)');    // 99
            colorMap.set('100', 'rgb(200, 209, 96)');   // 100

    const color = colorMap.get(team);

    let year = new Date().getFullYear();

    sendSmtpEmail.subject = "Welcome to iTech";
    sendSmtpEmail.htmlContent = `<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;line-height:1.6;margin:20px}.container{max-width:600px;margin:auto}.header{background-color:${color};color:#fff;text-align:center;padding:10px}.content{padding:20px}.footer{text-align:center;padding:10px;background-color:${color};color:#fff}</style><title>iTech Club - Assemblée Générale</title></head><body><div class="container"><div class="header"><h1>iTech Club</h1></div><div class="content"><p>Bonjour ${fullName},</p><p>Nous vous rappelons que notre assemblée générale du iTech Club aura lieu le 10 Octobre 2024 dans l'amphi 1 situé au 1er étage. Nous comptons sur votre présence, alors assurez-vous d'arriver tôt à 12h45min.</p><p>Votre numéro est ${team}, compte sur vous pour venir en force afin de découvrir plein de choses, prouver votre sens du rythme impeccable et réclamer votre place de gagnant !</p><p>On a oublié de dire?! Il y aura aussi un tirage au sort pour de nombreux cadeaux.</p><p>Cordialement,<br>ITech</p></div><div class="footer"><p>&copy; 2024 iTech Club</p></div></div></body></html>`;
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

export async function sendReminderEmail(fullName, email, team) {
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    // Configure API key authorization
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.EMAIL_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    const colorMap = new Map()
    colorMap.set('1', 'rgb(236, 170, 54)');   // 1
    colorMap.set('2', 'rgb(212, 22, 60)');    // 2
    colorMap.set('3', 'rgb(59, 130, 246)');    // 3
    colorMap.set('4', 'rgb(222, 248, 249)');   // 4
    colorMap.set('5', 'rgb(211, 162, 10)');    // 5
    colorMap.set('6', 'rgb(43, 79, 11)');      // 6
    colorMap.set('7', 'rgb(47, 45, 146)');     // 7
    colorMap.set('8', 'rgb(244, 184, 66)');    // 8
    colorMap.set('9', 'rgb(240, 200, 44)');    // 9
    colorMap.set('10', 'rgb(160, 21, 167)');   // 10
    colorMap.set('11', 'rgb(177, 153, 166)');   // 11
    colorMap.set('12', 'rgb(214, 208, 183)');   // 12
    colorMap.set('13', 'rgb(159, 12, 62)');     // 13
    colorMap.set('14', 'rgb(5, 185, 226)');      // 14
    colorMap.set('15', 'rgb(167, 224, 52)');    // 15
    colorMap.set('16', 'rgb(130, 194, 109)');   // 16
    colorMap.set('17', 'rgb(255, 87, 34)');     // 17
    colorMap.set('18', 'rgb(191, 4, 112)');     // 18
    colorMap.set('19', 'rgb(165, 215, 245)');   // 19
    colorMap.set('20', 'rgb(211, 184, 198)');   // 20
    colorMap.set('21', 'rgb(233, 183, 198)');   // 21
    colorMap.set('22', 'rgb(220, 214, 214)');   // 22
    colorMap.set('23', 'rgb(211, 245, 214)');   // 23
    colorMap.set('24', 'rgb(140, 26, 32)');     // 24
    colorMap.set('25', 'rgb(200, 60, 145)');    // 25
    colorMap.set('26', 'rgb(149, 196, 109)');   // 26
    colorMap.set('27', 'rgb(241, 243, 245)');   // 27
    colorMap.set('28', 'rgb(230, 201, 206)');   // 28
    colorMap.set('29', 'rgb(64, 183, 227)');    // 29
    colorMap.set('30', 'rgb(240, 162, 169)');   // 30
    colorMap.set('31', 'rgb(200, 179, 164)');   // 31
    colorMap.set('32', 'rgb(224, 162, 123)');   // 32
    colorMap.set('33', 'rgb(251, 144, 1)');     // 33
    colorMap.set('34', 'rgb(162, 78, 79)');     // 34
    colorMap.set('35', 'rgb(62, 173, 149)');    // 35
    colorMap.set('36', 'rgb(163, 178, 48)');    // 36
    colorMap.set('37', 'rgb(28, 79, 145)');     // 37
    colorMap.set('38', 'rgb(222, 252, 44)');    // 38
    colorMap.set('39', 'rgb(63, 110, 56)');     // 39
    colorMap.set('40', 'rgb(232, 129, 182)');   // 40
    colorMap.set('41', 'rgb(176, 157, 122)');   // 41
    colorMap.set('42', 'rgb(236, 169, 40)');    // 42
    colorMap.set('43', 'rgb(194, 5, 216)');     // 43
    colorMap.set('44', 'rgb(41, 251, 182)');    // 44
    colorMap.set('45', 'rgb(209, 210, 10)');    // 45
    colorMap.set('46', 'rgb(204, 4, 243)');     // 46
    colorMap.set('47', 'rgb(214, 162, 38)');    // 47
    colorMap.set('48', 'rgb(219, 243, 243)');   // 48
    colorMap.set('49', 'rgb(243, 106, 22)');    // 49
    colorMap.set('50', 'rgb(198, 162, 50)');    // 50
    colorMap.set('51', 'rgb(215, 127, 137)');   // 51
    colorMap.set('52', 'rgb(240, 177, 209)');   // 52
    colorMap.set('53', 'rgb(169, 211, 227)');   // 53
    colorMap.set('54', 'rgb(14, 109, 77)');     // 54
    colorMap.set('55', 'rgb(212, 123, 107)');   // 55
    colorMap.set('56', 'rgb(167, 218, 141)');   // 56
    colorMap.set('57', 'rgb(255, 104, 193)');   // 57
    colorMap.set('58', 'rgb(248, 193, 225)');   // 58
    colorMap.set('59', 'rgb(243, 32, 57)');     // 59
    colorMap.set('60', 'rgb(178, 56, 56)');     // 60
    colorMap.set('61', 'rgb(111, 20, 248)');    // 61
    colorMap.set('62', 'rgb(186, 37, 115)');    // 62
    colorMap.set('63', 'rgb(164, 138, 3)');     // 63
    colorMap.set('64', 'rgb(50, 224, 62)');     // 64
    colorMap.set('65', 'rgb(229, 181, 213)');   // 65
    colorMap.set('66', 'rgb(192, 138, 2)');     // 66
    colorMap.set('67', 'rgb(92, 155, 154)');    // 67
    colorMap.set('68', 'rgb(126, 9, 214)');     // 68
    colorMap.set('69', 'rgb(209, 177, 153)');   // 69
    colorMap.set('70', 'rgb(239, 48, 36)');     // 70
    colorMap.set('71', 'rgb(76, 90, 14)');      // 71
    colorMap.set('72', 'rgb(184, 30, 183)');    // 72
    colorMap.set('73', 'rgb(220, 140, 86)');    // 73
    colorMap.set('74', 'rgb(168, 50, 18)');     // 74
    colorMap.set('75', 'rgb(92, 122, 28)');     // 75
    colorMap.set('76', 'rgb(227, 255, 57)');    // 76
    colorMap.set('77', 'rgb(244, 94, 214)');    // 77
    colorMap.set('78', 'rgb(174, 189, 171)');   // 78
    colorMap.set('79', 'rgb(177, 152, 225)');   // 79
    colorMap.set('80', 'rgb(74, 31, 115)');     // 80
    colorMap.set('81', 'rgb(30, 185, 11)');     // 81
    colorMap.set('82', 'rgb(229, 0, 218)');     // 82
    colorMap.set('83', 'rgb(116, 69, 138)');    // 83
    colorMap.set('84', 'rgb(35, 182, 72)');     // 84
    colorMap.set('85', 'rgb(52, 211, 69)');     // 85
    colorMap.set('86', 'rgb(244, 204, 27)');    // 86
    colorMap.set('87', 'rgb(210, 176, 188)');   // 87
    colorMap.set('88', 'rgb(197, 88, 0)');      // 88
    colorMap.set('89', 'rgb(226, 143, 119)');   // 89
    colorMap.set('90', 'rgb(31, 138, 100)');    // 90
    colorMap.set('91', 'rgb(255, 155, 83)');    // 91
    colorMap.set('92', 'rgb(229, 0, 218)');     // 92
    colorMap.set('93', 'rgb(149, 185, 125)');   // 93
    colorMap.set('94', 'rgb(241, 228, 192)');   // 94
    colorMap.set('95', 'rgb(115, 213, 59)');    // 95
    colorMap.set('96', 'rgb(178, 86, 39)');     // 96
    colorMap.set('97', 'rgb(241, 228, 192)');   // 97
    colorMap.set('98', 'rgb(215, 193, 178)');   // 98
    colorMap.set('99', 'rgb(231, 29, 124)');    // 99
    colorMap.set('100', 'rgb(200, 209, 96)');   // 100

    const color = colorMap.get(team);

    let year = new Date().getFullYear();

    sendSmtpEmail.subject = "the event is tomorrow!";
    sendSmtpEmail.htmlContent = `<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;line-height:1.6;margin:20px}.container{max-width:600px;margin:auto}.header{background-color:${color};color:#fff;text-align:center;padding:10px}.content{padding:20px}.footer{text-align:center;padding:10px;background-color:${color};color:#fff}</style><title>iTech Club - Assemblée Générale</title></head><body><div class="container"><div class="header"><h1>iTech Club</h1></div><div class="content"><p>Cher ${fullName},</p><p>Nous vous rappelons que notre assemblée générale du iTech Club aura lieu demain dans l'amphithéâtre situé au 1er étage. Nous comptons sur votre présence, alors assurez-vous d'arriver tôt à 12h.</p><p>Votre équipe, team ${team}, compte sur vous pour venir en force afin de vaincre les cyborgs, prouver votre sens du rythme impeccable et réclamer votre place de gagnant !</p><p>On a oublié de dire?! Il y aura aussi un tirage au sort pour de nombreux cadeaux.</p><p>Nous avons hâte de vous voir demain et de partager ensemble nos idées et nos projets pour l'avenir du club.</p><p>Cordialement,<br>ITech</p></div><div class="footer"><p>&copy; 2024 iTech Club</p></div></div></body></html>`;
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