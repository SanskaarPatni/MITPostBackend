const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Students = require('../models/students');


const checkStudentRouter = express.Router();
checkStudentRouter.use(bodyParser.json());
checkStudentRouter.route('/')
    .get((req, res, next) => {
        Students.find({
            "name": {
                $regex: `${req.body.name}`
            }
        })
            .then((students) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(students);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /checkStudent');

    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /checkStudent');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Delete operation not supported on /checkStudent');
    });

module.exports = checkStudentRouter;