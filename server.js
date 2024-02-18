import express from "express";
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoute.js';
import colors from "colors";
import { fileURLToPath } from "url";

//configure env
dotenv.config();
//db config
connectDB();
const __filename = fileURLToPath(import.meta.url);
//rest object
const app=express();

//middleware
//app.use(cors());
app.use(express.json());

//all routes
app.use('/api/vit/auth',studentRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send({
        message: "Welcome to my app"
    })
})

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
});