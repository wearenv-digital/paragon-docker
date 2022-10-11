var mysql = require('mysql');
const mariadb = require('mariadb');

const mariaPool = () => {
	const pool = mariadb.createPool({
		host: 'mariadb',
		user: 'root',
		password: 'password',
		connectionLimit: 5
	});
};
