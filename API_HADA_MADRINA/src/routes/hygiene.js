const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all User
router.get("/api/user/", (req, res) => {
  mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An User
router.get('/api/user/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM user WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An User
router.delete('/api/user/delete/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM user WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'User Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An user
router.post('/api/user/register', (req, res) => {
  const {id, name, surnames, email, phone, address, password, volunteers_rol} = req.body;
 
  const query = `
  INSERT INTO user(id, name, surnames, email, phone, address, password, volunteers_rol) VALUES ("${id}", "${name}", "${surnames}", "${email}","${phone}","${address}", "${password}","${volunteers_rol}"  )
  `;
  mysqlConnection.query(query, [id, name, surnames, email, phone, address, password, volunteers_rol], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'User Saved'});
    } else {
      console.log(err);
    }
  });

});

//UPDATE AN USER
router.put('/api/user/update/:id', (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params;
 
      
      var data = {
          
          name    : input.name,
          surnames : input.surnames,
          email   : input.email,
          phone   : input.phone,
          address  : input.address ,
          password   : input.password,
          volunteers_rol   : input.volunteers_rol          
      
      };        
    const query = "UPDATE user set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'User Updated'});
    } else {
      console.log(err);
    }
  });
});

//

// GET all Mothers //falla
router.get("/api/mothers/", (req, res) => {
  mysqlConnection.query('SELECT * FROM `mothers` WHERE 1', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A Mother
router.get("/api/mother/:id", (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `mothers` WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A Mother
router.delete("/api/mother/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM  `mothers` WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Mother Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An mother
router.post("/api/mother/register", (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));
       
      var data = {
          
          name    : input.name,
          surnames : input.surnames,
          age   : input.age,
          email   : input.email,
          phone  : input.phone ,
          address   : input.address,
          nationality   : input.nationality,
          mother_birth : input.mother_birth,
          civil_status : input.civil_status          
      
      };        
  
 
  const query ="INSERT INTO `mothers` SET ?" 
  
  
  mysqlConnection.query(query, [data], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Mother Saved'});
    } else {
      console.log(err);
    }
  });

});

//UPDATE AN USER  //falla
router.put("/api/mother/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    name    : input.name,
    surnames : input.surnames,
    age   : input.age,
    email   : input.email,
    phone  : input.phone ,
    address   : input.address,
    nationality   : input.nationality,
    mother_birth : input.mother_birth,
    civil_status : input.civil_status          

};       
    const query = "UPDATE mothers set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Mother Updated'});
    } else {
      console.log(err);
    }
  });
});



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



////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////

// GET all furniture
router.get("/api/furniture/", (req, res) => {
  mysqlConnection.query('SELECT * FROM `furniture`', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A furniture
router.get("/api/furniture/:id", (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `furniture` WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A furniture
router.delete("/api/furniture/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM  `furniture` WHERE id = ?', [id], (err) => {
    if(!err) {
      res.json({status: 'furniture Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An furniture
router.post("/api/furniture/register", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
       
      var data = {
          
        furniture_category    : input.furniture_category,
        description : input.description,
        state   : input.state,        
        furniture_entry_date : input.furniture_entry_date,
        furniture_departure_date : input.furniture_departure_date               
      
      };        
  
 
  const query ="INSERT INTO `furniture` SET ?" 
  
  
  mysqlConnection.query(query, [data], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'furniture Saved'});
    } else {
      console.log(err);
    }
  });

});

//UPDATE A furniture  //falla
router.put("/api/furniture/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    furniture_category    : input.furniture_category,
    description : input.description,
    state   : input.state,        
    furniture_entry_date : input.furniture_entry_date,
    furniture_departure_date : input.furniture_departure_date      

};       
    const query = "UPDATE furniture set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'furniture Updated'});
    } else {
      console.log(err);
    }
  });
});

///////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////

// GET all hygiene
router.get("/api/hygiene/", (req, res) => {
  mysqlConnection.query('SELECT * FROM `hygiene`', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET A hygiene
router.get("/api/hygiene/:id", (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `hygiene` WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE A hygiene
router.delete("/api/hygiene/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM  `hygiene` WHERE id = ?', [id], (err) => {
    if(!err) {
      res.json({status: 'hygiene Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An hygiene
router.post("/api/hygiene/register", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
       
      var data = {
          
        hygiene_category    : input.hygiene_category,
        description : input.description,              
        hygiene_entry_date : input.hygiene_entry_date,
        hygiene_departure_date : input.hygiene_departure_date               
      
      };        
  
 
  const query ="INSERT INTO `hygiene` SET ?" 
  
  
  mysqlConnection.query(query, [data], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'hygiene Saved'});
    } else {
      console.log(err);
    }
  });

});

//UPDATE A hygiene  //falla
router.put("/api/hygiene/edit/:id", (req, res) => {
  
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params; 
      
  var data = {
          
    hygiene_category    : input.hygiene_category,
    description : input.description,
    state   : input.state,        
    hygiene_entry_date : input.hygiene_entry_date,
    hygiene_departure_date : input.hygiene_departure_date      

};       
    const query = "UPDATE hygiene set ? WHERE id = ?";

  mysqlConnection.query(query,[data,id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'hygiene Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
