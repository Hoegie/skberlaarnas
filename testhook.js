var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
//var apn = require('apn');
//var gcm = require('node-gcm');
var join = require('path').join;
var http = require('http');
var path = require('path');
var execFile = require('child_process').execFile;
/*
var connection = mysql.createConnection({
  host     : '109.135.3.222',
  //host     : '192.168.69.190',
  user     : 'mobileapp',
  password : 'exji-0lj+cNQiX$nsG',
  database : 'pants'
});

var connection2 = mysql.createConnection({
  host     : '109.135.3.222',
  //host     : '192.168.69.190',
  user     : 'mobileapp',
  password : 'exji-0lj+cNQiX$nsG',
  database : 'users'
});
*/

var app = express();

  app.set('port', process.env.PORT || 9001);
  console.log(app.get('port'));
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());


app.post("/",function(req,res){

  res.end(JSON.stringify("webhook successfull"));
  console.log("webhook successfull !!");

  execFile('/volume1/web/nodeprojects/gitHub/skberlaarnas/skberlaarhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            });

  
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});