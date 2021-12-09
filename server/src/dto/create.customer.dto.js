const Joi = require('joi');

const  CreateCustomerDto =  Joi.object({
    FirstName: Joi.string(),
    LastName: Joi.string(),
    Email: Joi.string().email().required(),
    DateOfBirth: Joi.string(),
    PhoneNumber: Joi.string().min(10).required(),
    BankAccountNumber: Joi.number().required()
 });

 module.exports = CreateCustomerDto;