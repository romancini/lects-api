var api = {}

api.list = function(req, res) {

    var answer_types = [
    	{ _id: 1, name: 'Mutuamente Exclusiva' }, 
        { _id: 2, name: 'Dissertativa' }, 
        { _id: 3, name: 'Múltiplas Respostas' }
    ];

    res.json(answer_types)

};

module.exports = api;