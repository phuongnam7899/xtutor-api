const mongoose = require('mongoose');
const Model = mongoose.model;
const Schema = mongoose.Schema;

const DisabledToken = new Schema({
    disabled_token : {type: String}
});

export default new Model('disabled_token',DisabledToken);
