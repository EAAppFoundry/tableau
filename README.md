# Tableau

Tableau is a reference app of sorts.  It provides our current thinking WRT node.js project layout and structure.  Most of the ideas we present here are stolen from various open source projects we've come across.  

It's not our intention this project be a 100% solution, rather it covers the starting points.  If you are new to Express.js, this should give you an idea how to structure things, as opposed to having a 500 line app.js file (we have plenty of those also).

Much appreciation goes to Christian Sanz and his [expressjs-blog example](https://github.com/csanz/expressjs-blog)

This example also goes hand in hand with the information documented over on [node-info](https://github.com/EAAppFoundry/Node-Info).

## Concepts

### Currently Implemented
* app.js file as a point of startup and configuration, but not routing. [link](https://github.com/EAAppFoundry/tableau/blob/master/app.js)
* routes living in a dedicated route.js file. [link](https://github.com/EAAppFoundry/tableau/blob/master/routes.js)
* dealing with configuration for multiple environments. [link](https://github.com/EAAppFoundry/tableau/blob/master/config/config.js)
* encapsulating controller code into separate, dedicated js files. [link](https://github.com/EAAppFoundry/tableau/blob/master/controllers/site.js)

##### A note about models
We purposely did not implement any models in this example.  The answer for 'how do I properly implement my models' is 'it depends'.  While this example is biased toward MongoDB, it doesn't choose to specify an ODM.  For an example of using the mongo driver, check out [HiProfile](https://bitbucket.org/EATurner/hiprofile).  For a Mongoose example, take a look at [Flow](https://bitbucket.org/EATurner/flow).

### TBD
* make the .jade views a bit richer and more relevant.
* handle session data
* illustrate dealing with authentication
* anything else?

## We miss something?
I'm sure we did.  We would love feedback, or better yet, pull requests.  