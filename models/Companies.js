const mongoose=require("mongoose")


const companySchema=new mongoose.Schema({
    _id:{type:Number,required:true},
    name:{type:String,required:true},
    companyURL:{type:String,required:true},
    primaryText:String,
    headline:String,
    description:String,
    cta:String,
    adURL:String
})

companySchema.index({
    primaryText: "text",
    headline: "text",
    description: "text",
    name:"text",
    cta:"text"
})


module.exports=mongoose.model("Company",companySchema)