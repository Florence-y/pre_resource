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
      <li>
        <a> 教务处 </a>
      </li>
      <li class="bordered">
        <a> 财务处 </a>
      </li>
      <li>
        <span> With a span </span>
      </li>
      <li>
        <a> With icon </a>
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
          <th>描述</th>
          <th>申请</th>
        </tr>
      </thead>
      <tbody>
        <tr
          @mouseenter="active($event)"
          @mouseleave="noActive($event)"
          class=""
          v-for="resource in resources"
          :key="resource"
        >
          <th>{{ resource.name }}</th>
          <td>{{ resource.amount }}</td>
          <td>{{ resource.description }}</td>
          <!-- 模态框 -->
          <td>
              <upload-model></upload-model>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import UploadModel from "../../components/common/UploadModel.vue"


export default {
  name: "resource",
  components: { NavBar,UploadModel},
  data() {
    return {
      resources: [
        { name: "铅笔", amount: 100, description: "铅笔好用呀！！" },
        { name: "铅笔", amount: 100, description: "铅笔好用呀！！" },
        { name: "铅笔", amount: 100, description: "铅笔好用呀！！" },
      ],
    };
  },
  methods: {
    active($event) {
      $event.currentTarget.className = "active";
    },
    noActive($event) {
      $event.currentTarget.className = "";
    },
  },
};
</script>

<style>
</style>