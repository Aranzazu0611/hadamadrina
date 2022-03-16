const express = require("express");
require("dotenv").config();
const mysql = require("mysql");
const app = express();

// create connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connection.connect(function (error) {
  if (error) {
    console.error("error: " + error.message);
  } else {
    console.log("¡¡Se ha conetacto con éxito!!");
  }
});


app.listen(process.env.PORT, () =>
  console.log("Server started on port => ", process.env.PORT)
);

module.exports = { 
  connection
}