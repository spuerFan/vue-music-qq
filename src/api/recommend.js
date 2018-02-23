import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

export function getRecommend(){
  const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";

  const data = Object.assign({},commonParams,{
    platform: 'yqq',
    needNewCode:0,
    loginUin:0,
    hostUin:0,
    data:'{"comm":{"ct":24},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"}}'
  })

  return jsonp(url,data,options);
}
