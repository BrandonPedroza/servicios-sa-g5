const mongoose = require('mongoose');

const schema = mongoose.Schema({
    correo: String,
    idproducto: String,
    monto: Number,
    fecha: String
},{ collection : 'oferta' });

module.exports = mongoose.model('oferta',schema);