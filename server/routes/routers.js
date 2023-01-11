const { Router } = require("express");
const controller = require("../controller/users.js");
// const { authenticateToken } = require("../controller/jwt");
const routes = Router();

routes.post("/signup", controller.signupUser);
routes.post("/login", controller.loginUser);
routes.get("/user/:id", controller.getUser);
routes.patch("/edit/:id", controller.editUser);
routes.delete("/del/:id", controller.deleteUser);

module.exports = routes;

// authRouter.post("/create", authenticateToken, createPost )
