const express =  require('express');
const router =  express.Router();
const Proveedor = require('./models/proveedor');



router.post('/servicio/registroproveedor', async (req, res, next) => {
    const proveed = await Proveedor.findOne({correo: req.body.correo});
    if(proveed){
        res.send({resultado: "El correo ya esta registrado"});
    }else{
        const newProveedor = new Proveedor();
        newProveedor.nombre = req.body.nombre
        newProveedor.apellido = req.body.apellido
        newProveedor.foto = req.body.foto
        newProveedor.correo = req.body.correo
        newProveedor.password = req.body.password
        newProveedor.tipo = "p"
        await newProveedor.save();
        res.send(newProveedor);
    }
});

module.exports = router;