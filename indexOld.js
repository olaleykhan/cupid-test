const express = require('express');
const dotenv = require('dotenv');


const data = require('./data/dummy');

const getData = require('./controller/homeController');




// initialize env
dotenv.config();




const app = express()

const HOST = 'localhost'


app.get('/',(req,res)=>{
    res.send('<h1> cupid test <p> navigate to /dummy-data to find our dummy data</p><h1>');
});



app.get('/dummy-data',(req,res)=>{
    res.status(200).json(data)
})

app.get('/test',(req,res)=>{
    res.send(getData)
})


const PORT = process.env.port || 5050;

app.listen(PORT, console.log(`api running at ${HOST}: ${PORT}`, data))