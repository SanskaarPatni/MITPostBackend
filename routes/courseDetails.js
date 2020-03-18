const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Courses = require('../models/courses');

const courseRouter = express.Router();
courseRouter.use(bodyParser.json());

courseRouter.route('/')
    .get((req, res, next) => {
        Courses.find({})
            .then((course) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /courseDetails');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /courseDetails');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Delete operation not supported on /courseDetails');
    });