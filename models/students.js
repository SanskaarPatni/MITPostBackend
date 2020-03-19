const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const takesSchema = new Schema({
    course_id: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
}
);

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    reg_num: {
        type: String,
        required: true,
        unique: true
    },
    courses_taken: [takesSchema]
}, {
    timestamps: true
});



var Students = mongoose.model('Student', studentSchema);
module.exports = Students;
