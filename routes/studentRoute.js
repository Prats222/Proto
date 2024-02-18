import express from "express";
import { loginController } from "../controllers/studentAuthController.js";

//router object
const router= express.Router();

//LOGIN || POST
router.post('/login',loginController);

export default router;