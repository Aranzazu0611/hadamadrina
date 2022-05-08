const express = require('express');
const { merge } = require('nodemon/lib/utils');
const router = express.Router();
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert, operation_update } = require("../../models");
const { select_a_children_query, delete_children_query, insert_children_query, select_all_children_query, update_children_query, select_a_children_by_mother_id_query, select_a_children_by_id_query } = require('../../models/querys');

const mysqlConnection  = require('../database.js');
const { name_table_children, message_delete_not_exist, message_delete_error, children_saved, children_deleted, children_not_found, children_update, message_update_not_exist, message_update_error } = require('../utils/utils');



// GET all childrens
router.get("/api/childrens/", async(req, res) => {
  select_all_children_query
  try {
    await operation_get_All(mysqlConnection, select_all_children_query, name_table_children,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}  
});

// GET A childrens by mother id
router.get("/api/children/mother/:id", async(req, res) => {
  const { id } = req.params; 
  
  try {
    await operation_get_By_Id(mysqlConnection, select_a_children_by_mother_id_query, id,  name_table_children,message_delete_not_exist,res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
});

// GET A childrens by children id
router.get("/api/children/:id", async(req, res) => {
  const { id } = req.params; 
  
  try {
    await operation_get_By_Id(mysqlConnection, select_a_children_by_id_query, id,  name_table_children,message_delete_not_exist,res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
});



// DELETE A childrens
router.delete("/api/childrens/delete/:id", async(req, res) => {
  const { id } = req.params;
  
  try {
    await operation_delete_By_Id(mysqlConnection,  delete_children_query, id, res,   name_table_children
      , message_delete_not_exist, message_delete_error)


} catch (error) {
    return res.status(400).json({ error: error.toString() });

}
});

// INSERT An childrens
router.post("/api/childrens/register", async(req, res) => {
  const info = req.body
  insert_children_query
  children_saved
 try {
  
  await operation_insert(mysqlConnection, insert_children_query, info, children_saved,children_not_found, res)


} catch (error) {
  return res.status(400).json({ error: error.toString() });
}

});

//UPDATE AN Children  
router.put("/api/children/edit/:id", async(req, res) => {
  const { id } = req.params;
  const update_children_info = req.body;  

 try {
  await operation_update(
    mysqlConnection,
    update_children_query,
    [update_children_info, id],
    children_update,
    message_update_not_exist,
    message_update_error,
    res
  );
   
 } catch (error) {
  return res.status(400).json({ error: error.toString() });
 }
});





module.exports = router;
