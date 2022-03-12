const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3001;

// create connection


const connection = mysql.createConnection({
  host: "localhost",  
  user: "root",
  password: ""
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
 


app.listen(PORT, () => console.log('server started on port', PORT));