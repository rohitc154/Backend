import { text } from "express";
import Mailgen from "mailgen";
import nodemailer from "nodemailer";

// Send E-mail
const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "dafault",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });

  const emailHtml = mailGenerator.generatePlaintext(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_HOST,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subjectc: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Email Service Failed !");
    console.error("Error : ", error);
  }
};

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App!, We're excited to have you on board,",
      action: {
        instructions: "To Verify Your Email, Please Click on the Button",
        button: {
          color: "#22BC66",
          text: "Verify your Email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions ? Just reply to this email, we'd love to help you out !",
    },
  };
};

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got request to reset the password of your account",
      action: {
        instructions: "To reset your password, Click link Below !",
        button: {
          color: "#9137d1ff",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions ? Just reply to this email, we'd love to help you out !",
    },
  };
};

export {
  emailVerificationMailGenContent,
  forgotPasswordMailGenContent,
  sendEmail,
};
