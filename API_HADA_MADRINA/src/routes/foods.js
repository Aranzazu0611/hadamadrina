const express = require('express');
const { select_all_foods_query, select_a_food_query, delete_food_query, insert_food_query, update_food_query, select_count_food_day_query, select_count_food_month_query, select_count_food_week_query, select_count_departure_clothing_month_query, select_count_departure_food_month_query, select_count_departure_food_day_query, select_count_departure_food_week_query } = require('../utils/querys');
const router = express.Router();
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert, operation_update } = require("../routes/index");

const mysqlConnection  = require('../database.js');
const { name_table_foods, message_delete_error, message_delete_not_exist, food_saved, name_table_children, food_not_found, user_updated, food_update, message_update_not_exist, message_update_error } = require('../utils/utils.js');
const { stringValidationFood } = require('../utils/validations.js');



/**
 * Counted Foods item entry in month
 *
 *  
*/
router.get("/api/foods/entry/month", async (req, res) => {
 
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_food_month_query,
      name_table_foods,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});




/**
 * Counted foods item entry in day
 *
 *  
*/
router.get("/api/foods/entry/day", async (req, res) => {

  try {
    await operation_get_All(
      mysqlConnection,
      select_count_food_day_query,
      name_table_foods,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Counted foods item entry in week
 *
 *  
*/
router.get("/api/foods/entry/week", async (req, res) => {
 
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_food_week_query,
      name_table_foods,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Counted foods item departure in month
 *
 *  
*/
router.get("/api/foods/departure/month", async (req, res) => {
 
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_departure_food_month_query,
      name_table_foods,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Counted foods item departure in day
 *
 *  
*/
router.get("/api/foods/departure/day", async (req, res) => {
 
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_departure_food_day_query,
      name_table_foods,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Counted foods item departure in week
 *
 *  
*/
router.get("/api/foods/departure/week", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_departure_food_week_query,
      name_table_foods,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Get all info foods 
 *
 */
router.get("/api/foods/", async(req, res) => {

  try {
    await operation_get_All(mysqlConnection, select_all_foods_query,name_table_foods,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}
});

/**
 * Get info a foods by Id 
 *
 */
router.get("/api/foods/:id", async(req, res) => {
  const { id } = req.params;  

  try {
    await operation_get_By_Id(mysqlConnection, select_a_food_query, id, name_table_children,message_delete_not_exist, res);
} catch (error) {
    return res.status(400).json({ error: error.toString() });
}

  
});

/**
 * Delete a foods item by Id
 *
 */
router.delete("/api/foods/delete/:id", async(req, res) => {
  const { id } = req.params;


  try {
    await operation_delete_By_Id(mysqlConnection, delete_food_query, id, res, name_table_foods, message_delete_not_exist, message_delete_error)


} catch (error) {
    return res.status(400).json({ error: error.toString() });

}



});

/**
 * Register a foods item
 *
 */
router.post("/api/foods/register", async(req, res) => {
  const info = req.body
  try {  
    await stringValidationFood(info)
    await operation_insert(mysqlConnection, insert_food_query, info, food_saved, food_not_found, res)


} catch (error) {
    return res.status(400).json({ error: error.toString() });
} 
 

});

/**
 * Update a foods item
 *
 */
router.put("/api/foods/edit/:id", async(req, res) => {
  
  const { id } = req.params;
  const update_food_info = req.body;

  try {
    await stringValidationFood(update_food_info)
    await operation_update(mysqlConnection,update_food_query, [update_food_info, id], food_update,message_update_not_exist,message_update_error, res)
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  } 

});




module.exports = router;
