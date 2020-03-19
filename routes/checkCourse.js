const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Courses = require('../models/courses');


const checkCoursesRouter = express.Router();
checkCoursesRouter.use(bodyParser.json());
checkCoursesRouter.route('/')
    .get((req, res, next) => {
        Courses.find({
            "name": {
                $regex: `${req.body.name}`
            }
        })
            .then((courses) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(courses);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /checkCourse');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /checkCourse');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Delete operation not supported on /checkCourse');
    });

module.exports = checkCoursesRouter;