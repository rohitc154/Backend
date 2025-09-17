import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";

// process.env.username
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port https://:localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error !!", err);
    process.exit(1);
  });
