const Schema = require("validate")

const registerSchema = new Schema({
    username: {
        type: String,
        required: true,
        length: {min: 4, max: 20},
    },
    email: {
        type: String,
        required: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
    },
    role: {
        type: String,
        enum: ["user", "admin", "teacher"],
    }
})

module.exports = {
    registerSchema
}