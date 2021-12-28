const CustomerModel = require('./models/customer.model');

//all method related to database for Customer  
class CustomerRepository{

    //check with that email is there any customet in db
    async isExistEmail(newEmail){
        const emailExist = await CustomerModel.findOne({email:newEmail});
        console.log('new email: ',newEmail,emailExist);
        return emailExist;
    }
    async Create(creatCustomerDto){
        return await  CustomerModel.create({
            firstName: creatCustomerDto.FirstName,
            lastName: creatCustomerDto.LastName,
            dateOfBirth: creatCustomerDto.DateOfBirth,
            phoneNumber: creatCustomerDto.PhoneNumber,
            email: creatCustomerDto.Email,
            bankAccountNumber: creatCustomerDto.BankAccountNumber
        });
    }
}

module.exports = CustomerRepository;