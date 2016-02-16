var express = require('express');
var app = express();

//app.get('/', function (req, res) {
//   res.send("Hello form server.js")
//});

//next we going to use static html
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log("Server running on port 3000");


