const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


// GET all clothing
router.get("/api/clothing/", (req, res) => {
  mysqlConnection.query('SELECT * FROM `clothing`', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A clothing
router.get("/api/clothing/:id", (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `clothing` WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A clothing
router.delete("/api/clothing/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM  `clothing` WHERE id = ?', [id], (err) => {
    if(!err) {
      res.json({status: 'Clothing Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An clothing
router.post("/api/clothing/register", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
       
      var data = {
          
        clothing_category    : input.clothing_category,
        description : input.description,
        colour   : input.colour,
        size   : input.size,
        gender  : input.gender ,
        age   : input.age,
        clothing_entry_date : input.clothing_entry_date,
        clothing_departure_date : input.clothing_departure_date               
      
      };        
  
 
  const query ="INSERT INTO `clothing` SET ?" 
  
  
  mysqlConnection.query(query, [data], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Clothing Saved'});
    } else {
      console.log(err);
    }
  });

});

//UPDATE A clothing  //falla
router.put("/api/clothing/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    clothing_category    : input.clothing_category,
        description : input.description,
        colour   : input.colour,
        size   : input.size,
        gender  : input.gender ,
        age   : input.age,
        clothing_entry_date : input.clothing_entry_date,
        clothing_departure_date : input.clothing_departure_date        

};       
    const query = "UPDATE clothing set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Clothing Updated'});
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
