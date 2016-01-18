var config = {
  website:'https://kyfw.12306.cn/otn/',
  auth:{
    user:'cyypds',
    pass:'xxxxxx',
  },
  debug:true,
  site_static_host:"",
  get mini_asserts(){ return !this.debug; },
  host:'localhost',
  port:8080,
}

module.exports = config;
