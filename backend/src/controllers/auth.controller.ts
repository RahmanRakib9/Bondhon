import { NextFunction, Request, Response } from 'express';
import authServices from '../services/auth.service';
import IUser from '../interfaces/user.interface';

async function handleRegisterUser(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userPayload: IUser = req.body;

        const user = await authServices.registerUser(userPayload);

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        next(error);
    }
}

const authControllers = {
    handleRegisterUser,
}
export default authControllers;