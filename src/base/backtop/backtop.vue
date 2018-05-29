<template>
    <div>
        <button class="back-to-top" ref="back">返回顶部</button>  
    </div>
</template>
<script>
export default {
    created() {
        this.init()
    },
    methods: {
        init() {
            this.$refs.back.on('click',()=>{
                document.body.animate({
                    scrollTop:0 
                },800)
            })
        }
    }
}
</script>

// <script>
// ;$(function()  
// {  
//   'use strict';  
  
//    var backButton = $('.back-to-top'); //选择返回顶部     
//    backButton.on('click',function(){   //监听返回按钮  
//        $('html, body').animate({  
//          scrollTop:0              
//        },800) //滚动上来，800ms  
//        console.log("back");  
//      })  
  
     
//     $(window).on('scroll',function(){  //监听window.scroll事件  
//               //如果滚动的高度大于窗口高度就显示  
//             if($(window).scrollTop() > $(window).height()){  
//                  backButton.fadeIn();  
//              }else{ //否则隐藏按钮  
//                  backButton.fadeOut();  
//             }  
//      })  
//     //让window先触发scroll事件,使得一开始没有返回顶部按钮  
//       $(window).trigger('scroll');    
  
// })  
// </script>

<style lang="scss" scoped>
.back-to-top{  
    z-index: 99999;
    position: fixed;  
    bottom: 30px;  
    right: 30px;  
    border:1px solid #888;  
}  
</style>
