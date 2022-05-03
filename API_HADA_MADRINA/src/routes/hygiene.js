const express = require("express");
const router = express.Router();
const {
  operation_delete_By_Id,
  operation_get_All,
  operation_get_By_Id,
  operation_insert,
  operation_update,
} = require("../../models");
const {
  select_all_hygiene_query,
  select_a_hygiene_query,
  delete_hygiene_query,
  insert_hygiene_query,
  update_hygiene_query,
} = require("../../models/querys");

const mysqlConnection = require("../database.js");
const {
  name_table_hygiene,
  message_delete_not_exist,
  message_delete_error,
  hygiene_saved,
  hygiene_not_found,
  hygiene_update,
  message_update_error,
  message_update_not_exist,
} = require("../utils/utils");

// GET all hygiene
router.get("/api/hygiene/", async (req, res) => {
  select_all_hygiene_query;
  name_table_hygiene;
  message_delete_not_exist;

  try {
    await operation_get_All(
      mysqlConnection,
      select_all_hygiene_query,
      name_table_hygiene,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// GET A hygiene
router.get("/api/hygiene/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await operation_get_By_Id(
      mysqlConnection,
      select_a_hygiene_query,
      id,
      name_table_hygiene,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// DELETE A hygiene
router.delete("/api/hygiene/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await operation_delete_By_Id(
      mysqlConnection,
      delete_hygiene_query,
      id,
      res,
      name_table_hygiene,
      message_delete_not_exist,
      message_delete_error
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// INSERT An hygiene
router.post("/api/hygiene/register", async (req, res) => {
  const info = req.body;

  try {
    await operation_insert(
      mysqlConnection,
      insert_hygiene_query,
      info,
      hygiene_saved,
      hygiene_not_found,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//UPDATE A hygiene
router.put("/api/hygiene/edit/:id", async (req, res) => {
  const { id } = req.params;
  const update_hygiene_info = req.body;
  
  try {
    await operation_update(
      mysqlConnection,
      update_hygiene_query,
      [update_hygiene_info, id],
      hygiene_update,
      message_update_not_exist,
      message_update_error,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
