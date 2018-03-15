var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

if (!process.env.NODE_ENV){
    var secret = 'developing';
}
else {
    var secret = process.env.SECRET_JWT;
}
app.set('secret', secret);
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

module.exports = app;
