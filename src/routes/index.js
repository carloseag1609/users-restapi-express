const express = require('express');
const router = express.Router();

// Controllers
const UsersController = require('../controllers/UsersController');

module.exports = app => {

	router.get('/', UsersController.getUsers);

	router.post('/', UsersController.createUser);

	router.get('/:id', UsersController.findUser);

	router.put('/:id', UsersController.updateUser);

	app.use('/api/users', router);
}