var express = require('express');
var jsonServer = require('json-server');

var server = express();

server.use('/api', jsonServer.router('db.json'));

server.listen(3001);