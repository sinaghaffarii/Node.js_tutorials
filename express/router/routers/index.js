const {Router} = require("express");
const userRouter = require("./user.router");
const blogRouter = require("./blog.router");
const commentRouter = require("./comment.router");
const router = Router();
function setTime(req, res, next) {
    req.time = Date.now();
    next();
}
router.use(setTime)
// وقتی setTime رو به این صورت اینجا فراخوانی میکنیم دیگه نیازی به افزودن داخل خود Use Router نیستش!!
router.use("/user", userRouter)
router.use("/blog", blogRouter)
router.use("/comment", commentRouter)
module.exports = router