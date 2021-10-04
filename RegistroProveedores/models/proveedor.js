const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: String,
	apellido: String,
	foto: String,
	correo: String,
	password: String,
	tipo: String
},{ collection : 'proveedor' });

module.exports = mongoose.model('proveedor',schema);