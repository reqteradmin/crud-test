const Joi = require('joi');

//DTO for creating customer with pre validation
const  CreateCustomerDto =  Joi.object({
    FirstName: Joi.string().empty(''),
    LastName: Joi.string().empty(''),
    Email: Joi.string().email().required(),
    DateOfBirth: Joi.string().empty(''),
    PhoneNumber: Joi.string().min(10).required(),
    BankAccountNumber: Joi.string().required()
 });

 module.exports = CreateCustomerDto;