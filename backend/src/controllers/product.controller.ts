import { NextFunction, Request, Response } from 'express';
import IProduct from '../interfaces/product.interface';
import productServices from '../services/product.service';

async function handleCreateProduct(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const productPayload: IProduct = req.body;

        const product = await productServices.createProduct(productPayload);

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Product created successfully',
            product,
        });
    } catch (error) {
        next(error);
    }
}

const productControllers = {
    handleCreateProduct,
}

export default productControllers;