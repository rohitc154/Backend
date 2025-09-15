import dotenv from "dotenv";
import app from "./app.js";

// process.env.username
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port https://:localhost:${port}`);
});
