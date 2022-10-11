const express = require('express');
const bodyParser = require('body-parser');
const util = require('node:util');
var mariadbConf = require('./controllers').mariaPool;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Retrieve rows from the various databases depending on
// product code

// gets the list of features from cam_features

const getAll = (req, res) => {
	const sqlQuery = 'SELECT * FROM cam_features';

	database.query(sqlQuery, (err, result) => {
		if (err) throw err;

		res.json({ 'cam_features': result });
		res.send({ 'cam_features': result });
	});
};

async function getFeatures(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT * FROM cam_features WHERE product_code = ?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
		// console.log(result);
	});
	return result;
}

// This gets the row from cam_info

async function getInfo(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT * FROM cam_info WHERE product_code = ?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
		// console.log(result);
	});
	return result;
}

// This gets the row from cam_specs

async function getCamSpecs(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT * FROM cam_specs WHERE product_code = ?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
		// console.log(result);
	});
	return result;
}

// This gets the row from audio_video

async function getAudioVideo(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT * FROM audio_video WHERE product_code = ?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
		// console.log(result);
	});
	return result;
}

// This gets the row from automation

async function getAutomation(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT * FROM automation WHERE product_code = ?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
		// console.log(result);
	});
	return result;
}

// This gets the row from elctrical_physical

async function getElecPhys(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT * FROM electrical_physical WHERE product_code = ?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
		// console.log(result);
	});
	return result;
}

async function getDesc(req) {
	var connection = await util.promisify(mariadbConf.getConnection.bind(mariadbConf))();
	console.log(`connected as id ${connection.threadId}`);
	var rows = await util.promisify(connection.query.bind(connection))(
		'SELECT description from cam_info WHERE product_code =?',
		[req.params.product_code]
	);
	connection.release();
	var result;
	Object.keys(rows).forEach(function (key) {
		result = rows[key];
	});
	return result;
}

module.exports = {
	getInfo,
	getFeatures,
	getCamSpecs,
	getAudioVideo,
	getAutomation,
	getElecPhys,
	getDesc,
	getAll
};

