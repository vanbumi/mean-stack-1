# Mean Stack RESTful API

### First step how to create nodeJS server

cd to your folder project

Creae new directory

	$ mkdir contactlistapp

Navigate to contactlistapp folder

	cd contactlistapp

Create JavaScript file named server.js and add following code:

	var express = require('express');	
	var app = express();

	app.get('/', function (req, res) {
	   res.send("Hello form server.js")
	});

	app.listen(3000);
	console.log("Server running on port 3000");

On the same folder now install express

	$ npm install express

Run the server

	$ node server

Walahhh :)

### Setup static file (html template)

Replace server.js with this code:

	var express = require('express');
	var app = express();

	* app.use(express.static(__dirname + '/public'));

	app.listen(3000);
	console.log("Server running on port 3000");

Create folder public

Under public folder create html file named index.html

On index.html write this code for test:

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Contact List App</title>
	</head>
	<body>
	    <h1>Contact List</h1>
	</body>
	</html>

Refresh the server and run again

	node server

### Setup AngularJS

Add this CDN inside index.html file

	https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js		

Put link CDN before closing tag body as sample bellow:

	<!DOCTYPE html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Contact List App</title>
	</head>
	<body>
	    <h1>Contact List</h1>


	    * <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
	</body>
	</html>

To test AngularJS work correctly add some code as sample bellow:

	<!DOCTYPE html>
	<html * ng-app>
	<head>
	    <meta charset="UTF-8">
	    <title>Contact List App</title>
	</head>
	<body>
	    <h1>Contact List</h1>

	    * <p>Type what ever you like here:
	        <input ng-model="test">
	        {{test}}
	      </p>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
	</body>
	</html>

Now refresh the browser... and try it out!	