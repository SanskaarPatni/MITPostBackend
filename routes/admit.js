const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const assert = require('assert');

const Students = require('../models/students');
const Courses = require('../models/courses');
const admitRouter = express.Router();

admitRouter.use(bodyParser.json());
admitRouter.route('/')
    /*.post((req, res, next) => {
        let student = Students.find({
            "name": {
                $regex: `${req.body.student_name}`
            }
        }).then(
        let course = Courses.find({
                "name": {
                    $regex: `${req.body.course_name}`
                }
        if (student[0].year < course[0].year) {
            return res.end('Student didnt reach the year yet');
            .then((student) => {
                student.courses_taken.push(course);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(student);
            }, (err) => next(err))
            .catch((err) => next(err));
    })*/
    .get((req, res, next) => {
        res.statusCode = 403;
        res.end('Get operation not supported on /admit');

    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /admit');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Delete operation not supported on /admit');
    });


module.exports = admitRouter;