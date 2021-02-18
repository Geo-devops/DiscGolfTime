const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {type: String, required: true},
    address:{type:String, required: true},
    lat:{type:Number, required: true},
    lng:{type:Number, required: true},
    difficulty:{type:String, required: true}
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;