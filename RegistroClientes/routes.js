const express =  require('express');
const router =  express.Router();
const Usuario = require('./models/usuario');



router.post('/servicio/registrocliente', async (req, res, next) => {
    const user = await Usuario.findOne({correo: req.body.correo});
    if(user){
        res.send({resultado: "El correo ya esta registrado"});
    }else{
        const newUsuario = new Usuario();
        newUsuario.nombre = req.body.nombre;
        newUsuario.apellido = req.body.apellido;
        newUsuario.foto = req.body.foto;
        newUsuario.correo = req.body.correo;
        newUsuario.password = req.body.password;
        newUsuario.tipo = "C";
        await newUsuario.save();
        res.send(newUsuario);
    }
});

module.exports = router;