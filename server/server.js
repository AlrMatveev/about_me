const express = require("express");
const router = require("express").Router();
const mysql = require("mysql2");
const port = 3001;

const app = express();

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "karero5d.beget.tech",
  user: "karero5d_aboutme",
  database: "karero5d_aboutme",
  password: "TIG66Wnx",
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", function (req, res, next) {
  console.log("Главная");
  next();
});

app.get("/api/pages", function (req, res) {
  pool.query("SELECT * FROM pages", function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

app.get("/api/technologies", function (req, res) {
  pool.query("SELECT * FROM technologies", function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

app.listen(port, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + port);
});
