const express = require('express');
const HttpException = require('../exceptions/http.exception');

//handilg all errors in application
const errorMiddleware = (err,req,res,next) => 
{
    //http status code
    console.log('error is ',err);
    const status = (err.statusCode?err.statusCode:500);
    const message = (err.message?err.message:'Error occured');
    res.status(status).send({status,message});
}

module.exports = errorMiddleware;