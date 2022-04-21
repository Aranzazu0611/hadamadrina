const express = require('express');
const cors = require('cors');
const session = require("express-session");


const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  
app.use(
    session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );



// Routes
app.use(require('../src/routes/clothing'));
app.use(require('../src/routes/users'));
app.use(require('../src/routes/childrens'));
app.use(require('../src/routes/foods'));
app.use(require('../src/routes/furniture'));
app.use(require('../src/routes/hygiene'));
app.use(require('../src/routes/mothers'));


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});