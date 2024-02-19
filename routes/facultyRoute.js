import express from "express";
import { facultyLoginController } from "../controllers/facultyAuthController.js";

//router object
const router= express.Router();

//LOGIN || POST
router.post('/facultyLogin',facultyLoginController);

export default router;
