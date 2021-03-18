var mysql = require('mysql');
var connect = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    databsae : 'example'
});

connect.connect();