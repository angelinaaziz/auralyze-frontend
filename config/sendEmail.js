const nodemailer = require("nodemailer");

// used to send emails from the server.
// used for password reset, account reactivation, and user messages.
const sendEmail = async (email, subject, text) => {
    try {
        // Defines the email its sending from
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "support@auralyze.ai",
                pass: process.env.GmailPass,
            },
            
        });
        // Defines the content of the message
        await transporter.sendMail({
            from: "support@auralyze.ai",
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;
