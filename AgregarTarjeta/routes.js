const express =  require('express');
const router =  express.Router();
const Usuario = require('./models/usuario');
const Tarjeta = require('./models/tarjeta');


router.post('/servicio/agregartarjeta', async (req, res, next) => {
    const user = await Usuario.findOne({correo: req.body.correo});
    if(user){
        var existe = false;

        user.tarjetas.forEach(element => {
            if (element.numero == req.body.numero){
                existe = true;
            }
        });

        if(!existe){
            const newTarjeta = new Tarjeta();

            newTarjeta.titular = req.body.titular;
            newTarjeta.numero = req.body.numero;
            newTarjeta.vencimiento = req.body.vencimiento;

            user.tarjetas.push(newTarjeta);
            
            await user.save();
            res.send(user);
        }else{
            res.send({resultado: "El numero de tarjeta ya esta asociado al usuario"});
        }
    }else{
        res.send({resultado: "El ususario no existe"});
    }
});

router.post('/servicio/eliminartarjeta', async (req, res, next) => {
    const user =  await Usuario.findOne({correo: req.body.correo});
    if(user){
        if (user.tarjetas.length > 0){

            var existe = false;

            user.tarjetas.forEach(element => {
                if(element.numero == req.body.numerotarjeta){
                    existe = true;
                }
            });

            if (existe){
                user.tarjetas = user.tarjetas.filter(function(tarj) {
                    return tarj.numero !== req.body.numerotarjeta; 
                });
    
                await user.save();
                res.send({resultado: "Tarjeta eliminada con exito"});
            }else{
                res.send({resultado: "El numero de tarjeta no se encuentra asociada al usuario"})
            }

            
        }else{
            res.send({resultado: "El ususario no tiene tarjetas registradas"});
        }
        
    }else{
        res.send({resultado: "El ususario no existe"});
    }
});

module.exports = router;