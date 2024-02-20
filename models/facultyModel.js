import mongoose from "mongoose";

//validating
const facultySchema = new mongoose.Schema({
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   facultySkills:{
      type:[String],
      required:true,
   },
   domain:{
    type:String,
    required:true,
 },
 facultyProjectIds:{
    type:String,
    required:true,
 },
   role: {
    type:Number,
    default:1
   },
},{timestamps:true}      //to get time when user gave data
);

export default mongoose.model('faCusers',facultySchema);
