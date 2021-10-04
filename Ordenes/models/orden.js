const mongoose = require('mongoose');

const schema = mongoose.Schema({
    correo: String,
    estado: String,
    fecha: String,
    productos: []
},{ collection : 'orden' });

module.exports = mongoose.model('orden',schema);