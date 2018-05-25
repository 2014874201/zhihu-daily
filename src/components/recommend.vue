<template>
  <div class="Home">
    <div class="header">
      <span>icon</span>
      <span>题目</span>
      <span>icon</span>
    </div>
    <div class="recommend">
      <scroll ref="scroll" class="recommend-content">
        <div>
          <div class="slider-wrapper" v-if="recommendDataImg.length && recommendDataList.length">
            <slider>
              <div v-for="item in recommendDataImg" :key="item.key" @click="selectItem(item)">
                <img @load="loadImage" :src="item.image" >
                <div class="mask"></div>
                <h3>{{item.title}}</h3>
              </div>
            </slider>
          </div>                                                
          <!-- 新闻列表 -->
          <div class="recommend-list">
            <h1 class="list-title">今日热闻</h1>
            <ul>
              <li v-for="item in recommendDataList" class="item" :key="item.key" @click="selectItem(item)">
                <div class="text">
                  <p class="desc" v-html="item.title"></p>
                </div>
                <div class="icon">
                  <img width="60" height="60" v-lazy="item.images[0]" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="loading-containter" v-show="!recommendDataImg.length">  
          <loading></loading>
        </div>
      </scroll>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Slider from 'base/slider/slider.vue'
import Scroll from 'base/scroll/scroll.vue'
import Loading from 'base/loading/loading'
export default {
  data () {
    return {
      recommendDataImg:[],
      recommendDataList:[]
    }
  },
  created () {
    this.getRecommend()
  },
  components: {
    Slider,
    Scroll,
    Loading
  },
  methods: {
    selectItem(item) {
      console.log(item.id)
      this.$router.push({
        path: `/recommend/disc`,
        query: {
          id: item.id
        }
      })                                                                                 
    },
    getRecommend () {
      this.$http.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/latest', {})
      .then( res=>{
        console.log(res)
        if (res.status === 200) {
          this.recommendDataImg = res.data.top_stories
          this.recommendDataList = res.data.stories
          this.$refs.scroll.refresh() // 计算高度
          console.log('列表',this.recommendDataList)
        }
      })
      .catch( err=> {
        console.log(err);
      })
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh() // 重新计算高度
      }
    }
  } 
}
</script>
<style lang="scss" scoped>
@import "src/common/scss/variable.scss";

.Home {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 0.2rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.5rem;
    color: #fff;
    background:#2aa6fa;
    span:nth-child(odd) {
      margin: 0 10px;
    }
  }
  .recommend {
    position: fixed;
    width: 100%;
    top: 45px;
    bottom: 0;
    // box-sizing: border-box;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        overflow: hidden;
        img{
          height: 2.7rem;
          background-size: 100% 100%;
        }
        .mask {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          position: absolute;
          background: $blue;
        }
        h3 {
          width: 100%;
          height: 200px;
          background: red;
          word-break: normal;
        }
        // h3 {
        //   z-index: 999;
        //   width: 70%;
        //   color: #fff;
        //   margin: 0;
        //   font-size: 0.5rem;
        //   line-height: 1rem;
        //   right: 5%;
        //   bottom: 0.6rem;
        //   text-align: right;
        //   position: absolute;
        //   text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
        //   &:before {
        //       content: "";
        //       width: 3rem;
        //       bottom: -.6rem;
        //       right: 0;
        //       display: block;
        //       position: absolute;
        //       border: 2px solid yellow;
        //   }
        // }
      }
      .recommend-list {
        background:#f9faff;
        .list-title {
          height: 0.35rem;
          padding-left: 10px;
          line-height: 35px;
          text-align: left;
          font-size: $font-size-large;
          color: rgb(158, 153, 154);
        }
        .item {
          display: flex;
          margin: 10px;           
          box-sizing: border-box;
          padding: 15px 20px 15px 20px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15);
          // box-shadow: 0.1px  1px 1px #888888;
          .icon {
            flex: 0 0 60px; 
            width: 60px;
            padding-left:10px;
            // padding-right: 10px;
          }
          .text {
            text-align: left;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-large;
            .desc {
              color: #000;
            }    
          }
        }
      }
      .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>

