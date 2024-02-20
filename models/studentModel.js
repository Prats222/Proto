import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   studentSkills:{
      type:[String],
      required:true,
   },
   links:{
    type:String,
    required:true,
 },
   studentProjectIds:{
    type:[Number],
    required:true,
 },
   role: {
    type:Number,
    default:0
   },
},{timestamps:true}      //to get time when user gave data
);

export default mongoose.model('sTusers',studentSchema)
