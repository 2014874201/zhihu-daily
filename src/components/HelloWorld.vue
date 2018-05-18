<template>
  <div class="Home">
    <div class="header">
      <span>icon</span>
      <span>题目</span>
      <span>icon</span>
    </div>
    <div class="recommend">
      <scroll ref="scroll" class="recommend-content" :data=recommendDataImg>
      <!-- better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。 -->
        <div>
          <!-- 保证recommendList是有，才进入插槽 -->
          <div class="slider-wrapper" v-if="recommendDataImg.length">
            <slider>
              <div v-for="item in recommendDataImg" :key="item.key">
                <!-- <a :href="item.linkUrl"> -->
                  <img @load="loadImage" :src="item.image">
                  <p>{{item.title}}</p> 
                <!-- </a> -->
              </div>
            </slider>
          </div>
          <div class="newlist"></div>
        </div>
        <div class="loading-containter" v-show="!recommendDataImg.length">
          <loading></loading>
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import Slider from 'base/slider/slider.vue'
import Scroll from 'base/scroll/scroll.vue'
import Loading from 'base/loading/loading'
export default {
  data () {
    return {
      recommendDataImg:[]
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
    getRecommend () {
      this.$http.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/latest', {})
      .then( res=>{
        console.log(res)
        if (res.status === 200) {
          this.recommendDataImg =res.data.top_stories
          console.log(this.recommendDataImg.length)
        }
      })
      .catch( err=> {
        console.log(err);
      })
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
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
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        img{
          height: 2.5rem;
        }
        p {
          position: relative;
          width: 3rem;
          // height: 1rem;
          background: pink;
          bottom: 0.5rem; 
          // word-wrap: break-word; 
          // word-break: break-all; 
          // overflow:inherit;
          z-index: 3;
          color:#fff;
        }
      }
      .recommend-list {
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        }
        .item {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
            .name {
              margin-bottom: 10px;
              color: $color-text;
            }
            .desc {
              color: $color-text-d;
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

