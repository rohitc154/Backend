import Mailgen from "mailgen";

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

export { emailVerificationMailGenContent, forgotPasswordMailGenContent };
