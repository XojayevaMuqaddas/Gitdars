const express=require("express")
const router=express.Router()
const mahsulotDb=require("../model/mahsulot")

router.get("/add" , (req, res)=>{
    res.render("add" , {
        title: "mahsulot qo'shish",
    })
})

router.post("/add" , (req ,res)=>{
    const {name , manufacturer , price , views , comment,img } = req.body
    const db=new mahsulotDb({
         name: name,
         manufacturer:manufacturer,
         price:price,
         views:views,
         comment:comment,
         img:`/img/${img}`
    
    
        
    })
    // res.render("/",{
    //     name:req.body.name,
    //     manufacturer:req.body.manufacturer,
    //     price:req.body.price,
    //     views:req.body.views,
    //     comment:req.body.comment
    
    //    })



    db.save((err)=>{
        console.log(err);
    })
    res.redirect("/")
       
})

module.exports=router