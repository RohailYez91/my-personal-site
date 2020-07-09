// Require Modules
const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
const profileRoutes = require('./routes/profile');
const port = 3000;

// Set up express app
const app = express();

// Configure express app app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Mount Routes app.use()
app.use('/', indexRoutes);
app.use('/profile', profileRoutes);

// Tell app to listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
