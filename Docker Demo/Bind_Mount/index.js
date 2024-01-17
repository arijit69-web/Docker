const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express()

// Changes from Container by Arijit

app.get('/home',(req,res)=>{
res.json({message:'App is Running'})
})

app.get('/about',(req,res)=>{
    res.json({message:'Arijit Sarkar'})
})

app.get('/contact',(req,res)=>{
    res.json({message:'arijitsrkr13@gmail.com'})
})

app.get('/check',(req,res)=>{
    res.json({message:'Working Fine'})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Live @ PORT: ${process.env.PORT}`)
})
