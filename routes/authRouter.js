const { Router } = require("express");
const Users = require("../model/user.js");
const bcrypt= require("bcrypt");

const authRouter = Router();

authRouter.post("/users", async(req, res) => {
  const { name, userName, passWord } = req.body;
  const hashPassword=  await bcrypt.hash(passWord, 10);
  const newuser= await new Users({name:name, userName:userName,passWord: hashPassword})
  newuser.save((err, success) => {
    try {
      return res
        .status(201)
        .send({ message: "Sign up Successfully", newuser: success["_doc"] });
    } catch (error) {
      return res.status(500).send({ message: "Something wen wrong", err });
    }
  });
});

module.exports = authRouter;
