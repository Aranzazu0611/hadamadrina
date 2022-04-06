const express = require('express');


const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());




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
