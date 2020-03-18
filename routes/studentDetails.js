const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Students = require('../models/students');

const studentDetailsRouter = express.Router();
studentDetailsRouter.use(bodyParser.json());

studentDetailsRouter.route('/')
    .get((req, res, next) => {
        Students.find({})
            .then((student) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(student);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /studentDetails');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /studentDetails');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Delete operation not supported on /studentDetails');
    });

module.exports = studentDetailsRouter;