const express = require('express');
const morgan = require('morgan');
const app = express();

require('./database') // DB connection

// importing routes functions
let indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
indexRoutes(app);

// starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
})