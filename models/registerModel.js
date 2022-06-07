const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name    : {
        type: String,
        required:true,
        min:6,
        max:255,
    },
    emailId : {
        type: String,
        required:true,
        min:6,
        max:255,
    },
    phoneNo : {
        type: Number,
        required:true,
    },
    password: {
        type: String,
        required:true,
        min:6,
        max:255,
    },
    address : String,
})

module.exports = mongoose.model('registerDetail',registerSchema);