var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Ei parametrejä
app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

//Yksi parametri
app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

//Kaksi parametriä (muutin tässä example2:n exampleksi että testaus helpompaa)
app.get('/example/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

//Post
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = app;
