const express = require('express');
const { select_all_clothing_query, select_a_clothing_query, delete_clothing_query, insert_clothing_query, update_clothing_query } = require('../../models/querys.js');
const router = express.Router();
const mysqlConnection  = require('../database.js');
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert, operation_update } = require("../../models");
const { name_table_clothing, clothing_saved, clothing_not_found, clothing_update, message_update_not_exist, message_update_error } = require('../utils/utils.js');
const { message_delete_not_exist, message_delete_error } = require("../utils/utils");


// GET all clothing
router.get("/api/clothing/", async(req, res) => {
  name_table_clothing

  try {
    await operation_get_All(mysqlConnection, select_all_clothing_query, name_table_clothing, message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
 
});

// GET A clothing
router.get("/api/clothing/:id", async(req, res) => {
  const { id } = req.params; 
  name_table_clothing
  try {
    await operation_get_By_Id(mysqlConnection, select_a_clothing_query, id,  name_table_clothing,message_delete_not_exist,res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
});

// DELETE A clothing
router.delete("/api/clothing/delete/:id",async(req, res) => {
  const { id } = req.params;
  try {
    await operation_delete_By_Id(mysqlConnection, delete_clothing_query, id, res, name_table_clothing, message_delete_not_exist, message_delete_error)


} catch (error) {
    return res.status(400).json({ error: error.toString() });

}

 
});

// INSERT An clothing
router.post("/api/clothing/register",async(req, res) => {
  const info = req.body
 

    try {
            

        await operation_insert(mysqlConnection, insert_clothing_query , info, clothing_saved,clothing_not_found, res)


    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    } 
  

});


router.put("/api/clothing/edit/:id", async(req, res) => {
  
  const { id } = req.params;
  const update_clothing_info = req.body;   
  
  try {
    await operation_update(
      mysqlConnection,
      update_clothing_query,
      [update_clothing_info, id],
      clothing_update,
      message_update_not_exist,
      message_update_error,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
 
});


module.exports = router;
