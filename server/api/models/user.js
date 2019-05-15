const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.Model;

const UserSchema = new Schema({
    account : {
        email:{type:String, require:true},
        password:{type:String, require:true}
    },
    role : {type:String, require: true},
    profile:{
        academic_level_name: {type:String},
        account_number: {type:Number},
        address: {type:String},
        bank_name: {type:String},
        country: {type:String},
        city_name: {type:String},
        country_name: {type:String},
        date_of_birth: {type:String},
        first_name: {type: String, require:true},
        gender_name: {type:String, require:true},
        last_name: {type: String, require:true},
        language_name: {type:String},
        language_user: {type:String},
        nationality_name: {type:String},
        no_passport: {type:Number},
        other_name: {type:String},
        postal_code: {type:String},
        profile_picture: {type:Buffer},
        payment_method: {type: String},
        paypal_email: {type:String},
        phone_code: {type:Number},
        phone_number: {type:Number},
        race_name: {type:String},
        religion_name: {type:String},
    }
})

export default new Model("user", UserSchema);