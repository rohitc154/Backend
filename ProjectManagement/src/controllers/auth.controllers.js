import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { emailVerificationMailGenContent, sendEmail } from "../utils/mail.js";

// Function to generate access and refresh tokens
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access token!",
    );
  }
};

// Register new user
const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists!", []);
  }

  // Create new user
  const user = await User.create({
    email,
    username,
    password,
    isEmailVerified: false,
  });

  // Generate temporary token for email verification
  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryToken();
  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpiry = tokenExpiry;
  await user.save({ validateBeforeSave: false });

  // Send verification email
  await sendEmail({
    email: user.email,
    subject: "Please verify your email.",
    mailgenContent: emailVerificationMailGenContent(
      user.username,
      `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`,
    ),
  });

  // Fetch created user without sensitive fields
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user!");
  }

  // Send success response
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: createdUser },
        "User registered successfully! Verification email has been sent.",
      ),
    );
});

export { registerUser };
