const CreateCustomerDto = require("../dto/create.customer.dto");
const CustomerCommand = require("../services/command/customer.command");

//This class is reponsible for controlling API interaction for Customer
class CustomerController {
    constructor() {

    }
    //Creating customer. Req parameter must have definition accordind to dto/create.customer.dto
    async Create(req, res, next) {
        try {
            const createCustomerDto = req.body;
            const newCustomer =await  new CustomerCommand().Create(createCustomerDto);
            res.send({
                id: newCustomer._Id
            });
        }
        catch (err) {
            next(err);
        }
    }

    //Returns all cutomers that exist in storage
    GetAll(req, res, next) {
        try{
        res.send('Get');
        }
        catch(err){
            next(err);
        }
    }
}

module.exports = CustomerController;

