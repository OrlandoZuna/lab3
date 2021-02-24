class ServicesController {
    constructor() {}
    index(req, res) {
    res.status(200).json({ serverResponse: "hola mundo" });
    }
    test(req, res) {
        
        const data = req.body;
        res.status(200).json(data);
        }
    test1(req, res, next) {
            req.body["msn"] = "Por el servidor probando"; //mensaje
            var data = req.body; //recuperar datos
            res.status(200).json(data); //mostar esos datos
            }
        /////////////////////////////////////Cambio de divisa///////////////////////////////////////
        //a. Servicio que recibirá 3 parámetros, la moneda original, la cantidad , y la
        // moneda del tipo de cambio tipo cadena. (Todas las monedas estarán en relación al dollar).
        //b. Responderá con número flotante , dando la cantidad exacta del tipo de divisa.
        ////////////////////////////////////////////////////////////////////////////////////////////
        
    divisas(req, res){
        //res.status(200).json({msn:"el tota a cambiat es lo que se muestra"}); //mostar esos datos    
        var cambio="1.60"; 
            var params = req.body;
            if(params.original == null){
              res.status(300).json({msn: "es neceasario colocar el parametro a"});
              return;
            }
            if(params.cantidad == null){
              res.status(300).json({msn: "es neceasario colocar el parametro b"});
              return;          
            }
            
            let total_es=(parseFloat(params.original)*parseFloat(params.cantidad))/parseFloat(cambio);
            res.status(200).json({
                params,
                total_es
            });
           
    }   
        //////////////////////////7///////////////////Calculo de interes compuesto//////////////////////////////////////////
        //a. Este servicio recibirá 3 parámetros, el monto que se solicita, y el tipo de interés anual, y el tiempo de pago.
        //b. Responderá con la cantidad que el cliente debe pagar.
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    interes (req, res){
        var cambio="1.60"; 
        var params = req.body;
        if(params.monto == null){
          res.status(300).json({msn: "es neceasario colocar el parametro la cantidad a prestarse"});
          return;
        }
        if(params.interes== null){
          res.status(300).json({msn: "es neceasario colocar el parametro del tipo de interes"});
          return;          
        }
        if(params.tiempo== null){
            res.status(300).json({msn: "es neceasario colocar el parametro el tiempo de prestamo"});
            return;          
          }
        
        let totalApagarEs=(parseFloat(params.monto)*parseFloat(params.interes))*parseFloat(params.tiempo);
        res.status(200).json({
            params,
            totalApagarEs
        });
        console.log("el tota a cambiat es lo que se muestra"); //mostar esos datos
}  
}
export default ServicesController;