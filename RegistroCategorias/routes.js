const express =  require('express');
const router =  express.Router();
const Categoria = require('./models/categoria');
const Producto = require('./models/producto');



router.post('/servicio/registrocategoria', async (req, res, next) => {
    const cat = await Categoria.findOne({nombre: req.body.nombre});
    if(cat){
        res.send({resultado: "La categoria ya existe"});
    }else{
        const newCategoria = new Categoria();
        newCategoria.nombre = req.body.nombre;
        await newCategoria.save();
        res.send(newCategoria);
    }
});

router.get('/servicio/listcategorias', async (req, res, next) =>{
    const cat = await Categoria.find({});
    if (cat){
        var resultado = []
        
        for (const c of cat){
            const prod = await Producto.find({categoria: c.nombre});
            resultado.push({
                _id: c._id,
                nombre: c.nombre,
                productos: prod
            })
        }

        res.send(resultado);
    }else{
        res.send({resultado: "No se encontraron categorias"})
    }
    
})

router.post('/servicio/listproductoscategoria', async (req, res, next) =>{
    const cat = await Categoria.findOne({nombre: req.body.nombre});
    if(cat){
        const prod = await Producto.find({categoria: cat.nombre})
        const resultado = {
            _id: cat._id,
            nombre: cat.nombre,
            productos: prod
        }
        res.send(resultado);
    }else{
        res.send({resultado: "No existe la categoria"});
    }
})

module.exports = router;