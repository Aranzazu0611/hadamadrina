const express = require('express');
const router = express.Router();
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert } = require("../../models");
const { select_all_hygiene_query, select_a_hygiene_query, delete_hygiene_query, insert_hygiene_query } = require('../../models/querys');

const mysqlConnection  = require('../database.js');
const { name_table_hygiene, message_delete_not_exist, message_delete_error, hygiene_saved } = require('../utils/utils');

// GET all hygiene
router.get("/api/hygiene/", async(req, res) => {
 select_all_hygiene_query
 name_table_hygiene
 message_delete_not_exist
  
 try {
  await operation_get_All(mysqlConnection, select_all_hygiene_query, name_table_hygiene,message_delete_not_exist, res);
} catch (error) {
  return res.status(400).json({ error: error.toString() });
}  

});

// GET A hygiene
router.get("/api/hygiene/:id", async(req, res) => {
  const { id } = req.params; 
  
  try {
    await operation_get_By_Id(mysqlConnection, select_a_hygiene_query, id,  name_table_hygiene,message_delete_not_exist,res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
});

// DELETE A hygiene
router.delete("/api/hygiene/delete/:id", async(req, res) => {
  const { id } = req.params;
 
  try {
    await operation_delete_By_Id(mysqlConnection, delete_hygiene_query, id, res,   name_table_hygiene
      , message_delete_not_exist, message_delete_error)


} catch (error) {
    return res.status(400).json({ error: error.toString() });

}
});

// INSERT An hygiene
router.post("/api/hygiene/register", async(req, res) => {
  const info = req.body


  try {
    // await stringValidation(info)
  
    await operation_insert(mysqlConnection, insert_hygiene_query, info, hygiene_saved, res)
  
  
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

});

//UPDATE A hygiene  //falla
router.put("/api/hygiene/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    hygiene_category    : input.hygiene_category,
    description : input.description,
    state   : input.state,        
    hygiene_entry_date : input.hygiene_entry_date,
    hygiene_departure_date : input.hygiene_departure_date      

};       
    const query = "UPDATE hygiene set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'hygiene Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
