import express, { json } from "express";
import authControllers from "../controllers/auth.controller";

const router = express.Router();

router.post('/signup',authControllers.handleRegisterUser)

router.post('/login',authControllers.handleLoginUser)

export default router;