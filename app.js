var express = require('express');

var app = module.exports = express.createServer();

// Check node_env, if not set default to development
var env = (process.env.NODE_ENV || "development");
var config = require('./config/config')[env];

// Configuration, defaults to jade as the view engine
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

/*
 * This section is for environment specific configuration
 */
app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});


app.listen(config.EnvConfig.port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});


/*
 * Exports the express app for other modules to use
 * all route matches go the routes.js file
 */
module.exports.app = app;
routes = require('./routes');