const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: String
},{ collection : 'categoria' });

module.exports = mongoose.model('categoria',schema);