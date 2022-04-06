const mysql = require("mysql");
const { operation_Database } = require("../models/index");
const {
  name_database,
  created_database,
  selected_database,
  created_table,
  name_table_user,
  name_table_mothers,
  name_table_children,
  name_table_clothing,
  name_table_furniture,
  name_table_foods,
  name_table_hygiene,
} = require("./utils/utils");
const { user_table } = require("../models/user_table");
const { mothers_table } = require("../models/mothers_table");
const { children_table } = require("../models/children_table");
const { clothing_table } = require("../models/clothing_table");
const { furniture_table } = require("../models/furniture_table");
const { foods_table } = require("../models/foods_table");
const { hygiene_table } = require("../models/hygiene_table");
const { create_database_query, use_database } = require("../models/querys");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

const create_database_hada_madrina = operation_Database(
  mysqlConnection,
  create_database_query,
  created_database,
  name_database
);

const seleccionar_database = operation_Database(
  mysqlConnection,
  use_database,
  selected_database,
  name_database
);

const create_user_table = operation_Database(
  mysqlConnection,
  user_table,
  created_table,
  name_table_user
);

const create_table_mothers = operation_Database(
  mysqlConnection,
  mothers_table,
  created_table,
  name_table_mothers
);

const create_table_children = operation_Database(
  mysqlConnection,
  children_table,
  created_table,
  name_table_children
);

const create_table_hygiene = operation_Database(
  mysqlConnection,
  hygiene_table,
  created_table,
  name_table_hygiene
);

const create_table_foods = operation_Database(mysqlConnection, foods_table, created_table, name_table_foods);

const create_table_clothing = operation_Database(
  mysqlConnection,
  clothing_table,
  created_table,
  name_table_clothing
);


const create_table_furniture = operation_Database(
  mysqlConnection,
  furniture_table,
  created_table,
  name_table_furniture
);

mysqlConnection.connect(function (error) {
  if (error) {
    console.error("error: " + error.message);
  } else {
    console.log("¡¡Se ha conetacto con éxito!!");
    create_database_hada_madrina
    seleccionar_database;
    create_user_table;
    create_table_mothers;
    create_table_children;
    create_table_foods;
    create_table_hygiene;
    create_table_clothing;
    create_table_furniture
  }
});

module.exports = mysqlConnection;
