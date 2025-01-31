const express = require('express')

const app = express()

const PORT = 3000;

app.get('/', (req, res) =>{
    res.send('Hello Kiran')
})

app.listen(PORT, ()=>{
    console.log(`Kiran is running on Port${PORT}`);
})