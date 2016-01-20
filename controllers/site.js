var superagent = require('superagent');
var config = require('../config.js');

exports.index = function(req,res,next){
  res.render('layout',{});
}
