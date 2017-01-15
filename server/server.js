var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
//paramétrage de la connection à la BDD
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'bookshop'
});
connection.connect();
app.use('/', express.static(path.resolve(__dirname, '../client/')));

app.listen(8080)
console.log(path.resolve(__dirname, '../client/'))
console.log(__dirname)
console.log('listening on port 8080')

