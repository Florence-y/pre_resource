<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgsAndRef" :key="item">
      <a :href="item.url">
        <!-- <img :src="require('../../assets/img/'+item.img)" /> -->
        <div class="asd" :style="{backgroundImage: 'url('+ require('../../assets/img/'+item.img) +')', backgroundColor: '#f00'  }"></div>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      imgsAndRef: [
        { img: "2021guoqing.jpg", url: "http://www.baidu.com" },
        { img: "dang100nian.jpg", url: "http://www.baidu.com" },
        { img: "wangluoanquanzhou2021.jpg", url: "http://www.baidu.com" },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item{
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.asd {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: 100%;
}
</style>