const express =  require('express');
const router =  express.Router();
const axios = require('axios');
var fs = require('fs');
var log='';
var tiempoTranscurrido = Date.now();
var time = new Date(tiempoTranscurrido);




//**********SERVICIOS LOGIN***********/
router.post('/api/servicio/login', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: '+ '/api/servicio/login' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-login.herokuapp.com/servicio/login', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//**********************SERVICIOS AGREGAR TARJETA******************
router.post('/api/servicio/agregartarjeta', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: '+ '/api/servicio/agregartarjeta' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-agregartarjeta.herokuapp.com/servicio/agregartarjeta', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicio/eliminartarjeta', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: '+ '/api/servicio/eliminartarjeta' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-agregartarjeta.herokuapp.com/servicio/eliminartarjeta', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});


//*****************SERVICIOS CARRITO************************ */
//+++++++CARRITO+++++++
router.post('/api/carrito/nuevocarrito', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/carrito/nuevocarrito' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/carrito/nuevocarrito', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/carrito/agregarproductosacarrito', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/carrito/agregarproductosacarrito' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/carrito/agregarproductosacarrito', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});



router.post('/api/servicios/modificarestadoorden', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicios/modificarestadoorden' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-ordenes.herokuapp.com/servicios/modificarestadoorden', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/carrito/eliminarproductocarrito', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/carrito/eliminarproductocarrito' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/carrito/eliminarproductocarrito', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/carrito/eliminarcarrito', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/carrito/eliminarcarrito' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/carrito/eliminarcarrito', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/carrito/pagarcarrito', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/carrito/pagarcarrito' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/carrito/pagarcarrito', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/carrito/obtenercarritos', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/carrito/obtenercarritos' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/carrito/obtenercarritos', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});


//++++++FAVORITOS++++++
router.post('/api/favoritos/agregarproductos', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/favoritos/agregarproductos' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/favoritos/agregarproductos', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/favoritos/eliminarproductos', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/favoritos/eliminarproductos' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/favoritos/eliminarproductos', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/favoritos/obtenerfavoritos', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/favoritos/obtenerfavoritos' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/favoritos/obtenerfavoritos', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//+++++++++++++SUBASTAS++++++++++++++++
router.post('/api/subasta/nuevaoferta', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/subasta/nuevaoferta' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/subasta/nuevaoferta', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/subasta/obtenerofertasporcliente', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/subasta/obtenerofertasporcliente' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/subasta/obtenerofertasporcliente', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/subasta/obtenerofertasporproducto', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/subasta/obtenerofertasporproducto' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/subasta/obtenerofertasporproducto', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/subasta/obtenerofertasporproductoycliente', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/subasta/obtenerofertasporproductoycliente' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-carrito.herokuapp.com/subasta/obtenerofertasporproductoycliente', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//*************SERVICIOS MODIFICACION USUARIOS ******************/

router.post('/api/servicio/modificarusuario', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/modificarusuario' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-modusuario.herokuapp.com/servicio/modificarusuario', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//**********SERVICIOS ORDENES **************/
router.post('/api/servicios/crearorden', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicios/crearorden' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-ordenes.herokuapp.com/servicios/crearorden', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.get('/api/servicios/obtenertodaslasordenes', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicios/obtenertodaslasordenes' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.get('https://sa5-ordenes.herokuapp.com/servicios/obtenertodaslasordenes')
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicios/obtenerordenesusuario', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicios/obtenerordenesusuario' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-ordenes.herokuapp.com/servicios/obtenerordenesusuario', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicios/modificarestadoorden', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicios/modificarestadoorden' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-ordenes.herokuapp.com/servicios/modificarestadoorden', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicios/obtenerdatosfactura', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicios/obtenerdatosfactura' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-ordenes.herokuapp.com/servicios/obtenerdatosfactura', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//************SERVICIOS CATEGORIA *********/
router.post('/api/servicio/registrocategoria', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/registrocategoria' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regcategoria.herokuapp.com/servicio/registrocategoria', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.get('/api/servicio/listcategorias', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/listcategorias' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.get('https://sa5-regcategoria.herokuapp.com/servicio/listcategorias')
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicio/listproductoscategoria', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/listproductoscategoria' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regcategoria.herokuapp.com/servicio/listproductoscategoria', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//*************SERVICIOS REGISTRO DE CLIENTES************* */
router.post('/api/servicio/registrocliente', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/registrocliente' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regcliente.herokuapp.com/servicio/registrocliente', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//****************SERVICIOS REGISTRO PRODUCTOS */
router.post('/api/servicio/registroproducto', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/registroproducto' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regproducto.herokuapp.com/servicio/registroproducto', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicio/elimiarproducto', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/elimiarproducto' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regproducto.herokuapp.com/servicio/elimiarproducto', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicio/modificarproducto', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/modificarproducto' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regproducto.herokuapp.com/servicio/modificarproducto', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/servicio/listaproductosproveedor', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/listaproductosproveedor' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regproducto.herokuapp.com/servicio/listaproductosproveedor', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});


//*************SERVICIOS REGISTRO PROVEEDORES */
router.post('/api/servicio/registroproveedor', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/servicio/registroproveedor' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regproveedor.herokuapp.com/servicio/registroproveedor', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

//****************SERVICIOS NUEVOS
router.post('/api/users/signup', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/users/signup' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regcliente.herokuapp.com/api/users/signup', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/users/signin', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/users/signin' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-login.herokuapp.com/api/users/signin', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/providers/newProduct', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/providers/newProduct' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.post('https://sa5-regproducto.herokuapp.com/api/providers/newProduct', req.body)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});
//http://34.125.95.83:4000/api/providers/allProducts
router.get('/api/providers/allProducts', async (req, res, next) => {
    tiempoTranscurrido = Date.now();
    time = new Date(tiempoTranscurrido);

    log +='Peticion solicitada a servicio: ' + '/api/providers/allProducts' +' | Hora: '+time+'\n';
    console.log(log);
    console.log(req.body);
    axios.get('https://sa5-regproducto.herokuapp.com/api/providers/products')
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }, (error) => {
        console.log(error);
    })
});

router.post('/api/users/compra', async (req, res, next) => {
  tiempoTranscurrido = Date.now();
  time = new Date(tiempoTranscurrido);

  log +='Peticion solicitada a servicio: ' + '/api/users/compra' +' | Hora: '+time+'\n';
  console.log(log);
  console.log(req.body);
  axios.post('https://sa5-ordenes.herokuapp.com/api/users/compra',req.body)
  .then((response) => {
      console.log(response.data);
      res.send(response.data);
    }, (error) => {
      console.log(error);
  })
});


router.get('/api/escribirlog', async(req, res, next) => {
    console.log(log);
    fs.writeFile("LOG_ESB.txt",log, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("El archivo fue creado correctamente");
        res.send({resultado: "El archivo fue creado correctamente"});
      });
})
module.exports = router;