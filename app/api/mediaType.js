var api = {}

api.list = function(req, res) {

    var media_types = [
    	{ _id: 1, nome: 'Áudio' }, 
        { _id: 2, nome: 'Vídeo' }, 
        { _id: 3, nome: 'Imagem' }
    ];

    res.json(media_types)

};

module.exports = api;