var express = require('express');
var app = express();

app.get('/mundo',function(req,res){
    res.send('Hola mundito hermoso <3');
});

app.listen(4000);