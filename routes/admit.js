const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Students = require('../models/students');
const Courses = require('../models/courses');
const admitRouter = express.Router();

admitRouter.use(bodyParser.json());
admitRouter.route('/')
    .post((req, res, next) => {
        Students.find({
            "name": {
                $regex: `${req.body.student_name}`
            }
        })
        Course.find({
            "name": {
                $regex: `${req.body.course_name}`
            }
        })
            .then((students) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(students);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
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