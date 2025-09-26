import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is Required !")
      .isEmail()
      .withMessage("Email is Invalid !"),

    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is Required !")
      .isLowercase()
      .withMessage("Username must be in lowercase !")
      .isLength({ min: 3 })
      .withMessage("Username must be of atleast 3 characters!"),

    body("password").trim().notEmpty().withMessage("Password Cannot be empty"),

    body("fullname").trim().notEmpty().withMessage("Fullname Cannot be empty"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is Invalid !"),

    body("password").notEmpty().withMessage("Password is Required"),
  ];
};

export { userRegisterValidator, userLoginValidator };
