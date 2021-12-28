const HttpException= require('./http.exception');

class PhoneNumberFormatIsInvalidException extends HttpException{
    constructor(phoneNumber){
        super(`Phone number ${phoneNumber} must be a valid number`,400);
    }
}

module.exports = PhoneNumberFormatIsInvalidException;