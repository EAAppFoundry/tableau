/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
app = module.parent.exports.app;

/* require your controllers here */
var siteController = require('./controllers/site');
var adminController = require('./controllers/admin');

/* Put routes here */

// main site routes
app.get('/', siteController.index);
app.get('/detail', siteController.detail);

// admin routes
app.get('/admin', adminController.admin);

