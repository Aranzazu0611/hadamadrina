const express = require('express');
const mysql = require('mysql');
const app = express();
const {createDatabase} = require('./models/index.js')
require('dotenv').config();


// create connection
const connection = mysql.createConnection({
  host: process.env.HOST,  
  user: process.env.USER,
  password: process.env.PASSWORD
});

connection.connect(function(error){
 if (error) {
     console.error('error: ' + error.message);
  }
 else{
        console.log("¡¡Se ha conetacto con éxito!!");
        createDatabase(connection);
    }
}); 


app.listen(process.env.PORT, () => console.log('server started on port', process.env.PORT));