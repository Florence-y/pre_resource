<template>
  <div id="home">
    <nav-bar></nav-bar>
    <news></news>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import Footer from "../../components/common/Footer.vue";
import News from "./News.vue";
import Content from "./Content.vue";
export default {
  name: "Home",
  components: { NavBar, Footer, News, Content },
  data() {
    return {
      // 这里放数据
      result: null,
    };
  },
};
</script>   

<style>
</style>