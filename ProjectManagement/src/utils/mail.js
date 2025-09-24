import Mailgen from "mailgen";
import nodemailer from "nodemailer";

// Send E-mail
const sendEmail = async (options) => {
  // Initialize Mailgen
  const mailGenerator = new Mailgen({
    theme: "default", // default theme
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });

  // Generate HTML and Plain Text emails
  const emailHtml = mailGenerator.generate(options.mailgenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailgenContent);

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER, // Mailtrap username
      pass: process.env.MAILTRAP_SMTP_PASS, // Mailtrap password
    },
  });

  // Mail options
  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
    console.log(`Email sent successfully to ${options.email}`);
  } catch (error) {
    console.error("Email Service Failed!");
    console.error("Error:", error);
  }
};

// Generate verification email content
const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We're excited to have you on board.",
      action: {
        instructions: "To verify your email, please click the button below:",
        button: {
          color: "#22BC66",
          text: "Verify your Email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help or have questions? Just reply to this email, we'd love to help you out!",
    },
  };
};

// Generate forgot password email content
const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We received a request to reset the password for your account.",
      action: {
        instructions: "To reset your password, click the link below:",
        button: {
          color: "#9137d1",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help or have questions? Just reply to this email, we'd love to help you out!",
    },
  };
};

export {
  sendEmail,
  emailVerificationMailGenContent,
  forgotPasswordMailGenContent,
};
