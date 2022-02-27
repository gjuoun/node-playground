import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const res = await transporter.sendMail({
    from: "gjuoun@gmail.com",
    to: "gjuoun@gmail.com",
    subject: "test email",
    text: "hello mail",
    html: "<b>Hello mail</b>",
  });

  console.log(res);
};

main();
