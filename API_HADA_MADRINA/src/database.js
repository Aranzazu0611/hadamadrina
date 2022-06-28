const mysql = require("mysql");

const mysqlConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hada_madrina"
});


mysqlConnection.getConnection( (error, connection) => {
  if (error) {
    throw new Error("Error: " + error.message);
  } else {
    console.log("¡¡Se ha conetacto con éxito!!");   
    connection.release();
  }
});

module.exports = mysqlConnection;
