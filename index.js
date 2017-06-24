var fs = require('fs');
var http = require('http');
var https = require('https');
var deviceKey  = fs.readFileSync('sslcert/device.key', 'utf8');
var deviceCertificate = fs.readFileSync('sslcert/device.crt', 'utf8');

var credentials = {key: deviceKey, cert: deviceCertificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);