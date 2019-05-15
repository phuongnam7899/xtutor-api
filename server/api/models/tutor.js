const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const TutorSchema = new Schema({
        user_id:{type:mongoose.Types.ObjectId, ref:"user", require:true},
        reference:{
            about_me:{type:String},
            major:{type:String},
            institute:{type:String},
            certificate:[String]
        },
        working_experience:{
            year: {type:Number},
            experience:[String]
        },
        teaching_subject:[{
            fee_per_hour: {type:Number},
            fee_commitions: {type:Number},
            fee_earn:{type:Number},
            note:[String],
            country:{type:String},
            academic_level:{type:String},
            academic_grade:{type:String},
            course:[String],
        }],
        free_calender:[{
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