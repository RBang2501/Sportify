const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app, {
    cors: {
        origin: "*",
    }
});

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

const PORT = process.env.PORT || 5000;

app.post('/sendOTP', async(req, res) => {
    const { email, otp } = req.body;
    console.log(otp);
    res.header("Access-Control-Allow-Origin", "*"); 
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");   
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");   
      res.setHeader("Access-Control-Allow-Credentials", true);
    let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bros4dev@gmail.com',
        pass: 'spandan2022'
    },
    tls: {
        rejectUnauthorized: false
    }
});
  
let mailDetails = {
    from: 'bros4dev@gmail.com',
    to: email,
    subject: 'Test mail',
    text: `OTP: ${otp}`
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log("error");
        res.json({ status: "error" });
    } else {
        console.log("email sent successfully");
        res.json({ status: "ok" })
    }
});
});

server.listen(PORT, () => {
    console.log("Server Connected!!!");
});