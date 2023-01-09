const {Router}= require("express");
const Users= require("../model/user.js");

const authRouter= Router();

authRouter.get("/users", (req,res)=>{
    res.send("namastai")
})

module.exports= authRouter;