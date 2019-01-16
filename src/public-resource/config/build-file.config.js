require('!!file-loader?name=index.html!../../index.html'); //将index.html导入到打包文件中,实现根域名跳转主页
module.exports = {
  js: {
    //html5shiv: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/html5shiv.min.js'),
    //respond: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/respond.min.js'),
    //jquery: require('!!file-loader?name=static/js/[name].[ext]!jquery/dist/jquery.min.js'),
    //hotcss: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/hotcss.js'), //此文件直接输出头里,压缩后的
  },
  images: {
    favicon: require('!!url-loader?limit=1&name=static/img/[hash]_[name].[ext]!../imgs/favicon.ico') //这个文件用地址好看 可以用base64
  },
  dll: {
    js: require('!!file-loader?name=static/dll/[name].[ext]!../../dll/dll.js'), //将dll.js文件导入到打包文件夹中
    css: require('!file-loader?name=static/dll/[name].[ext]!../../dll/dll.css')
  }
};
