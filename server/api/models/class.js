const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const ClassSchema = new Schema({
    tutor_id:{type:mongoose.Types.ObjectId, ref:"tutor"},
    student_id: {type: mongoose.Types.ObjectId, ref:"student"},
    subject:{type:String},
    sessions:[{
        start: {type:String},
        end :{type: String},
        note:{type: String}
    }]
})

export default new Model("class",ClassSchema);