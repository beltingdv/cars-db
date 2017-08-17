const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MakeYear = new Schema({
    make: String,
    year: Number
});

module.exports = mongoose.model('MakeYear', MakeYear);