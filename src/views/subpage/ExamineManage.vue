<template>
  <nav-bar></nav-bar>
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
        <a> 资源申请 </a>
      </li>
      <li
        @click="getResourceByType(1)"
        @mouseover="changeInStatus($event)"
        @mouseleave="changeOutStatus($event)"
      >
        <a> 报销申请 </a>
      </li>
    </ul>
  </div>
  <div class="container flex justify-center space-x-4">
    <examine-menu></examine-menu>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>是否同意</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <button class="btn btn-success">同意</button>
              <button class="btn btn-error">拒绝</button>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>
              <button class="btn btn-success">同意</button>
              <button class="btn btn-error">拒绝</button>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>
              <button class="btn btn-success">同意</button>
              <button class="btn btn-error">拒绝</button>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Crimson</td>
            <td>
              <button class="btn btn-success">同意</button>
              <button class="btn btn-error">拒绝</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="btn-group flex justify-center">
    <button class="btn btn-outline btn-wide" @click="last()">
      Previous Page
    </button>
    <button class="btn btn-outline btn-wide" @click="next()">Next Page</button>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import ExamineMenu from "../menu/ExamineMenu.vue";
import {
  listResourceRequestRecordsByCondition,
  listReimbursementRequestRecordsByCondition,
} from "../../network/ExamineManage";
export default {
  name: "ExamineManage",
  data() {
    return {
      curStatus: 0,
      status: 0,
      current: 1,
      size: 4,
    };
  },
  components: { NavBar, ExamineMenu },
  methods: {
    getResourceByType(type) {
      this.curStatus = type;
      this.current = 1;
      this.status = 0;
      let query = {
        current: this.current,
        size: this.size,
        status: this.status,
      };
      if (type === 0) {
        listResourceRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
        });
      }
      if (type === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
        });
      }
      console.log(type);
    },
    changeInStatus($event) {
      $event.currentTarget.className = "bordered";
    },
    changeOutStatus($event) {
      $event.currentTarget.className = "";
    },
    last() {
      let current = this.current - 1 <= 0 ? 1 : this.current - 1;
      this.current = current;
      let query = {
        current,
        size: this.size,
        status: this.status,
      };
      if (this.curStatus === 0) {
        listResourceRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
        });
      }
      if (this.curStatus === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
        });
      }
    },
    next() {
      let current = this.current+1;
      this.current = current;
      let query = {
        current,
        size: this.size,
        status: this.status,
      };
      if (this.curStatus === 0) {
        listResourceRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
        });
      }
      if (this.curStatus === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
        });
      }
    },
  },
};
</script>

<style>
</style>