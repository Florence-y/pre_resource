<template>
  <nav-bar></nav-bar>
  <!-- 分类栏 -->
  <div class="py-4 artboard artboard-demo bg-base-200">
    <ul
      class="
        menu
        items-stretch
        px-3
        shadow-lg
        bg-base-100
        horizontal
        rounded-box
      "
    >
      <li
        @click="getResourceByType(0)"
        @mouseover="changeInStatus($event)"
        @mouseleave="changeOutStatus($event)"
      >
        <a> 教务处 </a>
      </li>
      <li
        @click="getResourceByType(1)"
        @mouseover="changeInStatus($event)"
        @mouseleave="changeOutStatus($event)"
      >
        <a> 财务处 </a>
      </li>
    </ul>
  </div>
  <!-- 具体内容 -->
  <div class="overflow-x-auto flex justify-center">
    <table class="table w-5/12">
      <thead>
        <tr>
          <th>资源名</th>
          <th>数量</th>
          <th>图片</th>
          <th>描述</th>
          <th>资源开放时间</th>
          <th>资源关闭时间</th>
          <th>申请</th>
        </tr>
      </thead>
      <tbody v-infinite-scroll="load">
        <tr
          @mouseenter="active($event)"
          @mouseleave="noActive($event)"
          class=""
          v-for="resource in resources"
          :key="resource"
        >
          <td>{{ resource.name }}</td>

          <td>{{ resource.amount }}</td>
          <td>
            <div
              class="asd"
              :style="{
                backgroundImage: 'url(' + this.$imgBaseUrl + resource.img + ')',
                backgroundColor: '#f00',
              }"
            ></div>
          </td>
          <td>{{ resource.description }}</td>
          <td>{{ resource.effectStartTime }}</td>
          <td>{{ resource.effectEndTime }}</td>
          <!-- 模态框 -->
          <td>
            <upload-model :resourceId="resource.id"></upload-model>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import UploadModel from "../../components/common/UploadModel.vue";
import { getResourceByCondition } from "../../network/ResourceRequest";



export default {
  name: "resource",
  components: { NavBar, UploadModel },
  data() {
    return {
      current: 1,
      size: 3,
      type: 0,
      resources: [],
    };
  },
  methods: {
    getResourceByType(type) {
      getResourceByCondition({
        type,
        current: 1,
        size: 3,
      }).then((res) => {
        let data = res.data;
        this.resources = data.records;
      });
      this.type = type;
      this.current = 1;
    },
    load() {
      getResourceByCondition({
        current: this.current,
        size: this.size,
        type: this.type,
      }).then((res) => {
        console.log(res.data.records);
        this.resources = this.resources.concat(res.data.records);
        this.current += 1;
      });
    },
    active($event) {
      $event.currentTarget.className = "active";
    },
    noActive($event) {
      $event.currentTarget.className = "";
    },
    changeInStatus($event) {
      $event.currentTarget.className = "bordered";
    },
    changeOutStatus($event) {
      $event.currentTarget.className = "";
    },
  },
};
</script>

<style>
.asd {
  width: 100%;
  height:20px;
  background-position: center center;
  background-size: 100%;
}
</style>