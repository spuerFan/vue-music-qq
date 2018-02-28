//import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
//import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  //getLyric() {
  //  if (this.lyric) {
  //    return Promise.resolve(this.lyric)
  //  }
  //
  //  return new Promise((resolve, reject) => {
  //    getLyric(this.mid).then((res) => {
  //      if (res.retcode === ERR_OK) {
  //        this.lyric = Base64.decode(res.lyric)
  //        resolve(this.lyric)
  //      } else {
  //        reject('no lyric')
  //      }
  //    })
  //  })
  //}
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    //url: `http://dl.stream.qqmusic.qq.com/C400${musicData.strMediaMid}.m4a?guid=6642673330&vkey=7866FF99234FF81DD50B01FF8C53E8F5687D533D5DAE70ADB8910A9D9144D2055540B4D66FD3D658BB8279FF64EDCA24712FBA09403A1BEB&uin=0&fromtag=999`
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.strMediaMid}.m4a?fromtag=38&vkey=571D518A21DD3DAA520EF4D94FF42B4EEDFED5F2A117FFFCAD035C12FD6F0761B76C9A2CD3FDFB0080D5431ED8885E6178FE1D1434DF3540&guid=970293380`
    //url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46&strMediaMid=${musicData.strMediaMid}`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

