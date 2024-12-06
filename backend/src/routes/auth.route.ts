import express, { json } from "express";
import authControllers from "../controllers/auth.controller";

const router = express.Router();

router.use('/signup',authControllers.handleRegisterUser)

router.use('/login',authControllers.handleLoginUser)

export default router;