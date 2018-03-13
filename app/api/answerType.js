var api = {}

api.list = function(req, res) {

    var answer_types = [
    	{ _id: 1, nome: 'Múltipla escolha' }, 
        { _id: 2, nome: 'Dissertativa' }, 
        { _id: 3, nome: 'Múltipla escolha (Certo/Errado)' }
    ];

    res.json(answer_types)

};

module.exports = api;