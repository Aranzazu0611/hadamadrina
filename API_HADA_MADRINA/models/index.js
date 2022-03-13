const createDatabase = (connection, create_database_query,  name_database) =>{
  
  connection.query(create_database_query, (error) => {
      if(error)  console.error('error: ' + error.message);          
      console.log( "Creada => " + name_database);
    
  });
};

const createTable = (connection, user_table, name_table) =>{
  
  connection.query(user_table, (error) => {
      if(error)  console.error('error: ' + error.message);
      else{
        console.log("Creada la tabla => " + name_table);
      }
      
    
  });  
};
const select_database = (connection, use_database, name_database) =>{
  
  connection.query(use_database, (err) => {
      if(err)  console.error('error: ' + err.message);
      else{
        console.log("Seleccionada => " + name_database );
      }      
    
  });
}


module.exports = { 
  createDatabase,
  createTable,
  select_database
}