const mongoose = require('mongoose');

//for phone number we assume all phonenumbers are from Sweden.
//For international format is better to add a country code field 
const CustomerSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    dateOfBirth: Date,
    phoneNumber: {type :Number,required:true},
    email:{type :String ,required:true},
    bankAccountNumber : {type :String ,required:true}
});

module.exports = mongoose.model("Customer",CustomerSchema);