/*
 * modify values in these methods to set
 * environment specific info
 */
function setDevelopmentConfig(){
    // These are just examples, insert you info here
    DatabaseConfig.port = 27617;
    DatabaseConfig.host = '::mongo host::';
    DatabaseConfig.name = '::collection name::';
    DatabaseConfig.user = '::db username::';
    DatabaseConfig.pass = '::db password::';

    EnvConfig.port = 3000;
};

function setProductionConfig(){
    DatabaseConfig.port = 29017;
    DatabaseConfig.host = '::mongo host::';
    DatabaseConfig.name = '::collection name::';
    DatabaseConfig.user = '::db username::';
    DatabaseConfig.pass = '::db password::';

    EnvConfig.port = 80;
};

/* --- no need to modify below this line -- */


var DatabaseConfig = {
    port        : Number,
    host        : String,
    name        : String,
    user        : String,
    pass        : String
};

var EnvConfig = {
    port        : Number
};

module.exports.DatabaseConfig = DatabaseConfig;
module.exports.EnvConfig = EnvConfig;
module.exports.setDevelopmentConfig = setDevelopmentConfig;
module.exports.setProductionConfig = setProductionConfig;