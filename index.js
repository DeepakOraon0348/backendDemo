require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('hiteshdotCom')
})

app.get('/logIn',(req,res)=>{
  res.send('<h1>please log in chai our code.</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send('<h1>Chai our code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

