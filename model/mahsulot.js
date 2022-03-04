const mongoose=require("mongoose")
const schema=mongoose.Schema

const mahsulotdb=new schema({
    name:{
          type:String,
          required:true,
    } , 
    manufacturer:{
          type:String,
          default:"ishlab chiqatuvchi  kopsatilmagan"
    },
    price:{
          type:Number,
          maxlength:8,
          required:true,
    },
    views:{
          type:Number,
          default:0,

    },
    comment:{
          type:String,
          required:true,

    },
    date:{
          type:Date,
          default:Date.now()
    },
    img:{
          type:String

    }
})


module.exports=mongoose.model("maxsulot" , mahsulotdb)