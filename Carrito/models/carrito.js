const mongoose = require('mongoose');

const schema = mongoose.Schema({
    correo: String,
    estado: String,
	productos: []
},{ collection : 'carrito' });

module.exports = mongoose.model('carrito',schema);