//var express = require('express');
var express = require("express");
var router = express.Router();
//GET home page. 
 router.get('/', function(req, res, next) {
 res.status(200).json({
 msn: "Hola mundo"
 });
});
router.post('/test', function(req, res, next) {
    req.body["msn"] = "Por el servidor"; //mensaje
    var data = req.body; //recuperar datos
    res.status(200).json(data); //mostar los datos
    });
    ///Cambio de divisa//
    //a. Servicio que recibirá 3 parámetros,
    //b. Responderá con número flotante

router.post('/divisas', function(request, res, next) {
   var d= request.body["msn"] = "la divisa es en total";
    var original = request.body='1300'; //recuperar datos
    var cantidad = request.body='10'; //recuperar datos
    var cambio  = request.body='1.6'; //recuperar datos
    var respuesta=parseFloat((original)*parseFloat(cantidad))/parseFloat(cambio);
    
    res.status(200).json({
        original, 
        cantidad,
        cambio,
        respuesta
    });
    //res.status(200).json(d); //mostar esos datos 
    
    });
                   //Calculo de interes compuesto//
     //a. Este servicio recibirá 3 parámetros
    //b. Responderá con la cantidad de cliente.

    router.post('/interes', function(req, res, next) {
   var d= req.body["msn"] = "Por el interes";
    var dato1 = req.body='125'; //recuperar datos
    var dato2 = req.body='0,80'; //recuperar datos
    var dato3 = req.body='30'; //recuperar datos
   
    var respuesta=parseFloat(dato1)*parseFloat(dato3)-(parseFloat(dato1)*parseFloat(dato3))*(parseFloat(dato2));
    res.status(200).json({
        dato1, 
        dato2,
        dato3,
        respuesta
    }); //mostar esos datos
    res.status(200).json(d);   
});    

module.exports=router;
/*var express = require('express');
var router = express.Router();*/

/*import express from "express";
import ServicesController from "../controller/ServicesController.js";
var router = express.Router();
var services = new ServicesController();
router.get("/", services.index);

export default router;*/
