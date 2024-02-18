import express from "express";
import connectDB from "./config/db";
//db config
connectDB();
//rest object
const app=express();