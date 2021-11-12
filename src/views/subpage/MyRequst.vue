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
    <reimbursement-upload-model
      v-if="curStatus === 1"
    ></reimbursement-upload-model>
  </div>
  <div class="myRequestContainer">
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead v-if="curStatus == 0">
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
          </tr>
        </thead>
        <thead v-if="curStatus == 1">
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
          </tr>
        </thead>
        <thead v-if="curStatus == 2">
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
              {{
                item.status == 0
                  ? "待审核"
                  : item.status == 1
                  ? "已审核"
                  : "已拒绝"
              }}
            </td>
            <td>
              {{ item.statusDescription ? item.statusDescription : "无" }}
            </td>
          </tr>
        </tbody>
        <tbody v-if="curStatus === 1" class="myRequestReimbursement">
          <tr v-for="item in dataList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.userNumber }}</td>
            <td>{{ item.reimbursementType == 0 ? "个人报销" : "团体报销" }}</td>
            <td>{{ item.event }}</td>
            <td>{{ item.payWay == 0 ? "支付宝" : "微信支付" }}</td>
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
              {{
                item.status == 0
                  ? "待审核"
                  : item.status == 1
                  ? "已审核"
                  : "已拒绝"
              }}
            </td>
          </tr>
        </tbody>
        <tbody v-if="curStatus === 2" class="myRequestClass">
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
    <button class="btn btn-outline btn-wide" @click="last()">
      Previous Page
    </button>
    <button class="btn btn-outline btn-wide" @click="next()">Next Page</button>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import { listResourceRequestRecords } from "../../network/MyRequest";
import ReimbursementUploadModel from "../../components/common/ReimbursementUploadModel.vue";
export default {
  name: "MyRequest",
  components: { NavBar, ReimbursementUploadModel },
  data() {
    return {
      curStatus: 0,
      current: 1,
      dataListHeader: [],
      text: "申请资源",
      dataList: [],
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
      this.text = "申请资源";
      listResourceRequestRecords({
        current: 1,
        size: 3,
      }).then((res) => {
        let data = res.data;
        this.dataList = data.records;
        console.log(data.records);
      });
    },
    getReimbursementRequestList() {
      this.curStatus = 1;
      this.text = "报销申请";
      this.dataList = [
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 1, name1: "abc", name2: "abc", localtion: "abc" },
      ];
    },
    getClassRequestList() {
      this.curStatus = 2;
      this.text = "教室申请";
      this.dataList = [
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
        { id: 2, name1: "abc", name2: "abc", localtion: "abc" },
      ];
    },
    next() {
      let status = this.curStatus;
      let current = this.current + 1;
      if (status == 0) {
        listResourceRequestRecords({
          current,
          size: 3,
        }).then((res) => {
          let data = res.data;
          this.dataList = data.records;
        });
      }
    },
    last() {
      let status = this.curStatus;
      let current = this.current - 1 < 0 ? 1 : this.current - 1;
      if (status == 0) {
        listResourceRequestRecords({
          current,
          size: 3,
        }).then((res) => {
          let data = res.data;
          this.dataList = data.records;
        });
      }
    },
  },
  created() {
    this.getResourceRequestList();
  },
};
</script >

<style scoped>
.myRequestImg {
  width: 100%;
  height: 60px;
  background-position: center center;
  background-size: 100%;
}
</style>