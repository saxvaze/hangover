/*  run this script for server
*   here we include all router and controller files
*/

var router 		= require('./server/Router.js'),
        config 		= require('./server/config.js'),
        http 		= require('http'),
        url	 		= require('url'),
        fs 			= require('fs');

        var controllersUrl  = "./" + config.appDir  +  "/" +  config.controllersDir + "/";

        // load all controllers, no checking just dummy code to work
        var files = fs.readdirSync(controllersUrl);
        for (var i in files) {
          	var definition = require(controllersUrl + files[i]);
        }

// just testing how the fuck system is working
// definition.init();