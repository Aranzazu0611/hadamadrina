const {create_database_query} = require('./querys.js')

const createDatabase = (connection) =>{
  
  connection.query(create_database_query, (err, result) => {
      if(err)  console.error('error: ' + err.message);
      console.log(result);
    
  });
}

module.exports = { createDatabase}