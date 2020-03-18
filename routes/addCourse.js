const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Courses = require('../models/courses');


const addCourse = express.Router();

addCourse.use(bodyParser.json());

addCourse.route('/')
    .get((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /addCourse');
    })
    .post((req, res, next) => {
        Courses.create(req.body)
            .then((course) => {
                console.log('Course created', course);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /addCourse');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /addCourse');
    });

module.exports = addCourse;