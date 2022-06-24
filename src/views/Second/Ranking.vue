<template>
  <div>
    <!-- 导航栏  默认设置为显示 -->
    <!-- 引入需要的图片 -->
    <div class="nav_imgs" v-show="navs_img">
      <div id="">
        <img src="https://s1.ax1x.com/2022/03/07/brOzsx.png" />
      </div>
      <div id="">
        <img src="https://s1.ax1x.com/2022/03/07/brXZQI.png" />
      </div>
      <div id="">
        <img src="https://s1.ax1x.com/2022/03/07/brXmOP.png" />
      </div>
      <div id="">
        <img src="https://s1.ax1x.com/2022/03/07/brXKw8.png" />
      </div>
      <!-- 为黄色图标设点击事件 -->
      <div @click="hide_">
        <img src="https://s1.ax1x.com/2022/03/07/brXlFg.png" />
      </div>
    </div>
    <!-- 导航栏 -->
    <!-- 箭头-->
    <!-- 与导航栏做显示与隐藏效果，默认先设为隐藏 -->
    <!-- 为箭头设置点击事件，并为他绑定事件 -->
    <p @click="show_" class="return_img" :class="return_s" v-show="show_hide_">
      <img src="https://s1.ax1x.com/2022/03/07/brX3Wj.png" />
    </p>
    <!-- 箭头-->
    <!-- 设置div,方便看效果 开始 -->
    <p></p>
    <p
      class=""
      style="height: 200px; width: 50%; background-color: #42b983"
    ></p>
    <p class="" style="height: 200px; width: 50%; background-color: aqua"></p>
    <p
      class=""
      style="height: 700px; width: 50%; background-color: cadetblue"
    ></p>
    <!-- 设置div,方便看效果 结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_hide_: false, //箭头默认隐藏
      navs_img: true, //图标默认为显示
      return_s: true, //箭头默认绑定事件为true
    };
  },
  methods: {
    // 当点击箭头时
    show_() {
      this.navs_img = true; //导航栏显示
      this.show_hide_ = false; //箭头隐藏
      this.return_s = true; //箭头绑定事件为true
    },
    // 当点击导航栏里的黄色箭头时
    hide_() {
      this.navs_img = false; //导航栏隐藏
      this.show_hide_ = true; //箭头显示
      this.return_s = false; //箭头绑定事件为false;
    },

    scroll() {
      // 获取滚动值
      var scroll_top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      // 控制台查看滚动值
      console.log(scroll_top);
      // 在箭头绑定事件为true时才触发显示与隐藏效果
      if (this.return_s == true) {
        // 根据滚动值做效果
        if (scroll_top > 190) {
          this.navs_img = false;
          this.show_hide_ = true;
        } else {
          this.navs_img = true;
          this.show_hide_ = false;
        }
      }
    },
  },
  mounted() {
    // 事件监听
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style>
/* 导航栏设置样式 开始 */
.nav_imgs img {
  width: 2.35rem;

  /* height: 50px; */
}

.nav_imgs {
  position: fixed;
  top: 25%;
  right: 0;
  z-index: 4;
  background: rgba(105, 105, 105, 0.3);
}

/* 导航栏设置样式 结束 */
/* 箭头位置设置 */
.return_img {
  position: fixed;
  top: 35%;
  right: 0;
  z-index: 4;
}

.return_img img {
  width: 1.25rem;
}

/* 箭头位置设置 */
</style>
