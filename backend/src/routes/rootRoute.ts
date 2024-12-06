import express from "express";
import authRouter from './auth.route';
import productRoutes from "./product.route";

const router = express.Router();

router.use('/auth', authRouter);

router.use('/products', productRoutes);

export default router;