const express = require("express");
const {
  select_a_mother_query,
  select_all_mothers_query,
  insert_mother_query,
  delete_mother_query,
  update_mother_query,

  select_count_mothers_month_query,
  select_count_mothers_day_query,
  select_count_mothers_week_query,
} = require("../../models/querys");
const router = express.Router();
const {
  operation_delete_By_Id,
  operation_get_All,
  operation_get_By_Id,
  operation_insert,
  operation_update,
} = require("../../models");

const mysqlConnection = require("../database.js");
const {
  mother_saved,
  name_table_mothers,
  message_delete_not_exist,
  message_delete_error,
  mother_not_found,
  mother_update,
  message_update_error,
  message_update_not_exist,
} = require("../utils/utils.js");
const { stringValidationMother } = require("../utils/validations");

// GET all Mothers
router.get("/api/mothers/", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_all_mothers_query,
      name_table_mothers,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count Mothers for month
router.get("/api/mothers/month", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_mothers_month_query,
      name_table_mothers,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count Mothers for day
router.get("/api/mothers/day", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_mothers_day_query,
      name_table_mothers,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count Mothers for week
router.get("/api/mothers/week", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_mothers_week_query,
      name_table_mothers,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// GET A Mother
router.get("/api/mother/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await operation_get_By_Id(
      mysqlConnection,
      select_a_mother_query,
      id,
      name_table_mothers,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// DELETE A Mother
router.delete("/api/mother/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await operation_delete_By_Id(
      mysqlConnection,
      delete_mother_query,
      id,
      res,
      name_table_mothers,
      message_delete_not_exist,
      message_delete_error
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// INSERT An mother
router.post("/api/mother/register", async (req, res) => {
  const info = req.body;
  
  try {
    await stringValidationMother(info)
    await operation_insert(
      mysqlConnection,
      insert_mother_query,
      info,
      mother_saved,
      mother_not_found,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//UPDATE A Mother
router.put("/api/mother/edit/:id", async (req, res) => {
  const { id } = req.params;
  const update_mother_info = req.body;
 
  try {
    await stringValidationMother(update_mother_info)
    await operation_update(
      mysqlConnection,
      update_mother_query,
      [update_mother_info, id],
      mother_update,
      message_update_not_exist,
      message_update_error,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
