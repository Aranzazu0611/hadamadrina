const express = require('express');
const { select_all_furniture_query, select_a_furniture_query, delete_furniture_query, insert_furniture_query, update_furniture_query, select_count_furniture_day_query, select_count_furniture_month_query, select_count_furniture_week_query, select_count_departure_furniture_day_query, select_count_departure_furniture_month_query, select_count_departure_furniture_week_query } = require('../../models/querys.js');
const router = express.Router();
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert, operation_update } = require("../../models");


const mysqlConnection  = require('../database.js');
const { name_table_furniture, message_delete_error, message_delete_not_exist, furniture_saved, furniture_not_found, furniture_update, message_update_error, message_update_not_exist } = require('../utils/utils.js');


//MONTH furniture

router.get("/api/furniture/entry/month", async (req, res) => {

  try {
    await operation_get_All(
      mysqlConnection,
      select_count_furniture_month_query,
      name_table_furniture,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});




//Count entry furniture for day
router.get("/api/furniture/entry/day", async (req, res) => {

  try {
    await operation_get_All(
      mysqlConnection,
      select_count_furniture_day_query,
      name_table_furniture,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count entry furniture for week
router.get("/api/furniture/entry/week", async (req, res) => {
 
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_furniture_week_query,
      name_table_furniture,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count departure furniture for month
router.get("/api/furniture/departure/month", async (req, res) => {

  try {
    await operation_get_All(
      mysqlConnection,
      select_count_departure_furniture_month_query,
      name_table_furniture,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count departure furniture for day
router.get("/api/furniture/departure/day", async (req, res) => {
 
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_departure_furniture_day_query,
      name_table_furniture,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Count departure furniture for week
router.get("/api/furniture/departure/week", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_count_departure_furniture_week_query,
      name_table_furniture,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});









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

//UPDATE AN Furniture
router.put('/api/furniture/edit/:id', async(req, res) => {
  
  const { id } = req.params;  
      
  const update_furniture_info = req.body;  
  
  try {
    await operation_update(mysqlConnection,
      update_furniture_query,
      [update_furniture_info, id],
      furniture_update,
      message_update_not_exist,
      message_update_error,
      res)
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
 
   

  
});






module.exports = router;
