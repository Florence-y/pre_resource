<template>
  <div v-infinite-scroll="load">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="card lg:card-side bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <div class="card-actions">
            <button class="btn btn-primary">申请</button>
            <button class="btn btn-ghost">详细信息</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadResourceList } from "../../network/home";

export default {
  name: "Content",
  data() {
    return {
      current: 1,
      size: 3,
      list: [],
    };
  },  
  methods: {
    load() {
      loadResourceList({
        current: this.current,
        size: this.size,
      }).then((res) => {
        this.list = this.list.concat(res.data.records);
        this.current+=1;
      });
    },
  },
  created() {
    this.load();
  },
};
</script>

<style scpoed>
.item {
  width: 100%;
  float: left;
}
</style>