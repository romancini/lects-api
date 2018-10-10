var mongoose = require('mongoose');

var schema = mongoose.Schema({

    login: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
});

mongoose.model('User', schema);