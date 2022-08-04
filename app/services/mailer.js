"use strict"

const nodemailer = require("nodemailer"); 

const config = require("../../config/app.config");

async function sendMail(title, link, difficulty){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.gmailAuth.address,
            pass: config.gmailAuth.password
        }

    });

    var subject = "Today's LC question: " + title + " (" + difficulty + ")";


    var html = "<p>" + link + "</p><br/><b>Next question tomorrow at 5</b>"

    let info = await transporter.sendMail({
        from: config.gmailAuth.address, 
        to: config.DL,
        subject: subject,
        html: html
    });

    console.log("Message sent ", info.messageId);

    return info.messageId;
}

module.exports = {sendMail}