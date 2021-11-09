<template>
  <nav-bar></nav-bar>
  <div class="myRequestfirstLine">
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
          @mouseover="changeStatusIn(0, $event)"
          @mouseleave="changeStatusOut(0, $event)"
          @click="getResourceRequestList()"
        >
          <a>物资申请记录</a>
        </li>
        <li
          @mouseover="changeStatusIn(1, $event)"
          @mouseleave="changeStatusOut(1, $event)"
          @click="getReimbursementRequestList()"
        >
          <a>报销申请记录</a>
        </li>
        <li
          @mouseover="changeStatusIn(2, $event)"
          @mouseleave="changeStatusOut(2, $event)"
          @click="getClassRequestList()"
        >
          <a>教室申请记录</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="myRequestSecondLine flex">
    <button class="btn btn-primary">申请资源</button>
  </div>
  <div class="myRequestContainer">
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>序号</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody v-show="curStatus === 0" class="myRequestResource">
          <tr v-for="item in dataList" :key="item.id">
            <th>{{ item.id }}</th>
            <td>{{ item.name1 }}</td>
            <td>{{ item.name2 }}</td>
            <td>{{ item.localtion }}</td>
          </tr>
        </tbody>
        <tbody v-show="curStatus === 1" class="myRequestReimbursement">
          <tr v-for="item in dataList" :key="item.id">
            <th>{{ item.id }}</th>
            <td>{{ item.name1 }}</td>
            <td>{{ item.name2 }}</td>
            <td>{{ item.localtion }}</td>
          </tr>
        </tbody>
        <tbody v-show="curStatus === 2" class="myRequestClass">
          <tr v-for="item in dataList" :key="item.id">
            <th>{{ item.localtion }}</th>
            <td>{{ item.name1 }}</td>
            <td>{{ item.name2 }}</td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="btn-group flex justify-center">
    <button class="btn btn-outline btn-wide">Previous Page</button>
    <button class="btn btn-outline btn-wide">Next Page</button>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
export default {
  name: "MyRequest",
  components: { NavBar },
  data() {
    return {
      curStatus:1,
      dataListHeader: [],
      dataList: [
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
      ],
    };
  },
  methods: {
    changeStatusIn(model, $event) {
      if (model === 0) {
        $event.currentTarget.className = "bordered";
      } else if (model === 1) {
        $event.currentTarget.className = "bordered";
      } else if (model === 2) {
        $event.currentTarget.className = "bordered";
      }
    },
    changeStatusOut(model, $event) {
      if (model === 0) {
        $event.currentTarget.className = "";
      } else if (model === 1) {
        $event.currentTarget.className = "";
      } else if (model === 2) {
        $event.currentTarget.className = "";
      }
    },
    getResourceRequestList() {
      this.curStatus = 0;
      this.dataList = [
        { id: 0, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 0, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 0, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 0, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 0, name1: "abc", name2: "abc", localtion: "abc" },
      ]
    },
    getReimbursementRequestList() {
      this.curStatus = 1;
            this.dataList = [
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
      ]
    },
    getClassRequestList() {
      this.curStatus = 2;
            this.dataList = [
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
      ]
    },
  },
};
</script>

<style>
</style>