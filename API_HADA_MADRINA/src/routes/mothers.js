const express = require("express");
const {
  select_a_mother_query,
  select_all_mothers_query,
  insert_mother_query,
  delete_mother_query,
  update_mother_query,
} = require("../../models/querys");
const router = express.Router();

const mysqlConnection = require("../database.js");
const { mother_saved, name_table_mothers, message_delete_not_exist, message_delete_error } = require("../utils/utils.js");

// GET all Mothers //falla
router.get("/api/mothers/", async(req, res) => {
  message_delete_not_exist
  try {
    await operation_get_All(mysqlConnection, select_all_mothers_query,name_table_mothers,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
 
});

// GET A Mother
router.get("/api/mother/:id", async(req, res) => {
  const { id } = req.params;
  try {
    await operation_get_By_Id(mysqlConnection, select_a_mother_query, id,name_table_mothers,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}

});

// DELETE A Mother
router.delete("/api/mother/delete/:id", async(req, res) => {
  const { id } = req.params;

  try {
    await operation_delete_By_Id(mysqlConnection, delete_mother_query, id, res, name_table_mothers, message_delete_not_exist, message_delete_error)


} catch (error) {
    return res.status(400).json({ error: error.toString() });

}  
});

// INSERT An mother
router.post("/api/mother/register", async(req, res) => {
  const info = req.body

  try {
      // await stringValidation(info)
      

      await operation_insert(mysqlConnection, insert_mother_query, info, mother_saved, res)


  } catch (error) {
      return res.status(400).json({ error: error.toString() });
  }
 
});

//UPDATE AN USER  //falla
router.put("/api/mother/edit/:id", (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params;

  var data = {
    name: input.name,
    surnames: input.surnames,
    age: input.age,
    email: input.email,
    phone: input.phone,
    address: input.address,
    nationality: input.nationality,
    mother_birth: input.mother_birth,
    civil_status: input.civil_status,
  };
 

  mysqlConnection.query(update_mother_query, [data, id], (err) => {
    !err ? res.json({ status: "Mother Updated" }) : console.log(err);
  });
});

module.exports = router;
