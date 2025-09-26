// import { Router } from "express";
// import { registerUser } from "../controllers/auth.controllers.js";
// import { validate } from "../middlewares/validator.middleware.js";
// import { userRegisterValidator } from "../validators/index.js";

// const router = Router();

// router.route("/register").post(userRegisterValidator(), validate, registerUser);
// router.route("/login").post(login);

// export default router;

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  registerUser,
  login,
  logoutUser,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator, validate, login);

//Secure routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
