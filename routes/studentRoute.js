import express from "express";
import { studentLoginController } from "../controllers/studentAuthController.js";

//router object
const router= express.Router();

//LOGIN || POST
router.post('/studentLogin',studentLoginController);

export default router;
