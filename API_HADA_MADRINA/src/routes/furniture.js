const express = require('express');
const { select_all_furniture_query, select_a_furniture_query, delete_furniture_query, insert_furniture_query, update_furniture_query } = require('../../models/querys.js');
const router = express.Router();
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert } = require("../../models");


const mysqlConnection  = require('../database.js');
const { name_table_furniture, message_delete_error, message_delete_not_exist, furniture_saved, furniture_not_found } = require('../utils/utils.js');

// GET all User
router.get("/api/furniture/", async(req, res) => {
 
  try {
    await operation_get_All(mysqlConnection, select_all_furniture_query, name_table_furniture,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}  
});

// GET An Furniture
router.get('/api/furniture/:id',async (req, res) => {
  const { id } = req.params; 
 
    try {
        await operation_get_By_Id(mysqlConnection, select_a_furniture_query, id,  name_table_furniture,message_delete_not_exist,res);
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }

  
});

// DELETE An User
router.delete('/api/furniture/delete/:id', async(req, res) => {
  const { id } = req.params;  
  try {
    await operation_delete_By_Id(mysqlConnection, delete_furniture_query, id, res,   name_table_furniture
      , message_delete_not_exist, message_delete_error)


} catch (error) {
    return res.status(400).json({ error: error.toString() });

}
  
});

// INSERT An user
router.post('/api/furniture/register', async(req, res) => {
 
  const info = req.body
  
 try { 

  await operation_insert(mysqlConnection, insert_furniture_query, info, furniture_saved,furniture_not_found, res)


} catch (error) {
  return res.status(400).json({ error: error.toString() });
}
  

});

//UPDATE AN Fu
router.put('/api/furniture/edit/:id', async(req, res) => {
  
  const { id } = req.params;  
      
  const update_furniture_info = req.body;   
   

  mysqlConnection.query( update_furniture_query,[update_furniture_info,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Furniture Updated'});
    } else {
      console.log(err);
    }
  });
});






module.exports = router;
