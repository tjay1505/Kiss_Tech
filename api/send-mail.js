// /api/send-email.js

//const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;
    // const name = "jaiku";
    // const email = "ohugi";
    // const phone = "67877788";
    // Create a transporter using Gmail (use app password for Gmail authentication)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        //user: process.env.GMAIL_USER, // Use environment variable for Gmail user
        //pass: process.env.GMAIL_PASSWORD, // Use environment variable for Gmail App Password
        user: "esakkiraj2002e@gmail.com",
        pass: import.meta.env.GOOGLE_PASSWORD,
      },
    });
    //dxug rkod oiwj zpsj

    // Email details
    const mailOptions = {
      from: "esakkiraj2002e@gmail.com", // Sender's email
      to: "kisstechnungabakkam@gmail.com", // Your email (receiving the form data)
      subject: "testing New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType:`,
    };

    try {
      console.log("Attempting to send email...");
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    console.log("Invalid HTTP method:", req.method);
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
