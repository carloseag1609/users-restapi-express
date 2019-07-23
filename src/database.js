const mongoose = require('mongoose');

// conecting to database
mongoose.connect('mongodb://localhost:27017/restapi-users', {useNewUrlParser: true})
	.then(conn => console.log('DB is connected'))
	.catch(error => console.error(error))