const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


// GET all foods
router.get("/api/foods/", (req, res) => {
  mysqlConnection.query('SELECT * FROM `foods`', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A foods
router.get("/api/foods/:id", (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `foods` WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A foods
router.delete("/api/foods/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM  `foods` WHERE id = ?', [id], (err) => {
    if(!err) {
      res.json({status: 'foods Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An foods
router.post("/api/foods/register", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
       
      var data = {
          
        food_category    : input.food_category,
        description : input.description,              
        food_entry_date : input.food_entry_date,
        food_departure_date : input.food_departure_date               
      
      };        
  
 
  const query ="INSERT INTO `foods` SET ?" 
  
  
  mysqlConnection.query(query, [data], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'foods Saved'});
    } else {
      console.log(err);
    }
  });

});

//UPDATE A foods  //falla
router.put("/api/foods/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    food_category    : input.food_category,
    description : input.description,
    state   : input.state,        
    food_entry_date : input.food_entry_date,
    food_departure_date : input.food_departure_date      

};       
    const query = "UPDATE foods set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'foods Updated'});
    } else {
      console.log(err);
    }
  });
});




module.exports = router;
