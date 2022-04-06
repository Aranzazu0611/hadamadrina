const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


// GET all childrens
router.get("/api/childrens/", (req, res) => {
  mysqlConnection.query('SELECT * FROM `children`', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A childrens
router.get("/api/children/:id", (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `children` WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A childrens
router.delete("/api/childrens/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM  `children` WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Children Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An childrens
router.post("/api/childrens/register", (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));
       
      var data = {
          
          name    : input.name,
          surnames : input.surnames,
          age   : input.age,
          gender   : input.gender,
          children_birth  : input.children_birth ,
          father_name   : input.father_name                 
      
      };        
  
 
  const query ="INSERT INTO `children` SET ?" 
  
  
  mysqlConnection.query(query, [data], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Children Saved'});
    } else {
      console.log(err);
    }
  });

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
