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
    <examine-menu @changeStatus="updateStatus"></examine-menu>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead v-if="curStatus === 0">
          <tr>
            <th>序号</th>
            <th>申请人学号</th>
            <th>资源名</th>
            <th>数量</th>
            <th>申请原因及去向</th>
            <th>申请时间</th>
            <th>证明图片</th>
            <th>审核状态</th>
            <th>审核人回复</th>
            <th>操作</th>
          </tr>
        </thead>
        <thead v-if="curStatus === 1">
          <tr>
            <th>序号</th>
            <th>申请人学号</th>
            <th>报销类型</th>
            <th>报销事件</th>
            <th>支付的方式</th>
            <th>支付的具体细节</th>
            <th>证明图片</th>
            <th>申请时间</th>
            <th>审核状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="curStatus === 0" class="myRequestResource">
          <tr v-for="item in dataList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.userNumber }}</td>
            <td>{{ item.resourceName }}</td>
            <td>{{ item.changeAmount }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.operateTime }}</td>
            <td>
              <div
                class="myRequestImg"
                :style="{
                  backgroundImage: 'url(' + this.$imgBaseUrl + item.img + ')',
                }"
              ></div>
            </td>
            <td>
              <select
                v-if="item.status == 0"
                class="select select-bordered w-full max-w-xs"
              >
                <option selected="selected">未审核</option>
                <option>通过</option>
                <option>拒绝</option>
              </select>
              <select
                v-if="item.status == 1"
                class="select select-bordered w-full max-w-xs"
              >
                <option>未审核</option>
                <option selected="selected">通过</option>
                <option>拒绝</option>
              </select>
              <select
                v-if="item.status == 2"
                class="select select-bordered w-full max-w-xs"
              >
                <option>未审核</option>
                <option>通过</option>
                <option selected="selected">拒绝</option>
              </select>
            </td>
            <td>
              {{ item.statusDescription ? item.statusDescription : "无" }}
            </td>
            <td v-if="item.status == 0" class="flex justify-center space-x-2">
              <label class="btn btn-primary">同意</label>
              <agree-model :id="item.id"></agree-model>
            </td>
            <td v-if="item.status != 0">已操作</td>
          </tr>
        </tbody>
        <tbody v-if="curStatus === 1" class="myRequestReimbursement">
          <tr v-for="item in dataList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.userNumber }}</td>
            <td>{{ item.reimbursementType == 0 ? "个人报销" : "团体报销" }}</td>
            <td>{{ item.event }}</td>
            <td>{{ item.payWay == 0 ? "微信支付" : "支付宝" }}</td>
            <td>{{ item.payDetail }}</td>
            <td>
              <div
                class="myRequestImg"
                :style="{
                  backgroundImage:
                    'url(' + this.$imgBaseUrl + item.proveDetail + ')',
                }"
              ></div>
            </td>
            <td>{{ item.eventStartTime }}</td>
            <td>
              <select
                v-if="item.status == 0"
                class="select select-bordered w-full max-w-xs"
              >
                <option selected="selected">未审核</option>
                <option>通过</option>
                <option>拒绝</option>
              </select>
              <select
                v-if="item.status == 1"
                class="select select-bordered w-full max-w-xs"
              >
                <option>未审核</option>
                <option selected="selected">通过</option>
                <option>拒绝</option>
              </select>
              <select
                v-if="item.status == 2"
                class="select select-bordered w-full max-w-xs"
              >
                <option>未审核</option>
                <option>通过</option>
                <option selected="selected">拒绝</option>
              </select>
            </td>
            <td v-if="item.status == 0" class="flex justify-center space-x-2">
              <label class="btn btn-primary">同意</label
              ><label class="btn btn-primary">拒绝</label>
            </td>
            <td v-if="item.status != 0">已操作</td>
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
import AgreeModel from "../../components/common/AgreeModel.vue";
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
      dataList: [],
    };
  },
  components: { NavBar, ExamineMenu, AgreeModel },
  // components: { NavBar, ExamineMenu,},
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
          this.dataList = data.records;
        });
      }
      if (type === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
          this.dataList = data.records;
        });
      }
      console.log(type);
    },
    updateStatus(status) {
      this.status = status;
      let type = this.curStatus;
      let query = {
        current: this.current,
        size: this.size,
        status: this.status,
      };
      if (type === 0) {
        listResourceRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
          this.dataList = data.records;
        });
      }
      if (type === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          console.log(data);
          this.dataList = data.records;
        });
      }
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
          this.dataList = data.records;
        });
      }
      if (this.curStatus === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          this.dataList = data.records;
        });
      }
    },
    next() {
      let current = this.current + 1;
      this.current = current;
      let query = {
        current,
        size: this.size,
        status: this.status,
      };
      if (this.curStatus === 0) {
        listResourceRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          this.dataList = data.records;
        });
      }
      if (this.curStatus === 1) {
        listReimbursementRequestRecordsByCondition(query).then((res) => {
          let data = res.data;
          this.dataList = data.records;
        });
      }
    },
  },
  created() {
    this.getResourceByType(0);
  },
};
</script>

<style>
.myRequestImg {
  width: 100%;
  height: 60px;
  background-position: center center;
  background-size: 100%;
}
</style>