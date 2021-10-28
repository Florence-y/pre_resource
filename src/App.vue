<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <!-- <router-view></router-view> -->
      <tail-wind></tail-wind>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import tailWind from './components/test/tailWind.vue'
export default {
  name: "App",
  components: {
    // HelloWorld
    tailWind
  },
};
</script>

<style>
@import "./assets/css/base.css";
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
