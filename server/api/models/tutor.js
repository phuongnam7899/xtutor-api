const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const TutorSchema = new Schema({
        user_id:{type:mongoose.Types.ObjectId, ref:"user", require:true},
        reference:{
            about_me:{type:String},
            major:[String],
            institute:[String],
            certificate:[String]
        },
        working_experience:[{
            year: {type:Number},
<<<<<<< HEAD
            experience:{type:String}
=======
            experience: {type: String}
>>>>>>> 7c4b5d9a54bbee2c36e653d2f4b6b13f0d16a002
        }],
        teaching_subject:[{
            academic_level:{type:String},
            academic_grade:{type:String},
<<<<<<< HEAD
            subject:{type:String},
            hourly_rate:{type:Number}
=======
            subject: {type: String},
            hourly_rate: {type: Number}
>>>>>>> 7c4b5d9a54bbee2c36e653d2f4b6b13f0d16a002
        }],
        free_calendar:[{
            start_time:{type:String},
            end_time:{type:String}, 
        }],
        feedback: [{
            user_id:{type:mongoose.Types.ObjectId, ref:"user"},
            class_id:{type:mongoose.Types.ObjectId, ref:"class"},
            rating:{type:Number},
            comment:{type:String},
            report:{type:String},
            time: {type:String}
        }]
})
export default new Model("tutor",TutorSchema);