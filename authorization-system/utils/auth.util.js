const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const jwt = require("jsonwebtoken");

function hashPassword(password) {
    const salt = genSaltSync(10)
    return hashSync(password, salt)
}

function comparePassword(password, hashed) {
    return compareSync(password, hashed);
}

function signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}