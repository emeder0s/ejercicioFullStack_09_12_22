const FilmModel = require("../models/filmModel");

const film = {
    insert: async (req,res) =>{
        try {
            const { title, category, director } = req.body;
            let info = { title, category, director };
            const insertFilm= await FilmModel.create(info);
            res.json(true);
        }catch (ValidationError) {
            res.json(false);
        }
    } 
}

module.exports = film;
