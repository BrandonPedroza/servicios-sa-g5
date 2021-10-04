const mongoose = require('mongoose');

const schema = mongoose.Schema({
    precio: mongoose.Types.Decimal128,
	stock: Number,
	nombre: String,
	descripcion: String,
	foto: String,
	proveedor: String,
	categoria: String,
	precioinicial: Number,
	mayoroferta: Number,
	compradirecta: Boolean,
	subasta: Boolean,
	subastaactiva: Boolean
},{ collection : 'producto' });

module.exports = mongoose.model('producto',schema);