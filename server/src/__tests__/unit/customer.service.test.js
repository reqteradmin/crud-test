const { describe } = require("../../dto/create.customer.dto");
const PhoneNumberFormatIsInvalidException = require("../../exceptions/PhoneNumberFormatIsInvalid.exception");
const CustomerCommand = require("../../services/command/customer.command");

describe('Customer service',()=>{
    describe('When creating a customer',()=>{
        const customerData={
            FirstName :'Amin',
            LastName: 'Azimi',
            Email : 'amin@amin.com',
            DateOfBirth: '1990/12/12',
            PhoneNumber : '1111111111',
            BankAccountNumber : '004518874'
        }
        describe('If the phone number is invalid',()=>{
            it('Sholud throw an error',async() =>{
                const customerCommand = new CustomerCommand();
                await expect(customerCommand.Create(customerData))
                    .rejects.toMatchObject(new PhoneNumberFormatIsInvalidException(customerData.PhoneNumber));
            })
        })
    })
})