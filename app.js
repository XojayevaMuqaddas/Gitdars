const express=require("express")
const app=express()
const port = (process.env.PORT || '3000');
const rIndex=require("./routers/index")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");
const rAdd=require("./routers/add")
const path=require("path")
const rUser=require("./routers/user")
mongoose.connect('mongodb://localhost:27017/productlar')
const db=mongoose.connection
db.on("open" ,()=>{
    console.log('mongodb running');

})
db.on('error' ,(err)=>{
    console.log("Mongodbda xatolik");
})


app.set("view engine","pug")
app.use(express.static(path.join(__dirname , "public")))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(rIndex)
app.use(rUser)
app.use(rAdd)
app.listen(port , ()=>{
    console.log("server ishga tushdi");
})