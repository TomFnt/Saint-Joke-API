
//instance de express
const express = require("express");
const router = express.Router();
const controller =require ("../Controllers/index")

router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//retourne la liste de tout les joueurs (made in Tom)
router.get('/findAllJokes', controller.findAllJokes);

// cherche un joueur selon un param équipe (made in Tom)
router.get('/findJoke/:id', controller.findJoke);

//retourne un joueur au hasard (made in Tom)
router.get('/randomJoke',controller.randomJoke );


module.exports = router
