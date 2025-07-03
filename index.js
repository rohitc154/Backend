const express = require("express");
require("dotenv").config();
// import express from "express"
const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("rohitmonu154");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login at rohit.com !</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube Backend at.<h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
