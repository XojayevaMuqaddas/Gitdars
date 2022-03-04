const express = require("express")
const router = express.Router()

router.get("/user" , (req , res)=>{
    res.send("User sahifa")
})

router.post("/user" , (req, res) =>{
    res.send("User sahifa post metodida")
})

module.exports = router