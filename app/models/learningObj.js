var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({

	title: {
		type: String,
		required: true
    },
    media_type: {
		type: String
    },
	media_url: {
		type: String
	},
    answer_type: {
        type: String,
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

mongoose.model('LearningObj', schema);