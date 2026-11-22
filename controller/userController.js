const users=require('../models/userModel')
const bcrypt=require('bcrypt')

//add users
exports.addUsersController=async(req,res)=>{    
    console.log("Inside Add Users Controller");
    const{name,phone,password}=req.body
    const existingUser=await users.findOne({phone})
    if(existingUser){
        res.status(409).json({message:"User already Exist"})
    }else{
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await users.create({name,phone,password:hashedPassword})
        res.status(201).json({message:"User Created Successfull",data:newUser})
    }
}

//view users

exports.viewUserController=async(req,res)=>{
    console.log("Inside viewUserController");
    const allUsers=await users.find()
    res.status(200).json({message:"All Uers Fetched Successfully",data:allUsers})
}

//edit users

exports.editUserController=async(req,res)=>{    
    console.log("Inside editUserController");
    const{id}=req.params
    const{name,phone,password}=req.body
    const hashedPassword=await bcrypt.hash(password,10)
    const updatedUser=await users.findByIdAndUpdate({_id:id},{name,phone,password:hashedPassword},{new:true})
    res.status(201).json({message:"User Updated Successfull",data:updatedUser})
}

//delete users

exports.deleteUserController=async(req,res)=>{    
    console.log("Inside deleteUserController");
    const{id}=req.params
    const deletedUser=await users.findByIdAndDelete({_id:id})
    res.status(201).json({message:"User Deleted Successfull",data:deletedUser})
}