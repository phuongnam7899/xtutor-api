const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const StudentModel = new Schema({
    calender:[{
        start_time:{type:String},
        end_time:{type:String},
        tuition:{type:mongoose.Types.ObjectId, ref:"tuition"},
    }],
})

export default new Model("student",StudentModel);