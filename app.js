var express = require('express');
var compress = require('compression');
var config = require('./config');
var path = require('path');
var app = express();
var staticDir = path.join(__dirname,'public');
var router = require('./router.js');

app.use(compress());

app.use('/public',express.static(staticDir));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',require('ejs-mate'));
app.locals._layoutFile = 'layout.html';
app.enable('trust proxy');

app.use('/',router);
app.listen(config.port,function(){
  console.log('server start:'+config.port);
})
