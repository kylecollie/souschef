var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var index = require('./routes/index');
var recipes = require('./routes/recipes');

var port = 3000;

var app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder (ng2 in client folder)
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', recipes);
app.use(favicon(path.join(__dirname,'client', 'app', 'assets', 'images','favicon-32x32.png')));

// serve index.html for all remaining routes, in order to leave routing up to angular
    app.all("/*", function(req, res, next) {
        res.sendFile("index.html", { root: __dirname + "/views" });
    });


app.listen(port, function () {
    console.log('Server started on port ' + port);
});
