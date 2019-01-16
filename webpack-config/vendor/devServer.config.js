const ifaces = require('os').networkInterfaces();
let address = '';
console.log(ifaces);
ifaces['以太网 2'].forEach(function(v, k) {
  if (v.family === 'IPv4') {
    address = v.address;
    return false;
  }
});
module.exports = {
  contentBase: './build/',
  host: address, //此配置为自己机子的ip 利于手机或者别人测试用1
  port: 8444, // 默认8080
  inline: true, // 可以监控js变化
  hot: true, // 热启动
  compress: true,
  watchContentBase: false
};
