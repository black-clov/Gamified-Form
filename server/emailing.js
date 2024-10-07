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
    colorMap.set('101', 'rgb(123, 54, 21)');
    colorMap.set('102', 'rgb(201, 56, 89)');
    colorMap.set('103', 'rgb(59, 201, 142)');
    colorMap.set('104', 'rgb(133, 198, 23)');
    colorMap.set('105', 'rgb(211, 142, 111)');
    colorMap.set('106', 'rgb(81, 170, 230)');
    colorMap.set('107', 'rgb(178, 29, 52)');
    colorMap.set('108', 'rgb(52, 91, 183)');
    colorMap.set('109', 'rgb(94, 230, 175)');
    colorMap.set('110', 'rgb(205, 89, 27)');
    colorMap.set('111', 'rgb(113, 162, 252)');
    colorMap.set('112', 'rgb(194, 47, 137)');
    colorMap.set('113', 'rgb(103, 245, 109)');
    colorMap.set('114', 'rgb(252, 195, 61)');
    colorMap.set('115', 'rgb(142, 96, 184)');
    colorMap.set('116', 'rgb(82, 214, 214)');
    colorMap.set('117', 'rgb(200, 130, 215)');
    colorMap.set('118', 'rgb(94, 171, 48)');
    colorMap.set('119', 'rgb(244, 96, 144)');
    colorMap.set('120', 'rgb(63, 154, 111)');
    colorMap.set('121', 'rgb(201, 68, 22)');
    colorMap.set('122', 'rgb(151, 238, 120)');
    colorMap.set('123', 'rgb(73, 139, 213)');
    colorMap.set('124', 'rgb(233, 125, 64)');
    colorMap.set('125', 'rgb(255, 189, 120)');
    colorMap.set('126', 'rgb(179, 74, 189)');
    colorMap.set('127', 'rgb(110, 217, 85)');
    colorMap.set('128', 'rgb(192, 74, 100)');
    colorMap.set('129', 'rgb(86, 158, 245)');
    colorMap.set('130', 'rgb(220, 113, 191)');
    colorMap.set('131', 'rgb(241, 175, 21)');
    colorMap.set('132', 'rgb(94, 237, 162)');
    colorMap.set('133', 'rgb(135, 110, 240)');
    colorMap.set('134', 'rgb(75, 219, 185)');
    colorMap.set('135', 'rgb(202, 110, 22)');
    colorMap.set('136', 'rgb(102, 215, 71)');
    colorMap.set('137', 'rgb(224, 85, 110)');
    colorMap.set('138', 'rgb(91, 134, 189)');
    colorMap.set('139', 'rgb(251, 194, 55)');
    colorMap.set('140', 'rgb(178, 47, 75)');
    colorMap.set('141', 'rgb(128, 216, 230)');
    colorMap.set('142', 'rgb(69, 171, 203)');
    colorMap.set('143', 'rgb(153, 87, 201)');
    colorMap.set('144', 'rgb(96, 221, 51)');
    colorMap.set('145', 'rgb(244, 103, 66)');
    colorMap.set('146', 'rgb(81, 159, 188)');
    colorMap.set('147', 'rgb(233, 147, 116)');
    colorMap.set('148', 'rgb(202, 69, 175)');
    colorMap.set('149', 'rgb(136, 244, 77)');
    colorMap.set('150', 'rgb(212, 135, 217)');
    colorMap.set('151', 'rgb(165, 189, 21)');
    colorMap.set('152', 'rgb(255, 98, 193)');
    colorMap.set('153', 'rgb(112, 204, 128)');
    colorMap.set('154', 'rgb(197, 65, 45)');
    colorMap.set('155', 'rgb(86, 201, 171)');
    colorMap.set('156', 'rgb(245, 210, 111)');
    colorMap.set('157', 'rgb(188, 71, 146)');
    colorMap.set('158', 'rgb(149, 112, 248)');
    colorMap.set('159', 'rgb(97, 227, 158)');
    colorMap.set('160', 'rgb(244, 87, 133)');
    colorMap.set('161', 'rgb(76, 184, 77)');
    colorMap.set('162', 'rgb(192, 103, 204)');
    colorMap.set('163', 'rgb(94, 138, 56)');
    colorMap.set('164', 'rgb(218, 69, 193)');
    colorMap.set('165', 'rgb(158, 232, 104)');
    colorMap.set('166', 'rgb(120, 194, 235)');
    colorMap.set('167', 'rgb(241, 130, 90)');
    colorMap.set('168', 'rgb(221, 113, 187)');
    colorMap.set('169', 'rgb(150, 249, 81)');
    colorMap.set('170', 'rgb(195, 69, 59)');
    colorMap.set('171', 'rgb(132, 218, 217)');
    colorMap.set('172', 'rgb(189, 48, 148)');
    colorMap.set('173', 'rgb(72, 186, 42)');
    colorMap.set('174', 'rgb(242, 119, 57)');
    colorMap.set('175', 'rgb(99, 166, 226)');
    colorMap.set('176', 'rgb(220, 45, 114)');
    colorMap.set('177', 'rgb(118, 239, 86)');
    colorMap.set('178', 'rgb(217, 70, 200)');
    colorMap.set('179', 'rgb(243, 79, 33)');
    colorMap.set('180', 'rgb(131, 202, 249)');
    colorMap.set('181', 'rgb(194, 58, 129)');
    colorMap.set('182', 'rgb(77, 149, 197)');
    colorMap.set('183', 'rgb(233, 135, 44)');
    colorMap.set('184', 'rgb(144, 205, 83)');
    colorMap.set('185', 'rgb(203, 86, 145)');
    colorMap.set('186', 'rgb(95, 240, 94)');
    colorMap.set('187', 'rgb(175, 58, 69)');
    colorMap.set('188', 'rgb(128, 173, 238)');
    colorMap.set('189', 'rgb(205, 114, 57)');
    colorMap.set('190', 'rgb(110, 245, 71)');
    colorMap.set('191', 'rgb(183, 39, 154)');
    colorMap.set('192', 'rgb(71, 193, 120)');
    colorMap.set('193', 'rgb(255, 140, 86)');
    colorMap.set('194', 'rgb(191, 32, 210)');
    colorMap.set('195', 'rgb(81, 203, 87)');
    colorMap.set('196', 'rgb(247, 84, 174)');
    colorMap.set('197', 'rgb(212, 97, 51)');
    colorMap.set('198', 'rgb(98, 222, 194)');
    colorMap.set('199', 'rgb(233, 88, 128)');
    colorMap.set('200', 'rgb(142, 234, 72)');
            

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
    colorMap.set('101', 'rgb(123, 54, 21)');
    colorMap.set('102', 'rgb(201, 56, 89)');
    colorMap.set('103', 'rgb(59, 201, 142)');
    colorMap.set('104', 'rgb(133, 198, 23)');
    colorMap.set('105', 'rgb(211, 142, 111)');
    colorMap.set('106', 'rgb(81, 170, 230)');
    colorMap.set('107', 'rgb(178, 29, 52)');
    colorMap.set('108', 'rgb(52, 91, 183)');
    colorMap.set('109', 'rgb(94, 230, 175)');
    colorMap.set('110', 'rgb(205, 89, 27)');
    colorMap.set('111', 'rgb(113, 162, 252)');
    colorMap.set('112', 'rgb(194, 47, 137)');
    colorMap.set('113', 'rgb(103, 245, 109)');
    colorMap.set('114', 'rgb(252, 195, 61)');
    colorMap.set('115', 'rgb(142, 96, 184)');
    colorMap.set('116', 'rgb(82, 214, 214)');
    colorMap.set('117', 'rgb(200, 130, 215)');
    colorMap.set('118', 'rgb(94, 171, 48)');
    colorMap.set('119', 'rgb(244, 96, 144)');
    colorMap.set('120', 'rgb(63, 154, 111)');
    colorMap.set('121', 'rgb(201, 68, 22)');
    colorMap.set('122', 'rgb(151, 238, 120)');
    colorMap.set('123', 'rgb(73, 139, 213)');
    colorMap.set('124', 'rgb(233, 125, 64)');
    colorMap.set('125', 'rgb(255, 189, 120)');
    colorMap.set('126', 'rgb(179, 74, 189)');
    colorMap.set('127', 'rgb(110, 217, 85)');
    colorMap.set('128', 'rgb(192, 74, 100)');
    colorMap.set('129', 'rgb(86, 158, 245)');
    colorMap.set('130', 'rgb(220, 113, 191)');
    colorMap.set('131', 'rgb(241, 175, 21)');
    colorMap.set('132', 'rgb(94, 237, 162)');
    colorMap.set('133', 'rgb(135, 110, 240)');
    colorMap.set('134', 'rgb(75, 219, 185)');
    colorMap.set('135', 'rgb(202, 110, 22)');
    colorMap.set('136', 'rgb(102, 215, 71)');
    colorMap.set('137', 'rgb(224, 85, 110)');
    colorMap.set('138', 'rgb(91, 134, 189)');
    colorMap.set('139', 'rgb(251, 194, 55)');
    colorMap.set('140', 'rgb(178, 47, 75)');
    colorMap.set('141', 'rgb(128, 216, 230)');
    colorMap.set('142', 'rgb(69, 171, 203)');
    colorMap.set('143', 'rgb(153, 87, 201)');
    colorMap.set('144', 'rgb(96, 221, 51)');
    colorMap.set('145', 'rgb(244, 103, 66)');
    colorMap.set('146', 'rgb(81, 159, 188)');
    colorMap.set('147', 'rgb(233, 147, 116)');
    colorMap.set('148', 'rgb(202, 69, 175)');
    colorMap.set('149', 'rgb(136, 244, 77)');
    colorMap.set('150', 'rgb(212, 135, 217)');
    colorMap.set('151', 'rgb(165, 189, 21)');
    colorMap.set('152', 'rgb(255, 98, 193)');
    colorMap.set('153', 'rgb(112, 204, 128)');
    colorMap.set('154', 'rgb(197, 65, 45)');
    colorMap.set('155', 'rgb(86, 201, 171)');
    colorMap.set('156', 'rgb(245, 210, 111)');
    colorMap.set('157', 'rgb(188, 71, 146)');
    colorMap.set('158', 'rgb(149, 112, 248)');
    colorMap.set('159', 'rgb(97, 227, 158)');
    colorMap.set('160', 'rgb(244, 87, 133)');
    colorMap.set('161', 'rgb(76, 184, 77)');
    colorMap.set('162', 'rgb(192, 103, 204)');
    colorMap.set('163', 'rgb(94, 138, 56)');
    colorMap.set('164', 'rgb(218, 69, 193)');
    colorMap.set('165', 'rgb(158, 232, 104)');
    colorMap.set('166', 'rgb(120, 194, 235)');
    colorMap.set('167', 'rgb(241, 130, 90)');
    colorMap.set('168', 'rgb(221, 113, 187)');
    colorMap.set('169', 'rgb(150, 249, 81)');
    colorMap.set('170', 'rgb(195, 69, 59)');
    colorMap.set('171', 'rgb(132, 218, 217)');
    colorMap.set('172', 'rgb(189, 48, 148)');
    colorMap.set('173', 'rgb(72, 186, 42)');
    colorMap.set('174', 'rgb(242, 119, 57)');
    colorMap.set('175', 'rgb(99, 166, 226)');
    colorMap.set('176', 'rgb(220, 45, 114)');
    colorMap.set('177', 'rgb(118, 239, 86)');
    colorMap.set('178', 'rgb(217, 70, 200)');
    colorMap.set('179', 'rgb(243, 79, 33)');
    colorMap.set('180', 'rgb(131, 202, 249)');
    colorMap.set('181', 'rgb(194, 58, 129)');
    colorMap.set('182', 'rgb(77, 149, 197)');
    colorMap.set('183', 'rgb(233, 135, 44)');
    colorMap.set('184', 'rgb(144, 205, 83)');
    colorMap.set('185', 'rgb(203, 86, 145)');
    colorMap.set('186', 'rgb(95, 240, 94)');
    colorMap.set('187', 'rgb(175, 58, 69)');
    colorMap.set('188', 'rgb(128, 173, 238)');
    colorMap.set('189', 'rgb(205, 114, 57)');
    colorMap.set('190', 'rgb(110, 245, 71)');
    colorMap.set('191', 'rgb(183, 39, 154)');
    colorMap.set('192', 'rgb(71, 193, 120)');
    colorMap.set('193', 'rgb(255, 140, 86)');
    colorMap.set('194', 'rgb(191, 32, 210)');
    colorMap.set('195', 'rgb(81, 203, 87)');
    colorMap.set('196', 'rgb(247, 84, 174)');
    colorMap.set('197', 'rgb(212, 97, 51)');
    colorMap.set('198', 'rgb(98, 222, 194)');
    colorMap.set('199', 'rgb(233, 88, 128)');
    colorMap.set('200', 'rgb(142, 234, 72)');
    

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