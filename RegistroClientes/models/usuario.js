const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: String,
	apellido: String,
	foto: String,
	correo: String,
	password: String,
	tipo: String,
    tarjetas: [{
        titular: String,
	    numero: Number,
	    vencimiento: String,
    }]
},{ collection : 'usuario' });

module.exports = mongoose.model('usuario',schema);