<template>
  <div>
    推荐页面
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from 'api/recommend'
  import {STATUS_OK} from 'api/config'

  export default {
    created(){
      console.log("recommend created...");
      this._getRecommend();
    },
    methods: {
      _getRecommend() {
        console.log("recommend created...2");
        getRecommend().then((res) => {
          if(res.code === STATUS_OK){
            console.log(res.data.v_hot);
          }
        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
