import express from 'express';
import ServicesController from "../controllers/ServicesController.js";
var router= express.Router();
var services = new ServicesController();

router.get("/", services.index);
router.get("/test", services.test);
router.post('/test1', services.test1);
router.post('/divisas', services.divisas);
router.post('/interes', services.interes);
export default router;