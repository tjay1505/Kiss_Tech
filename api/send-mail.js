// /api/send-email.js

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;

    // Create a transporter using Gmail (use app password for Gmail authentication)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        //user: process.env.GMAIL_USER, // Use environment variable for Gmail user
        //pass: process.env.GMAIL_PASSWORD, // Use environment variable for Gmail App Password
        user: "esakkiraj2002e@gmail.com",
        pass: "dxug rkod oiwj zpsj",
      },
    });

    // Email details
    const mailOptions = {
      //from: process.env.GMAIL_USER, // Sender's email
      to: "kisstechnungabakkam@gmail.com", // Your email (receiving the form data)
      subject: "testing New Form Submission",
      text: `Name: ${name}\nEmail:kisstechnungabakkam@gmail.com\nPhone: ${phone}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
