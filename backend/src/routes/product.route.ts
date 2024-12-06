import express, { json } from "express";
import productControllers from "../controllers/product.controller";

const router = express.Router();

router.post('/', productControllers.handleCreateProduct)

const productRoutes=router;

export default productRoutes;