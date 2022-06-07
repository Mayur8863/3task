const Register = require('../models/registerModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {registerValidation} = require("../validation");

module.exports = {
    get: (req,res)=>{
        res.send("Hello get")
    },
    post: (req,res)=>{
        // data validation
        const {error} = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // check if email exist
        Register.findOne({emailId: req.body.emailId})
        .then(result =>{
            if(result){
                return res.status(400).send("Email already exists");
            }
        })

        // create a new user
        const register = new Register({
            name: req.body.name,
            emailId : req.body.emailId,
            phoneNo : req.body.phoneNo,
            password: req.body.password,
        })
        register.save().then(result=>{
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                Register.updateOne({emailId:result.emailId},{$set : {password:hash}}).then(resp=>{
                    console.log(resp);
                })
            })
            res.send(`Sucess ${result}`);
        });
    }
}