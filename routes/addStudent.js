const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Students = require('../models/students');


const addStudent = express.Router();

addStudent.use(bodyParser.json());

addStudent.route('/')
    .get((req, res, next) => {
        res.statusCode = 403;
        res.end('Get operation not supported on /addStudent');
    })
    .post((req, res, next) => {
        Students.create(req.body)
            .then((student) => {
                console.log('Student created', student);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(student);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /addStudent');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Delete operation not supported on /addStudent');
    });

module.exports = addStudent;