const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app =  express();

//BD
const { mongose } = require('./database');


//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rutas
app.use('/', require('./routes'));

app.listen(app.get('port'), () =>{
    console.log(`Servidor en puerto ${app.get('port')}`);
})