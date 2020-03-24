<template>
  <div class="scroll">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <img :src="banner" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'

import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
import tc01 from '@/assets/kuihua.png'
import tc02 from '@/assets/m.png'
import tc03 from '@/assets/pa.png'

export default {
  components: {
    swiper,
    swiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {},
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // slidesPerView: 1,
        autoplay: {
          // 自动播放间隔时间
          delay: 2000,

          // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          disableOnInteraction: true
        },
        spaceBetween: 0,
        loop: true
      },
      banners: [tc01, tc02, tc03],
      banner1: ''
    }
  },
  created () {},
  mounted () {},
  watch: {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.swiper-slide {
  height: 200px;
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
