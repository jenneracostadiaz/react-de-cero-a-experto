const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		require: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = model('Usuario', UsuarioSchema);
