const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const PhoneNumberFormatIsInvalidException = require('../../exceptions/PhoneNumberFormatIsInvalid.exception');
const CustomerWithEmailIsAlreadyTakenException = require('../../exceptions/CustomerWithEmailIsAlreadyTaken.exception');
const CustomerRepository = require('../../repositories/customer.repository');

    //Business logic and validation for Customer will be defined here
class CustomerCommand{

    async Create(createCustomerDto){
        //validation phone number to be valid mobile number using google lib
        //Default country is Sweden,If you wanto to change country you must pass country code as CDLR standard
        const number = phoneUtil.parseAndKeepRawInput(createCustomerDto.PhoneNumber.toString(), 'SE');
        console.log(phoneUtil.isValidNumberForRegion(number, 'SE'));
        if(!phoneUtil.isValidNumberForRegion(number, 'SE') ){
            throw new PhoneNumberFormatIsInvalidException(createCustomerDto.PhoneNumber);
        }
        const customerRepository=new CustomerRepository();
        const isExit = await customerRepository.isExistEmail(createCustomerDto.Email);
        if(isExit)
            throw new CustomerWithEmailIsAlreadyTakenException(createCustomerDto.Email);
        const newCustomer = await customerRepository.Create(createCustomerDto);
        return newCustomer;
    }
}

module.exports = CustomerCommand;