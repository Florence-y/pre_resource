<template>
  <div id="home">
    <nav-bar></nav-bar>
    <news></news>
    <Footer></Footer>
  </div>
</template>

<script>
import { test } from "../../network/home";
import NavBar from "../nav/NavBar.vue";
import Footer from "../../components/common/Footer.vue";
import News from "./News.vue"

export default {
  name: "Home",
  components: { NavBar, Footer, News},
  data() {
    return {
      // 这里放数据
      result: null,
    };
  },
  created() {
    test().then((res) => {
      console.log(res);
      //这里赋值数据
      this.result = res;
    });
  },
};
</script>   

<style>
</style>