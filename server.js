/* -- IMPORT PACKAGE    --*/

const express = require('express');
var app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname,'public')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'))
})