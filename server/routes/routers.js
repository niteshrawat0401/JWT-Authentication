const { Router } = require("express");
const controller = require("../controller/users.js");
// const { authenticateToken } = require("../controller/jwt");
const routes = Router();

routes.post("/signup", controller.signupUser);
routes.post("/login", controller.loginUser);
routes.get("/user", controller.getUser);
routes.patch("/edit/:id", controller.editUser);
routes.delete("/delete/:id", controller.deleteUser);

module.exports = routes;
