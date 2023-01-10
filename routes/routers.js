const { Router } = require("express");
const controller = require("../controller/users.js");
// const { authenticateToken } = require("../controller/jwt");
const routes = Router();

routes.post("/signup", controller.signupUser);
routes.post("/login", controller.loginUser);

module.exports = routes;

// authRouter.post("/create", authenticateToken, createPost )
