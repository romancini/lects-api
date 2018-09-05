var mongoose = require('mongoose');

var schema = mongoose.Schema({

    title: {
        type: String, 
        required: true
    },
    description: {
        type: String
    },
    answers: {
        type: Array,
        require: true
    },
    owner: {
        type: String,
        required: true
    }
});

mongoose.model('Lesson', schema);