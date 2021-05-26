const express = require('express');

const HomeContoller = require('../controllers/homeController')


const Route = express.Router();


Route.get('/data', HomeContoller.getData)

Route.get('/', HomeContoller.getHome)


module.exports= Route;