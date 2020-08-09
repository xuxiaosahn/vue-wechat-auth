import qs from 'qs'
import request from '@/utils/request'

/**
 * 登录接口请求token与userinfo
 * @param params {code: code}
 */
export function loginByCode(params) {
  return request({
    url: '/webchat_api/oauth2/access_token',
    method: 'post',
    data: qs.stringify(params)
  })
}
/**
 * 获取登录用户信息
 * @param params
 */
export function getUserInfo(params) {
  return request({
    url: '/webchat_api/userinfo',
    method: 'post',
    data: qs.stringify(params)
  })
}

/*******************万能分割线***********************/

/**
 * seeyon rest接口验证
 * @param params
 */
export function getSeeyonTicket(params) {
  return request({
    url: '/seeyon_api/token',
    method: 'post',
    data: qs.stringify(params)
  })
}

/**
 * seeyon rest接口验证
 * @param params
 */
export function getLoginName(params) {
  return request({
    url: '/seeyon_api/szbsmart/getUserByOpenId',
    method: 'post',
    data: qs.stringify(params)
  })
}

