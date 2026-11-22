const express=require('express')
const cors=require('cors')
require('dotenv').config()

const route=require('./allRoutes/route')

//Databse 
require('./config/db')

const server=express()


server.use(express.json())
server.use(route)
server.use(cors())

server.get('/',async(req,res)=>{
    res.status(201).json("Server Successfully Deployed")
})

const PORT=3000

server.listen(PORT,()=>{
    console.log("Server Running...");
})