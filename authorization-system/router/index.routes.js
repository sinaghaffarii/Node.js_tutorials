const {Router} = require('express');
const {AuthRouter} = require("./auth.routes");
const {ProfileRoutes} = require("./profile.routes");
const {checkAuth} = require("../middleware/check-auth");

const router = Router();
router.use('/auth', AuthRouter)
router.use('/user', checkAuth, ProfileRoutes)

module.exports = router