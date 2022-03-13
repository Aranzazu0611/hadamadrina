const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const PORT = 3001;

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
        createDatabase();
    }
});

const createDatabase = () =>{
  let sql_database = 'CREATE DATABASE IF NOT EXISTS hada_madrina';
  connection.query(sql_database, (err, result) => {
      if(err)  console.error('error: ' + err.message);
      console.log(result);
    
  });
}
 


app.listen(process.env.PORT, () => console.log('server started on port', process.env.PORT));