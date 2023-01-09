const { Router } = require("express");
const Users = require("../model/user.js");


const authRouter = Router();

authRouter.post("/users", async(req, res) => {
  const { name, userName, passWord } = req.body;

  const newuser= await new Users({name:name, userName:userName,passWord: passWord})
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
