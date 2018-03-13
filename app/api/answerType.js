var api = {}

api.list = function(req, res) {

    var answer_types = [
    	{ _id: 1, name: 'Múltipla escolha' }, 
        { _id: 2, name: 'Dissertativa' }, 
        { _id: 3, name: 'Múltipla escolha (Certo/Errado)' }
    ];

    res.json(answer_types)

};

module.exports = api;