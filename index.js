const express = require('express');

const dotenv = require('dotenv');

// import our route file
const route = require('./route/route')


// initialize express
const app = express();

app.use(route);

// Create our handlers

// app.get('/',(req,res)=>{
    
//     res.send('<h1> Welcome on board sir</h1>')
// })

// initialize env
dotenv.config();

const PORT = process.env.port || 5000;

app.listen(PORT, ()=>console.log(`running on port ${PORT}`))
