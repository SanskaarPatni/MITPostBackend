var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var addStudent = require('./routes/addStudent');
var addCourse = require('./routes/addCourse');
var checkCourse = require('./routes/checkCourse');
var checkStudent = require('./routes/checkStudent');
var studentDetails = require('./routes/studentDetails');
var courseDetails = require('./routes/courseDetails');
var admit = require('./routes/admit');


const mongoose = require('mongoose');

const Students = require('./models/students');
const Courses = require('./models/courses');

const url = 'mongodb://localhost:27017/studCourServer';
const MONGODB_URI = 'mongodb+srv://SanskaarPatni:#Sa12ns08000@cluster0-qbopz.mongodb.net/test?retryWrites=true&w=majority';
const connect = mongoose.connect(MONGODB_URI || url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

connect.then((db) => {
  console.log('Connected correctly  to Server');
}, (err) => { console.log(err) });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/checkCourse', checkCourse);
app.use('/checkStudent', checkStudent);

app.use('/addCourse', addCourse);
app.use('/addStudent', addStudent);

app.use('/admit', admit);

app.use('/studentDetails', studentDetails);
app.use('/courseDetails', courseDetails);

app.use(express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
