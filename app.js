const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

	app.use(express.static(__dirname + '/public'));
	app.engine('hbs',exphbs.engine({
		extname: 'hbs', 
		defaultLayout: 'layout',
		layoutDir:__dirname+'/views/layouts/', 
		partialsDir:__dirname+'/views/partials/'
	
	}));
	app.set("view engine", ".hbs");
	app.set("views", "views");
	app.get('/', (req, res) => {
		res.render("main.hbs");
	});

app.listen(3000);
