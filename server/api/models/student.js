const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const StudentModel = new Schema({
    user_id : {type:mongoose.Types.ObjectId, ref:"user"},
    calender :[{type:mongoose.Types.ObjectId, ref:"class"}]
})

export default new Model("student",StudentModel);