var express = require('express');
var app = express();

app.get('/marco', function(req, res) {
  rep.status(200).send('Polo!')
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log(
    'The Marco Polo app is listening on port %s',
  )
});

module.exports = server;
