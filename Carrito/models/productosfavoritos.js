const mongoose = require('mongoose');

const schema = mongoose.Schema({
    correo: String,
	productos: []
},{ collection : 'productosfavoritos' });

module.exports = mongoose.model('productosfavoritos',schema);