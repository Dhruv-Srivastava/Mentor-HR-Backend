const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors');
const Company=require("./models/Companies")
require("dotenv").config() 

const server=express()
const PORT_NUM=process.env.PORT || 3030

//Middleware
server.use(express.json())
server.use(cors());

server.get("/:keywords",async(req,res)=>{
    const {keywords}=req.params
    const company=await Company.find({$text: {$search: keywords}})
    res.json(company)
})


// Database connection

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('Connected to database');

    server.listen(PORT_NUM,()=>{
        console.log(`Sever started at port ${PORT_NUM} 🚀`)
    })
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

connectToDatabase();


