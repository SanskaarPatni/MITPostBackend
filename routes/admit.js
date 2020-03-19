const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Student = require('../models/students');
const admitRouter = express.Router();

module.exports = admitRouter;