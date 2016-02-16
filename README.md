# Mean Stack RESTful API

#### First step create nodeJS server

cd to your folder project

$ mkdir contactlistapp

cd contactlistapp

Create file named server.js add following code:

	var express = require('express');	
	var app = express();

	app.get('/', function (req, res) {
	   res.send("Hello form server.js")
	});

	app.listen(3000);
	console.log("Server running on port 3000");

On the same folder install express

	$ npm install express

Run the server

	$ node server




