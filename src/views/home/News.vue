<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgsAndRef" :key="item">
      <a :href="item.url">
        <img border="0" :src="require('../../assets/img/'+item.img)" />
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>