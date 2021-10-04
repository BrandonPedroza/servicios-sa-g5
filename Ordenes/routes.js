const express =  require('express');
const Orden = require('./models/orden');
const Producto = require('./models/producto');
const bodyParser = require('body-parser');
const router =  express.Router();


router.post('/servicios/crearorden', async (req, res, next) => {

    const newOrden = new Orden();
    newOrden.correo = req.body.correo;

    for (const p of req.body.productos){
        const prod = await Producto.findById(p.id);

        if(prod){
            prod.stock = prod.stock - p.cantidad;

            const produc = {
                _id: prod._id,
                precio: prod.precio,
                stock: prod.stock,
                nombre: prod.nombre,
                descripcion: prod.descripcion,
                foto: prod.foto,
                proveedor: prod.proveedor,
                categoria: prod.categoria,
                precioinicial: prod.precioinicial,
                mayoroferta: prod.mayoroferta,
                compradirecta: prod.compradirecta,
                subasta: prod.subasta,
                subastaactiva: prod.subastaactiva,
                cantidad: p.cantidad
            }

            newOrden.productos.push(produc);
            await prod.save()
        }
    }

    newOrden.estado = "Pendiente"
    newOrden.fecha = new Date().toDateString();


    await newOrden.save();

    res.send(newOrden);
});

router.get('/servicios/obtenertodaslasordenes', async (req, res, next) => {
    const ord = await Orden.find({});
    if(ord){
        res.send(ord);
    }else{
        res.send({resultado: "No existe ninguna orden creada"});
    }
})

router.post('/servicios/obtenerordenesusuario', async (req, res, next) => {
    const ord = await Orden.find({correo: req.body.correo});
    if(ord){
        res.send(ord);
    }else{
        res.send({resultado: "El usuario no posee ninguna orden creada"});
    }
})

router.post('/servicios/modificarestadoorden', async (req, res, next) => {
    const ord = await Orden.findById(req.body.id);
    if(ord){
        ord.estado = req.body.estado;
        await ord.save();
        res.send(ord);
    }else{
        res.send({resultado: "La orden que desea modificar no existe"});
    }
});


router.post('/servicios/obtenerdatosfactura', async(req, res, next) => {
    const ord = await Orden.findById(req.body.id);

    if(ord){
        res.send(ord);
    }else{
        res.send({resultado: "La orden solicitada no existe."});
    }
})


module.exports = router;