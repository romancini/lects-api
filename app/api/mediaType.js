var api = {}

api.list = function(req, res) {

    var media_types = [
    	{ _id: 1, name: 'Áudio' }, 
        { _id: 2, name: 'Vídeo' }, 
        { _id: 3, name: 'Imagem' },
        { _id: 4, name: 'Outros' },
    ];

    res.json(media_types)

};

module.exports = api;