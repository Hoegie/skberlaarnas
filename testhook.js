var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
//var apn = require('apn');
//var gcm = require('node-gcm');
var join = require('path').join;
var http = require('http');
var path = require('path');
var exec = require('child_process').exec;

var app = express();

  app.set('port', process.env.PORT || 9001);
  console.log(app.get('port'));
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());


app.post("/",function(req,res){

  res.end(JSON.stringify("webhook successfull"));
  console.log("webhook successfull !!");

  exec("sh /volume1/web/nodeprojects/gitHub/skbarlaarnas/skberlaarhook.sh", function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});