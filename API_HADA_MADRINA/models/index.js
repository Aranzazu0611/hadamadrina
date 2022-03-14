const operation_Database = (connection, query, operation,  name_database) =>{
  
  connection.query(query, (error) => {
      if(error)  console.error('error: ' + error.message);          
      console.log( operation + name_database);
    
  });
};

module.exports = { 
  operation_Database
}