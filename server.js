//Express
var express = require('express');
var app = express();
var session = require('express-session')

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Static Folder
app.use(express.static(__dirname + '/client/'));

//Mongoose
require('./server/config/mongoose');

//Routes
require('./server/config/routes')(app);

//Port Location
app.listen(3500, function(){
	console.log('Server listening on port: 3500')
})