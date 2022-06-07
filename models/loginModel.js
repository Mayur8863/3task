const mongoose= require("mongoose");

const loginSchema = new mongoose.Schema({
    emailId : {
        type: String,
        required:true,
        min:6,
        max:255,
    },
    password: {
        type: String,
        required:true,
        min:6,
        max:255,
    },
})

module.exports = mongoose.model('loginDetail',loginSchema);