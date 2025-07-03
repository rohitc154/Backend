const express = require("express");
require("dotenv").config();
// import express from "express"
const app = express();
const port = 4000;
const data = {
  login: "rohitc154",
  id: 123806062,
  node_id: "U_kgDOB2Ehbg",
  avatar_url: "https://avatars.githubusercontent.com/u/123806062?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/rohitc154",
  html_url: "https://github.com/rohitc154",
  followers_url: "https://api.github.com/users/rohitc154/followers",
  following_url:
    "https://api.github.com/users/rohitc154/following{/other_user}",
  gists_url: "https://api.github.com/users/rohitc154/gists{/gist_id}",
  starred_url: "https://api.github.com/users/rohitc154/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/rohitc154/subscriptions",
  organizations_url: "https://api.github.com/users/rohitc154/orgs",
  repos_url: "https://api.github.com/users/rohitc154/repos",
  events_url: "https://api.github.com/users/rohitc154/events{/privacy}",
  received_events_url: "https://api.github.com/users/rohitc154/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Rohit Kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Learner 📚",
  twitter_username: null,
  public_repos: 20,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-01-28T09:48:13Z",
  updated_at: "2025-07-03T01:47:28Z",
};

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

app.get("/github", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
