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
} = require("../utils/querys");
const router = express.Router();
const {
  operation_delete_By_Id,
  operation_get_All,
  operation_get_By_Id,
  operation_insert,
  operation_update,
} = require("../routes/index");

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
  mother_exist,
} = require("../utils/utils.js");
const { stringValidationMother } = require("../utils/validations");

/**
 * Get All mothers
 *
 */
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

/**
 * Counted Mothers for month
 *
 *  
*/
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

/**
 * Counted Mothers for day
 *
 *  
*/
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

/**
 * Counted Mothers for week
 *
 *  
*/
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

/**
 * Get info a mother by Id
 *
 */
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

/**
 * Delete a mother by Id
 *
 */
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

/**
 * Register a mother
 *
 */
router.post("/api/mother/register", async (req, res) => {
  const info = req.body;
  const {
    name,
    surnames,
    age,
    email,
    phone,
    address,
    nationality,
    mother_birth,
    civil_status,
    mother_entry_date,
  } = info;

  try {
    /**
     * Validation of mother info
     *
     */
    await stringValidationMother(info);
    await operation_insert(
      mysqlConnection,
      insert_mother_query,
      [
        [
          name,
          surnames,
          age,
          email,
          phone,
          address,
          nationality,
          mother_birth,
          civil_status,
          mother_entry_date,
        ],
        name,
        surnames,
        age,
        email,
        phone,
        address,
        nationality,
        mother_birth,
        civil_status,
        mother_entry_date,
      ],
      mother_saved,
      mother_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

/**
 * Update a mother by Id
 *
 */
router.put("/api/mother/edit/:id", async (req, res) => {
  const { id } = req.params;
  const update_mother_info = req.body;

  try {
    await stringValidationMother(update_mother_info);
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
