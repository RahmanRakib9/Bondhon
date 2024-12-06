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

async function handleGetProducts(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const products = await productServices.getProducts();

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Product retrieved successfully',
            products,
        });
    } catch (error) {
        next(error);
    }
}

async function getProductsBySeller(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const sellerId = req.params.sellerId;

        const products = await productServices.getProductsBySeller(sellerId);

        res.status(201).json({
            success: true,
            statusCode: 200,
            message: 'Product retrieved successfully',
            products,
        });
    } catch (error) {
        next(error);
    }
}

async function handleGetWeatherWithNotifications(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const weatherData = await productServices.getWeatherWithNotifications();

        res.status(200).json({
            success: true,
            message: "Weather data and notifications retrieved successfully",
            data: weatherData,
        });
    } catch (error) {
        next(error);
    }
}

const productControllers = {
    handleCreateProduct,
    handleGetProducts,
    handleGetWeatherWithNotifications,
    getProductsBySeller
}

export default productControllers;