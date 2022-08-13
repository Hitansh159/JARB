var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var logger = require('morgan');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');

var app = express();

// log setup
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(logger('common', {stream: accessLogStream}));

// req body 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cokkie parser
app.use(cookieParser());

// serving static files 
app.use(express.static(path.join(__dirname, 'public')));

// routes to files
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next){
	next(createError(404));
});

app.use(function (err, req, res, next){
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500).json({err: err, msg: err.msg});
});


module.exports = app;
