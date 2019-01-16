/**
 * 公共配置文件,api,日志上报配置,JS中所用图片file-loader
 *
 */
/* global presetEnv:true*/
const buildFileConfig = require('./build-file.config');
const moduleExports = {
  BUILD_FILE: buildFileConfig,
  publicUrl: {},
  API_URL: {}
};
console.log(presetEnv);
(function() {
  /**
   * 配置各个页面的接口
   * presetEnv代表当前的环境
   * option pro test dev 一共三种环境区分
   */
  let option = {
    pro: {
      0: '//toutiao.eastday.com', //新闻
      1: '//dfsports_h5.dftoutiao.com', //体育
      2: '//vdh5socket.dftoutiao.com', //视频接口
      3: '//autoapi.dftoutiao.com', //汽车接口
      4: '//position.dftoutiao.com', //获取用户位置
      5: '//clkup.dftoutiao.com', //点赞
      6: '//dzwap.dftoutiao.com', //段子
      7: '//wapactlog.dftoutiao.com', //日志
      8: '//ot.dftoutiao.com', //在线统计
      9: '//softwords.dftoutiao.com', //DSP
      10: '//lianmeng.dftoutiao.com' //联盟广告
    },
    test: {
      0: '//106.75.35.140',
      1: '//172.18.250.87:8380',
      2: '//123.59.62.164',
      3: '//123.59.142.180',
      4: '//position.dftoutiao.com', //获取用户位置
      5: '//106.75.3.64', //点赞
      6: '//123.59.62.164', //段子
      7: '//123.59.60.170', //日志
      8: '//123.59.60.170', //在线统计
      9: '//106.75.98.65', //DSP
      10: '//test-lianmeng.dftoutiao.com' //联盟广告
    },
    dev: {
      0: '//106.75.35.140',
      1: '//172.18.250.87:8380',
      2: '//123.59.62.164',
      3: '//123.59.142.180',
      4: '//position.dftoutiao.com', //获取用户位置
      5: '//106.75.3.64', //点赞
      6: '//123.59.62.164', //段子
      7: '//123.59.60.170', //日志
      8: '//123.59.60.170', //在线统计
      9: '//106.75.98.65', //DSP
      10: '//test-lianmeng.dftoutiao.com' //联盟广告
    },
    dev: {
      0: '//toutiao.eastday.com', //新闻
      1: '//dfsports_h5.dftoutiao.com', //体育
      2: '//vdh5socket.dftoutiao.com', //视频接口
      3: '//autoapi.dftoutiao.com', //汽车接口
      4: '//position.dftoutiao.com', //获取用户位置
      5: '//clkup.dftoutiao.com', //点赞
      6: '//dzwap.dftoutiao.com', //段子
      7: '//wapactlog.dftoutiao.com', //日志
      8: '//ot.dftoutiao.com', //在线统计
      9: '//softwords.dftoutiao.com', //DSP
      10: '//lianmeng.dftoutiao.com' //联盟广告
    },
  };
  moduleExports.API_URL = {
    INDEX: {
      refreshUrl: `${option[presetEnv][0]}/toutiao_h5/RefreshJP`, // 刷新数据
      pullDownUrl: `${option[presetEnv][0]}/toutiao_h5/pulldown`, // 下拉加载
      pullUpUrl: `${option[presetEnv][0]}/toutiao_h5/NextJP`, // 上拉加载
      picUrl: `${option[presetEnv][0]}/toutiao_h5/picnewspool`, // 图片频道接口(正式)
      sportsListUrl: `${option[presetEnv][1]}/dfsports_h5/forttsslb`, // 体育列表接口
      sportsMatchUrl: `${option[presetEnv][1]}/dfsports_h5/forttzhibo02`, // 体育比赛数
      videoUrl: `${option[presetEnv][2]}/videoh5/getvideos`, // 视频接口(测试)
      autoUrl: `${option[presetEnv][3]}/toutiao_h5_qiche/newspool`, // 汽车接口(正式)
      positionUrl: `${option[presetEnv][4]}/position/get`, // 获取用户位置
      voteUpUrl: `${option[presetEnv][5]}/NewsOperate/praise_h5`, // 点赞正式接口
      voteDownUrl: `${option[presetEnv][5]}/NewsOperate/trample_h5`, // 点踩正式接口
      duanziUrl: `${option[presetEnv][6]}/jokeswap/riffapi`, // 段子正式接口
      logUrl: `${option[presetEnv][7]}/getwapdata/data`, // 日志（操作统计）
      showAdLogUrl: `${option[presetEnv][7]}/getwapdata/advshow`, // 推广信息show统计接口
      clickAdLogUrl: `${option[presetEnv][7]}/getwapdata/partner`, // 推广信息click统计接口
      onlineUrl: `${option[presetEnv][8]}/online/online`, // 在线统计(统计stats = statistics)
      dspUrl: `${option[presetEnv][9]}/partner/list`, // dsp广告接口
      unionUrl: `${option[presetEnv][10]}/union/api` // 联盟广告api接口
    }
  };
})();
(function() {
  /**
   * 配置固定链接地址
   * 0为首页地址
   */
  let option = {
    pro: {
      0: '//toutiao.eastday.com' //首页地址
    },
    test: {
      0: '//test-msports.dftoutiao.com/msports.east.com/build/html/'
    },
    dev: {
      0: '/'
    }
  };
  moduleExports.publicUrl = {
    HOME_URL: `${option[presetEnv][0]}`
  };
})();
module.exports = moduleExports;
