const express =  require('express');
const router =  express.Router();
const Producto = require('./models/producto');
const Categoria = require('./models/categoria');


router.post('/servicio/registroproducto', async (req, res, next) => {
    const cat = await Categoria.findOne({nombre: req.body.nombrecategoria});
    if(cat){
        
        const prod = await Producto.findOne({nombre: req.body.nombre, proveedor: req.body.proveedor});

        if(prod){
            res.send({resultado: "El producto ya existe para este proveedor"})
        }else{
            const newProducto = new Producto();
            newProducto.precio = req.body.precio;
            newProducto.stock = req.body.stock;
            newProducto.nombre = req.body.nombre;
            newProducto.descripcion = req.body.descripcion;
            newProducto.foto = req.body.foto;
            newProducto.proveedor = req.body.proveedor;
            newProducto.categoria = req.body.nombrecategoria;
            newProducto.precioinicial = req.body.precioinicial;
            newProducto.mayoroferta = 0;
            newProducto.compradirecta = req.body.compradirecta;
            newProducto.subasta = req.body.subasta;
            newProducto.subastaactiva = req.body.subasta;

            await newProducto.save()

            res.send(newProducto);   
        }
        
    }else{
        res.send({resultado: "La categoria no existe"});
    }
});

router.post('/servicio/elimiarproducto', async (req, res, next) => {
    const prod = await Producto.findById(req.body.id);
    if(prod){
        await Producto.findByIdAndRemove(req.body.id);

        res.send({resultado: "El producto fue eliminado con exito"});
    }else{
        res.send({resultado: "El producto que desea elimiar no existe"});
    }
});

router.post('/servicio/modificarproducto', async (req, res, next) => {
    const prod = await Producto.findById(req.body.id);
    if(prod){
        prod.precio = req.body.precio;
        prod.stock = req.body.stock;
        prod.nombre = req.body.nombre;
        prod.descripcion = req.body.descripcion;
        prod.foto = req.body.foto;
        prod.proveedor = req.body.proveedor;
        prod.categoria = req.body.nombrecategoria;
        prod.precioinicial = req.body.precioinicial;
        prod.mayoroferta = req.body.mayoroferta;
        prod.compradirecta = req.body.compradirecta;
        prod.subasta = req.body.subasta;
        prod.subastaactiva = req.body.subastaactiva;

        await prod.save();

        res.send(prod);

    }else{  
        res.send({resultado: "El producto que desea modificar no existe"});
    }
});

router.post('/servicio/listaproductosproveedor', async (req, res, next) => {
    const productos = await Producto.find({proveedor: req.body.proveedor});
    if (productos){
        res.send(productos);
    }else{
        res.send({resultado: "No hay categorias registradas"});
    }
});

module.exports = router;