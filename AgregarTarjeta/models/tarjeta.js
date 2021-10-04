const mongoose = require('mongoose');

const schema = mongoose.Schema({
    titular: String,
	numero: Number,
	vencimiento: String
},{ collection : 'tarjeta' });

module.exports = mongoose.model('tarjeta',schema);