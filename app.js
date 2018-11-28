var express = require("express");
var app = express();
var path = require("path");

const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    app.use(express.static(__dirname + '/public'));

    // app.use('/img', express.static(__dirname + '/img'));
});

app.listen(port);
console.log("Running at Port " & port);