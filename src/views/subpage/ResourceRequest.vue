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
            <label for="my-modal-2" class="btn btn-primary modal-button"
              >申请</label
            >
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box">
                <!-- 数量 -->
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">数量</span>
                  </label>
                  <input
                    type="text"
                    placeholder="请输入数量"
                    class="input input-bordered"
                  />
                </div>
                <!--证明说明-->
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">资源申请原因与去处</span>
                  </label>
                  <textarea
                    class="textarea h-24 textarea-bordered"
                    placeholder="请输入资源申请原因与去处"
                  ></textarea>
                </div>
                <!-- 文件上传 -->
                <upload></upload>
                <div class="modal-action">
                  <label for="my-modal-2" class="btn btn-primary">确定</label>
                  <label for="my-modal-2" class="btn">取消</label>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import Upload from "../../components/common/Upload.vue"


export default {
  name: "resource",
  components: { NavBar,Upload},
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