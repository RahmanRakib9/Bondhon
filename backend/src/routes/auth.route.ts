import express, { json } from "express";
import authControllers from "../controllers/auth.controller";

const router = express.Router();


router.use('/signup',authControllers.handleRegisterUser)

export default router;