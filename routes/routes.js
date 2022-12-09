const router = require("express").Router();
const film = require("../controllers/film.controllers");

router.post("/insert-film", film.insert);  

module.exports = router;
