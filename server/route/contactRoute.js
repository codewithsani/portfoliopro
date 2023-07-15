import express from "express";
import nodemailor from "nodemailer";

const contactRoute = express.Router();

contactRoute.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "please fill all the fields" });
  }
  let smtpTransporter = nodemailor.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "saied.sani.biderooni@gmail.com",
      pass: "mjnwqjkcwwcbctyc",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "saied.sani.biderooni@gmail.com",
    subject: `message from ${data.name}`,
    html: `
      
      <h3>Informations</h3>
      <ul>
      <li>Name:${data.name}</li>
      <li>Email:${data.email}</li>
      </ul>

      <h3>Message</h3>
      <p>${data.message}</p>
      `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please fill all the fields" });
      res.status(200).json({ msg: "Thank you for Contacting Saied" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});

export default contactRoute;
