const data = require("../DB/data");

const controller = {
    findAllJokes : (req, res)=> {
        res.json({data});
    },
    findJoke: (req, res)=> {
        const id = req.params.id;
        const result = data.filter( joke => joke.id == id);

        if (result.length == 0 ){
            res.json({message : " Cette blague n'existe pas "});
        }
        else{
            res.json({result});
        }
    },
    randomJoke : (req, res) =>{
        const numMax =data.length;
        const number = getRandomInt(numMax);
        const result = data[number];

        res.json({result});
    },


//(made in Tom)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
module.exports =  controller

