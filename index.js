var app = require('express').createServer();

app.get('/',function(req,res){
    return 'Hola mundito <3';
});

app.listen(8080);