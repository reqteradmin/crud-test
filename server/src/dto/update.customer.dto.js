const Joi = require('joi');

//DTO for updating a customer with pre validation
const  UpdateCustomerDto =  Joi.object({
    FirstName: Joi.string(),
    LastName: Joi.string(),
    Email: Joi.string().email().required(),
    DateOfBirth: Joi.string(),
    PhoneNumber: Joi.string(),
    BankAccountNumber: Joi.number()
 });

 module.exports = UpdateCustomerDto;