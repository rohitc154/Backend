import express from "express";
import cors from "cors";

const app = express();

// Basic Configurations
app.use(express.json({ limit: "16kb" })); // Middleware to accept the json file to a certain limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Accept data from the url
app.use(express.static("public"));

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

app.get("/", (req, res) => {
  res.send("Welcome to Basecampy!");
});

export default app;
