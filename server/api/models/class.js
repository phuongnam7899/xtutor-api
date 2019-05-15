const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const ClassSchema = new Schema({
    tutor_id:{type:mongoose.Types.ObjectId, ref:"tutor"},
    student_id: {type: mongoose.Types.ObjectId, ref:"student"},
    start_time: {type:String},
    end_time:{type: String},
    subject:{type:String}
})

export default new Model("class",ClassSchema);