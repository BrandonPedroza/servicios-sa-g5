const express =  require('express');
const router =  express.Router();
const Usuario = require('./models/usuario');
const Proveedor = require('./models/proveedor');


router.post('/servicio/login', async (req, res, next) => {
    const user = await Usuario.findOne({correo: req.body.correo});
    if(user){
        if (user.password == req.body.password){
            if(user.tipo == "C"){
                res.send(user);
            }else if (user.tipo == "P"){
                const usr = {
                    nombre: user.nombre,
                    apellido: user.apellido,
                    foto: user.foto,
                    correo: user.correo,
                    password: user.password,
                    tipo: user.tipo
                }
                res.send(usr);
            }
        }else{
            res.send({resultado: "La contraseña es incorrecta"});
        }
    }else{
        const user = await Proveedor.findOne({correo: req.body.correo});
        if(user){
            if (user.password == req.body.password){
                if(user.tipo == "C"){
                    res.send(user);
                }else if (user.tipo == "p"){
                    const usr = {
                        nombre: user.nombre,
                        apellido: user.apellido,
                        foto: user.foto,
                        correo: user.correo,
                        password: user.password,
                        tipo: user.tipo
                    }
                    res.send(usr);
                }
            }else{
                res.send({resultado: "La contraseña es incorrecta"});
            }
        }else{
            res.send({resultado: "El usuario no existe"});
        }
    }
});

module.exports = router;