import { NextFunction, Request, Response } from 'express';
import authServices from '../services/auth.service';
import IUser from '../interfaces/user.interface';
import { ILoginUser } from '../interfaces/auth.interface';

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

async function handleLoginUser(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const userLoginPayload:ILoginUser = req.body;

        const accessToken =
            await authServices.loginUser(userLoginPayload);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User Logged-in successfully',
            accessToken,
        });
    } catch (error) {
        next(error);
    }
}

const authControllers = {
    handleRegisterUser,
    handleLoginUser,
}
export default authControllers;