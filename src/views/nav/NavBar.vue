<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="dropdown dropdown-right">
      <div tabindex="0" class="m-1 btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <ul
        tabindex="0"
        class="
          p-2
          shadow
          menu
          dropdown-content
          bg-base-100
          rounded-box
          w-52
          functionContainer
        "
      >
        <div v-if="roleTag == 0">
          <li v-for="item in viewer" :key="item.message">
            <a @click="moveInTo(item)">{{ item }}</a>
          </li>
        </div>
        <div v-if="roleTag == 1">
          <li v-for="item in manger" :key="item.message">
            <a @click="moveInTo(item)">{{ item }}</a>
          </li>
        </div>
        <div v-if="roleTag == 2">
          <li v-for="item in root" :key="item.message">
            <a @click="moveInTo(item)">{{ item }}</a>
          </li>
        </div>
      </ul>
    </div>
    <div class="flex-1 hidden px-2 mx-2 lg:flex">
      <a href="http://localhost:8081/home"
        ><span class="text-lg font-bold"> 资源管理系统 </span></a
      >
    </div>
    <div class="flex-1 lg:flex-none w-1/5 justify-center">
      <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          class="input input-ghost"
          style="width: 250px"
        />
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-none">
      <div class="avatar">
        <div class="rounded-full w-10 h-10 m-1">
          <img :src="avtarUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isLogin } from "../../network/NavBar";
export default {
  name: "NavBar",
  data() {
    return {
      viewer: ["物资申请", "个人信息", "我的申请"],
      manger: ["物资申请", "个人信息", "我的申请", "资源管理", "审批管理"],
      root: ["资源管理", "个人信息", "用户管理"],
      roleTag: this.$userInf.role,
      avtarUrl: this.$imgBaseUrl + this.$userInf.avatar,
    };
  },
  methods: {
    moveInTo(item) {
      if (item === "物资申请") {
        this.$router.push("/resourceRequest");
      } else if (item === "报销申请") {
        this.$router.push("/reimbursementRequest");
      } else if (item === "个人信息") {
        this.$router.push("/profie");
      } else if (item === "用户管理") {
        this.$router.push("/usersManage");
      } else if (item === "资源管理") {
        this.$router.push("/resourceManage");
      } else if (item === "审批管理") {
        this.$router.push("/examineManage");
      } else if (item === "我的申请") {
        this.$router.push("/myRequest");
      }
    },
    changeAvatar() {
      this.avtarUrl = this.$imgBaseUrl + this.$userInf.avatar;
    },
  },
  beforeCreate() {
    isLogin().then((res) => {
      let data = res.data;
      this.$userInf.avatar = data.data.avatar;
      this.$userInf.role = data.data.role;
      this.roleTag = this.$userInf.role;
      this.avtarUrl = this.$imgBaseUrl + this.$userInf.avatar;
      console.log(this.$userInf.avatar);
    });
  },
};
</script>

<style>
.functionContainer {
  color: black;
}
</style>