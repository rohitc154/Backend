import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// --------------------
// Middleware
// --------------------
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// --------------------
// CORS Configuration
// --------------------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(",")
      : "http://localhost:5173", // fallback if env variable not set
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// --------------------
// Routes
// --------------------
import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

// --------------------
// Base Route
// --------------------
app.get("/", (req, res) => {
  res.send("Welcome to Basecampy!");
});

export default app;
