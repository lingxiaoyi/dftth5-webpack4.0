/**
 * 详情页广告JS
 * 名称约定：
 *     top： 顶部横幅广告
 *     articledown：正文下方广告
 *     six: 六宫格广告
 *     tujia： 图加广告
 *     threeup： 信息流三宫格广告
 *     threemiddle：信息流三宫格广告
 *     threedown： 信息流三宫格广告
 *     bottom： 信息流广告（末尾）
 * @deps global.js
 * @author  lizhigao(lizhigao@021.com)
 * @date 2016-06-03
 */

/* global __REGION__: true */

(function() {
  // 缓存地理位置信息（依赖gg_config.js）
  try {
    Cookies.set('cur_prov_name', __REGION__.provname, {
      expires: 1 / 3,
      path: '/'
    });
    Cookies.set('cur_city_name', __REGION__.cityname, {
      expires: 1 / 3,
      path: '/'
    });
  } catch (e) {
    console.error(e);
  }
})();

(function() {
  // 记录用户pu比(访问深度 每日重置)
  try {
    var currTime = new Date();
    var month = currTime.getMonth() + 1;
    var date = currTime.getDate();
    var cTimeStr = month + '-' + date; // 当前日期 05-28
    var cookieTimeStr = Cookies.get('curr_date_h5') && Cookies.get('curr_date_h5').toString();
    GLOBAL.Et.userPv = parseInt(Cookies.get(GLOBAL.Et.uid) || 1); // 全局变量 业务逻辑js可复用
    if (cTimeStr === cookieTimeStr) {
      // 日期相同时 访问深度+1
      Cookies.set(GLOBAL.Et.uid, Number(GLOBAL.Et.userPv) + 1, {
        expires: 1,
        path: '/'
      });
    } else {
      // 日期不相同时 重置访问深度
      GLOBAL.Et.userPv = 1;
      Cookies.set(GLOBAL.Et.uid, Number(GLOBAL.Et.userPv) + 1, {
        expires: 1,
        path: '/'
      });
      Cookies.set('curr_date_h5', cTimeStr, {
        expires: 1,
        path: '/'
      });
    }
  } catch (e) {
    console.error(e);
  }
})();

(function() {
  // 渠道广告后台配置数据
  if (typeof _dftth5_channel_name !== 'undefined') {
    // eslint-disable-line
    GLOBAL.Et.gg = _dftth5_channel_name; // eslint-disable-line
    // 部分渠道因特殊情况，需前端配置广告
    GLOBAL.Et.ggData = {
      qid02532: {
        ttdetails_top: {
          type: 'baidu',
          id: 'hculbdrre',
          isempty: false,
          mark: 'u3167228',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'avneuwknb',
          isempty: false,
          mark: 'u3167230',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'cxpgwympm',
          isempty: false,
          mark: 'u3167232',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'dyqhxznqq',
          isempty: false,
          mark: 'u3167233',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: 'dyqhagnen',
          isempty: false,
          mark: 'u3189202',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'idvmcesvf',
          isempty: false,
          mark: 'u3167238',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'baidu',
          id: 'uphevyhoe',
          isempty: false,
          mark: 'u3201362',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3167240',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: 'ojbslrsrg',
          isempty: false,
          mark: 'u3189195',
          region: '',
          height: ''
        }
      },
      hbtot: {
        ttdetails_top: {
          type: 'baidu',
          id: 'idvjavezfgkcef',
          isempty: false,
          mark: 'u3053748',
          region: '广东-福建-北京-上海',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'bwoctoxtczdec',
          isempty: false,
          mark: 'u3053750',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'cxpdupyugaedgm',
          isempty: false,
          mark: 'u3053751',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'idvjaveaegkcef',
          isempty: false,
          mark: 'u3053757',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'hcuizudzbfjzb',
          isempty: false,
          mark: 'u3053756',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'ssp',
          id: '4634439',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid02140: {
        ttdetails_top: {
          type: 'baidu',
          id: 'idvjavezfgkcef',
          isempty: false,
          mark: 'u3053748',
          region: '广东-福建-北京-上海',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'bwoctoxtczdec',
          isempty: false,
          mark: 'u3053750',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'cxpdupyugaedgm',
          isempty: false,
          mark: 'u3053751',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'idvjaveaegkcef',
          isempty: false,
          mark: 'u3053757',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'hcuizudzbfjzb',
          isempty: false,
          mark: 'u3053756',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'ssp',
          id: '4634439',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      shel: {
        ttdetails_top: {
          type: 'baidu',
          id: 'fasjxwipsdh',
          isempty: false,
          mark: 'u3154923',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'gbtkyxjqxeix',
          isempty: false,
          mark: 'u3154924',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'hculzykrzfjzb',
          isempty: false,
          mark: 'u3154925',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'idvmazlscgkcef',
          isempty: false,
          mark: 'u3154926',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'jewnbamtfhlfgmk',
          isempty: false,
          mark: 'u3154927',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3154928',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid01608: {
        ttdetails_top: {
          type: 'baidu',
          id: 'fasjxwipsdh',
          isempty: false,
          mark: 'u3154923',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'gbtkyxjqxeix',
          isempty: false,
          mark: 'u3154924',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'hculzykrzfjzb',
          isempty: false,
          mark: 'u3154925',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'idvmazlscgkcef',
          isempty: false,
          mark: 'u3154926',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'jewnbamtfhlfgmk',
          isempty: false,
          mark: 'u3154927',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3154928',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      xjhb: {
        ttdetails_top: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3029281',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'z1dczsqa7u',
          isempty: false,
          mark: 'u3029285',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'a2d3h1pzn3',
          isempty: false,
          mark: 'u3029286',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'nodavmi5yj',
          isempty: false,
          mark: 'u3029273',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'pqdru3gfqu',
          isempty: false,
          mark: 'u3029275',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'ssp',
          id: '4568160',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid01574: {
        ttdetails_top: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3029281',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'z1dczsqa7u',
          isempty: false,
          mark: 'u3029285',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'a2d3h1pzn3',
          isempty: false,
          mark: 'u3029286',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'nodavmi5yj',
          isempty: false,
          mark: 'u3029273',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'pqdru3gfqu',
          isempty: false,
          mark: 'u3029275',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'ssp',
          id: '4568160',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid02643: {
        ttdetails_top: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3208894',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'niaxokkqf',
          isempty: false,
          mark: 'u3208895',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'pkczqmmsl',
          isempty: false,
          mark: 'u3208897',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'qldarnntn',
          isempty: false,
          mark: 'u3208898',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'rmebsoouu',
          isempty: false,
          mark: 'u3208899',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '80',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3208901',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid02380: {
        ttdetails_top: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3068052',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'ezrfybfwvcgorvwy',
          isempty: false,
          mark: 'u3068054',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'fasgzcgxxdh',
          isempty: false,
          mark: 'u3068055',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'bwocvycslzdec',
          isempty: false,
          mark: 'u3068042',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'ezrfybfvwcgorvwy',
          isempty: false,
          mark: 'u3068045',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid02545: {
        ttdetails_top: {
          type: 'baidu',
          id: 'lgyphdpoh',
          isempty: false,
          mark: 'u3175197',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'wrjasogxa',
          isempty: false,
          mark: 'u3175201',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'xskbtphyh',
          isempty: false,
          mark: 'u3175202',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'fasjbxpjc',
          isempty: false,
          mark: 'u3175218',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'bwofxtllo',
          isempty: false,
          mark: 'u3175223',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3175225',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid02720: {
        ttdetails_top: {
          type: 'baidu',
          id: 'faswgwcxs',
          isempty: false,
          mark: 'u3404853',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'gbtxhxdyx',
          isempty: false,
          mark: 'u3404854',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'idvzjzfac',
          isempty: false,
          mark: 'u3404856',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'jewakagag',
          isempty: false,
          mark: 'u3404848',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'cxptdtzud',
          isempty: false,
          mark: 'u3404850',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3404858',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      mszqap: {
        ttdetails_top: {
          type: 'baidu',
          id: 'fasgwzzbjdh',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'idvjzccezgkcef',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'jewkaddfbhlfgmk',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'hcuiybbbyfjzb',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'idvjzcccagkcef',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3046676',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid01712: {
        ttdetails_top: {
          type: 'baidu',
          id: 'fasgwzzbjdh',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'idvjzccezgkcef',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'jewkaddfbhlfgmk',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'hcuiybbbyfjzb',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'idvjzcccagkcef',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: 'u3046676',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      qid02581: {
        ttdetails_top: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'jewngmknm',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: '',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      },
      txxl: {
        ttdetails_top: {
          type: 'baidu',
          id: 'ytlzuzqipwai',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'dyqezevnabfhnqu',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'wrjxsxojauyxagjn',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'xskytypbovz',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: 'qldariaru',
          isempty: true,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'avnbwbseuycx',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_tujia: {
          type: 'ssp',
          id: '5549646',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: 'mhzwneijp',
          isempty: true,
          mark: '',
          region: '四川',
          height: ''
        }
      },
      qid02296: {
        ttdetails_top: {
          type: 'baidu',
          id: 'ytlzuzqipwai',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'dyqezevnabfhnqu',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'wrjxsxojauyxagjn',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'xskytypbovz',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: 'qldariaru',
          isempty: true,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'avnbwbseuycx',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '542151',
          isempty: false,
          mark: '',
          region: '四川',
          height: ''
        },
        ttdetails_tujia: {
          type: 'ssp',
          id: '5549646',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: 'mhzwneijp',
          isempty: true,
          mark: '',
          region: '四川',
          height: ''
        }
      },
      qid02678: {
        ttdetails_top: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_articledown: {
          type: 'baidu',
          id: 'mhzzjgewi',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_six: {
          type: 'baidu',
          id: 'hcuuebzul',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_txt2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threeup: {
          type: 'baidu',
          id: 'gbttdayqk',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threemiddle: {
          type: 'baidu',
          id: 'ezrvoyhfo',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_threedown: {
          type: 'baidu',
          id: 'idvvfcasv',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_bottom: {
          type: 'sougou',
          id: '964613',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_tujia: {
          type: 'baidu',
          id: '',
          isempty: false,
          mark: '',
          region: '',
          height: ''
        },
        ttdetails_three: {
          type: 'baidu',
          id: 'dyqunxgeh',
          isempty: true,
          mark: '',
          region: '',
          height: ''
        }
      }
    };
    if (GLOBAL.Et.ggData[GLOBAL.Et.qid]) {
      GLOBAL.Et.gg = GLOBAL.Et.ggData[GLOBAL.Et.qid];
    }
  } else {
    GLOBAL.Et.gg = {
      ttdetails_top: {
        type: 'baidu',
        id: 'avnrknksn',
        isempty: false,
        mark: 'u2873194',
        region: '',
        height: ''
      },
      ttdetails_articledown: {
        type: 'baidu',
        id: 'cxptmpmuu',
        isempty: false,
        mark: 'u3031776',
        region: '',
        height: ''
      },
      ttdetails_six: {
        type: 'baidu',
        id: 'gbtxqtqyj',
        isempty: false,
        mark: 'u3192050',
        region: '',
        height: ''
      },
      ttdetails_threeup: {
        type: 'baidu',
        id: 'xskohkhry',
        isempty: false,
        mark: 'u3205162',
        region: '',
        height: ''
      },
      ttdetails_threedown: {
        type: 'baidu',
        id: 'ezrvoroyy',
        isempty: false,
        mark: 'u3205164',
        region: '',
        height: ''
      },
      ttdetails_bottom: {
        type: 'sougou',
        id: '963734',
        isempty: false,
        mark: '',
        region: '',
        height: ''
      }
    };
  }

  // 上拉信息流20个广告ID，从第2页开始(threeup\threemiddle\threedown)，部分渠道需要做区分
  GLOBAL.Et.bdGgObj = {
    null: [
      'vqimsrryn',
      'rmebsjbsb',
      'ytlizqzlv',

      'ojbflklpi',
      'snfctkctf',
      'cxpmduupw',

      'rmeionosu',
      'togdulduk',
      'ezrofwwrb',

      'faspgxxsi',
      'vqifwnfwp',
      'wrjgxoonx',

      'xskhyppob',
      'wrjgxogxs',
      'dyqnevvux',

      'gbtqhyyxj',
      'xskhyphyu',
      'xskhypppy',

      'avnkbsssk',
      'qldariaur',
      'bwolcttto',

      'cxpmduuut',
      'rmebsjbvv',
      'dyqnevvvv',

      'ezrofwwwy',
      'snfctkcwc',
      'faspgxxxb',

      'gbtqhyyyd',
      'togduldxg',
      'hcurizzzk'
    ],
    ttnull: [
      'kfxbelnxg',
      'ezrvyfhvf',
      'gbtxahjxq',

      'idvzcjlzz',
      'kfxbelnbe',
      'mhzdgnpdj',

      'gbtxahjyk',
      'idvzcjlav',
      'lgycfmodf',

      'mhzdgnpei',
      'niaehoqfk',
      'ojbfiprgr'
    ],
    qid11061: [],
    qid10932: [],
    // 'dfh500001': [
    //     'togxlxukdrvpq',
    //     'uphymyvlhswrxv',
    //     'wrjaoaxnouyxagjn'
    // ],
    jcib: [
      'fasjwpcwxdh',
      'dyqhungqqbfhnqu',
      'ezrivobwrcgorvwy',
      'jewnatgbghlfgmk',
      'dyqhungxebfhnqu',
      'ezrivobyocgorvwy',
      'gbtkxqdaxeix',
      'ezrivohyicgorvwy',
      'kfxobuhehimhnlou',
      'hculyredyfjzb',
      'niarexqkklprx',
      'kfxobuhggimhnlou',
      'ezrivobbfcgorvwy',
      'hculyrkklfjzb',
      'ojbsfylrrmqybf',
      'wrjangzxxuyxagjn',
      'pkctgcqqtnrcghj',
      'xskbohaybvz',
      'cxpgtmfgtaedgm',
      'vqizmiznztxywzf',
      'dyqhunghvbfhnqu',
      'fasjwpijbdh',
      'avnernkkwycx',
      'hculyrklkfjzb',
      'avnerkdkeycx',
      'cxpgtpmmfaedgm',
      'bwofslellzdec',
      'cxpgtmfmpaedgm',
      'uphylhehyswrxv',
      'fasjwpipzdh'
    ],
    xswl: [
      'uphylhelvswrxv',
      'bwofsvfyczdec',
      'vqizmifmztxywzf',
      'xskbokhokvz',
      'dyqhuxhanbfhnqu',
      'bwofsolsvzdec',
      'xskbokhphvz',
      'idvmzcmfegkcef',
      'bwofsolttzdec',
      'wrjanjgqxuyxagjn',
      'xskborhyovz',
      'avnernkunycx',
      'cxpgtpmytaedgm',
      'bwofsvlcxzdec',
      'hculyureefjzb',
      'cxpgtpmfmaedgm',
      'cxpgtwmdzaedgm',
      'hculyurkdfjzb',
      'snfwjfftwqum',
      'dyqhuxnegbfhnqu',
      'wrjanjjxouyxagjn',
      'togxkggxxrvpq',
      'wrjanqgaguyxagjn',
      'vqizmiizitxywzf',
      'wrjanjjanuyxagjn',
      'xskborhbkvz',
      'avnernnewycx',
      'cxpgtppgfaedgm',
      'dyqhuxqnxbfhnqu',
      'idvmzcmefgkcef'
    ],
    sdk91zs: [
      'ezrivyroacgorvwy',
      'xskborpbyvz',
      'ytlcpsllcwai',
      'bwofsvooozdec',
      'cxpgtwugtaedgm',
      'ezrivyrrycgorvwy',
      'ytlcpslpzwai',
      'fasjwzxjbdh',
      'ezrivyryrcgorvwy',
      'idvmzcvcegkcef',
      'ytlcpsqizwai',
      'gbtkxatcxeix',
      'jewnadwffhlfgmk',
      'bwofsvtllzdec',
      'jewnadwgdhlfgmk',
      'mhzqdgzjpkon',
      'bwofsvtofzdec',
      'jewnadwmbhlfgmk',
      'vqizmpmwwtxywzf',
      'gbtkxaytaeix',
      'idvmzczfzgkcef',
      'kfxobebheimhnlou',
      'ezrivywwocgorvwy',
      'lgypcfcihjn',
      'lgypcfcofjn',
      'gbtkxayateix',
      'niareheqklprx',
      'wrjanqoxxuyxagjn',
      'hculybzbyfjzb',
      'ytlcpsqziwai'
    ],
    dkzs: [
      'lgypcfdfijn',
      'jewnadffwhlfgmk',
      'lgypcfdhhjn',
      'mhzqdgeijkon',
      'ezrivybfvcgorvwy',
      'hculybzerfjzb',
      'gbtkxayjheix',
      'hculybeblfjzb',
      'lgypcfdodjn',
      'xskborryyvz',
      'gbtkxajxkeix',
      'cxpgtwwdtaedgm',
      'gbtkxaaxxeix',
      'kfxobeneximhnlou',
      'gbtkxaayteix',
      'ezrivyyyfcgorvwy',
      'niarehqhhlprx',
      'hculybbbufjzb',
      'niarehhqhlprx',
      'ojbsfirikmqybf',
      'pkctgjjsmnrcghj',
      'fasjwzbgzdh',
      'idvmzclejgkcef',
      'bwofsvxlczdec',
      'idvmzcesegkcef',
      'kfxobenguimhnlou',
      'ezrivyarocgorvwy',
      'idvmzcevcgkcef',
      'ojbsfirkimqybf',
      'dyqhuxzuebfhnqu'
    ],
    zlsjnew: [
      'rmevilunupt',
      'jewnagamthlfgmk',
      'lgypcfoivjn',
      'niarehqkelprx',
      'mhzqdjdpekon',
      'rmeviluoopt',
      'rmeviluunpt',
      'dyqhuaveubfhnqu',
      'vqizmrwwitxywzf',
      'dyqhuzenabfhnqu',
      'fasjwcxgzdh',
      'gbtkxchdyeix',
      'dyqhuzuvhbfhnqu',
      'idvmzfajlgkcef',
      'gbtkxcxdkeix',
      'ezrivaafvcgorvwy',
      'pkctgmljmnrcghj',
      'fasjwbbspdh',
      'ojbsfkklimqybf',
      'qlduhnmmnoshikmn',
      'snfwjovppqum',
      'wrjantxgauyxagjn',
      'rmevionnupt',
      'fasjwcjsbdh',
      'kfxobhoghimhnlou',
      'kfxobhghoimhnlou',
      'jewnagtdfhlfgmk',
      'idvmzfvslgkcef',
      'ojbsflklgmqybf',
      'gbtkxdxhdeix'
    ],
    maxthon5: [
      'snfwjpopvqum',
      'rmevioonopt',
      'kfxobhgnlimhnlou',
      'mhzqdjipwkon',
      'kfxobhhhlimhnlou',
      'togxkqpwwrvpq',
      'dyqhuaaehbfhnqu',
      'ojbsflllfmqybf',
      'kfxobhhlhimhnlou',
      'lgypciimojn',
      'qlduhnnnkoshikmn',
      'kfxobhhogimhnlou',
      'fasjwccpjdh',
      'togxkqqwqrvpq',
      'gbtkxddqqeix',
      'idvmzffszgkcef',
      'uphylrrxxswrxv',
      'kfxobhhueimhnlou',
      'idvmzffvvgkcef',
      'dyqhuageebfhnqu',
      'niarekkaklprx',
      'kfxobhhbbimhnlou',
      'ezrivbhficgorvwy',
      'ojbsfllflmqybf',
      'kfxobhhcximhnlou',
      'gbtkxdjhteix',
      'ojbsfllgkmqybf',
      'jewnaggfkhlfgmk',
      'idvmzfljagkcef',
      'lgypciihvjn'
    ],
    wnwbios: [
      'fasjwigzwdh',
      'ezrivhffhcgorvwy',
      'ezrivhfyrcgorvwy',
      'cxpgtfdtpaedgm',
      'cxpgtfddyaedgm',
      'avnerdbreycx',
      'hculykiukfjzb',
      'ytlcpbzzpwai',
      'gbtkxjhtdeix',
      'fasjwigsbdh',
      'vqizmywwztxywzf',
      'ezrivhfrycgorvwy',
      'cxpgtfdptaedgm',
      'vqizmsyyytxywzf',
      'avnerdbnkycx',
      'ytlcpbzlcwai',
      'qlduhntthoshikmn',
      'gbtkxjhqjeix',
      'ezrivhfoacgorvwy',
      'pkctgmsscnrcghj',
      'cxpgtfdmuaedgm',
      'bwofseclszdec',
      'niarekqrqlprx',
      'ytlcpbziiwai',
      'xskboayhbvz',
      'kfxobhnoeimhnlou',
      'fasjwigjidh',
      'dyqhugehzbfhnqu',
      'mhzqdjpnpkon',
      'bwofsecftzdec'
    ],
    qid02467: [
      'cxpgtfmtgaedgm',
      'pkctgsmscnrcghj',
      'ezrivhovrcgorvwy',
      'mhzqdpeeikon',
      'snfwjvpvmqum',
      'qlduhtmitoshikmn',
      'jewnamfdnhlfgmk',
      'uphylxrxrswrxv',
      'kfxobngeuimhnlou',
      'niareqjhflprx',
      'ezrivhhffcgorvwy',
      'qlduhtmmmoshikmn',
      'kfxobnghlimhnlou',
      'jewnammkbhlfgmk',
      'mhzqdpijwkon',
      'niareqjkalprx',
      'lgypcoomhjn',
      'pkctgslmhnrcghj',
      'rmeviunonpt',
      'niareqqoqlprx',
      'qlduhtmtioshikmn',
      'snfwjvovoqum',
      'qlduhtttdoshikmn',
      'hculykeiyfjzb',
      'ezrivhbifcgorvwy',
      'togxkwwwnrvpq',
      'niareqkxklprx',
      'idvmzlfvsgkcef',
      'mhzqennnnkon',
      'niareqkajlprx'
    ],
    tqkbios: [
      'uphymvvvrswrxv',
      'ytlcqzszswai',
      'vqiznwwwytxywzf',
      'togxluuxnrvpq',
      'cxpgudwgzaedgm',
      'pkcthqqztnrcghj',
      'uphymvveoswrxv',
      'cxpgudwmyaedgm',
      'wrjaoxxgtuyxagjn',
      'rmevjssebpt',
      'xskbpyrkhvz',
      'uphymvvhmswrxv',
      'ytlcqzzlbwai',
      'cxpgudwpwaedgm',
      'xskbpyyprvz',
      'togxluunxrvpq',
      'fasjxgzsidh',
      'vqiznwwpitxywzf',
      'xskbpyyrpvz',
      'bwoftcvsszdec',
      'avnesbbuwycx',
      'cxpguddwfaedgm',
      'dyqhvexuxbfhnqu',
      'wrjaoxaxzuyxagjn',
      'pkcthqtttnrcghj',
      'gbtkyhaxjeix',
      'ezriwfwbvcgorvwy',
      'idvmajaffgkcef',
      'xskbpyrpyvz',
      'dyqhvevgnbfhnqu'
    ],
    tqkbandroid: [
      'fasjxgzzzdh',
      'ezriwfbfhcgorvwy',
      'gbtkyhaaceix',
      'idvmajcclgkcef',
      'xskbpbyuhvz',
      'fasjxgzbxdh',
      'avnesbwkrycx',
      'bwoftffyszdec',
      'fasjxgbzxdh',
      'gbtkyhccyeix',
      'cxpguggzuaedgm',
      'hculziddbfjzb',
      'idvmajeeegkcef',
      'dyqhvhhaxbfhnqu',
      'kfxoclggnimhnlou',
      'ezriwfabocgorvwy',
      'ezriwiibacgorvwy',
      'jewnbkfgfhlfgmk',
      'dyqhvezgebfhnqu',
      'fasjxjjccdh',
      'ezriwfahicgorvwy',
      'gbtkyhcjteix',
      'ytlcqccbcwai',
      'hculzidkyfjzb',
      'idvmajelagkcef',
      'dyqhvhhgvbfhnqu',
      'lgypdmhoijn',
      'uphymvrvvswrxv',
      'fasjxjjibdh',
      'wrjaoxtxguyxagjn'
    ],
    tqybiosa: [
      'ytlcqciuiwai',
      'snfwkwftcqum',
      'avnesekwnycx',
      'bwoftflxszdec',
      'togxlxgugrvpq',
      'cxpgugmyuaedgm',
      'dyqhvhnzxbfhnqu',
      'uphymyhvlswrxv',
      'ytlcqcivcwai',
      'avnesekxkycx',
      'vqiznziwntxywzf',
      'bwoftflyozdec',
      'dyqhvhnavbfhnqu',
      'wrjaoajxquyxagjn',
      'ezriwiobycgorvwy',
      'gbtkykqddeix',
      'xskbpbkytvz',
      'hculzlrekfjzb',
      'avnesekdeycx',
      'ytlcqclzvwai',
      'bwoftflelzdec',
      'cxpgugmfpaedgm',
      'rmevjvevspt',
      'dyqhvhngubfhnqu',
      'ezriwiohwcgorvwy',
      'snfwkwfwwqum',
      'gbtkykqjceix',
      'idvmamsllgkcef',
      'togxlxgxdrvpq',
      'qlduiudrroshikmn'
    ],
    '2345xxl': [
      'uphymyhyhswrxv',
      'ezriwiawvcgorvwy',
      'vqiznzizmtxywzf',
      'wrjaoajaouyxagjn',
      'bwoftocxszdec',
      'xskbpbkbrvz',
      'ytlcqclcuwai',
      'xskbpkyuyvz',
      'avnesenexycx',
      'bwoftfofezdec',
      'cxpgupdztaedgm',
      'snfwkwfctqum',
      'togxlxgdxrvpq',
      'ezriwrfbycgorvwy',
      'uphymyheeswrxv',
      'vqiznzifitxywzf',
      'gbtkythddeix',
      'wrjaoajgnuyxagjn',
      'avnesewnkycx',
      'fasjxsgizdh',
      'dyqhvhzqvbfhnqu',
      'ezriwiarycgorvwy',
      'hculzuikefjzb',
      'gbtkykctdeix',
      'hculzldukfjzb',
      'idvmavjllgkcef',
      'avnesewreycx',
      'cxpgugytpaedgm',
      'rmevjevsvpt',
      'ezriwiavwcgorvwy'
    ],
    '2345yzhbd': [
      'uphymhyvlswrxv',
      'vqizniziftxywzf',
      'wrjaojaxquyxagjn',
      'xskbpkbytvz',
      'xskbpkbkovz',
      'ytlcqlczvwai',
      'avnesnebdycx',
      'avnesnenuycx',
      'rmevjevvspt',
      'snfwkfwwwqum',
      'dyqhvqhqgbfhnqu',
      'togxlgxxdrvpq',
      'uphymhyyhswrxv',
      'uphymhylvswrxv',
      'vqiznizzmtxywzf',
      'wrjaojaaouyxagjn',
      'vqiznizmztxywzf',
      'xskbpkbbrvz',
      'ytlcqlccuwai',
      'wrjaojanguyxagjn',
      'avnesneexycx',
      'bwoftoffezdec',
      'ytlcqlcppwai',
      'togxlgxdxrvpq',
      'vqiznizfitxywzf',
      'bwoftofsvzdec',
      'wrjaojagnuyxagjn',
      'ytlcqlciswai',
      'ezriwrivhcgorvwy',
      'bwoftoflyzdec'
    ],
    qid02487: [
      'jewndbgbw',
      'kfxoechcb',
      'niarhfkfj',
      'ojbsiglgl',
      'hculbzebi',
      'jewndbgdt',
      'lgypfdifc',
      'niarhfkhh',
      'ojbsiglik',
      'pkctjhmjm',
      'jewndbgfn',
      'lgypfdihy',
      'pkctjhmll',
      'jewndbggk',
      'lgypfdiiv',
      'qldukinnm',
      'rmevljooo',
      'snfwmkppv',
      'lgypfdiop',
      'niarhfqfh',
      'snfwmkvov',
      'kfxoecnhl',
      'lgypfdoip',
      'niarhfqka',
      'ojbsigrlf',
      'rmevljuon',
      'snfwmkvpp',
      'rmevljuul',
      'togxnlwwq',
      'xskbrryyo'
    ],
    qid02488: [
      'ytlcsszcp',
      'dyqhxxenz',
      'avneuubnn',
      'dyqhxxevu',
      'fasjzzgxz',
      'idvmccjal',
      'bwofvvcvf',
      'ezriyyfyv',
      'gbtkaahaa',
      'bwofvvcxc',
      'ezriyyfar',
      'fasjzzgbw',
      'idvmccjee',
      'idvmccjfc',
      'ezriyyfhi',
      'jewnddkmd',
      'mhzqggnpp',
      'wrjaqqaxg',
      'ytlcssczp',
      'dyqhxxhea',
      'ytlcssccl',
      'ezriyyiib',
      'ytlcsscii',
      'fasjzzjpc',
      'cxpgwwgpt',
      'fasjzzjsb',
      'avneuuere',
      'ezriyyivw',
      'avneuuesb',
      'cxpgwwgum'
    ],
    qid02489: [
      'gbtkaakya',
      'fasjzzjcp',
      'hculbbley',
      'mhzqggqjp',
      'gbtkaakjq',
      'ezriyyoyo',
      'idvmccscc',
      'kfxoeeueh',
      'ezriyyoai',
      'kfxoeeugg',
      'mhzqggwjj',
      'fasjzzpig',
      'hculbbrkr',
      'idvmccslv',
      'niarhhxqk',
      'xskbrrkyb',
      'bwofvvocs',
      'xskbrrkby',
      'avneuunek',
      'fasjzzsjb',
      'bwofvvoll',
      'fasjzzspz',
      'bwofvvosc',
      'kfxoeexbn',
      'ezriyyrwo',
      'kfxoeexch',
      'kfxoeexeg',
      'ezriyyraf',
      'hculbbudu',
      'idvmccvez'
    ],
    qid02490: [
      'fasjzzscg',
      'jewnddwga',
      'kfxocxeggimhnlou',
      'fasjxszcjdh',
      'ytlcqluccwai',
      'jewnbwdgbhlfgmk',
      'fasjxszigdh',
      'gbtkytchjeix',
      'ojbsgbirrmqybf',
      'xskbpktybvz',
      'cxpgupyduaedgm',
      'avnesnwbnycx',
      'fasjxsbgcdh',
      'ytlcqluziwai',
      'bwoftoxfozdec',
      'cxpgupympaedgm',
      'wrjaojsxxuyxagjn',
      'ezriwraowcgorvwy',
      'idvmaveslgkcef',
      'mhzqezgpikon',
      'dyqhvqzqqbfhnqu',
      'gbtkytctaeix',
      'kfxocxencimhnlou',
      'cxpgupypmaedgm',
      'avnesnwnbycx',
      'gbtkytajkeix',
      'fasjxsbpzdh',
      'bwoftoxllzdec',
      'niarfahkqlprx',
      'avnesnwkeycx'
    ],
    qid02491: [
      'snfwkfwtcqum',
      'bwoftovctzdec',
      'vqiznizwntxywzf',
      'snfwkfwctqum',
      'ezriwryfbcgorvwy',
      'cxpgupgpzaedgm',
      'wrjaojajjuyxagjn',
      'wrjaojqaxuyxagjn',
      'cxpgupgytaedgm',
      'dyqhvqnngbfhnqu',
      'ytlcqlsciwai',
      'ezriwrvihcgorvwy',
      'vqiznimfwtxywzf',
      'cxpgupwguaedgm',
      'xskbpkohhvz',
      'bwoftotvczdec',
      'gbtkytakjeix',
      'idvmavacegkcef',
      'cxpgupuydaedgm',
      'cxpgupwmtaedgm',
      'dyqhvqvzhbfhnqu',
      'ezriwrwaocgorvwy',
      'jewnbwdamhlfgmk',
      'gbtkytycxeix',
      'jewnbwbffhlfgmk',
      'dyqhvqxvnbfhnqu',
      'dyqhvqvaebfhnqu',
      'fasjxsxcpdh',
      'hculzubzbfjzb',
      'vqiznipwwtxywzf'
    ],
    qid02492: [
      'fasjxpizjdh',
      'avnesnbssycx',
      'jewnbtmdbhlfgmk',
      'lgypdvofhjn',
      'cxpgupduyaedgm',
      'niarfxqhqlprx',
      'idvmaslevgkcef',
      'wrjaojxqauyxagjn',
      'lgypdvohfjn',
      'jewnbtmgwhlfgmk',
      'xskbpkyrhvz',
      'mhzqewpjgkon',
      'kfxocunnximhnlou',
      'bwoftocvtzdec',
      'niarfxqqhlprx',
      'qlduiatttoshikmn',
      'cxpgupdwwaedgm',
      'snfwkfttfqum',
      'qlduidruroshikmn',
      'dyqhvqexzbfhnqu',
      'togxlguxgrvpq',
      'wrjaojxaquyxagjn',
      'ezriwrfybcgorvwy',
      'rmevjesbspt',
      'uphymhvehswrxv',
      'fasjxsgzidh',
      'wrjaojxgouyxagjn',
      'bwoftocoyzdec',
      'ytlcqlzuiwai',
      'uphymhvlyswrxv'
    ],
    qid02493: [
      'fasjxpcsxdh',
      'bwoftlelfzdec',
      'hculzreudfjzb',
      'ezriwobvrcgorvwy',
      'gbtkyqjqaeix',
      'ezriwobyicgorvwy',
      'idvmasfcagkcef',
      'jewnbtmtmhlfgmk',
      'jewnbtgddhlfgmk',
      'lgypdvifijn',
      'ezriwohrrcgorvwy',
      'mhzqewjgpkon',
      'gbtkyqdcqeix',
      'hculzrkubfjzb',
      'jewnbtgfbhlfgmk',
      'niarfxkkklprx',
      'kfxocunxnimhnlou',
      'idvmasflsgkcef',
      'lgypdviodjn',
      'ezriwohvocgorvwy',
      'ojbsgylrlmqybf',
      'ytlcqibzcwai',
      'jewnbtmafhlfgmk',
      'dyqhvngevbfhnqu',
      'gbtkyqjhdeix',
      'ezriwohwicgorvwy',
      'avneskdeeycx',
      'dyqhvnghubfhnqu',
      'jewnbtmbdhlfgmk',
      'fasjxpijzdh'
    ],
    qid02494: [
      'ezriwoyrycgorvwy',
      'ezriwobfacgorvwy',
      'cxpgumwumaedgm',
      'dyqhvnxvqbfhnqu',
      'ytlcqivccwai',
      'gbtkyqayaeix',
      'hculzrbzdfjzb',
      'avneskxekycx',
      'jewnbtdbmhlfgmk',
      'bwoftlvvczdec',
      'ezriwobiycgorvwy',
      'kfxocueenimhnlou',
      'hculzrbdzfjzb',
      'fasjxpcjbdh',
      'ezriwoybicgorvwy',
      'fasjxpzijdh',
      'hculzrelkfjzb',
      'avneskwkkycx',
      'dyqhvnznvbfhnqu',
      'gbtkyqdqceix',
      'bwoftlxolzdec',
      'dyqhvnzqubfhnqu',
      'hculzrerefjzb',
      'fasjxpbszdh',
      'gbtkyqctceix',
      'idvmasfslgkcef',
      'idvmasevlgkcef',
      'cxpgumytmaedgm',
      'cxpgumzpmaedgm',
      'xskbphuybvz'
    ],
    qid02495: [
      'ezriwivvbcgorvwy',
      'wrjaoasgxuyxagjn',
      'fasjxjwwidh',
      'ytlcqcpqiwai',
      'cxpgugymuaedgm',
      'avnesersnycx',
      'fasjxjwxcdh',
      'ezriwiaoacgorvwy',
      'gbtkykxyjeix',
      'xskbpboryvz',
      'bwoftfxoozdec',
      'dyqhvhuxvbfhnqu',
      'fasjxjwzbdh',
      'fasjxjbsbdh',
      'idvmamzelgkcef',
      'jewnbndfghlfgmk',
      'ytlcqcupzwai',
      'cxpgugwzdaedgm',
      'fasjxjzcsdh',
      'bwoftfxslzdec',
      'hculzlbezfjzb',
      'vqiznzrwztxywzf',
      'dyqhvhzuubfhnqu',
      'xskbpbtykvz',
      'ytlcqcuzpwai',
      'gbtkykcxceix',
      'dyqhvhzeabfhnqu',
      'wrjaoasaauyxagjn',
      'ezriwiayrcgorvwy',
      'avnesewerycx'
    ],
    qid02512: [
      'wrjaojaoauyxagjn',
      'jewnbwnmmhlfgmk',
      'ytlcqlcqlwai',
      'bwoftofttzdec',
      'snfwkfctwqum',
      'fasjxsjxidh',
      'xskbpkbrbvz',
      'uphymhevhswrxv',
      'avnesneunycx',
      'cxpgupgwuaedgm',
      'wrjaojgxouyxagjn',
      'fasjxsjzcdh',
      'bwoftofxozdec',
      'avnesnkbxycx',
      'ezriwriaycgorvwy',
      'ytlcqlcvzwai',
      'bwoftolcezdec',
      'dyqhvqhaubfhnqu',
      'fasjxsjczdh',
      'togxlgdxxrvpq',
      'gbtkytkdceix',
      'idvmavmflgkcef',
      'xskbpkhbpvz',
      'cxpgupgfmaedgm',
      'dyqhvqhgqbfhnqu',
      'avnesnkewycx',
      'ezriwrihvcgorvwy',
      'gbtkytkjaeix',
      'cxpgupmgfaedgm',
      'hculzulkdfjzb'
    ],
    // 'kbh500009': [
    //     'cxpguttwgaedgm',
    //     'ezriwvvyrcgorvwy',
    //     'gbtkyxxayeix'
    // ],
    // 'dfh5xiaomi': [
    //     'xskbpuykyvz',
    //     'avnesxbnkycx',
    //     'bwoftycoozdec'
    // ],
    wnwbandriod: [
      'mhzqezejpkon',
      'kfxocxecnimhnlou',
      'ezriwrwhfcgorvwy',
      'lgypdydohjn',
      'fasjxszzsdh',
      'wrjaojqxauyxagjn',
      'cxpgupwdwaedgm',
      'idvmavcccgkcef',
      'fasjxszgidh',
      'xskbpkrbbvz',
      'kfxocxeehimhnlou',
      'avnesnuenycx',
      'dyqhvqxhxbfhnqu',
      'ezriwryaicgorvwy',
      'ezriwryiacgorvwy',
      'bwoftovlozdec',
      'gbtkytacteix',
      'dyqhvqxnvbfhnqu',
      'hculzubrkfjzb',
      'idvmavceagkcef',
      'cxpgupwppaedgm',
      'fasjxszszdh',
      'jewnbwdfdhlfgmk',
      'gbtkytatceix',
      'avnesnurbycx',
      'mhzqezgipkon',
      'ezriwryvvcgorvwy',
      'idvmavczfgkcef',
      'gbtkytadqeix',
      'bwoftovtczdec'
    ],
    // 'dfh5gf': [
    //     'bwoftysclzdec',
    //     'dyqhvaueubfhnqu',
    //     'gbtkydxhceix'
    // ],
    // 'dfh5gf1': [
    //     'kfxocngbximhnlou',
    //     'mhzqepidekon',
    //     'ojbsgrkfkmqybf'
    // ],
    // 'dfh5txyyb': [
    //     'ojbsgrkrymqybf',
    //     'rmevjunujpt',
    //     'togxlwpwprvpq'
    // ],
    // 'dfh5huawei': [
    //     'idvmalfmvgkcef',
    //     'jewnbmgnahlfgmk',
    //     'lgypdoipfjn'
    // ],
    // 'dfh5oppo': [
    //     'ojbsgrlylmqybf',
    //     'pkcthsmzsnrcghj',
    //     'hculzkeuifjzb'
    // ],
    // 'dfh5dftt_ewmst1': [
    //     'lgypdoidvjn',
    //     'ojbsgrlggmqybf',
    //     'rmevjuojopt'
    // ],
    // 'dfh5vivo': [
    //     'pkcthsmsznrcghj',
    //     'qlduitntdoshikmn',
    //     'snfwkvpvkqum'
    // ],
    // 'dfh5baidusjzs': [
    //     'niarfqqrjlprx',
    //     'pkcthsstsnrcghj',
    //     'jewnbmmtthlfgmk'
    // ],
    // 'dfh5360osyz_scq15': [
    //     'rmevjuuiopt',
    //     'kfxocnnclimhnlou',
    //     'lgypdoodpjn'
    // ],
    // 'dfh5tuia': [
    //     'lgypdoofmjn',
    //     'ojbsgrribmqybf',
    //     'pkcthssjgnrcghj'
    // ],
    // 'dfh5360osyz_scq01': [
    //     'ytlcszpiqwai',
    //     'bwofvcslxzdec',
    //     'cxpgwdtmzaedgm'
    // ],
    // 'dfh5360sjzs': [
    //     'xskbryoohvz',
    //     'bwofvcsstzdec',
    //     'dyqhxeuuzbfhnqu'
    // ],
    // 'dfh5wandoujia': [
    //     'dyqhxexznbfhnqu',
    //     'gbtkahacyeix',
    //     'dyqhxexahbfhnqu'
    // ],
    // 'dfh5meizu': [
    //     'gbtkahyydeix',
    //     'cxpgwduwpaedgm',
    //     'dyqhxevxubfhnqu'
    // ],
    // 'dfh5360osyz_scq03': [
    //     'avneubrrrycx',
    //     'xskbryopbvz',
    //     'bwofvcstszdec'
    // ],
    // 'dfh5updsp': [
    //     'gbtkahxadeix',
    //     'hculbiybkfjzb',
    //     'ytlcszpuzwai'
    // ],
    // 'dfh5yaoqianshu_ewm1': [
    //     'jewndkagmhlfgmk',
    //     'ezriyfvhrcgorvwy',
    //     'hculbiykbfjzb'
    // ],
    // 'dfh5yaoqianshu1': [
    //     'fasjzgxwcdh',
    //     'bwofvcttozdec',
    //     'hculbizzkfjzb'
    // ],
    // 'dfh5cqlxgdt_cpc01': [
    //     'xskbryrbkvz',
    //     'bwofvcvfvzdec',
    //     'dyqhxexhabfhnqu'
    // ],
    // 'dfh5wzshare': [
    //     'ezriyfyhicgorvwy',
    //     'hculbibkyfjzb',
    //     'kfxoelengimhnlou'
    // ],
    // 'dfh5dfttyq_hb10': [
    //     'cxpgwdymuaedgm',
    //     'cxpgwdyptaedgm',
    //     'dyqhxezuubfhnqu'
    // ],
    // 'dfh5cqlxgdt_cpc04': [
    //     'fasjzgbcpdh',
    //     'jewndkfgdhlfgmk',
    //     'lgypfmhiijn'
    // ],
    // 'dfh5wifi_ncnews': [
    //     'cxpgwgmwuaedgm',
    //     'fasjzjpzcdh',
    //     'gbtkakqajeix'
    // ],
    // 'dfh5bwwifi_cpc07': [
    //     'jewndbbmthlfgmk',
    //     'kfxoeccnximhnlou',
    //     'lgypfddocjn'
    // ],
    // 'dfh5bwwifi_cpc08': [
    //     'mhzqgijgz',
    //     'uphyoqrrx',
    //     'mhzqgipqi'
    // ],
    // 'dfh5bwwifi_cpc09': [
    //     'gbtkadkkd',
    //     'ytlcsvciz',
    //     'cxpgwzgmp'
    // ],
    // 'dfh5bwwifi_cpc06': [
    //     'ezriyyibi',
    //     'kfxoeeohg',
    //     'idvmccmlz'
    // ],
    // 'dfh5tuia_cpc02': [
    //     'gbtkactck',
    //     'jewndfwfa',
    //     'mhzqgizii'
    // ],
    // 'dfh5tuia_cpc03': [
    //     'lgypfipif',
    //     'mhzqgjqpg',
    //     'cxpgwzmmm'
    // ],
    // 'dfh5dm_cpc01': [
    //     'mhzqgjqji',
    //     'niarhkrqj',
    //     'ezriyboov'
    // ],
    // 'dfh5cqlxgdt_cpc02': [
    //     'ojbsilslr',
    //     'ojbsilsrl',
    //     'gbtkadqqa'
    // ],
    // 'dfh5cqlxgdt_cpc05': [
    //     'hculbelkl',
    //     'pkctjmtss',
    //     'jewndgttm'
    // ],
    // 'dfh5kylb_cpc01': [
    //     'jewndgnmw',
    //     'avneuxkbk',
    //     'bwofvyloc'
    // ],
    // 'dfh5tuia_cpc04': [
    //     'kfxoehonb',
    //     'cxpgwzmdt',
    //     'cxpgwzmpg'
    // ],
    // 'dfh5tuia_cpc01': [
    //     'lgypfipod',
    //     'ezriybofy',
    //     'dyqhxanqn'
    // ],
    // 'dfh5AppStore': [
    //     'xskbrbkhovz',
    //     'avneuenkuycx',
    //     'bwofvfolxzdec'
    // ],
    // 'dfh5IOSgf1': [
    //     'avneuerbwycx',
    //     'uphyoylyyswrxv',
    //     'bwofvfsfxzdec'
    // ],
    // 'dfh5IOSdftt_ewmst1': [
    //     'idvmcmcfagkcef',
    //     'lgypfpfiijn',
    //     'ezriyiyhfcgorvwy'
    // ],
    // 'dfh5ioswechat': [
    //     'ezriyowfhcgorvwy',
    //     'ytlcsiqclwai',
    //     'ytlcsiqiiwai'
    // ],
    // 'dfh5360osyz_scq13': [
    //     'idvmcsacegkcef',
    //     'cxpgwmuydaedgm',
    //     'lgypfvdohjn'
    // ],
    // 'dfh5xstg044': [
    //     'jewndtgdbhlfgmk',
    //     'lgypfvifhjn',
    //     'niarhxkhqlprx'
    // ],
    // 'dfh5wxq_st1': [
    //     'dyqhxnvzhbfhnqu',
    //     'hculbrzdzfjzb',
    //     'dyqhxnvaebfhnqu'
    // ],
    // 'dfh5yaoqianshu': [
    //     'wrjaqgoxguyxagjn',
    //     'bwofvltcvzdec',
    //     'dyqhxnveabfhnqu'
    // ],
    // 'dfh5360osyz_scq02': [
    //     'idvmcszfcgkcef',
    //     'jewndtagfhlfgmk',
    //     'kfxoeubhhimhnlou'
    // ],
    // 'dfh5js_up01': [
    //     'cxpgwpdwuaedgm',
    //     'gbtkathajeix',
    //     'xskbrkytyvz'
    // ],
    // 'dfh5dfttyq02_h5': [
    //     'dyqhxqvezbfhnqu',
    //     'avneunskkycx',
    //     'cxpgwpumtaedgm'
    // ],
    // 'dfh5jfyyb_cpd16': [
    //     'kfxoexehcimhnlou',
    //     'ojbsibilrmqybf',
    //     'jewndwdmwhlfgmk'
    // ],
    // 'dfh5xstg007': [
    //     'niarhajqhlprx',
    //     'qldukdmttoshikmn',
    //     'cxpgwpzdpaedgm'
    // ],
    // 'dfh5hxte_h5': [
    //     'pkctjcmslnrcghj',
    //     'fasjzsigxdh',
    //     'idvmcvljfgkcef'
    // ],
    // 'dfh5jinli': [
    //     'dyqhxueuzbfhnqu',
    //     'gbtkaxqjteix',
    //     'kfxoebungimhnlou'
    // ],
    // 'dfh5jinlisun01': [
    //     'dyqhxqahqbfhnqu',
    //     'gbtkatdkaeix',
    //     'idvmcvfmfgkcef'
    // ],
    // 'dfh5hcxzz_cpa02': [
    //     'idvmczvzlgkcef',
    //     'avneurnsbycx',
    //     'bwofvsotfzdec'
    // ],
    // 'dfh5jfyyb_cpd01': [
    //     'hculbbuyb',
    //     'cxpgwwpud',
    //     'jewnddwbf'
    // ],
    // 'dfh5jfyyb_cpd03': [
    //     'lgypffvih',
    //     'lgypffvof',
    //     'wrjaqqjxx'
    // ],
    // 'dfh5jfyyb_cpd08': [
    //     'bwofvvlsf',
    //     'hculbbryd',
    //     'bwofvvltc'
    // ],
    // 'dfh5jfyyb_cpd18': [
    //     'jewndbmdn',
    //     'niarhfqhf',
    //     'dyqhxxeeg'
    // ],
    // 'dfh5jfyyb_cpd21': [
    //     'lgypfdicf',
    //     'gbtkaydyh',
    //     'qldukinmn'
    // ],
    // 'dfh5jfyyb_cpd22': [
    //     'kfxoecgbe',
    //     'mhzqgeidjkon',
    //     'hculbzdzrfjzb'
    // ],
    // 'dfh5jfyyb_cpd23': [
    //     'jewndbfnghlfgmk',
    //     'kfxoecgon',
    //     'fasjzxbpsdh'
    // ],
    // 'qid02526': [
    //     'hculbbyik',
    //     'bwofvvsfl',
    //     'dyqhxxuhu',
    //     'gbtkaaxkc',
    //     'idvmcczml',
    //     'bwofvvslf',
    //     'dyqhxxunq',
    //     'dyqhxxuqn',
    //     'hculbbyub',
    //     'cxpgwwttd',
    //     'fasjzzwws',
    //     'lgypffcco',
    //     'ezriyyvwi',
    //     'jewnddabd',
    //     'lgypffcdi',
    //     'mhzqggdep',
    //     'ezriyyvyf',
    //     'idvmcczcz',
    //     'kfxoeebee',
    //     'lgypffcfh',
    //     'niarhhehq',
    //     'hculbbydr',
    //     'lgypffchf',
    //     'ojbsiifkr',
    //     'lgypffcid',
    //     'ojbsiifll',
    //     'idvmcczlm',
    //     'kfxoeebnx',
    //     'niarhheqh',
    //     'pkctjjgsm'
    // ],
    // 'dfh5IOSyaoqianshu_ewm1': [
    //     'kfxoehcxe',
    //     'lgypfidpo',
    //     'jewndgbkg'
    // ],
    // 'dfh5IOSwechat_ewm_dsf1': [
    //     'mhzqgjezj',
    //     'fasjzcxpp',
    //     'dyqhxavhh'
    // ],
    // 'dfh5IOSSEMbaidu_01': [
    //     'fasjzcxwg',
    //     'idvmcfasa',
    //     'gbtkadykx'
    // ],
    // 'dfh5AppStoreExp': [
    //     'hculbezzl',
    //     'ezriybwrf',
    //     'hculbezlz'
    // ],
    // 'dfh5IOSdfttyq_wxhb': [
    //     'ojbsilggl',
    //     'idvmcfavz',
    //     'jewndgbnf'
    // ],
    // 'dfh5IOSqiandao1': [
    //     'gbtkajqka',
    //     'jewndmtnm',
    //     'idvmclsse'
    // ],
    // 'dfh5IOSshowmoney_zz11': [
    //     'hculbkrld',
    //     'fasjzippw',
    //     'kfxoenuun'
    // ],
    // 'dfh5pyq_st1': [
    //     'kfxoehobn',
    //     'cxpgwzgud',
    //     'ezriybiwo'
    // ],
    // 'dfh5lenovomm': [
    //     'hculdluzk',
    //     'dyqhzhnzu',
    //     'hculdlike'
    // ],
    // 'dfh5360os_push': [
    //     'ezriairyw',
    //     'ezriaioaw',
    //     'snfwowwtc'
    // ],
    // 'dfh5dftt_ewmst': [
    //     'gbtkcktac',
    //     'idvmemsel',
    //     'vqizrzzwn'
    // ],
    // 'dfh5cqlxgdt_cpc03': [
    //     'hculdludd',
    //     'fasjbjpcx',
    //     'avneweebd'
    // ],
    // 'dfh5yybgdt_cpc09': [
    //     'ezriairbr',
    //     'idvmemsff',
    //     'cxpgyggpz'
    // ],
    // 'dfh5jfyyb_cpd04': [
    //     'cxpgygpfd',
    //     'hculdlrkb',
    //     'ytlcuccsi'
    // ],
    // 'dfh5jfyyb_cpd02': [
    //     'jewnfnwmf',
    //     'kfxogounn',
    //     'vqizrzfmw'
    // ],
    // 'dfh5jfyyb_cpd07': [
    //     'uphyqylvy',
    //     'dyqhzhqqz',
    //     'avnewekrr'
    // ],
    // 'dfh5jfyyb_cpd05': [
    //     'avnewerbu',
    //     'fasjbjssi',
    //     'ezriaioyy'
    // ],
    // 'dfh5jfyyb_cpd09': [
    //     'uphyqylyv',
    //     'ytlcuclpi',
    //     'gbtkckqad'
    // ],
    // 'dfh5cqlxgdt_cpc11': [
    //     'kfxoguhnu',
    //     'hculdrkbl',
    //     'dyqhzqezu'
    // ],
    // 'dfh5jfyyb_cpd15': [
    //     'niarjxkqf',
    //     'mhzqiwpjd',
    //     'ezriarfaw'
    // ],
    // 'dfh5defaulth5': [
    //     'pkctlzmsl',
    //     'wrjasjxxo',
    //     'gbtkcthcc'
    // ],
    // 'dfh5360osshoutu': [
    //     'gbtkcqjha',
    //     'avnewnbbx',
    //     'hculduide'
    // ],
    // 'dfh5js_up02': [
    //     'cxpgymfgg',
    //     'uphyqhvye',
    //     'idvmevjel'
    // ],
    // 'dfh5js_up04': [
    //     'jewnftmng',
    //     'bwofxocts',
    //     'bwofxocyf'
    // ],
    // 'dfh5yxh5_xz11011': [
    //     'mhzqiwpzp',
    //     'gbtkcthad',
    //     'cxpgypdzm'
    // ],
    // 'dfh5sogouzs': [
    //     'hculdrkyu',
    //     'avnewnbwe',
    //     'dyqhzqeaq'
    // ],
    // 'dfh5qiandao1': [
    //     'idvmevese',
    //     'kfxogxceg',
    //     'ezriarrib'
    // ],
    // 'dfh5gf_c1': [
    //     'dyqhzqzqh',
    //     'ezriarwaf',
    //     'cxpgypppt'
    // ],
    // 'dfh5wechat_ewm_dsf1': [
    //     'hculduduz',
    //     'idvmevejl',
    //     'hculduuuk'
    // ],
    // 'dfh5jinlisun': [
    //     'jewnfwfwf',
    //     'ezriaraiv',
    //     'cxpgyppum'
    // ],
    // 'dfh5dm_cpc03': [
    //     'kfxogxgxh',
    //     'ezriaraor',
    //     'fasjbsxzp'
    // ],
    // 'dfh5SEMbaidu_01': [
    //     'snfwovomo',
    //     'togxpwpnq',
    //     'pkctlsllc'
    // ],
    // 'dfh5dfact0021': [
    //     'vqizryrss',
    //     'wrjaszstz',
    //     'ojbskrkrp'
    // ],
    // 'dfh5dfttyq_wxhb': [
    //     'idvmelfjs',
    //     'lgyphoimd',
    //     'ojbskrlpl'
    // ],
    // 'dfh5pclixinshout_011': [
    //     'idvmelfsj',
    //     'jewnfmgtn',
    //     'kfxognhuu'
    // ],
    // 'dfh5PC_hongbao6661': [
    //     'niarjqkae',
    //     'pkctlsmcj',
    //     'qldumtndm'
    // ],
    // 'kbh5txyyb': [
    //     'idvmfmfmf',
    //     'cxpgzgzmg',
    //     'ezribibor'
    // ],
    // 'kbh5huawei': [
    //     'fasjcjcwp',
    //     'hculeleyy',
    //     'jewngngad'
    // ],
    // 'kbh5TTKB_AppStore': [
    //     'ojbslslir',
    //     'hculeledl',
    //     'jewngngfw'
    // ],
    // 'kbh5vivo': [
    //     'kfxohohnu',
    //     'niarkrkqf',
    //     'ojbslslri'
    // ],
    // 'kbh5360sjzs': [
    //     'fasjcjcpw',
    //     'cxpgzgzpd',
    //     'hculeleuz'
    // ],
    // 'kbh5oppo': [
    //     'jewngngda',
    //     'niarkrkhk',
    //     'idvmfmfes'
    // ],
    // 'kbh5baidusjzs': [
    //     'idvmfmlme',
    //     'kfxohonon',
    //     'cxpgzgfmd'
    // ],
    // 'kbh5kb_gf1': [
    //     'mhzqjqjje',
    //     'pkctmtmsl',
    //     'hculelkid'
    // ],
    // 'kbh5xiaomi': [
    //     'idvmfmflj',
    //     'rmevovouu',
    //     'jewngnmkm'
    // ],
    // 'kbh5zwbdsem_cpc': [
    //     'lgypipioy',
    //     'ezribihfv',
    //     'ezribihir'
    // ],
    // 'kbh5meizu': [
    //     'hculeruzd',
    //     'jewngtwbm',
    //     'dyqhanqxn'
    // ],
    // 'kbh5jinli': [
    //     'fasjcpxgc',
    //     'gbtkdqyhj',
    //     'xskbuhpby'
    // ],
    // 'kbh5yqxzz_cpa13': [
    //     'jewngtbbf',
    //     'lgypivddo',
    //     'fasjcpxzp'
    // ],
    // 'kbh5leshi': [
    //     'kfxohuebh',
    //     'ezriboywi',
    //     'hculerbzy'
    // ],
    // 'kbh5whfyxx_cpa01': [
    //     'qldunaktt',
    //     'bwofylxcl',
    //     'idvmfsejl'
    // ],
    // 'kbh5afsgsem_cpc': [
    //     'niarkxjhk',
    //     'ojbslykir',
    //     'gbtkdqcch'
    // ],
    // 'kbh5ppzs': [
    //     'niarkxqjf',
    //     'pkctmzsll',
    //     'qldunatmn'
    // ],
    // 'kbh5yqxzz_cpa22': [
    //     'ytlcvlcpc',
    //     'avnexnerk',
    //     'cxpgzpgtt'
    // ],
    // 'kbh5zhangda_cpa08': [
    //     'ytlcvliii',
    //     'bwofyolls',
    //     'cxpgzpmmu'
    // ],
    // 'kbh5zhangda_cpa09': [
    //     'gbtkdtqya',
    //     'hculeurzd',
    //     'jewngwtbm'
    // ],
    // 'kbh5zhangda_cpa11': [
    //     'ojbslbrfl',
    //     'pkctmcsgs',
    //     'idvmfvlam'
    // ],
    // 'kbh5zhangda_cpa07': [
    //     'mhzqjzpjw',
    //     'niarkaqka',
    //     'ojbslbrlf'
    // ],
    // 'kbh5lenovomm': [
    //     'xskbuoyyo',
    //     'cxpgztddz',
    //     'dyqhaueeg'
    // ],
    // 'kbh5zhangda_cpa10': [
    //     'kfxohbxch',
    //     'dyqhauqxe',
    //     'fasjcwszp'
    // ],
    // 'kbh5zhangda_cpa15': [
    //     'lgypidpih',
    //     'jewngbnma',
    //     'bwofytlcs'
    // ],
    // 'kbh5kb_yaoqianshu_ewm1': [
    //     'mhzqjeqjj',
    //     'lgypidpof',
    //     'cxpgzumdu'
    // ],
    // 'kbh5ttkb_gf': [
    //     'fasjcxjig',
    //     'mhzqjeqpi',
    //     'fasjcxpgc'
    // ],
    // 'kbh5zhangda_cpa13': [
    //     'gbtkdykjk',
    //     'niarkfrqk',
    //     'gbtkdyqhj'
    // ],
    // 'kbh5zolxzz_cpa13': [
    //     'hculezlkr',
    //     'wrjatogxx',
    //     'xskbuphby'
    // ],
    // 'kbh5zhangda_cpa16': [
    //     'idvmfamlv',
    //     'xskbuphyb',
    //     'ytlcvqicc'
    // ],
    // 'kbh5zhangda_cpa12': [
    //     'ezribviib',
    //     'fasjcwpcj',
    //     'ojbslfgir'
    // ],
    // 'kbh5zhangda_cpa14': [
    //     'xskbuobhb',
    //     'gbtkdxqjk',
    //     'lgypicdic'
    // ],
    // 'kbh5kb_iosgf1': [
    //     'gbtkdxkqj',
    //     'jewngatma',
    //     'qldunhint'
    // ],
    // 'kbh5zol_cpa32': [
    //     'hculeyluk',
    //     'niarkexqk',
    //     'jewngabmn'
    // ],
    // 'kbh5kb_dftt_ewmst1': [
    //     'bwofysfvc',
    //     'avnexrnbn',
    //     'kfxohbcnu'
    // ],
    // 'kbh5updsp': [
    //     'gbtkdxkay',
    //     'ezribvrfa',
    //     'mhzqjdepd'
    // ],
    // 'kbh5zolxzz_cpa26': [
    //     'gbtkdxkjq',
    //     'ezribvriy',
    //     'niarkefqf'
    // ],
    // 'kbh5sogouzs': [
    //     'lgypicpoh',
    //     'gbtkdxtkd',
    //     'qldunhitn'
    // ],
    // 'kbh5hcxzz_cpa': [
    //     'vqizsmfww',
    //     'ezribvrow',
    //     'bwofysvcf'
    // ],
    // 'kbh5samsung': [
    //     'ytlcvpizl',
    //     'bwofysosc',
    //     'cxpgztwdm'
    // ],
    // 'kbh5yqxzz_cpa10': [
    //     'fasjcwpgi',
    //     'dyqhauqun',
    //     'dyqhauxeq'
    // ],
    // 'kbh5whfyxx_cpa07': [
    //     'avnexrken',
    //     'gbtkdxtyx',
    //     'ezribvyfv'
    // ],
    // 'kbh5zol_cpa30': [
    //     'ezribvoia',
    //     'idvmfzvac',
    //     'fasjcwzgx'
    // ],
    // 'kbh5txyybyx': [
    //     'bwofysllo',
    //     'kfxohbxeg',
    //     'gbtkdxaha'
    // ],
    // 'kbh5whfyxx_cpa': [
    //     'dyqhaunnv',
    //     'ezribvraf',
    //     'hculeybid'
    // ],
    // 'kbh5zolxzz_cpa33': [
    //     'hculeyrrk',
    //     'cxpgztugm',
    //     'idvmfzcjf'
    // ],
    // 'kbh5zol_cpa17': [
    //     'dyqhaunqu',
    //     'jewngabtg',
    //     'jewngadkm'
    // ],
    // 'kbh5zolxzz_cpa16': [
    //     'idvmfzsvl',
    //     'ezribvwro',
    //     'bwofysvfc'
    // ],
    // 'kbh5zhangda_cpa01': [
    //     'fasjcwpxw',
    //     'gbtkdxytx',
    //     'cxpgztwgg'
    // ],
    // 'kbh5zhangda_cpa02': [
    //     'jewngatbg',
    //     'fasjcwxxj',
    //     'dyqhauxhn'
    // ],
    // 'kbh5yqxzz_cpa20': [
    //     'fasjcwpzs',
    //     'hculeyzzu',
    //     'ezribvyir'
    // ],
    // 'kbh5yqxzz_cpa04': [
    //     'gbtkdtdhy',
    //     'idvmfvfje',
    //     'lgypiyipo'
    // ],
    // 'dfh5null': [
    //     'uphyroqrx',
    //     'niarkhjqr',
    //     'qldunkmth'
    // ],
    // 'kbh5null': [
    //     'wrjatqztz',
    //     'bwofyxcfo',
    //     'dyqhazeqq'
    // ],
    huitt: [
      'xskhykbot',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      'ezribbivi',
      'niaaqhqof',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      'jewnggnad',
      'mhzdigpwz',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      'rmeinijoo',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/d43p3.js?fasxjwz=cg"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/k31f.js?hc=uzlyber"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/ls9v.js?idvamz=cfv"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/openjs/web/mrw3z.js?kfxcobe=hc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/x39cm.js?lgydpc=fif"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/dfvimk.js?nia=frehkk"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/resource/lo0p6.js?ojbgsf=ilr"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/huvlf.js?hcuzlyb=kl"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/static/l62j.js?idv=amzcls"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/api/odpho.js?kfxcob=enb"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/static/eyswfz.js?l=gydpcfod"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/3mf1f.js?id=vmffmvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/7ragbi.js?ni=afrehqj"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/production/qvk9al.js?oj=bgsfirl"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/openjs/z5sfi6.js?pk=chtgjss"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/08fq.js?xskpbo=tyy"></script>@@baidu2'
    ],
    qid02532: [
      'fasjcipgw',
      'gbtkdjqhy',
      'togxqwlpq',
      'uphyrxmqx',
      'niarkqfkr',
      'ojbslrgly',
      'pkctmshmc',
      'rmevoujoj',
      'snfwpvkpm',
      'togxqwlqp',
      'uphyrxmrr',
      'vqizsynsy',
      'niarkqfqo',
      'ojbslrgrs',
      'pkctmshsz',
      'qlduntitd',
      'rmevoujui',
      'snfwpvkvk',
      'togxqwlwn',
      'vqizsynys',
      'fasjcizgg',
      'gbtkdjahk',
      'idvmflcjv',
      'jewngmdka',
      'kfxohnelc',
      'lgypiofmf',
      'mhzqjpgni',
      'niarkqhok',
      'ojbslripr',
      'gbtkdjakh'
    ],
    qid02615: [
      'cxpgftmmp',
      'dyqhgunnu',
      'ezrihvoow',
      'bwofeslof',
      'fasjiwpsx',
      'idvmlzsvf',
      'kfxonbueg',
      'hculkyuik',
      'avnedrnee',
      'ezrihvriw',
      'bwofesolf',
      'bwofesooc',
      'fasjiwssw',
      'dyqhguuhq',
      'hculkyyld',
      'ezrihvvor',
      'idvmlzzse',
      'dyqhguuue',
      'ezrihvvvi',
      'gbtkjxxxt',
      'idvmlzzza',
      'ezrihvvwf',
      'kfxonbbce',
      'mhzqpddej',
      'idvmlzzcv',
      'kfxonbbec',
      'mhzqpddgi',
      'ojbsrffir',
      'hculkyydl',
      'idvmlzzes',
      'mhzqpddig',
      'pkctsggls'
    ],
    qid02633: [
      'vqifwzisz',
      'xskhybkuk',
      'avnkbenxs',
      'bwolcfoyv',
      'ezrofirbh',
      'vqifwziyw',
      'wrjgxajza',
      'xskhybkah',
      'ytlizclbl',
      'avnkbendr',
      'bwolcfoet',
      'dyqnehqgz',
      'ezrofirhb',
      'faspgjsii',
      'ojbypsfps',
      'pkczqtgqz',
      'rmebsvisi',
      'togduxkun',
      'vqifwzmws',
      'wrjgxanxz',
      'ojbypsfsp',
      'pkczqtgtt',
      'rmebsvive',
      'togduxkxl',
      'uphevylyo',
      'xskhyboba',
      'qldaruhau',
      'snfctwjcf',
      'togduxkdk',
      'wrjgxangs'
    ],
    shenzhishoudiantong: [
      'vqiisnsyr',
      'gbttdyjhh',
      'hcuuezkil',
      'idvvfaljs',
      'mhzzjepng',
      'ojbblgrpl',
      'hcuuezkli',
      'mhzzjepqe',
      'qlddnitut',
      'lgyyidovy',
      'pkccmhszl',
      'jewwgbmwk',
      'niaakfqae',
      'lgyyidocp',
      'ojbblgrff',
      'qlddnithk',
      'rmeeojuin',
      'lgyyidodm',
      'mhzzjepeq',
      'pkccmhshg',
      'toggqlwlq',
      'uphhrmxmx',
      'niaakfqhr',
      'pkccmhsjc',
      'rmeeojulj',
      'toggqlwnp',
      'niaakfqjo',
      'qlddnitmd',
      'snffpkvok',
      'toggqlwpn'
    ],
    qid02678: [
      'faswpzigs',
      'gbtxqajhx',
      'idvzscljc',
      'jewatdmkf',
      'kfxbuenlh',
      'lgycvfomo',
      'dyqunxghe',
      'ezrvoyhii',
      'idvzsclma',
      'kfxbuenog',
      'mhzdwgpqp',
      'gbtxqajqq',
      'idvzsclsz',
      'bwoslxtff',
      'niaexhqxq',
      'gbtxqajtk',
      'idvzsclvv',
      'mhzdwgpzi',
      'gbtxqajxh',
      'jewatdmaw',
      'lgycvfocd',
      'mhzdwgpdg',
      'ojbfyirfl',
      'hcuyrbkzi',
      'jewatdmbt',
      'kfxbuencx',
      'mhzdwgpee',
      'pkcgzjshm',
      'idvzsclcj',
      'kfxbueneu'
    ],
    qid10265: [
      'kfxbueohh',
      'idvzsczsl',
      'ezrvoyihi',
      'gbtxqakjt',
      'dyqunxuqq',
      'jewatdnmd',
      'kfxbueong',
      'gbtxqaxta',
      'lgycvfpoi'
    ],
    qid10901: [
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/static/js/6jp2y7.js?pkc=hqjmlm"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/hep0.js?qldirknm=t"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/web/api/xv94kz.js?idvajc=ffj"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/source/api/co2pd7.js?jew=bkdggn"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/181l.js?kfxcle=hhu"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/openjs/source/k4nyy8.js?lgy=dmfiiy"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/static/resource/y99a.js?mhzengjj=d"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/common/res/b78j.js?nia=fohkkf"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/br79kc.js?o=jbgpilli"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/i8c2e0.js?pkchq=jmml"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/site/3xuyd.js?qldi=rknnn"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/common/openjs/bxa4.js?rmejsloo=u"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/web/site/y7gba.js?jewbk=dgmk"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/3qg2ej.js?k=fxclehno"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/szmf40.js?lgydmfio=v"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/2byjz.js?mhzeng=jpz"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/js/z1qqp3.js?nia=fohkqe"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/cyv6.js?ojbgpi=lrg"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/res/resource/xsex.js?pkchq=jmsj"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/site/65gv.js?qldirk=ntm"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/res/h7wl.js?rme=jslouo"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/wu6l.js?snfkt=mpvv"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/site/resource/7q8jb9.js?bwo=tcvecc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/17cb.js?c=xpudwfdg"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/site/hecc2o.js?dyqvexge=n"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/szdq.js?ez=rwfyhfr"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/4krr00.js?fas=xgzigw"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/web/h91x.js?gbty=hajhy"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/37ywd.js?hcu=zibkib"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/11xeb.js?i=dvajclje"></script>@@baidu2'
    ],
    qid10222: [
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/ixnau.js?c=xpupzmgm"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/openjs/source/7ig6.js?d=yqvqanhq"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/production/qecap.js?ezr=wrboiv"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/zv9zy.js?fasxscpj=x"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/static/web/jsuju.js?gbtytd=qka"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/d5u51w.js?hcu=zuerld"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/js/openjs/gynl.js?idva=vfsmf"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/common/source/2mgei.js?jewbwgtn=m"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/static/site/c62x.js?bwotoyll=c"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/web/js/rzu0c1.js?cxpupz=mmg"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/whd5.js?dy=qvqannn"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/api/common/4gjs.js?ezrwrb=oor"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/common/web/45jtul.js?fasx=scppw"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/obx2b.js?g=btytdqqy"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/92zv.js?h=cuzuerrb"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/47f7o.js?id=vavfsse"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/njjf.js?jewbwg=ttg"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/resource/wlpgr.js?kfx=cxhuun"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/common/vq2rd.js?gb=tytdqtx"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/wj3xcm.js?hcuzu=eruz"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/web/pnp0p1.js?id=vavfsvc"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/js/site/s6ykl.js?jewbwg=twf"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/api/resource/nckt1.js?kf=xcxhuxh"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/common/site/vedl.js?lgydyivy=o"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/n75wj.js?dyqvq=anue"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/resource/edagcl.js?ezr=wrbovi"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/api/auc4i.js?fasx=scpwp"></script>@@baidu2'
    ],
    qid00412: [],
    qid01390: [],
    qid02561: [],
    hbrj: [],
    qid02665: [],
    qid11099: [
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/z8ek.js?rme=eulnjl"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/production/qcrvi.js?idvalsm=fs"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/z105eo.js?kfx=cnuonx"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/res/source/03ka4.js?mhzzpgig=n"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/tfo6q.js?jewbmt=ngw"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/web/fj9e.js?lgydovpo=c"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/api/2zzne.js?idvalss=mf"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/static/js/4vuz8.js?kf=xcnuohb"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/6ei43d.js?mh=zepwqpe"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/res/qmpq.js?niafqxr=qh"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/web/dbfwx.js?lgyd=ovpid"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/web/jctlhw.js?ojbgrysr=k"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/trh10u.js?pkch=sztsm"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/site/yymv20.js?mhze=pwqjg"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/static/openjs/pir9e.js?ql=ditautt"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/viuy.js?ytlqbii=zz"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/i4ea.js?n=iafqxrkj"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/web/8qbt0.js?avn=sdkkbe"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/source/yk5c3.js?bwo=tellcl"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/gtzt.js?ojbg=rysll"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/nftgd.js?cxpuf=mmdp"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/openjs/3gsc.js?d=yqvgnneu"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/resource/9nq9n.js?pkch=sztms"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/api/0an9a.js?e=zrwhoofw"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/production/res/openjs/6ehv35.js?fasxippg=z"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/snip.js?hcuzk=rlki"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/site/atcq.js?gbtyjqqh=c"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/web/5k770.js?hc=uzkrrie"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/8bjaj7.js?idv=alsmlm"></script>@@baidu2',
      '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/5yie.js?idv=alssjl"></script>@@baidu2'
    ]
  };
  GLOBAL.Et.bdGgIds = GLOBAL.Et.bdGgObj[GLOBAL.Et.qid] || GLOBAL.Et.bdGgObj['null'];
  // 只投放搜狗广告的渠道
  GLOBAL.Et.onlySogouQid = [
    // 旧渠道号
    {
      qid: 'wifilwsq',
      ggid: '542152'
    },
    {
      qid: 'weimibrowser',
      ggid: '745021'
    },
    {
      qid: '28app',
      ggid: '745018'
    },
    {
      qid: 'yystanchuang',
      ggid: '745022'
    },
    {
      qid: 'juruan',
      ggid: '745023'
    },
    {
      qid: 'weimibrowser01',
      ggid: '745026'
    },
    {
      qid: 'weimibrowser02',
      ggid: '745027'
    },
    {
      qid: 'weimibrowser03',
      ggid: '745030'
    },
    {
      qid: 'weimipush',
      ggid: '745017'
    },
    {
      qid: 'juruan01',
      ggid: '572718'
    },
    {
      qid: 'weimillq',
      ggid: '745034'
    },
    {
      qid: 'sgllq',
      ggid: '572718'
    },
    {
      qid: 'sgllq01',
      ggid: '571797'
    },
    // 新渠道号
    {
      qid: 'qid01107',
      ggid: '542152'
    },
    {
      qid: 'qid01064',
      ggid: '745021'
    },
    {
      qid: 'qid00029',
      ggid: '745018'
    },
    {
      qid: 'qid01285',
      ggid: '745022'
    },
    {
      qid: 'qid00381',
      ggid: '745023'
    },
    {
      qid: 'qid01065',
      ggid: '745026'
    },
    {
      qid: 'qid01066',
      ggid: '745027'
    },
    {
      qid: 'qid01067',
      ggid: '745030'
    },
    {
      qid: 'qid01070',
      ggid: '745017'
    },
    {
      qid: 'qid00382',
      ggid: '572718'
    },
    {
      qid: 'qid01069',
      ggid: '745034'
    },
    {
      qid: 'qid00962',
      ggid: '572718'
    },
    {
      qid: 'qid00963',
      ggid: '571797'
    },
    {
      qid: 'qid02576',
      ggid: '966874'
    }
  ];

  GLOBAL.Et.noGgApptypeid = [
    'HNQTT',
    'JSSTT',
    'HBJTT',
    'DBHTT',
    'USATT',
    'ICANTT',
    'NCJTT',
    'JXGTT',
    'HNYTT',
    'YNYTT',
    'GDYTT',
    'GZGTT',
    'GSGTT'
  ];

  var i = 0;
  var keywords = [];
  var keywords2 = [];
  var random = parseInt(Math.random() * 10);
  var wsCache = new WebStorageCache();
  var ime = GLOBAL.Util.getQueryString('ime') && (GLOBAL.Et.qid === 'null' || GLOBAL.Et.qid === '');
  var apptypeid = GLOBAL.Util.getQueryString('apptypeid') || null;
  var ver = GLOBAL.Util.getQueryString('ver') || '';
  var verNum = Number(ver.split('.').join('')); // APP版本号 例：1.9.3 >>> 193
  var bdjssdkVer = GLOBAL.Os.ios ? 215 : 210; // 支持百度jssdk的版本号  ios:2.1.5  android:2.1.0
  var hasbdjssdk = verNum >= bdjssdkVer;
  var urlNoParams = GLOBAL.Util.getUrlNoParams();
  var urlNum = urlNoParams.substring(urlNoParams.lastIndexOf('/') + 1, urlNoParams.indexOf('.html'));
  var domain = document.domain;
  var isDfttDomain = domain.indexOf('eastday.com') > -1;

  // h5
  // 不要所有广告的渠道
  var noGgQid = [
    'qid10297',
    'qid10298',
    'qid10008',
    'qid10001',
    'qid02643',
    'qid11103',
    'oupengbro',
    'operabrower',
    'qid10651',
    'qid11097',
    'qid10787',
    'qid10306',
    'qid02687',
    'qid02568',
    'tashequ',
    'm021_wy083',
    'quannengxiangji',
    'ruyizhuomian',
    'wnktwtips1',
    'zcsh',
    'miaowu',
    'xinywl02',
    'guort',
    'kouliangapp',
    '6399',
    'xy01',
    'yysdbb',
    'fxkj',
    '569dp',
    'yylb',
    'okbxweb',
    'baxxl',
    'znthi',
    'szcm',
    'yjbe',
    'xylwifi',
    'jym',
    'lotweb',
    'juing',
    'wezh',
    'jxdm',
    'rsnet',
    'gilea',
    'yilkj01',
    '1kkkmah',
    'xy02',
    'selonger',
    'luoy',
    'czmian',
    'dhye',
    'yusa',
    'zxqdcs',
    'yysyxj',
    'nhxw',
    'zhzish',
    'ywxa',
    'suggh',
    '818ok',
    'ytx',
    'nieykj',
    'jyhui01',
    'zcwlkj',
    'xxt',
    'ydwl',
    'zhuotys',
    'zpsjnz',
    'jykj',
    'jinor',
    'moto',
    'fzhs01',
    'zpsjcj',
    'wstl',
    'dxyl',
    'txwen',
    'xzzj',
    'axnet',
    'bjrzyys01',
    'cntkj01',
    'gysp',
    'yilkj02',
    'wgwl',
    'yyqu',
    'zhaku01',
    'gdawl',
    'wpsios',
    'wpsandroid',
    'm021_wy038',
    'm021_wy003',
    'shangyewifiliu2',
    'quannengxiangji',
    'huisuoping',
    'huisuoping01',
    'bizhb',
    'qid02385',
    'motocs',
    'sportnews',
    'qid02400',
    'hjjingling02',
    'qid02142',
    'qid02248',
    'qid02415',
    'qid01015',
    'qid01813',
    'qid00933',
    'qid00948',
    'qid01133',
    'qid01291',
    'qid00855',
    'qid01187',
    'qid01337',
    'qid00403',
    'qid00048',
    'qid01388',
    'qid01284',
    'qid01405',
    'qid00045',
    'qid01392',
    'qid01412',
    'qid01377',
    'qid01488',
    'qid01466',
    'qid01415',
    'qid01491',
    'qid01433',
    'qid01497',
    'qid01524',
    'qid01504',
    'qid01535',
    'qid01528',
    'qid01556',
    'qid01552',
    'qid01520',
    'qid01494',
    'qid01599',
    'qid01389',
    'qid01588',
    'qid01577',
    'qid01573',
    'qid01430',
    'qid01425',
    'qid01600',
    'qid01590',
    'qid01581',
    'qid01490',
    'qid01496',
    'qid01561',
    'qid01419',
    'qid01614',
    'qid01507',
    'qid00385',
    'qid01669',
    'qid01697',
    'qid01691',
    'qid01457',
    'qid02154',
    'qid01714',
    'qid01533',
    'qid02211',
    'qid02196',
    'qid02178',
    'qid02201',
    'qid02238',
    'qid02150',
    'qid02246',
    'qid02145',
    'qid02124',
    'qid01569',
    'qid02269',
    'qid02199',
    'qid02206',
    'qid02210',
    'qid01671',
    'qid02256',
    'qid02298',
    'qid02149',
    'qid01138',
    'qid01137',
    'qid01768',
    'qid01733',
    'qid00969',
    'qid00933',
    'qid00324',
    'qid00325',
    'qid01707',
    'qid02358',
    'qid02368',
    'qid02149',
    'cjskzs',
    'qid01603',
    'chaojiwifi',
    'qid00162',
    'qid02472',
    'hbrj',
    'qid02581',
    'qid02653',
    'qid02654',
    'qid01122',
    'qid02679',
    'qid02686',
    'qid02690',
    'qid02667',
    'qid02707',
    'qid02698',
    'qid02708',
    'qid02705',
    'qid02762',
    'qid02734',
    'qid10204',
    'qid10264',
    'qid10933',
    'qid10054',
    'qid10053',
    'qid10814',
    'qid10272',
    'qid10785',
    'qid10794',
    'qid10795',
    'qid10838',
    'qid10849',
    'qid11082',
    'qid11085',
    'qid11086',
    'qid11096',
    'qid11101',
    'qid11107',
    'qid10753',
    'qid02575',
    'qid10825',
    'qid10826',
    'qid10261',
    'qid10322',
    'qid10793',
    'qid11111',
    'mqid11039',
    'mqid11041'
  ];

  var hours = new Date().getHours();
  if (['hksp', 'qid02181', 'qid02739', 'qid02758'].contains(GLOBAL.Et.qid) && hours > 18) {
    GLOBAL.Et.gg.ttdetails_top = null;
  }

  // 不要threefirst广告的渠道
  var noThreefirstQids = {
    qid10051: 1,
    qid10154: 1,
    qid01046: 1,
    qid01528: 1,
    qid01461: 1,
    qid02140: 1,
    qid01599: 1,
    qid00950: 1,
    qid01574: 1,
    qid02119: 1,
    qid00028: 1,
    qid02643: 1,
    qid10001: 1,
    qid10008: 1,
    qid10042: 1,
    qid00186: 1,
    qid00244: 1,
    qid00245: 1,
    qid01325: 1,
    qid01416: 1,
    qid02295: 1,
    qid01064: 1,
    qid01066: 1,
    qid01067: 1,
    qid00078: 1,
    qid00189: 1,
    qid01390: 1,
    qid00359: 1,
    qid00864: 1,
    qid00998: 1,
    qid01182: 1,
    qid01622: 1,
    qid02731: 1,
    qid10964: 1,
    qid02685: 1,
    '2345xxl': 1,
    '2345yzhbd': 1,
    qid10227: 1,
    qid10605: 1,
    qid10970: 1,
    qid10261: 1,
    gsllqandroid: 1,
    qid02651: 1,
    qid02699: 1,
    qid10932: 1,
    qid10793: 1,
    qid10048: 1,
    qid10955: 1,
    qid10965: 1,
    qid11111: 1
  };
  var threefirstObj = {
    default: {
      type: 'baidu',
      id: 'kfxelbhec',
      isempty: false,
      mark: 'u3604865'
    },
    qid10271: {
      id: 'mhzdzpewj',
      type: 'baidu'
    },
    qid10843: {
      id: 'ojbgrygfl',
      region: '上海-北京-深圳-广州',
      type: 'baidu'
    },
    qid11098: {
      id: 'niafqxjxj',
      region: '',
      type: 'baidu'
    },
    qid10286: {
      id: 'uphlxxlxl',
      region: '上海',
      type: 'baidu'
    },
    qid00977: {
      id: 'fasxggxxi',
      type: 'baidu'
    },
    shenzhishoudiantong: {
      id: 'fasxggxxi',
      type: 'baidu'
    },
    coolpadbmz: {
      id: 'ezrwriaaf',
      region: '深圳',
      type: 'baidu'
    },
    coolpadbrowser02: {
      id: 'gbtytkccq',
      region: '深圳',
      type: 'baidu'
    },
    qid02699: {
      id: 'hcuzulddu',
      region: '深圳',
      type: 'baidu'
    },
    qid02737: {
      id: 'idvavmeez',
      region: '深圳',
      type: 'baidu'
    }
  };
  if (!noThreefirstQids[GLOBAL.Et.qid]) {
    GLOBAL.Et.gg.ttdetails_threefirst = threefirstObj[GLOBAL.Et.qid] || threefirstObj['default'];
  }

  // 不要threemiddle广告的渠道
  var noThreemiddleQids = [
    'qid02561',
    '2345m',
    '2345bdxxl',
    'jlsp',
    'kuhuasuoping01',
    'bdtyald',
    'qid00020',
    'qid00018',
    'qid00359',
    'qid00412',
    'qid00901',
    'qid02263',
    'qid02665',
    'zhwnl01',
    'qid10932',
    'qid11061',
    'qid10958',
    'qid10272',
    'qid10785',
    'qid10794',
    'qid10795',
    'qid10838',
    'qid10849',
    'qid11082',
    'qid11085',
    'qid11086',
    'qid11096',
    'qid11101',
    'qid11107',
    'qid10753',
    'qid02575',
    'qid10825',
    'qid10826',
    'qid10261',
    'qid10322',
    'qid10793',
    'qid11111',
    'mqid11039',
    'mqid11041'
  ];
  if (!noThreemiddleQids.contains(GLOBAL.Et.qid)) {
    GLOBAL.Et.gg.ttdetails_threemiddle.isempty = false;
    GLOBAL.Et.gg.ttdetails_threemiddle.id = GLOBAL.Et.gg.ttdetails_threemiddle.id || 'qldariaru';
    GLOBAL.Et.gg.ttdetails_threemiddle.type = GLOBAL.Et.gg.ttdetails_threemiddle.type || 'baidu';
  }
  // 不要six下方三宫格广告的渠道
  var noImpulseGgQids = [
    'qid10960',
    'qid10941',
    'qid10936',
    'qid02651',
    'qid00364',
    'jsllq',
    'qid10764',
    'qid10287',
    'qid10153',
    'qid10051',
    'qid02700',
    'qid02576',
    'qid02734',
    'qid02697',
    'qid02561',
    'ruyizhuomian',
    'wpsandroid',
    'wpsios',
    '2345m',
    '2345daohang',
    '2345tqwap',
    '2345bdxxl',
    '2345sz',
    '2345tqw',
    '2345push',
    '28app',
    'wnwifi',
    'wifiwn',
    'vivobrowser',
    '2345yuki',
    'coolpadbrowser',
    'oppobrowser',
    'xiaozhinew',
    'xkbwifi',
    'baiducom',
    'huohoubrowser',
    'xinywl02',
    'whhflh',
    'jlsp',
    'zcsh',
    'leshimz',
    'leshikz',
    'leshird',
    'guort',
    'kuhuasuoping01',
    'schm',
    'ioswechat',
    'yybxz',
    'lymone',
    'ioswechat',
    'lsllqxxl',
    'bdtyald',
    'qid00948',
    'qid01137',
    'qid01138',
    'qid00020',
    'qid00019',
    'qid00026',
    'qid00018',
    'qid00023',
    'qid00025',
    'qid00021',
    'qid00029',
    'qid01134',
    'qid01117',
    'qid01046',
    'qid00028',
    'qid00187',
    'qid00892',
    'qid01182',
    'qid01189',
    'qid00099',
    'qid00330',
    'qid01187',
    'qid01089',
    'qid00359',
    'qid01291',
    'qid00434',
    'qid00433',
    'qid00435',
    'qid01337',
    'qid00412',
    'qid01400',
    'qid00901',
    'qid02189',
    'qid01481',
    'qid00901',
    'qid02209',
    'qid02263',
    'qid02517',
    'qid02408',
    'zhwnl01',
    'sgllq',
    'qid00962',
    'sgllq01',
    'qid00963',
    'sgllq02',
    'qid00964',
    'qid02665',
    '2345app',
    '2345iosapp',
    'huitt',
    'qid10001',
    'qid10265',
    'qid10261',
    'qid10932',
    'qid02758',
    'qid10813',
    'notfound',
    'qid11061',
    'qid10958'
  ];
  if (!noImpulseGgQids.contains(GLOBAL.Et.qid)) {
    GLOBAL.Et.gg.ttdetails_three = GLOBAL.Et.gg.ttdetails_three || {};
    GLOBAL.Et.gg.ttdetails_three.isempty = false;
    GLOBAL.Et.gg.ttdetails_three.id = GLOBAL.Et.gg.ttdetails_three.id || 'mhzwneijp';
    GLOBAL.Et.gg.ttdetails_three.type = GLOBAL.Et.gg.ttdetails_three.type || 'baidu';
  }

  // 不要bottom下方文字链广告的渠道
  var noBottomText = {
    qid10970: 1,
    qid10964: 1,
    qid02295: 1,
    lhys: 1,
    qid11061: 1,
    lelfx: 1,
    qid01416: 1,
    huitt: 1,
    sgsoso: 1,
    qid02236: 1,
    gouwudating02: 1,
    qid00253: 1,
    jlsp: 1,
    qid00359: 1,
    qid10934: 1,
    qid10032: 1,
    qid10941: 1,
    qid10947: 1,
    notfound: 1,
    qid10955: 1,
    qid02700: 1,
    qid10051: 1,
    qid10153: 1,
    qid10154: 1
  };
  if (!noBottomText[GLOBAL.Et.qid]) {
    GLOBAL.Et.gg.ttdetails_bottomtext1 = {
      type: 'baidu',
      id: 'hcuieblbz',
      isempty: false
    };
    GLOBAL.Et.gg.ttdetails_bottomtext2 = {
      type: 'baidu',
      id: 'kfxlheoeh',
      isempty: false
    };
    GLOBAL.Et.gg.ttdetails_bottomtext3 = {
      type: 'baidu',
      id: 'kfxcnllen',
      isempty: false
    };
    GLOBAL.Et.gg.ttdetails_bottomtext4 = {
      type: 'baidu',
      id: 'cxpufddyd',
      isempty: false
    };
    if (GLOBAL.Et.qid === 'null') {
      GLOBAL.Et.gg.ttdetails_bottomtext1 = {
        type: 'baidu',
        id: 'hcuieblbz',
        isempty: false,
        region: '北京'
      };
      GLOBAL.Et.gg.ttdetails_bottomtext2 = {
        type: 'baidu',
        id: 'kfxlheoeh',
        isempty: false,
        region: '北京'
      };
      GLOBAL.Et.gg.ttdetails_bottomtext3 = {
        type: 'baidu',
        id: 'kfxcnllen',
        isempty: false,
        region: '北京'
      };
      GLOBAL.Et.gg.ttdetails_bottomtext4 = {
        type: 'baidu',
        id: 'cxpufddyd',
        isempty: false,
        region: '北京'
      };
    }
  }

  // 17-12-20：部分渠道新增底部悬浮广告 暂不做进广告后台
  var bottomfloat = {
    '10086mingz': {
      type: 'baidu',
      id: 'ytlcsqllzwai',
      isempty: false
    },
    qid01580: {
      type: 'baidu',
      id: 'ytlcsqllzwai',
      isempty: false
    },
    qid02527: {
      type: 'baidu',
      id: 'idvmcazacgkcef',
      isempty: false
    },
    shenzhishoudiantong: {
      type: 'baidu',
      id: 'toglwdwlq',
      isempty: false,
      ggmark: 'float'
    }
  };
  GLOBAL.Et.gg.ttdetails_bottomfloat = bottomfloat[GLOBAL.Et.qid];

  if (
    GLOBAL.Et.qid === 'qid10005' &&
    GLOBAL.Et.userPv + 1 > 0 &&
    !filterArea(['上海', '北京', '广州', '深圳', '河北', '杭州'])
  ) {
    GLOBAL.Et.gg.ttdetails_top = {
      type: 'baidu',
      id: 'cxptmyudp',
      isempty: false
    };
  }

  // huitt渠道配置广告
  var randomGg = parseInt(Math.random() * 100);
  if (GLOBAL.Et.qid === 'huitt') {
    if (randomGg < 18) {
      GLOBAL.Et.gg.ttdetails_articledown = {
        type: 'baidu',
        isempty: false,
        id: 'jewamfgkk'
      };
      GLOBAL.Et.gg.ttdetails_six = {
        type: 'baidu',
        id: 'ojbfrklpg',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_threeup = {
        type: 'baidu',
        id: 'rmeiunoso',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_threemiddle = {
        type: 'baidu',
        id: 'ojbfrklsf',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_threedown = {
        type: 'baidu',
        id: 'rmeiunovn',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_bottom = {
        type: 'baidu',
        id: 'lgycohivm',
        isempty: false
      };
      GLOBAL.Et.bdGgIds = [
        'niaeqjkxx',
        'pkcgslmzg',
        'qldhtmnai',
        'togkwpqdq',
        'pkcgslmcc',
        'snfjvopfm',
        'niaeqjkeo',
        'pkcgslmgz',
        'rmeiunoii'
      ];
    }
    if (GLOBAL.Os.ios) {
      GLOBAL.Et.gg.ttdetails_articledown = {
        type: 'baidu',
        isempty: false,
        id: 'dyqvqhnvx'
      };
      GLOBAL.Et.gg.ttdetails_six = {
        type: 'baidu',
        id: 'ezrwriowa',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_threeup = {
        type: 'baidu',
        id: 'avnsnekku',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_threemiddle = {
        type: 'baidu',
        id: 'bwotofllx',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_threedown = {
        type: 'baidu',
        id: 'ytllbsvbv',
        isempty: false
      };
      GLOBAL.Et.gg.ttdetails_bottom = {
        type: 'baidu',
        id: 'fasxsjpxc',
        isempty: false
      };
      GLOBAL.Et.bdGgIds = [
        'xskkaruat',
        'cxpupgmmz',
        'dyqvqhnng',
        'ojbbrilkp',
        'uphmhyehv',
        'vqinizfiz',
        'wrjojagjg',
        'xskpkbhkk',
        'ytlqlcilp',
        'avnsnekns',
        'bwotoflov',
        'cxpupgmpy',
        'dyqvqhnqa',
        'ezrwriorh',
        'vqinizfmw',
        'wrjojagna',
        'xskpkbhoh',
        'ytlqlcipl',
        'avnsnekrr',
        'bwotoflst',
        'cxpupgmtw',
        'dyqvqhnuz',
        'ezrwriovb',
        'fasxsjpwi',
        'wrjojagox',
        'xskpkbhpb',
        'ytlqlciqi',
        'avnsneksn',
        'bwotoflts',
        'cxpupgmuu'
      ];
    }
  }

  if (GLOBAL.Et.qid === 'txxl' && filterArea(['四川'])) {
    GLOBAL.Et.bdGgIds = {};
    GLOBAL.Et.gg.ttdetails_bottomtext1 = null;
    GLOBAL.Et.gg.ttdetails_bottomtext2 = null;
    GLOBAL.Et.gg.ttdetails_bottomtext3 = null;
    GLOBAL.Et.gg.ttdetails_bottomtext4 = null;
  }

  if (GLOBAL.Et.qid === 'ccllq') {
    GLOBAL.Et.gg.ttdetails_threeup = {
      type: '360',
      id: '6hlSl4',
      // id: 'coDKeS', // 测试用的多图id：coDKeS 单图id：dujNK0
      backup: GLOBAL.Et.gg.ttdetails_threeup
    };
  }
  if (GLOBAL.Et.qid === 'qid11099') {
    GLOBAL.Et.gg.ttdetails_threeup = {
      type: '360',
      id: 'MdjhRp',
      backup: GLOBAL.Et.gg.ttdetails_threeup
    };
  }
  // qid10001渠道 根据访问深度使用不同广告
  if (GLOBAL.Et.qid === 'qid10001') {
    if (random < 5) {
      GLOBAL.Et.bdGgIds = ['qldhnmnnr', 'dyqunxhnz', 'faswpzwcg', 'togkqpqqg', 'ezrvoyiob', 'ojbfyiflr'];
      if (GLOBAL.Et.userPv < 5) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu',
            id: 'kfxbcobgh',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu',
            id: 'gbtxykxdt',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu',
            id: 'kfxbcobhg',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu',
            id: 'faswxjwij',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu',
            id: 'rmeionole',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu',
            id: 'niaefreqq',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 10) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu',
            id: 'lgycdpcho',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu',
            id: 'hcuyzlyey',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu',
            id: 'lgycdpcii',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu',
            id: 'gbtxykxjq',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu',
            id: 'xskoutura',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu',
            id: 'vqimnznww',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 15) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu',
            id: 'dyquvhuae',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu',
            id: 'idvzamzfa',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu',
            id: 'mhzdeqdjp',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu',
            id: 'hcuyzlyku',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu',
            id: 'uphlrqrqm',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu',
            id: 'wrjnoaoxa',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 20) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu',
            id: 'faswxjwcp',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu',
            id: 'jewabnagd',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu',
            id: 'ezrvwivhf',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu',
            id: 'idvzamzlz',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu',
            id: 'wrjntstss',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu',
            id: 'xskopbpyh',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 25) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu',
            id: 'gbtxykyqd',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu',
            id: 'hcuyzlzrk',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu',
            id: 'ytlpqcqlz',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu',
            id: 'avnrsesne',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu',
            id: 'xskoututu',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu',
            id: 'cxptugupp',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else {
        var randomSG = parseInt(Math.random() * 10);
        if (randomSG < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '9080139566977343',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '979356',
              isempty: false,
              mark: '',
              region: '',
              height: '20:12'
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '979357',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '979358',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '979359',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '979360',
              isempty: false,
              mark: '80',
              region: '',
              height: ''
            }
          };
          GLOBAL.Et.bdGgIds = [
            'niafofeqq@@baidu',
            'sg979361@@sougou',
            'sg979362@@sougou',
            'sg979363@@sougou',
            'sg979364@@sougou',
            'sg979365@@sougou'
          ];
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '9080139566977343',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '972440',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '972442',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '972443',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '972444',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '972445',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
          GLOBAL.Et.bdGgIds = [
            'sg972483@@sougou',
            'sg972484@@sougou',
            'sg972485@@sougou',
            'sg972486@@sougou',
            'sg972487@@sougou',
            'sg972488@@sougou'
          ];
        }
      }
    } else {
      var randomGDT = parseInt(Math.random() * 10);
      if (GLOBAL.Et.userPv < 25) {
        if (randomGDT < 5) {
          GLOBAL.Et.bdGgIds = [
            'sg979397@@sougou',
            'sg979398@@sougou',
            'sg979399@@sougou',
            'sg979401@@sougou',
            'sg979402@@sougou',
            'sg979404@@sougou'
          ];
        } else {
          GLOBAL.Et.bdGgIds = [
            'sg972489@@sougou',
            'sg972490@@sougou',
            'sg972491@@sougou',
            'sg972492@@sougou',
            'sg972493@@sougou',
            'sg972494@@sougou'
          ];
        }
      }
      if (GLOBAL.Et.userPv < 5) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '7060430577697931',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '979366',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '979371',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '979372',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '979373',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '979374',
              isempty: false,
              mark: '80',
              region: '',
              height: ''
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '7060430577697931',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '972447',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '972470',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '972469',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '972468',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '972471',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 10) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '2010139598006051',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '979367',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '979375',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '979376',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '979377',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '979380',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '2010139598006051',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '972452',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '972465',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '972466',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '972467',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '972472',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 15) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '4050932578308150',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '979368',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '979379',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '979382',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '979383',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '979384',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '4050932578308150',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '972453',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '972462',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '972463',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '972464',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '972473',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 20) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '4050932578308150',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '979369',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '979385',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '979387',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '979389',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '979390',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '9060939518804136',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '972454',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '972459',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '972460',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '972461',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '972474',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 25) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '2020035508706222',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '979370',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '979392',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '979393',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '979394',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '979396',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'gdt',
              id: '2020035508706222',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '972455',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '972456',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '972457',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '972458',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '972475',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else {
        noGgQid.push('qid10001');
        // GLOBAL.Et.gg = {};
      }
    }
  }

  if (GLOBAL.Et.qid === 'qid10850') {
    if (random < 5) {
      GLOBAL.Et.bdGgIds = [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/site/bh8s.js?o=jbgkfrgb"></script>@@baidu2',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/iwbcv1.js?qldimh=tii"></script>@@baidu2',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/ldus9.js?rme=jniujl"></script>@@baidu2',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/openjs/t7jh.js?pkch=lgshg"></script>@@baidu2',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/api/v5xl.js?toglpkw=lq"></script>@@baidu2',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/resource/ld2d.js?sn=fkojvko"></script>@@baidu2'
      ];
      if (GLOBAL.Et.userPv < 5) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/w0s8.js?o=jbgkfrpl"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/2ll4bf.js?hcuz=dykli"></script>',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/source/openjs/production/gnirc.js?idvaezl=mm"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/common/83g958.js?kf=xcgbnox"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/production/site/qyf0.js?m=hzeidpqe"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/production/res/92qwh.js?n=iafjeqrh"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 10) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/web/arsyn.js?qldimht=ut"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/production/2j46.js?lgydhco=vy"></script>',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/source/openjs/common/sgsm.js?pkchlgsz=l"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/common/site/production/wccb.js?kf=xcgbnxo"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/openjs/3x05.js?r=mejniueo"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/site/gtadui.js?mhze=idpdw"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 15) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/res/h1kc.js?idvaezl=sj"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/common/resource/k20g1y.js?mhz=eidpwd"></script>',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/site/production/res/98ws.js?qldimhta=n"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/site/xsux.js?lgydhc=oyv"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/common/web/rbd8.js?snfkojvf=v"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/o4rp2.js?niafjeq=ea"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 20) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/api/0h0fxz.js?jewbf=amtn"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/production/q3tph.js?niaf=jeqxf"></script>',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/common/0rbjl.js?rmejni=ubu"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/site/wzcpx.js?mhz=eidpzz"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/source/production/web/k0eo.js?kfxcgb=nbl"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/bkw3.js?oj=bgkfrff"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else if (GLOBAL.Et.userPv < 25) {
        GLOBAL.Et.gg = {
          ttdetails_top: {
            type: 'baidu',
            id: '',
            isempty: true,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_articledown: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/common/res/5bgofo.js?kfxcgb=nuu"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_six: {
            type: 'baidu2',
            id:
              '<script type="text/javascript" src="//sh996.dftoutiao.com/production/static/yfmg.js?oj=bgkfryi"></script>',
            isempty: false,
            mark: 'big',
            region: '',
            height: ''
          },
          ttdetails_threeup: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/js/wy7rpn.js?jew=bfamwk"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threemiddle: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/site/api/5fwtx.js?nia=fjeqae"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_threedown: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/source/api/a1vxx.js?lgydhco=cp"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          },
          ttdetails_bottom: {
            type: 'baidu2',
            id: '<script type="text/javascript" src="//sh996.dftoutiao.com/site/8yn0.js?pkch=lgsgh"></script>',
            isempty: false,
            mark: '',
            region: '',
            height: ''
          }
        };
      } else {
        randomSG = parseInt(Math.random() * 10);
        if (randomSG < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993461',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993470',
              isempty: false,
              mark: '',
              region: '',
              height: '20:12'
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993478',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993479',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993480',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993481',
              isempty: false,
              mark: '80',
              region: '',
              height: ''
            }
          };
          GLOBAL.Et.bdGgIds = [
            '993462@@sougou',
            '993482@@sougou',
            '993483@@sougou',
            '993484@@sougou',
            '993485@@sougou',
            '993486@@sougou'
          ];
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993378',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993404',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993410',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993411',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993412',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993447',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
          GLOBAL.Et.bdGgIds = [
            'sg993413@@sougou',
            'sg993414@@sougou',
            'sg993415@@sougou',
            'sg993416@@sougou',
            'sg993417@@sougou',
            'sg993418@@sougou'
          ];
        }
      }
    } else {
      randomGDT = parseInt(Math.random() * 10);
      if (GLOBAL.Et.userPv < 25) {
        if (randomGDT < 5) {
          GLOBAL.Et.bdGgIds = [
            'sg993433@@sougou',
            'sg993431@@sougou',
            'sg993430@@sougou',
            'sg993429@@sougou',
            'sg993426@@sougou',
            'sg993423@@sougou'
          ];
        } else {
          GLOBAL.Et.bdGgIds = [
            'sg993477@@sougou',
            'sg993507@@sougou',
            'sg993508@@sougou',
            'sg993509@@sougou',
            'sg993510@@sougou',
            'sg993651@@sougou'
          ];
        }
      }
      if (GLOBAL.Et.userPv < 5) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993381',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993405',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993419',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993420',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993421',
              isempty: false,
              mark: '120',
              region: '',
              height: ''
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993446',
              isempty: false,
              mark: '80',
              region: '',
              height: ''
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993463',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993471',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993487',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993488',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993489',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993490',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 10) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993383',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993406',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993422',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993424',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993425',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993445',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993465',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993472',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993491',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993492',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993493',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993494',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 15) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993384',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993407',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993427',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993428',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993432',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993444',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993466',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993475',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993495',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993496',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993497',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993498',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 20) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993386',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993408',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993435',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993436',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993438',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993443',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993467',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993473',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993499',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993500',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993501',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993502',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else if (GLOBAL.Et.userPv < 25) {
        if (randomGDT < 5) {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'gdt',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993388',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993409',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993439',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993441',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993442',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993437',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        } else {
          GLOBAL.Et.gg = {
            ttdetails_top: {
              type: 'sougou',
              id: '',
              isempty: true,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_articledown: {
              type: 'sougou',
              id: '993468',
              isempty: false,
              mark: '',
              region: '',
              height: ''
            },
            ttdetails_six: {
              type: 'sougou',
              id: '993476',
              isempty: false,
              mark: '20:12',
              region: '',
              height: ''
            },
            ttdetails_threeup: {
              type: 'sougou',
              id: '993503',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threemiddle: {
              type: 'sougou',
              id: '993504',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_threedown: {
              type: 'sougou',
              id: '993505',
              isempty: false,
              mark: '',
              region: '',
              height: '120'
            },
            ttdetails_bottom: {
              type: 'sougou',
              id: '993506',
              isempty: false,
              mark: '',
              region: '',
              height: '80'
            }
          };
        }
      } else {
        noGgQid.push('qid10850');
        // GLOBAL.Et.gg = {};
      }
    }
  }

  // qid02737渠道 mop域名单独配置搜狗广告
  if (GLOBAL.Et.qid === 'qid02737' && !isDfttDomain) {
    GLOBAL.Et.gg = {
      ttdetails_top: {
        type: 'sougou',
        id: '982301',
        isempty: false,
        mark: '',
        region: '',
        height: '20:5'
      },
      ttdetails_articledown: {
        type: 'sougou',
        id: '982304',
        isempty: false,
        mark: '',
        region: '',
        height: '80'
      },
      ttdetails_six: {
        type: 'sougou',
        id: '982308',
        isempty: false,
        mark: '',
        region: '',
        height: '20:12'
      },
      ttdetails_three: {
        type: 'sougou',
        id: '982310',
        isempty: false,
        mark: '',
        region: '',
        height: '120'
      },
      ttdetails_threeup: {
        type: 'sougou',
        id: '982312',
        isempty: false,
        mark: '',
        region: '',
        height: '120'
      },
      ttdetails_threemiddle: {
        type: 'sougou',
        id: '982329',
        isempty: false,
        mark: '',
        region: '',
        height: '120'
      },
      ttdetails_threedown: {
        type: 'sougou',
        id: '982330',
        isempty: false,
        mark: '',
        region: '',
        height: '120'
      },
      ttdetails_bottom: {
        type: 'sougou',
        id: '982374',
        isempty: false,
        mark: '',
        region: '',
        height: '80'
      }
    };
    GLOBAL.Et.bdGgIds = [
      'sg982366@@sougou',
      'sg982367@@sougou',
      'sg982368@@sougou',
      'sg982369@@sougou',
      'sg982370@@sougou',
      'sg982371@@sougou',
      'sg982372@@sougou',
      'sg982373@@sougou',
      'sg982375@@sougou',
      'sg982376@@sougou',
      'sg982377@@sougou',
      'sg982332@@sougou'
    ];
  }
  // 详情页底部新闻变为6条广告
  GLOBAL.Et.hotNewsBeGg = {
    qid10765: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/rc1a1a.js?avns=sbkbw"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/common/resource/tu4e2g.js?bwott=clcy"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/azqm.js?cxpu=udmdf"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/res/static/g4qkn.js?togllu=dxu"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/web/res/yo5uvh.js?uphmmve=yy"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/v2t6ew.js?vqinnwfz=f"></script>'
      ],
      area: []
    },
    qid10260: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/res/wmze.js?kfxcxeex=e"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/static/9x9nz.js?l=gydyffyh"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/production/openjs/5jghg.js?mhz=ezggzj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/02zv9o.js?niafah=haq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/common/res/nws7uu.js?fa=sxszzwg"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/web/d41vn.js?gb=tytaaxk"></script>'
      ],
      area: []
    },
    qid10770: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/resource/5hz0a.js?hcu=zubbyr"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/xi4ct.js?idvav=cczv"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/web/site/8ae41.js?jewbwdda=a"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/res/web/ccrn.js?kf=xcxeebc"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/production/l1br.js?lgyd=yffcf"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/web/1kmet.js?mh=zezggdi"></script>'
      ],
      area: []
    },
    qid02723: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/web/828r.js?lgydcphd=i"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/js/res/mwy0.js?mhz=edqiep"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/openjs/js/umsy.js?ezrwv=iayf"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/pq6efo.js?fa=sxwjbzj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/js/source/zkpb9b.js?g=btyxkcaq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/web/source/4az84w.js?hcuz=yldbu"></script>'
      ],
      area: []
    },
    smcn: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/production/static/utkrj.js?jewb=anfdb"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/js/common/w64h.js?kfxcbog=ee"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/common/epwb.js?l=gydcphfh"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/web/oyjc2k.js?mhzedq=igj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/ml5p4o.js?ni=aferjhq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/6q2pbd.js?fasxwj=bbg"></script>'
      ],
      area: []
    },
    smrc: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/source/js/0icxmy.js?nia=ferjjk"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/openjs/web/imu46.js?ojb=gfskkr"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/72ecp6.js?gbt=yxkcdh"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/production/4lvy1.js?hcu=zyldel"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/resource/openjs/xe8x.js?idv=azmefs"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/source/v0uk.js?jewbanfg=w"></script>'
      ],
      area: []
    },
    qid10226: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/resource/8rgb4.js?k=fxcboghb"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/openjs/lv6pa.js?l=gydcphid"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/resource/qi7j.js?mhzedq=ijg"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/5c87.js?niafer=jkj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/lz9j.js?ojbgfsk=ll"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/openjs/z1t3m4.js?pkchgtlm=s"></script>'
      ],
      area: []
    },
    qid02421: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/static/lxj4g2.js?hc=uzyldki"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/js/iwgv.js?idva=zmelm"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/68dn4.js?jew=banfmt"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/site/api/isun.js?kfxcbog=nx"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/1qkzh2.js?l=gydcphoc"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/resource/j6sxe4.js?mhzedqip=e"></script>'
      ],
      area: []
    },
    coolpadbmz: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/js/resource/2w5ak.js?ezrwvi=bwf"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/common/static/edgzp.js?fasxwjc=xj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/ncms5.js?gbtyx=kdyq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/vpjw7.js?hcuzylez=u"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/r7na3.js?idvaz=mfaz"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/static/g34o.js?jewbangb=b"></script>'
      ],
      area: ['深圳']
    },
    coolpadbrowser02: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/js/api/mquh.js?n=iaferkfq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/res/api/amgq.js?fa=sxwjczg"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/kader3.js?gbtyx=kdak"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/static/zdypj.js?hc=uzylebr"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/mt3y.js?id=vazmfcv"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/res/site/b5xy4o.js?jewb=angda"></script>'
      ],
      area: ['深圳']
    },
    qid02699: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/4yhb.js?mhze=dqjje"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/sx42g.js?nia=ferkkh"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/site/vl6830.js?ojbg=fsllk"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/common/openjs/nqxj.js?pkchgtmm=m"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/plotp6.js?qldihu=nnt"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/p0st.js?idvazmfl=j"></script>'
      ],
      area: ['深圳']
    },
    qid02737: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/ii6ddw.js?qldihun=tn"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/i0ke.js?r=mejivouu"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/resource/sswi.js?avn=sredbb"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/js/p9djp.js?bwots=fecf"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/j12b.js?cxputgf=dm"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/js/source/yhzs.js?dyqvuhg=eq"></script>'
      ],
      area: ['深圳']
    },
    qid00962: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/58qu4.js?gb=tyydhak"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/source/res/9qe6.js?hcu=zzeibr"></script >',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/6r8p.js?idvaafjc=v"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/site/u3x88.js?j=ewbbgkda"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/my7g7.js?kfxcc=hlec"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/58df9.js?lgyddimf=f"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    sgllq: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/58qu4.js?gb=tyydhak"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/source/res/9qe6.js?hcu=zzeibr"></script >',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/6r8p.js?idvaafjc=v"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/site/u3x88.js?j=ewbbgkda"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/production/my7g7.js?kfxcc=hlec"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/58df9.js?lgyddimf=f"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    qid02439: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/res/hllr9.js?m=hzeejndp"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/3aem.js?ezrwwbf=wf"></script >',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/site/bo5jyu.js?fasx=xcgxj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/xuo5tb.js?gbtyydh=yq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/ks649y.js?hcu=zzeizu"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/b2338.js?idv=aafjaz"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    qid02610: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/js/7l0a.js?jewbb=gkbb"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/api/sl0n9c.js?kfxcchlc=e"></script >',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/openjs/qoyyx.js?lgy=ddimdh"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/8l32ws.js?mhze=ejnej"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/static/6960b.js?niaffk=ofq"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/7cvp6.js?fasx=xcgzg"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    qid00963: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/7kiy.js?mhzeejng=i"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/common/9bqa.js?n=iaffkohk"></script >',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/q9eeez.js?ojbgg=lpir"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/tcch7.js?gbty=ydhch"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/utca.js?hc=uzzeidl"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/dnf2.js?idva=afjes"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    sgllq01: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/7kiy.js?mhzeejng=i"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/common/9bqa.js?n=iaffkohk"></script >',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/api/q9eeez.js?ojbgg=lpir"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/source/tcch7.js?gbty=ydhch"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/utca.js?hc=uzzeidl"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/dnf2.js?idva=afjes"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    sgllq02: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/openjs/zn266k.js?je=wbbgkfw"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/mbsh.js?kf=xcchlgb"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/openjs/sm0d.js?lgy=ddimhd"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/r9ftze.js?mh=zeejnig"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/5odas.js?niaf=fkojj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/abrb.js?ojbgglp=kl"></script>'
      ],
      area: ['北京', '上海', '广州']
    },
    qid00964: {
      id: [
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/openjs/zn266k.js?je=wbbgkfw"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/source/mbsh.js?kf=xcchlgb"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/openjs/sm0d.js?lgy=ddimhd"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/production/r9ftze.js?mh=zeejnig"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/common/5odas.js?niaf=fkojj"></script>',
        '<script type="text/javascript" src="//sh996.dftoutiao.com/site/abrb.js?ojbgglp=kl"></script>'
      ],
      area: ['北京', '上海', '广州']
    }
  };

  // app
  // 配置百度jssdk广告
  try {
    if (hasbdjssdk) {
      var bdjssdkData = {
        dfh5null: {
          articledown: '5946626',
          threeup: '5946636',
          threemiddle: '5947262',
          threedown: '5947361'
        },
        dfh5dftt_ewmst1: {
          threecl: '5994740@@one'
        },
        dfh5xiaomi: {
          threecl: '6004397@@one'
        },
        dfh500001: {
          articledown: '5946638',
          threeup: '5946671',
          threemiddle: '5947294',
          threedown: '5947370'
        },
        dfh5cqlxgdt_cpc01: {
          articledown: '5946658',
          threeup: '5946693',
          threemiddle: '5947302',
          threedown: '5947381'
        },
        dfh5wzshare: {
          articledown: '5946660',
          threeup: '5946696',
          threemiddle: '5947305',
          threedown: '5947382'
        },
        dfh5dfttyq_hb10: {
          articledown: '5946664',
          threeup: '5946699',
          threemiddle: '5947307',
          threedown: '5947384'
        },
        dfh5cqlxgdt_cpc04: {
          articledown: '5946668',
          threeup: '5946701',
          threemiddle: '5947308',
          threedown: '5947385'
        },
        dfh5wifi_ncnews: {
          articledown: '5946670',
          threeup: '5946703',
          threemiddle: '5947310',
          threedown: '5947386'
        },
        dfh5js_up01: {
          articledown: '5946680',
          threeup: '5946712',
          threemiddle: '5947313',
          threedown: '5947391'
        },
        dfh5dfttyq02_h5: {
          articledown: '5946682',
          threeup: '5946713',
          threemiddle: '5947314',
          threedown: '5947393'
        },
        dfh5jfyyb_cpd16: {
          articledown: '5946689',
          threeup: '5946714',
          threemiddle: '5947316',
          threedown: '5947394'
        },
        dfh5xstg007: {
          articledown: '5946691',
          threeup: '5946724',
          threemiddle: '5947318',
          threedown: '5947396'
        },
        dfh5hxte_h5: {
          articledown: '5946692',
          threeup: '5946726',
          threemiddle: '5947319',
          threedown: '5947398'
        },
        dfh5wxq_st1: {
          articledown: '5946702',
          threeup: '5946733',
          threemiddle: '5947321',
          threedown: '5947408'
        },
        dfh5360osyz_scq02: {
          articledown: '5946711',
          threeup: '5946737',
          threemiddle: '5947323',
          threedown: '5947415'
        },
        dfh5jinlisun01: {
          articledown: '5946719',
          threeup: '5946739',
          threemiddle: '5947324',
          threedown: '5947416'
        },
        dfh5hcxzz_cpa02: {
          articledown: '5946725',
          threeup: '5946746',
          threemiddle: '5947325',
          threedown: '5947417'
        },
        dfh5bwwifi_cpc07: {
          articledown: '5946732',
          threeup: '5946750',
          threemiddle: '5947326',
          threedown: '5947418'
        },
        dfh5bwwifi_cpc08: {
          articledown: '5946734',
          threeup: '5946752',
          threemiddle: '5947328',
          threedown: '5947426'
        },
        dfh5bwwifi_cpc09: {
          articledown: '5946736',
          threeup: '5946758',
          threemiddle: '5947331',
          threedown: '5947427'
        },
        dfh5pyq_st1: {
          articledown: '5946738',
          threeup: '5946760',
          threemiddle: '5947332',
          threedown: '5947428'
        },
        dfh5jfyyb_cpd01: {
          articledown: '5946740',
          threeup: '5946766',
          threemiddle: '5947335',
          threedown: '5947429'
        },
        dfh5jfyyb_cpd03: {
          articledown: '5946745',
          threeup: '5946768',
          threemiddle: '5947336',
          threedown: '5947430'
        },
        dfh5jfyyb_cpd08: {
          articledown: '5946747',
          threeup: '5946770',
          threemiddle: '5947338',
          threedown: '5947431'
        },
        dfh5bwwifi_cpc06: {
          articledown: '5946751',
          threeup: '5946772',
          threemiddle: '5947339',
          threedown: '5947432'
        },
        dfh5jfyyb_cpd18: {
          articledown: '5946753',
          threeup: '5946774',
          threemiddle: '5947340',
          threedown: '5947433'
        },
        dfh5jfyyb_cpd21: {
          articledown: '5946759',
          threeup: '5946776',
          threemiddle: '5947341',
          threedown: '5947447'
        },
        dfh5jfyyb_cpd22: {
          articledown: '5946763',
          threeup: '5946779',
          threemiddle: '5947346',
          threedown: '5947449'
        },
        dfh5jfyyb_cpd23: {
          articledown: '5946767',
          threeup: '5946781',
          threemiddle: '5947348',
          threedown: '5947453'
        },
        dfh5tuia_cpc02: {
          articledown: '5946769',
          threeup: '5946782',
          threemiddle: '5947351',
          threedown: '5947455'
        },
        dfh5tuia_cpc03: {
          articledown: '5946771',
          threeup: '5946783',
          threemiddle: '5947352',
          threedown: '5947457'
        },
        dfh5dm_cpc01: {
          articledown: '5946773',
          threeup: '5946784',
          threemiddle: '5947353',
          threedown: '5947459'
        },
        dfh5cqlxgdt_cpc02: {
          articledown: '5946775',
          threeup: '5946785',
          threemiddle: '5947354',
          threedown: '5947461'
        },
        dfh5cqlxgdt_cpc05: {
          articledown: '5946777',
          threeup: '5946787',
          threemiddle: '5947355',
          threedown: '5947463'
        },
        dfh5kylb_cpc01: {
          articledown: '5946778',
          threeup: '5946789',
          threemiddle: '5947356',
          threedown: '5947465'
        },
        dfh5tuia_cpc04: {
          articledown: '5946780',
          threeup: '5946837',
          threemiddle: '5947358',
          threedown: '5947468'
        },
        dfh5tuia_cpc01: {
          articledown: '5946786',
          threeup: '5946839',
          threemiddle: '5947359',
          threedown: '5947472'
        },
        dfh5lenovomm: {
          articledown: '5946788',
          threeup: '5946840',
          threemiddle: '5947360',
          threedown: '5947474'
        },
        dfh5360os_push: {
          articledown: '5946836',
          threeup: '5946842',
          threemiddle: '5947477',
          threedown: '5947870'
        },
        dfh5dftt_ewmst: {
          articledown: '5946838',
          threeup: '5946844',
          threemiddle: '5947481',
          threedown: '5947871'
        },
        dfh5cqlxgdt_cpc03: {
          articledown: '5946841',
          threeup: '5946849',
          threemiddle: '5947484',
          threedown: '5947874'
        },
        dfh5yybgdt_cpc09: {
          articledown: '5946843',
          threeup: '5946853',
          threemiddle: '5947488',
          threedown: '5947875'
        },
        dfh5jfyyb_cpd04: {
          articledown: '5946845',
          threeup: '5946856',
          threemiddle: '5947490',
          threedown: '5947876'
        },
        dfh5jfyyb_cpd02: {
          articledown: '5946846',
          threeup: '5946858',
          threemiddle: '5947492',
          threedown: '5947878'
        },
        dfh5jfyyb_cpd07: {
          articledown: '5946847',
          threeup: '5946873',
          threemiddle: '5947495',
          threedown: '5947879'
        },
        dfh5jfyyb_cpd05: {
          articledown: '5946848',
          threeup: '5946874',
          threemiddle: '5947497',
          threedown: '5947880'
        },
        dfh5jfyyb_cpd09: {
          articledown: '5946850',
          threeup: '5946876',
          threemiddle: '5947500',
          threedown: '5947882'
        },
        dfh5cqlxgdt_cpc11: {
          articledown: '5946857',
          threeup: '5946877',
          threemiddle: '5947501',
          threedown: '5947883'
        },
        dfh5jfyyb_cpd15: {
          articledown: '5946875',
          threeup: '5946880',
          threemiddle: '5947502',
          threedown: '5947885'
        },
        dfh5defaulth5: {
          articledown: '5946878',
          threeup: '5946882',
          threemiddle: '5947505',
          threedown: '5947886'
        },
        dfh5360osshoutu: {
          articledown: '5946879',
          threeup: '5946884',
          threemiddle: '5947511',
          threedown: '5947888'
        },
        dfh5js_up02: {
          articledown: '5946881',
          threeup: '5946886',
          threemiddle: '5947516',
          threedown: '5947889'
        },
        dfh5js_up04: {
          articledown: '5946883',
          threeup: '5946888',
          threemiddle: '5947518',
          threedown: '5947890'
        },
        dfh5yxh5_xz11011: {
          articledown: '5946885',
          threeup: '5946890',
          threemiddle: '5947520',
          threedown: '5947891'
        },
        dfh5wechat_ewm_dsf1: {
          articledown: '5946900',
          threeup: '5946894',
          threemiddle: '5947529',
          threedown: '5947899'
        },
        dfh5jinlisun: {
          articledown: '5946902',
          threeup: '5946895',
          threemiddle: '5947531',
          threedown: '5947900'
        },
        dfh5dm_cpc03: {
          articledown: '5946903',
          threeup: '5946896',
          threemiddle: '5947533',
          threedown: '5947901'
        },
        dfh5dfact0021: {
          articledown: '5946908',
          threeup: '5946899',
          threemiddle: '5947539',
          threedown: '5947908'
        },
        dfh5pclixinshout_011: {
          articledown: '5946911',
          threeup: '5946904',
          threemiddle: '5947543',
          threedown: '5947912'
        },
        dfh5PC_hongbao6661: {
          articledown: '5946913',
          threeup: '5946905',
          threemiddle: '5947547',
          threedown: '5947915'
        },
        dfh5newyear_za1: {
          articledown: '5946915',
          threeup: '5946907',
          threemiddle: '5947549',
          threedown: '5947916'
        },
        dfh5appchina: {
          articledown: '5946922',
          threeup: '5946914',
          threemiddle: '5947555',
          threedown: '5947926'
        },
        dfh5h5_ydqw: {
          articledown: '5946927',
          threeup: '5946919',
          threemiddle: '5947563',
          threedown: '5947983'
        },
        dfh5gf_d1: {
          articledown: '5946929',
          threeup: '5946921',
          threemiddle: '5947567',
          threedown: '5947992'
        },
        dfh5yqhy_h5: {
          articledown: '5946930',
          threeup: '5946924',
          threemiddle: '5947573',
          threedown: '5947995'
        },
        dfh5eightrp_zc1: {
          articledown: '5946932',
          threeup: '5946926',
          threemiddle: '5947575',
          threedown: '5948000'
        },
        dfh5wxq_st: {
          articledown: '5946934',
          threeup: '5946928',
          threemiddle: '5947577',
          threedown: '5948005'
        },
        dfh5lucky_zd1: {
          articledown: '5946936',
          threeup: '5946931',
          threemiddle: '5947579',
          threedown: '5948006'
        },
        dfh5gf1X: {
          articledown: '5946940',
          threeup: '5946935',
          threemiddle: '5947585',
          threedown: '5948009'
        },
        dfh5gf1Z: {
          articledown: '5946942',
          threeup: '5946937',
          threemiddle: '5947588',
          threedown: '5948010'
        },
        dfh5pyq_st: {
          articledown: '5946948',
          threeup: '5946941',
          threemiddle: '5947594',
          threedown: '5948012'
        },
        dfh5js_dfttup: {
          articledown: '5946950',
          threeup: '5946943',
          threemiddle: '5947597',
          threedown: '5948014'
        },
        dfh5zbs_waphb: {
          articledown: '5946952',
          threeup: '5946944',
          threemiddle: '5947598',
          threedown: '5948015'
        },
        dfh5christmas_g1: {
          articledown: '5946956',
          threeup: '5946945',
          threemiddle: '5947601',
          threedown: '5948020'
        },
        dfh5eastnews: {
          articledown: '5946958',
          threeup: '5946947',
          threemiddle: '5947603',
          threedown: '5948023'
        },
        dfh5dfttyq_hb: {
          articledown: '5946959',
          threeup: '5946949',
          threemiddle: '5947605',
          threedown: '5948024'
        },
        dfh5guangdiantong_updsp: {
          articledown: '5946960',
          threeup: '5946951',
          threemiddle: '5947607',
          threedown: '5948025'
        },
        dfh5h5null_hb: {
          articledown: '5946961',
          threeup: '5946953',
          threemiddle: '5947608',
          threedown: '5948026'
        },
        dfh5message1: {
          articledown: '5946962',
          threeup: '5946954',
          threemiddle: '5947611',
          threedown: '5948027'
        },
        dfh5360osyz_scq14: {
          articledown: '5946963',
          threeup: '5946955',
          threemiddle: '5947615',
          threedown: '5948029'
        },
        dfh5pc_wenzilj1: {
          articledown: '5946964',
          threeup: '5946957',
          threemiddle: '5947619',
          threedown: '5948030'
        },
        dfh5xstg039: {
          articledown: '5946965',
          threeup: '5947443',
          threemiddle: '5947622',
          threedown: '5948031'
        },
        dfh5tptb0021: {
          articledown: '5946967',
          threeup: '5947445',
          threemiddle: '5947628',
          threedown: '5948033'
        },
        dfh5pc_wenzilj021: {
          articledown: '5946970',
          threeup: '5947446',
          threemiddle: '5947630',
          threedown: '5948080'
        },
        dfh5zmtq_hl: {
          articledown: '5946971',
          threeup: '5947448',
          threemiddle: '5947632',
          threedown: '5948081'
        },
        dfh5toutiaoindex: {
          articledown: '5946972',
          threeup: '5947450',
          threemiddle: '5947634',
          threedown: '5948083'
        },
        dfh5tptb0031: {
          articledown: '5946974',
          threeup: '5947452',
          threemiddle: '5947641',
          threedown: '5948085'
        },
        dfh5xstg005: {
          articledown: '5946975',
          threeup: '5947454',
          threemiddle: '5947644',
          threedown: '5948086'
        },
        dfh5semsougou_01: {
          articledown: '5946976',
          threeup: '5947456',
          threemiddle: '5947646',
          threedown: '5948133'
        },
        dfh5pc_wenzilj011: {
          articledown: '5946977',
          threeup: '5947458',
          threemiddle: '5947649',
          threedown: '5948181'
        },
        dfh5360_more: {
          articledown: '5946978',
          threeup: '5947460',
          threemiddle: '5947650',
          threedown: '5948188'
        },
        dfh5yidong: {
          articledown: '5946979',
          threeup: '5947462',
          threemiddle: '5947651',
          threedown: '5948189'
        },
        dfh5js_360up: {
          articledown: '5946980',
          threeup: '5947464',
          threemiddle: '5947652',
          threedown: '5948195'
        },
        dfh5as_dotinappp_5: {
          articledown: '5946981',
          threeup: '5947467',
          threemiddle: '5947653',
          threedown: '5948196'
        },
        dfh5tptb0011: {
          articledown: '5946983',
          threeup: '5947470',
          threemiddle: '5947655',
          threedown: '5948198'
        },
        dfh5xswl_cppa02: {
          articledown: '5946984',
          threeup: '5947473',
          threemiddle: '5947657',
          threedown: '5948199'
        },
        dfh5ldaly_cpc01: {
          articledown: '5946985',
          threeup: '5947475',
          threemiddle: '5947659',
          threedown: '5948200'
        },
        dfh5ldaly_cpc04: {
          articledown: '5946986',
          threeup: '5947476',
          threemiddle: '5947661',
          threedown: '5948201'
        },
        dfh5tetx_zz1: {
          articledown: '5946987',
          threeup: '5947478',
          threemiddle: '5947663',
          threedown: '5948202'
        },
        dfh5hrgsky_cpa01: {
          articledown: '5947219',
          threeup: '5947479',
          threemiddle: '5947665',
          threedown: '5948203'
        },
        dfh5tptb0041: {
          articledown: '5947220',
          threeup: '5947480',
          threemiddle: '5947668',
          threedown: '5948204'
        },
        dfh5yyz_hd3: {
          articledown: '5947221',
          threeup: '5947482',
          threemiddle: '5947670',
          threedown: '5948205'
        },
        dfh5anzhi: {
          articledown: '5947222',
          threeup: '5947483',
          threemiddle: '5947672',
          threedown: '5948206'
        },
        dfh5wnktw1: {
          articledown: '5947223',
          threeup: '5947486',
          threemiddle: '5947673',
          threedown: '5948207'
        },
        dfh5yryybgdt_01: {
          articledown: '5947225',
          threeup: '5947487',
          threemiddle: '5947676',
          threedown: '5948208'
        },
        dfh5qnsj_cpa01: {
          articledown: '5947227',
          threeup: '5947491',
          threemiddle: '5947680',
          threedown: '5948210'
        },
        dfh5yxtg_cpa01: {
          articledown: '5947228',
          threeup: '5947493',
          threemiddle: '5947683',
          threedown: '5948211'
        },
        dfh5cnkj_cpa01: {
          articledown: '5947230',
          threeup: '5947494',
          threemiddle: '5947685',
          threedown: '5948212'
        },
        dfh5cnkj_cpa02: {
          articledown: '5947231',
          threeup: '5947496',
          threemiddle: '5947691',
          threedown: '5948261'
        },
        dfh5cnkj_cpa03: {
          articledown: '5947232',
          threeup: '5947498',
          threemiddle: '5947693',
          threedown: '5948263'
        },
        dfh5xstg040: {
          articledown: '5947234',
          threeup: '5947504',
          threemiddle: '5947705',
          threedown: '5948360'
        },
        dfh5xstg062: {
          articledown: '5947235',
          threeup: '5947506',
          threemiddle: '5947709',
          threedown: '5948362'
        },
        dfh5xstg063: {
          articledown: '5947236',
          threeup: '5947508',
          threemiddle: '5947713',
          threedown: '5948364'
        },
        dfh5xstg042: {
          articledown: '5947237',
          threeup: '5947513',
          threemiddle: '5947717',
          threedown: '5948373'
        },
        dfh5xstg043: {
          articledown: '5947238',
          threeup: '5947517',
          threemiddle: '5947718',
          threedown: '5948375'
        },
        dfh5xstg045: {
          articledown: '5947239',
          threeup: '5947519',
          threemiddle: '5947719',
          threedown: '5948377'
        },
        dfh5xstg046: {
          articledown: '5947240',
          threeup: '5947521',
          threemiddle: '5947720',
          threedown: '5948379'
        },
        dfh5xstg047: {
          articledown: '5947241',
          threeup: '5947523',
          threemiddle: '5947724',
          threedown: '5948427'
        },
        dfh5xstg048: {
          articledown: '5947242',
          threeup: '5947525',
          threemiddle: '5947731',
          threedown: '5948466'
        },
        dfh5xstg049: {
          articledown: '5947243',
          threeup: '5947527',
          threemiddle: '5947738',
          threedown: '5948478'
        },
        dfh5xstg050: {
          articledown: '5947244',
          threeup: '5947528',
          threemiddle: '5947740',
          threedown: '5948476'
        },
        dfh5xstg051: {
          articledown: '5947245',
          threeup: '5947530',
          threemiddle: '5947741',
          threedown: '5948428'
        },
        dfh5xstg052: {
          articledown: '5947246',
          threeup: '5947532',
          threemiddle: '5947745',
          threedown: '5948426'
        },
        dfh5xstg053: {
          articledown: '5947247',
          threeup: '5947534',
          threemiddle: '5947750',
          threedown: '5948378'
        },
        dfh5xstg055: {
          articledown: '5947250',
          threeup: '5947538',
          threemiddle: '5947757',
          threedown: '5948374'
        },
        dfh5xstg056: {
          articledown: '5947251',
          threeup: '5947541',
          threemiddle: '5947762',
          threedown: '5948372'
        },
        dfh5xstg059: {
          articledown: '5947254',
          threeup: '5947546',
          threemiddle: '5947866',
          threedown: '5948359'
        },
        dfh5xstg060: {
          articledown: '5947258',
          threeup: '5947548',
          threemiddle: '5947867',
          threedown: '5948312'
        },
        dfh5xstg069: {
          articledown: '5947261',
          threeup: '5947552',
          threemiddle: '5947869',
          threedown: '5948262'
        },
        dfh5IOSgf1: {
          threecl: '6004398@@one'
        }
      };
      var data = bdjssdkData[GLOBAL.Et.qid] || {};
      var arr = [];
      if (data.articledown) {
        arr = data.articledown.split('@@');
        GLOBAL.Et.gg.ttdetails_articledown = {
          type: 'bdjssdk',
          id: arr[0],
          mark: arr[1] || 'big'
        };
      }
      if (data.threeup) {
        arr = data.threeup.split('@@');
        GLOBAL.Et.gg.ttdetails_threeup = {
          type: 'bdjssdk',
          id: arr[0],
          mark: arr[1] || 'one'
        };
      }
      if (data.threemiddle) {
        arr = data.threemiddle.split('@@');
        GLOBAL.Et.gg.ttdetails_threemiddle = {
          type: 'bdjssdk',
          id: arr[0],
          mark: arr[1] || 'one'
        };
      }
      if (data.threedown) {
        arr = data.threedown.split('@@');
        GLOBAL.Et.gg.ttdetails_threedown = {
          type: 'bdjssdk',
          id: arr[0],
          mark: arr[1] || 'big'
        };
      }
      if (data.threecl) {
        arr = data.threecl.split('@@');
        GLOBAL.Et.gg.ttdetails_threecl = {
          type: 'bdjssdk',
          id: arr[0],
          mark: arr[1] || 'one'
        };
      }
    }
  } catch (e) {
    console.error('广告处理出现问题: \n', e);
  }

  if (domain === 'www.zvlk.com.cn' && !filterArea(['北京', '上海', '广州', '深圳', '杭州', '成都', '天津', '河北'])) {
    if (GLOBAL.Et.qid === 'dfh5gf') {
      GLOBAL.Et.gg.ttdetails_threedown = {
        type: 'sougou',
        id: '996712'
      };
    } else if (GLOBAL.Et.qid === 'dfh5meizu') {
      GLOBAL.Et.gg.ttdetails_threedown = {
        type: 'sougou',
        id: '997103'
      };
    }
  }

  GLOBAL.Et.gg.ttdetails_bottom2 = {
    type: 'yn',
    id: 'cxpuytdtg'
  };

  // 对广告ID处理（为了方便获取、判断）
  try {
    GLOBAL.namespace('GLOBAL.Et.gg.my');
    // 顶部横幅
    GLOBAL.Et.gg.my.top = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_top'] : '';
    // 正文下方
    GLOBAL.Et.gg.my.articledown = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_articledown'] : '';
    // 六宫格
    GLOBAL.Et.gg.my.six = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_six'] : '';
    // six下方三宫格
    GLOBAL.Et.gg.my.three = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_three'] : '';
    // 上三宫格
    GLOBAL.Et.gg.my.threeup = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_threeup'] : '';
    // 中三宫格
    GLOBAL.Et.gg.my.threemiddle = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_threemiddle'] : '';
    // 下三宫格
    GLOBAL.Et.gg.my.threedown = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_threedown'] : '';
    // 图加
    GLOBAL.Et.gg.my.tujia = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_tujia'] : '';
    // 第1页信息流底部
    GLOBAL.Et.gg.my.bottom = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottom'] : '';

    // h5::
    GLOBAL.Et.gg.my.threefirst = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_threefirst'] : '';
    GLOBAL.Et.gg.my.bottomfloat = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottomfloat'] : '';
    GLOBAL.Et.gg.my.bottomtext1 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottomtext1'] : '';
    GLOBAL.Et.gg.my.bottomtext2 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottomtext2'] : '';
    GLOBAL.Et.gg.my.bottomtext3 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottomtext3'] : '';
    GLOBAL.Et.gg.my.bottomtext4 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottomtext4'] : '';
    // app::
    GLOBAL.Et.gg.my.bottom2 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_bottom2'] : '';
    GLOBAL.Et.gg.my.threecl = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttdetails_threecl'] : '';
  } catch (e) {
    console.error('广告处理出现问题: \n', e);
  }

  var beforeTitleObj = {
    qid10287: {
      id: 'gbtyhydtx',
      type: 'baidu',
      region: '上海'
    },
    qid10293: {
      id: 'hcuzizeuz',
      type: 'baidu',
      area: '上海'
    },
    qid02169: {
      id: 'dyqvevgeq',
      type: 'baidu',
      area: '北京'
    },
    mxzmapp: {
      id: 'dyqvevgeq',
      type: 'baidu',
      area: '北京'
    },
    qid10801: {
      type: 'baidu',
      id: 'bwotfsovf'
    },
    qid10765: {
      type: 'baidu',
      id: 'ezrwowroy'
    },
    qid10201: {
      type: 'baidu',
      id: 'idvasccsc'
    },
    qid10812: {
      type: 'baidu',
      id: 'fasxpcgzs'
    },
    qid10299: {
      type: 'baidu',
      id: 'uphlorqor',
      area: '上海'
    }
  };
  GLOBAL.Et.gg.my.beforeTitle = beforeTitleObj[GLOBAL.Et.qid];

  // 存储新闻类别
  try {
    GLOBAL.Et.newsType = document.getElementById('newstype') ? document.getElementById('newstype').value : 'toutiao';
    GLOBAL.Et.newsType = GLOBAL.Et.newsType === 'weikandian' ? 'toutiao' : GLOBAL.Et.newsType;
    // 阅读过的新闻类别(dsp参数)
    GLOBAL.Et.readNewsTypeArr = (wsCache.get('read_newstype') && wsCache.get('read_newstype').split(',')) || [];
    if (!GLOBAL.Et.readNewsTypeArr.contains(GLOBAL.Et.newsType)) {
      if (GLOBAL.Et.readNewsTypeArr.length > 2) {
        GLOBAL.Et.readNewsTypeArr.shift();
      }
      GLOBAL.Et.readNewsTypeArr.push(GLOBAL.Et.newsType);
      wsCache.set('read_newstype', GLOBAL.Et.readNewsTypeArr.join(','), {
        exp: 3 * 24 * 3600
      });
    }
  } catch (e) {
    console.error('newstype has error: \n', e);
  }

  // 特殊东方号新闻处理 不展现所有广告
  try {
    var isOfficialDfh = $('#uid_forapp').val() === '200000000000038' || false;
  } catch (e) {
    console.error(e);
  }

  // 特殊文章id 不要广告
  var noGgHtml = {
    '180930202157112': 1
  };

  // 根据接口获取是否是爬虫IP，是的话不展示所有广告
  try {
    // 1小时请求一次接口
    if (!wsCache.get('IS_REQUEST_IP')) {
      $.ajax({
        url: 'https://cipwap.shaqm.com/ipshield/is',
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        data: {
          uid: GLOBAL.Et.uid,
          qid: GLOBAL.Et.qid,
          softtype: GLOBAL.Util.getQueryString('softtype') || 'news',
          softname: GLOBAL.Util.getQueryString('softname') || 'eastday_wapnews',
          ver: GLOBAL.Util.getQueryString('ver') || 'null'
        },
        success: function(res) {
          var status = res.status;
          if (status) {
            wsCache.set('IS_PACHONG_IP', 1, {
              exp: 60 * 60
            });
          }
          wsCache.set('IS_REQUEST_IP', 1, {
            exp: 60 * 60
          });
        }
      });
    }
  } catch (e) {
    console.error(e);
  }

  try {
    // 关键词过滤（带领导人的新闻，不添加广告）
    keywords = [
      '习近平',
      '李克强',
      '张德江',
      '俞正声',
      '刘云山',
      '王岐山',
      '张高丽',
      '马凯',
      '王沪宁',
      '刘延东',
      '刘奇葆',
      '许其亮',
      '孙春兰',
      '孙政才',
      '李建国',
      '李源潮',
      '汪洋',
      '张春贤',
      '范长龙',
      '孟建柱',
      '赵乐际',
      '胡春华',
      '俞正声',
      '栗战书',
      '郭金龙',
      '韩正',
      '杜青林',
      '赵洪祝',
      '杨晶',
      '常万全',
      '房峰辉',
      '张阳',
      '赵克石',
      '张又侠',
      '吴胜利',
      '马晓天',
      '魏凤和',
      '黄树贤',
      '李玉赋',
      '杜金才',
      '吴玉良',
      '张军',
      '陈文清',
      '王伟',
      '毛泽东',
      '朱德',
      '刘少奇',
      '周恩来',
      '陈云',
      '林彪',
      '彭德怀',
      '邓小平',
      '邓子恢',
      '贺龙',
      '陈毅',
      '乌兰夫',
      '李富春',
      '李先念',
      '聂荣臻',
      '薄一波',
      '宋庆龄',
      '董必武',
      '习仲勋',
      '薄一波',
      '谭震林',
      '陆定一',
      '罗瑞卿',
      '江泽民',
      '荣毅仁',
      '乔石',
      '李鹏',
      '朱镕基',
      '邹家华',
      '钱其琛',
      '李岚清',
      '吴邦国',
      '姜春云',
      '李瑞怀',
      '刘华清',
      '张震',
      '胡锦涛',
      '曾庆红',
      '吴邦国',
      '温家宝',
      '黄菊',
      '吴仪',
      '曾培炎',
      '回良玉',
      '贾庆林'
    ];

    for (i = 0; i < keywords.length; i++) {
      if (document.title.indexOf(keywords[i]) !== -1) {
        GLOBAL.Et.gg.my.noCai = true;
        GLOBAL.Et.gg.my.nogg = true;
        GLOBAL.Et.gg.my.articledown = null;
        GLOBAL.Et.gg.my.bottom = null;
        GLOBAL.Et.gg.my.six = null;
        GLOBAL.Et.gg.my.threedown = null;
        GLOBAL.Et.gg.my.threemiddle = null;
        GLOBAL.Et.gg.my.three = null;
        GLOBAL.Et.gg.my.threeup = null;
        GLOBAL.Et.gg.my.top = null;
        GLOBAL.Et.gg.my.tujia = null;
      }
    }
    // 屏蔽图加广告的标题关键词
    keywords2 = ['东方头条', '深圳晚报'];
    for (i = 0; i < keywords2.length; i++) {
      if (document.title.indexOf(keywords2[i]) !== -1) {
        GLOBAL.Et.gg.my.tujia = null;
      }
    }

    // 无任何广告的渠道处理
    if (
      noGgHtml[urlNum] ||
      wsCache.get('IS_PACHONG_IP') ||
      isOfficialDfh ||
      ime ||
      noGgQid.contains(GLOBAL.Et.qid) ||
      GLOBAL.Et.noGgApptypeid.contains(apptypeid)
    ) {
      GLOBAL.Et.gg.my.nogg = true;
      GLOBAL.Et.gg.my.articledown = null;
      GLOBAL.Et.gg.my.bottom = null;
      GLOBAL.Et.gg.my.six = null;
      GLOBAL.Et.gg.my.threedown = null;
      GLOBAL.Et.gg.my.threemiddle = null;
      GLOBAL.Et.gg.my.three = null;
      GLOBAL.Et.gg.my.threeup = null;
      GLOBAL.Et.gg.my.top = null;
      GLOBAL.Et.gg.my.tujia = null;
    }
  } catch (e) {
    console.error('noGgQid has error: \n', e);
  }

  // 微信端不展示图加广告和dsp广告
  try {
    if (GLOBAL.Browser && GLOBAL.Browser.wechat) {
      GLOBAL.Et.gg.my.tujia = null;
      GLOBAL.Et.gg.my.noDsp = true;
    }
  } catch (e) {
    console.error(e);
  }

  // huitt屏蔽dsp广告
  try {
    if (GLOBAL.Et.qid === 'huitt' && GLOBAL.Et.userPv < 24) {
      GLOBAL.Et.gg.my.noDsp = true;
    }
  } catch (error) {
    console.log(error);
  }

  // 为了方便后续判断，在此提取出只有搜狗广告的ID。
  try {
    var onlySogouQid = GLOBAL.Et.onlySogouQid;
    var len = onlySogouQid.length;
    GLOBAL.Et.onlySogouGgId = null;
    for (i = 0; i < len; i++) {
      if (GLOBAL.Et.qid === onlySogouQid[i].qid) {
        GLOBAL.Et.onlySogouGgId = onlySogouQid[i].ggid;
        break;
      }
    }
  } catch (e) {
    console.error(e);
  }

  // 获取联盟api广告 需要用到的一些参数(后端给接口 前端进行缓存)
  try {
    var cacheData = wsCache.get('union_' + GLOBAL.Et.uid + '_info');
    if (!cacheData && GLOBAL.Et.qid === 'qid10207') {
      $.ajax({
        // url: 'http://106.75.98.65/deviceinfo/deviceInfo',
        url: 'https://deviceinfo.shaqm.com/deviceinfo/deviceInfo',
        data: {
          os: GLOBAL.Util.getOsType().split(' ')[0],
          site: 'ttz',
          qid: GLOBAL.Et.qid,
          uid: GLOBAL.Et.uid
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        success: function(res) {
          var data = res ? res.data : [];
          var status = res ? res.code : 1;
          if (Number(status) === 0) {
            // 前端能获取到的进行替换 拿不到的参数使用后端接口提供的数据
            data.devicewidth = window.screen.width;
            data.deviceheight = window.screen.height;
            data.os = GLOBAL.Util.getOsType().split(' ')[0];
            data.osver = GLOBAL.Util.getOsType().split(' ')[1];
            data.softtype = 'htt';
            data.softname = GLOBAL.Os.ios ? 'HTTIOS' : 'HTTANDROID';
            data.typeid = 'HTT';
            data.qid = GLOBAL.Et.qid;
            data.lng = ''; // 经度
            data.lat = ''; // 维度
            data.useragent = window.navigator.userAgent;
            data = JSON.stringify(data);
            wsCache.set('union_' + GLOBAL.Et.uid + '_info', data);
          }
        }
      });
    }
  } catch (e) {
    console.error(e);
  }

  /**
   * 地域过滤
   * @param  {[type]}   areaArr     需过滤的城市、省份数组
   * @return {[type]}               true：表示在过滤的城市中；false：表示不在过滤的城市中。
   */
  function filterArea(areaArr) {
    if (!areaArr || !(areaArr instanceof Array) || !areaArr.length) {
      return false;
    }
    areaArr.push('中国');
    if (
      window.__REGION__ &&
      (areaArr.contains(window.__REGION__.cityname) || areaArr.contains(window.__REGION__.provname))
    ) {
      return true;
    }
  }
})();
