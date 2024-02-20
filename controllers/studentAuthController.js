import studentModel from "../models/studentModel.js";
import JWT from 'jsonwebtoken';
import { comparePassword, hashPassword } from "../helpers/authHelper.js";

//POST LOGIN
export const studentLoginController=async(req,res) =>{
    try {
       const {email,password} = req.body
       //Validation
       if(!email || !password){
        return res.status(404).send({
            success:false,
            message:'Invalid Username or password'
        })
       }
       //check user
       const user = await studentModel.findOne({email})
       if(!user){
        return res.status(404).send({
            success:false,
            message:'Email is not Registered'
        })
       }
       const match= await comparePassword(password,sTusers.password)
       if(!match){
        return res.status(404).send({
            success:false,
            message:'Password did not match'
        })
       }
    
       //token
       const token = await JWT.sign({ _id: sTusers.id},process.env.JWT_SECRET, {expiresIn:"900d"});
    
       res.status(200).send({
        success:true,
        message:'Logged In Succesfully',
        user:{
           email:user.email,
           role:user.role
        },
        token,
       })
    
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in Login',
            error
        })
    }
    };
