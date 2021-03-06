const express = require('express');

const app = express();

// Settings
app.set('port', process.env.PORT || 3003);

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


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