const express = require('express');
const dotenv = require('dotenv');


const data = require('./data/dummy');

// initialize env
dotenv.config();




const app = express()

const HOST = 'localhost'


app.get('/',(req,res)=>{
    res.send('<h1> Hello and welcome to test api. navigate to /dummy-data to find our dummy data<h1>')
});

app.get('/dummy-data',(req,res)=>{
    res.status(200).json(data)
})

const PORT = process.env.port || 5050;

app.listen(PORT, console.log(`api running at ${HOST}: ${PORT}`, data))