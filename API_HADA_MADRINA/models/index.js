const operation_Database = (connection, query, operation,  name_database) =>{
  
  connection.query(query, (error) => {
      (error) ? console.error('error: ' + error.message): console.log( operation + name_database);    
      
  });
  
};

const getALL  = (connection,query, res) => {
  connection.query(query, (err, rows) => {
    !err ? res.json(rows) : console.log(err);
  });
}

const getByID =(connection,query, param, res) => {  
  connection.query(query, [param], (err, rows) => {
    !err ? res.json(rows[0]) : console.log(err);
});}



module.exports = { 
  operation_Database, 
  getALL,
  getByID
 
}


