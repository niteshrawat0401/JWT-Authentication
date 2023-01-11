const Users = require("../model/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Token = require("../model/token.js");
require("dotenv").config();

// Signup
exports.signupUser = async (req, res) => {
  const { name, userName, passWord } = req.body;
  const hashPassword = await bcrypt.hash(passWord, 10);
  const newuser = await new Users({
    name: name,
    userName: userName,
    passWord: hashPassword,
  });
  newuser.save((err, success) => {
    try {
      return res
        .status(201)
        .send({ message: "Sign up Successfully", newuser: success["_doc"] });
    } catch (error) {
      return res.status(500).send({ message: "Something went wrong", err });
    }
  });
};

// Login
exports.loginUser = async (req, res) => {
  const { name, userName, passWord } = req.body;
  let user = await Users.findOne({ userName: userName });
  if (!user) {
    return res.status(400).json({ msg: "Username does not match" });
  }

  try {
    let matchUser = await bcrypt.compare(passWord, user.passWord);
    if (matchUser) {
      const accessToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: "15m",
      }); //secret key combine both make new token
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        userName: user.userName,
      });
    } else {
      return res.status(400).json({ msg: "Password does not match" });
    }
  } catch (err) {
    return res.status(500).json({ msg: "Error while login in user" });
  }
};


// Deleteuser
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await Users.deleteOne({ _id: id });
  try {
    if (user) {
      return res.status(201).send({ msg: "Sucessfully deleted", user });
    }
    return res.status(400).send({ msg: "Something wrong" });
  } catch (error) {
    return res.status(500).send({ msg: "Error occured while deleting" });
  }
};
