const dirVars = require('./base/dir-vars.config.js');
let getPresetEnv = require('./libs/presetEnv');
let presetEnv = getPresetEnv(process.argv);
let rootPath = '';
let outPath = '';
let filename = '';
if (presetEnv === 'pro') {
  rootPath = '//gzh.suixingou.cn/';
  outPath = dirVars.buildOnline;
  filename = 'static/js/[name].[chunkhash].js';
} else if (presetEnv === 'test') {
  rootPath = '//test-msports.dftoutiao.com/msports.east.com.webpack4.0/build/';
  outPath = dirVars.buildDir;
  filename = 'static/js/[name].[chunkhash].js';
} else {
  rootPath = '/';
  outPath = dirVars.buildDir;
  filename = 'static/js/[name].js';
}
module.exports = {
  //entry
  path: outPath,
  publicPath: rootPath,
  filename: filename // [name]表示entry每一项中的key，用以批量指定生成后文件的名称[name].[chunkhash].js
  //chunkFilename: 'static/js/[id].[chunkhash].bundle.js'
};
