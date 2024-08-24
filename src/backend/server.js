const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const serverPort = process.env.PORT || 3030;
app.listen(serverPort, () => console.log('Backend is running on port:', serverPort));

const transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.error('Transporter connection not accepted', error);
    } else {
        console.log('Server ready to take messages:', success);
    }
});

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'All fields are required.' });
    }

    const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mail = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Message from portfolio contact form',
        text: content
    };

    try {
        // Send the main email
        await transporter.sendMail(mail);

        // Send the response email
        const responseMail = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Message received',
            text: `Hello ${name},\n\nThank you for your email. I have received it and will get back to you as soon as possible.\n\nBest regards,\nAndreea G.`
        };

        await transporter.sendMail(responseMail);

        res.json({ msg: 'success' });
    } catch (error) {
        console.error('Error while sending email:', error);
        res.status(500).json({ msg: 'fail' });
    }
});

module.exports = app;

