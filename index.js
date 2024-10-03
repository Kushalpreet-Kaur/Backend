require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000


app.get('/' , (req,res)=>
{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>
{
    res.send('kushaldotcom')
})

app.get('/login' , (req,res)=>
{
    res.send('<h1>Please login </h1>')
})

app.get('/youtube',(req,res)=>
{
    res.send('<h2>Youtube!!!</h2>')
})

app.get('/github',(req,res)=>
{
    res.json(githubData)
})
app.listen(port,()=>
{
    console.log(`Example app listening on port ${port}`);
    
})

