<template>
  <div id="home"></div>
</template>

<script>
import { test } from "../../network/home";
import NavBar from "../nav/NavBar.vue";
export default {
  name: "Home",
  components: { NavBar },
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