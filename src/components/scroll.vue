<template>
  <div class="scroll">
    <div class="limit"></div>
    <div class="limitss">
      <div v-bind:style="{ 'margin-right': '120px' }">
        哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </div>
    <button class="btn">按钮</button>
    <div class="bottom" v-if="show"></div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      show: false
    }
  },
  created () {},
  mounted () {
    window.addEventListener('scroll', this.showIcon)
  },
  watch: {},
  computed: {},
  methods: {
    showIcon () {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 400
      ) {
        this.show = true
        // 页面高度大于200执行操作
      } else {
        // 页面高度小于200执行操作
        this.show = false
      }
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
@keyframes dong {
 0% {
    transform: scale(1);
  }50% {
    transform: scale(2);
  }100%{
    transform: scale(1);
  }
}
.scroll {
  height: 2500px;
  background-color: pink;
  width: 100%;
  padding-bottom: 800px;
  .limit {
    height: 200px;
    width: 100%;
  }
  .limitss {
    height: 200px;
    width: 100%;
    //  background-color: lime;
    // background: url("../images/icon_category.png") no-repeat center center;
    background: url("../assets/chengshi.jpg") no-repeat center center;
    background-size: 100% 100%;
  }
  .bottom {
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 200px;
    background-color: aqua;
  }
  .btn {
    width: 50px;
    height: 50px;
    background-color: green;
    margin-top: 100px;
    animation: dong 1.5s linear infinite;
  }
}
</style>
