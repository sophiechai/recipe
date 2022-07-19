var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');
var cors = require('cors');

const mongoose = require('mongoose');
const queries = require('./queries');
const generateData = require('./generate-data');

main().catch(err => console.log(err));

async function main() {
	console.log("connecting :)");
	await mongoose.connect("mongodb+srv://" + process.env.ATLAS_USERNAME + ":" + process.env.ATLAS_PASSWORD + "@" + process.env.DB_CLUSTER + ".mongodb.net/?retryWrites=true&w=majority",
		{dbName: process.env.DB_NAME});
	// await mongoose.connect('mongodb://localhost:27017/sandbox');

	// await generateData();
}

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);

module.exports = app;
