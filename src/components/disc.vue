<template>
  <transition name="slide">
    <div class="disc">
      <div class="header">
        <span class="icon">图标</span>
      </div>
        <h1>这是细节图哦</h1>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    getDisc () {
      this.$http.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/latest', {})
      .then( res=>{
        console.log(res)
        if (res.status === 200) {
          this.recommendDataImg =res.data.top_stories
          this.recommendDataList =res.data.stories
          console.log('列表',this.recommendDataList)
        }
      })
      .catch( err=> {
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.disc {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:pink;
  font-size: 0.1rem;
  color: #000;
  .header {
    text-align: left;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.2rem;
    padding-left: 10px;
    background: #2aa6fa;
    color: #fff;
  }
  
}
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s  
}

.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)  
}
</style>


