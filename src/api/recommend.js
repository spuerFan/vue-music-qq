import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getRecommend(){
  // const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";
   const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"

  const data = Object.assign({},commonParams,{
    platform: 'yqq',
    needNewCode:0,
    loginUin:0,
    hostUin:0,
    data:'{"comm":{"ct":24},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"}}'
  })


  return jsonp(url,data,options);
}

export function getDiscList(){
  // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg';
  //const url = "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg";
  const url = "/api/getDiscList";
  const data = Object.assign({},commonParams,{
    platform:'yqq',
    sortId:5,
    sin:0,
    ein:29,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  //return jsonp(url,data,options)
  return axios.get(url,{
    params: data
  }).then( (res) => {
     return Promise.resolve(res.data);
    })
}
