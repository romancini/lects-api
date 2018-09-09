var mongoose = require('mongoose');

var schema = mongoose.Schema({

    title: {
        type: String, 
        required: true
    },
    description: {
        type: String
    },
    learningObjs: {
        type: Array,
        require: true
    },
    owner: {
        type: String,
        required: true
    }
});

mongoose.model('Lesson', schema);