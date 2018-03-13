var mongoose = require('mongoose');
var jwt  = require('jsonwebtoken'); 

module.exports = function(app) {

     var api = {};
     var model = mongoose.model('User');

     api.authenticate = function(req, res) {
         model.findOne({
             login: req.body.login,
             password: req.body.password
         })
         .then(function(user) {
             console.log(user.login + ' requesting access');
             if (!user) {
                 console.log('Login/senha inválidos');
                 res.sendStatus(401);
             } else {
                 var token = jwt.sign({login: user.login}, app.get('secret'), {
                     expiresIn: 84600 //24h
                 });
                 console.log(user.login + ' authenticated');
                 res.set('x-access-token', token); 
                 res.end(); 
             }
         });
     };

    api.verifyToken = function(req, res, next) {

         var token = req.headers['x-access-token'];

         if (token) {
             console.log('Token recieved');
             jwt.verify(token, app.get('secret'), function(err, decoded) {
                 if (err) {
                     console.log('Token rejected');
                     return res.sendStatus(401);
                 } else {
                     console.log('Token accepted')
                     req.user = decoded;    
                     next();
                  }
            });
        } else {
            console.log('Token check failed');
            return res.sendStatus(401);
          }
    }

    return api;
};