import express from "express";
import mailgun from "mailgun-js";
import dotenv from "dotenv";

const router = express.Router();

dotenv.config();

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

router.post("/sendemail", async (req, res) => {
  const name = req.body.name;
  const company = req.body.company;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  const data = {
    from: `YOU@YOUR_DOMAIN_NAME.COM`,
    to: `youssef.seghrouchni79@gmail.com`,
    subject: `Quelqu'un s'intéresse à toi !`,
    html: `<p>Nom : ${name}</p></br>
    <p>Entreprise : ${company}</p></br>
    <p>Téléphone : ${phone}</p></br>
    <p>Email : ${email}</p></br>
    <p>Message : ${message}</p>`,
  };
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
      return res.status(400).send("Impossible d'envoyer ce message.");
    }
    return res.status(200).send("Email envoyé à l'utilisateur.");
  });
});

export default router;
