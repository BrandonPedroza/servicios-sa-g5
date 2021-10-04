const express =  require('express');
const router =  express.Router();
const Producto = require('./models/producto');
const Carrito = require('./models/carrito');
const ProductosFavoritos = require('./models/productosfavoritos');
const Oferta = require('./models/oferta');


//Servicios del carrito *******************************************************************************************

router.post('/carrito/nuevocarrito', async (req, res, next) => {

    const newCarrito = new Carrito();
    newCarrito.correo = req.body.correo;
    newCarrito.estado = 'Activo';

    await newCarrito.save();
    res.send(newCarrito);

});

router.post('/carrito/agregarproductosacarrito', async (req, res, next) =>{
    const carrito = await Carrito.findById(req.body.id);

    if(carrito){
        for(const p of req.body.productos){
            
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
    
                carrito.productos.push(produc);
                await prod.save()
            }
        }

        await carrito.save();

        res.send(carrito);

    }else{
        res.send({resultado: "El carrito solicitado para añadir productos no existe"});
    }
});

router.post('/carrito/eliminarproductocarrito', async (req, res, next) =>{
    const carrito = await Carrito.findById(req.body.id);

    if(carrito){
        for(const p of req.body.productos){
            var i = 0
            for(const pr of carrito.productos){
                if(pr._id == p.id){
                    carrito.productos.splice(i, 1);
                }else{
                    i++;
                }
            }
        }

        await carrito.save();

        res.send(carrito);

    }else{
        res.send({resultado: "El carrito solicitado para eliminar productos no existe"});
    }
});

router.post('/carrito/eliminarcarrito', async (req, res, next) =>{
    const carrito = await Carrito.findById(req.body.id);
    if(carrito){
        await Carrito.findByIdAndDelete(req.body.id);
        res.send({resultado: "El carrito ha sido eliminado con exito"});
    }else{
        res.send()
    }
});

router.post('/carrito/pagarcarrito', async (req, res, next) =>{
    const carrito = await Carrito.findById(req.body.id);

    if(carrito){
        carrito.estado = "Pagado";
        await carrito.save();
        res.send({resultado: "El carrito ha sido pagado."});
    }else{
        res.send({resultado: "El carrito que desea pagar no existe"});
    }

});

router.post('/carrito/obtenercarritos', async (req, res, next) =>{
    const carritos = await Carrito.find({correo: req.body.correo});

    if(carritos){
        res.send(carritos);
    }else{
        res.send({resultado: "El cliente no tiene carritos."});
    }

});

//Servicios de favoritos****************************************************************************************

router.post('/favoritos/agregarproductos', async (req, res, next) =>{
    const favoritos = await ProductosFavoritos.find({correo: req.body.correo});
    if(favoritos.length > 0){
        for(const p of req.body.productos){
            
            const prod = await Producto.findById(p.id);
            if(prod){
    
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
                    subastaactiva: prod.subastaactiva
                }
                favoritos[0].productos.push(produc);
            }
        }

        await favoritos[0].save();

        res.send(favoritos[0]);
    }else{
        const newFavoritos = new ProductosFavoritos();

        newFavoritos.correo = req.body.correo;
        newFavoritos.productos = [];

        for(const p of req.body.productos){
            
            const prod = await Producto.findById(p.id);
            if(prod){
    
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
                    subastaactiva: prod.subastaactiva
                }
    
                newFavoritos.productos.push(produc);
            }
        }

        await newFavoritos.save();

        res.send(newFavoritos);
    }
});

router.post('/favoritos/eliminarproductos', async (req, res, next) =>{
    const favoritos = await ProductosFavoritos.find({correo: req.body.correo});

    if(favoritos.length > 0){
        for(const p of req.body.productos){
            var i = 0
            for(const pr of favoritos[0].productos){
                if(pr._id == p.id){
                    favoritos[0].productos.splice(i, 1);
                }else{
                    i++;
                }
            }
        }

        await favoritos[0].save();

        res.send(favoritos[0]);

    }else{
        res.send({resultado: "El usuario no posee una lista de favoritos"});
    }
});

router.post('/favoritos/obtenerfavoritos', async (req, res, next) =>{
    const favoritos = await ProductosFavoritos.find({correo: req.body.correo});

    if(favoritos.length > 0){

        res.send(favoritos[0]);

    }else{
        res.send({resultado: "El usuario no posee una lista de favoritos"});
    }
});

//Servicios de subastas *****************************************************************************************

router.post('/subasta/nuevaoferta', async (req, res, next) => {
    const producto = await Producto.findById(req.body.id);

    if(producto){
        if((producto.subasta) && (producto.subastaactiva)){
            if((req.body.oferta > producto.precioinicial) && (req.body.oferta > producto.mayoroferta)){
                producto.mayoroferta = req.body.oferta;

                const newOferta = new Oferta();

                newOferta.correo = req.body.correo;
                newOferta.idproducto = req.body.id;
                newOferta.monto = req.body.oferta;
                newOferta.fecha = new Date().toDateString();

                await producto.save();
                await newOferta.save();

                res.send(newOferta);

            }else{
                res.send({respuesta: "La oferta debe ser mayor a la oferta anterior y al precio inicial definido"});
            }
        }else{
            res.send({respuesta: "El producto no esta en subasta o la subasta no esta activa actualmente."})
        }
    }else{
        res.send({respuesta: "El producto por el cual quiere ofertar no existe."});
    }
});

router.post('/subasta/obtenerofertasporcliente', async (req, res, next) =>{
    const ofertas = await Oferta.find({correo: req.body.correo});
    
    if(ofertas){
        res.send(ofertas);
    }else{
        res.send({respuesta: "El cliente no ha realizado ninguna oferta por ningun producto"});
    }
});

router.post('/subasta/obtenerofertasporproducto', async (req, res, next) =>{
    const ofertas = await Oferta.find({idproducto: req.body.id});

    if(ofertas){
        res.send(ofertas);
    }else{
        res.send({respuesta: "El producto solicitado no tiene registrada ninguna oferta."});
    }
});

router.post('/subasta/obtenerofertasporproductoycliente', async (req, res, next) =>{
    const ofertas = await Oferta.find({idproducto: req.body.id, correo: req.body.correo});

    if(ofertas){
        res.send(ofertas);
    }else{
        res.send({respuesta: "El cliente solicitado no ha realizado ninguna oferta sobre el producto solicitado."});
    }
});



module.exports = router;