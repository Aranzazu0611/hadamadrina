const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();
const {createDatabase, createTable, select_database} = require('./models/index.js')
const {  user_table} = require('./models/user_table')
const {  create_database_query, use_database} = require('./models/querys.js')
const name_database = "hada_madrina";
const name_table_user = "User";


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
        createDatabase(connection, create_database_query, name_database);    
        select_database(connection,use_database, name_database);
        createTable(connection, user_table, name_table_user);
    }
}); 


app.listen(process.env.PORT, () => console.log('server started on port', process.env.PORT));