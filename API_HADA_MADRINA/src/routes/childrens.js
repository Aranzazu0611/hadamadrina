const express = require('express');
const router = express.Router();
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert } = require("../../models");
const { select_a_children_query, delete_children_query, insert_children_query, select_all_children_query } = require('../../models/querys');

const mysqlConnection  = require('../database.js');
const { name_table_children, message_delete_not_exist, message_delete_error, children_saved } = require('../utils/utils');


// GET all childrens
router.get("/api/childrens/", async(req, res) => {
  select_all_children_query
  try {
    await operation_get_All(mysqlConnection, select_all_children_query, name_table_children,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}  
});

// GET A childrens
router.get("/api/children/:id", async(req, res) => {
  const { id } = req.params; 
  try {
    await operation_get_By_Id(mysqlConnection, select_a_children_query, id,  name_table_children,message_delete_not_exist,res);
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
  // await stringValidation(info)

  await operation_insert(mysqlConnection, insert_children_query, info, children_saved, res)


} catch (error) {
  return res.status(400).json({ error: error.toString() });
}

});

//UPDATE AN Children  //falla
router.put("/api/children/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    name    : input.name,
    surnames : input.surnames,
    age   : input.age,
    gender   : input.gender,
    children_birth  : input.children_birth ,
    father_name   : input.father_name            

};       
    const query = "UPDATE children set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Children Updated'});
    } else {
      console.log(err);
    }
  });
});





module.exports = router;
