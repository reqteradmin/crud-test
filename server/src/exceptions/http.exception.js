
//Top level exception for application.All other exceptions must inherit from this
class HttpException extends Error{
    message;
    statusCode;
    constructor(message,code){
        super(message);
        this.message = message;
        this.statusCode = code;
    }

}

module.exports = HttpException;