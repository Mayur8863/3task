const Joi = require('joi');

const registerValidation = data =>{
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        emailId: Joi.string()
            .min(6)
            .required()
            .email(),
        phoneNo: Joi.string()
            .min(10)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });
    console.log(data);
    const err = schema.validate(data);
    return err;
}

module.exports.registerValidation = registerValidation;