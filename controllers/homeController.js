const data = require('../data/dummy');


 class HomeContoller {

    static getData(req , res){
            res.send(data);
    }

    static getHome(req,res){
        res.send("got to /data to expose the people's data")
    }
 }

 module.exports= HomeContoller