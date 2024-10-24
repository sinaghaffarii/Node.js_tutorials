const {verifyToken} = require("../utils/auth.util");
const {userModel} = require("../model/user.model");


async function checkAuth(req, res, next) {
    try {
        const authorization = req?.headers['authorization'];
        const [bearer, token] = authorization.split(' ');
        if (bearer && bearer.toLowerCase() === "bearer") {
            if (token) {
                const verifyResult = verifyToken(token)
                const user = await userModel.findOne({email: verifyResult.email});
                req.isAuthenticated = !!user;
                if (!user) throw {status: 401, message: "not found user account please login again"}
                req.user = {
                    fullName: user.fullName,
                    email: user.email
                }
                return next()
            }
            return res.status(401).send('Not authorized');
        }
        return res.status(401).send('Not authorized');
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkAuth
}