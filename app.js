var express = require('express');
var compress = require('compression');
var config = require('./config');
var path = require('path');
var app = express();
var staticDir = path.join(__dirname,'public');

app.use(compress());

app.use('/public',express.static(staticDir));

app.get('/',function(err,req,res){

})

app.listen(config.port,function(){
  console.log('server start:'+config.port);
})
