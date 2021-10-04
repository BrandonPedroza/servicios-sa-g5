const express =  require('express');
const router =  express.Router();
const Usuario = require('./models/usuario');



router.post('/servicio/modificarusuario', async (req, res, next) => {
    const user = await Usuario.findOne({correo: req.body.correo});
    if(user){
        user.nombre = req.body.nombre,
        user.apellido = req.body.apellido
        user.foto = req.body.foto
        user.correo = req.body.correo
        user.password = req.body.password
        await user.save();
        res.send(user);
    }else{
        
        res.send({resultado: "El usuario no existe"});
    }
});

module.exports = router;