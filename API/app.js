var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var logger = require('morgan');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view Engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(logger('common', {stream: accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next){
	next(createError(404));
});

app.use(function (err, req, res, next){
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	res.status(err.status || 500);
	res.render('error');
});


module.exports = app;
