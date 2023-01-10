const { Router } = require("express");
const controller = require("../controller/users.js");
const { authenticateToken } = require("../controller/jwt");
const authRouter = Router();

authRouter.post("/signup", controller.signupUser);
authRouter.post("/login", controller.loginUser);

// authRouter.post("/create", authenticateToken, createPost )

module.exports = authRouter;
