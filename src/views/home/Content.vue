<template>
  <div v-infinite-scroll="load">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="card lg:card-side bordered">
        <figure>
          <img :src="this.$imgBaseUrl+item.img" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <div class="card-actions">
            <upload-model></upload-model>
            <label class="btn btn-ghost">数量：{{item.amount}}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadResourceList } from "../../network/home";
import UploadModel from "../../components/common/UploadModel.vue";
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
        this.current += 1;
      });
    },
  },
  created() {
    this.load();
  },

  components: { UploadModel },
};
</script>

<style scpoed>
.item {
  width: 100%;
  float: left;
}
</style>