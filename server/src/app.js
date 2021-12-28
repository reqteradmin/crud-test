const express = require('express');
const customerRouter = require('./routes/customer.route');
const errorMiddleware = require('./middleware/error.middleware');
const mongoose = require("mongoose");
var cors = require('cors');

class App{
    constructor(){
        this.server = express();
        this.initializeMiddlewares();
        this.initializeDatabase();
        this.initializeRouters();
        this.initializeErrorhandling();
    }

    //All middlwares that must be applied at first must be called here
    initializeMiddlewares()
    {
        this.server.use(express.json());
        this.server.use(cors());
    }

    //All main routes of api must be list here
    initializeRouters()
    {
        this.server.use('/customer',customerRouter)
    }


    /*
        Prepare connection to database with initialize connection string.
        Change connection string to your connection string.
    */
    async initializeDatabase(){

        await mongoose.connect("mongodb://root:123456@db:27017/crudDb?authSource=admin",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connection status : ',mongoose.connection.readyState);
    }

    //Error handling middleware will be called here.It must called last.
    initializeErrorhandling(){
        this.server.use(errorMiddleware);
    }

}

module.exports = new App().server;