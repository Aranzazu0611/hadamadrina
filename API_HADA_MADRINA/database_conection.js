const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();
const {operation_Database} = require('./models/index.js')
const { user_table} = require('./models/user_table')
const { mothers_table} = require('./models/mothers_table')
const { children_table} = require('./models/children_table')
const { clothing_table} = require('./models/clothing_table')
const { furniture_table} = require('./models/furniture_table')
const { foods_table} = require('./models/foods_table')
const { hygiene_table} = require('./models/hygiene_table')
const {  create_database_query, use_database} = require('./models/querys.js')
const {name_database, created_database, selected_database,created_table, name_table_user, name_table_mothers,name_table_children,name_table_clothing,name_table_furniture, name_table_foods, name_table_hygiene} = require('./utils/utils')

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
        operation_Database(connection, create_database_query, created_database, name_database);
        operation_Database(connection, use_database, selected_database, name_database);
        operation_Database(connection, user_table, created_table, name_table_user);
        operation_Database(connection, mothers_table, created_table, name_table_mothers);
        operation_Database(connection, children_table, created_table, name_table_children);
        operation_Database(connection, foods_table, created_table, name_table_foods);
        operation_Database(connection, hygiene_table, created_table, name_table_hygiene);
        operation_Database(connection, clothing_table, created_table, name_table_clothing);
        operation_Database(connection, furniture_table, created_table, name_table_furniture);
    }
}); 


app.listen(process.env.PORT, () => console.log('server started on port', process.env.PORT));