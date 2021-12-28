const HttpException= require('./http.exception');

class CustomerWithEmailIsAlreadyTakenException extends HttpException{
    constructor(email){
        super(`Cutomer with email ${email} already exist`,400);
    }
}

module.exports = CustomerWithEmailIsAlreadyTakenException;