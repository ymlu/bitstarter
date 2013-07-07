var express = require('express');

var fs = require('fs');

var file = fs.readFileSync('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(file.toString("utf-8", 0, 27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

