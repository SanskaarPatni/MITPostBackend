const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prereqSchema = new Schema({
    prev_id: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    },
    num_studs: {
        type: Number,
        required: true
    },
    prereqs: [prereqSchema]
}, {
    timestamps: true
});



var Courses = mongoose.model('Course', courseSchema);
module.exports = Courses;
