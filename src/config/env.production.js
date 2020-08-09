// 正式
module.exports = {
  title: '苏州银行智慧行政',
  baseUrl: 'https://www.xxx.com/', // 正式项目地址
  baseApi: 'https://test.xxx.com', // 正式api请求地址
  devServer: {
    proxy: {
      '/webchat_api': {
          target: 'https://api.weixin.qq.com/sns',
          //target: 'http://192.168.1.54:80/',
          ws: true,
          pathRewrite: {
              '^/webchat_api': '/'
          },
          logLevel: 'debug'
      },
      '/seeyon_api': {
          target: 'http://10.211.55.2:8888/seeyon/rest/sns',
          //target: 'http://192.168.1.54:80/',
          ws: true,
          pathRewrite: {
              '^/seeyon_api': '/'
          },
          logLevel: 'debug'
      }
    },
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  }
  // api: {
  //   base_api: '/webchat_api',
  //   common_api: 'https://xxx.xxx.com/common'
  // }
}