var express = require('express'),
    path = require('path'),
    app= express(),
    roothpath = path.normalize(__dirname+'/../');

app.use(express.static(roothpath+'/app'));

app.listen(8000);

console.log('App running on port 8000');