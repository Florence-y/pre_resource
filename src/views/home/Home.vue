<template>
  <div id="home"></div>
</template>

<script>
import { test } from "../../network/home";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      result: null,
    };
  },
  created() {
    test().then((res) => {
      console.log(res);
      this.result = res;
    });
  },
};
</script>

<style>
</style>