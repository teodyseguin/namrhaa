'use strict';

// Dependency modules
var express = require('express');
var path = require('path');

// App declare
var app = express();

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/templates/main/index.html'));
});

app.get('/login', function(request, response) {
  response.sendFile(path.join(__dirname + '/templates/login/login-page.html'));
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Namrhaa is working and is listening at http://%s:%s', host, port);
});
