const Joi = require('joi');
const HttpException = require('../exceptions/http.exception')

/*
It takes a DTO and validate it by Joi library.
If you want to change the validation library,you must change here and DTO objects
*/
 function ValidationMiddleware(schema){
    return  (req, res, next) => {
    const options = {
        abortEarly: false
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        //return error with the base exception that we defined in ./exceptions
        console.log('validation errors: ',error.details.map(x => x.message).join(', '));
        next(new HttpException(error.details.map(x => x.message).join(', '),400));
    } else {
        req.body = value;
        next();
    }
}
}
module.exports = ValidationMiddleware;
