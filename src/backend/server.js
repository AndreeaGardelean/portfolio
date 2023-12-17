const nodemailer = require('nodemailer');
const credentials = require('./config.js');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);


const serverPort = 5000;
app.listen(serverPort, () => console.log('backend is running on port:', serverPort));

const transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: credentials.USER,
        pass: credentials.PASS
    }
}

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log('Transporter connection not accepted', error)
    } else {
        console.log('Server ready to take message: ', success);
    }
})

router.post('/contact', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const content = `name: ${name} \n email: ${email} \n message: ${message}`;

    const mail = {
        from: credentials.USER,
        to: credentials.USER,
        subject: 'Message from portfolio contact form',
        text: content
    }

    transporter.sendMail(mail, (error, data) => {
        if (error) {
            res.json({msg: 'fail'});
        } else {
            res.json({msg: 'success'});
            const responseMail = {
                from: credentials.USER,
                to: email,
                subject: 'Message received',
                text: `Hello ${name}, \n\n Thank you for your email. I have received it and will get back to you as soon as possible. \n\nKind Regards,\nAndreea G.`
            }
            transporter.sendMail(responseMail, (error, data) => {
                if (error) {
                    console.log('Error whilst sending automatic response');
                } else {
                    console.log('Message sent: ', data.response)
                }
            })
        }
    })
})

module.exports = router;