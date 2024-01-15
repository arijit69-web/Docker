const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
res.json({message:'App is Running'})
})

app.listen(3000,()=>{
    console.log("Server is Live")
})