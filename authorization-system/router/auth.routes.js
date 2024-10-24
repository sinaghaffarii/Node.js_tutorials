const {Router} = require('express');
const {register, login} = require("../controller/auth.controller");

const router = Router();
router.use("/register", register)
router.use("/login", login)

module.exports = {
    AuthRouter: router
}