const express=require("express")
const router=express.Router()
const mahsulotDb=require("../model/mahsulot")

router.get("/", (req ,res)=>{
    mahsulotDb.find({ } , (err , data )=>{
        res.render("index", {
            title:"Bosh sahifa",
            data:data

        })
    })
})

router.get("/", (req, res)=>{
    res.render("index")
})
router.get("/add:id" , (req, res)=>{
    mahsulotDb.findById(req.params.id , (err , data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("add" ,{
                title:"update",
                update:"Ma'hsulotni o'zgartirish",
                datas:data
            })
        }
    })
})
router.post("/add:id" ,(req ,res)=>
{
    const upDateDb ={}
    upDateDb.name=req.body.name
    upDateDb.manufacturer=req.body.manufacturer
    upDateDb.price=req.body.price
    upDateDb.views=req.body.views
    upDateDb.comment=req.body.comment
    upDateId={_id:req.params.id}

    mahsulotDb.updateOne(upDateId , upDateDb , (err)=>{
        if (err)  throw  err
        else{
            res.redirect("/")
        }
    })


})
    router.get("/add/del:id" ,(req, res)=>
    { mahsulotDb.findByIdAndDelete(req.params.id , (err)=>{
        if (err){
        console.log(err);
        }
     else{
        res.redirect("/")
     }
    })
    })




module.exports = router