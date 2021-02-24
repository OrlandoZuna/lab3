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

router.post('/divisas', function(req, res, next) {
    req.body["msn"] = "Por el divisas";
    var dato1 = req.body["Original"]; //recuperar datos
    var dato2 = req.body["Cantidad"]; //recuperar datos
    var dato3 = req.body["Cambio"]; //recuperar datos
    var respuesta=parseFloat(dato1)*parseFloat(dato2)*parseFloat(dato3);
    res.status(200).json({
        dato1, 
        dato2,
        dato3,
        respuesta
    }); //mostar esos datos 
    
    });
                   //Calculo de interes compuesto//
     //a. Este servicio recibirá 3 parámetros
    //b. Responderá con la cantidad de cliente.

    router.post('/interes', function(req, res, next) {
    req.body["msn"] = "Por el divisas";
    var dato1 = req.body["Monto"]; //recuperar datos
    var dato2 = req.body["Interes"]; //recuperar datos
    var dato3 = req.body["Tiempo"]; //recuperar datos
    var respuesta=parseFloat(dato1)*Math.pow((1+parseFloat(dato2)),dato3);
    res.status(200).json({
        dato1, 
        dato2,
        dato3,
        respuesta
    }); //mostar esos datos
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
