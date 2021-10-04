const mongoose = require('mongoose');
const URI = 'mongodb+srv://carloscante:1234@sa.6ez38.mongodb.net/ProyectoSA?retryWrites=true&w=majority';

mongoose.connect(URI)
        .then(db => console.log('Base de datos conectada'))
        .catch(error => console.error(error));

module.exports = mongoose;