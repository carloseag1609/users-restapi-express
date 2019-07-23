const controller = {}

// Model(s)
const User = require('../models/UserModel');

controller.getUsers = async (req, res, next) => {
	let users = await User.find();
	res.status(200).json(users);
}

controller.createUser = async (req, res, next) => {
	let { name, last_name, age, country, city, gender } = req.body;
	if (name && last_name && age && country && city && gender) {
		console.log(req.body)
		let newUser = new User(req.body);
		await newUser.save();
		res.json({message: "user created"})
	} else {
		res.json({message: "user cant be created"})
	};
}

controller.findUser = async (req, res, next) => {
	let { id } = req.params;
	if(id) { 
		let user = await User.findById(id);
		console.log(user);
		res.status(200).json(user);
	}
	else { res.status(500).json({message: "User not found"}) }
}

controller.updateUser = async (req, res, next) => {
	let { id } = req.params;
	let { name, last_name, age, country, city, gender } = req.body;
	if(id && name && last_name && age && country && city && gender) {
		console.log(id, req.body);
		let user = await User.findById(id);
		user.name = name;
		user.last_name = last_name;
		user.age = age;
		user.country = country;
		user.city = city;
		user.gender = gender;
		await user.save();
		res.status(200).json({message: "User updated successfully"})
	} else { res.status(500).json({message: "User not found"}) }
}

module.exports = controller;