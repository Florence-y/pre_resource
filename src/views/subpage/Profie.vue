<template>
  <nav-bar ref="profieNarvar"></nav-bar>
  <div class="profieContainer flex space-x-10">
    <div class="profieleft flex-grow-0 m-5">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <ul class="menu p-4 shadow-lg bg-base-100 rounded-box">
          <li class="menu-title">
            <span> 我的信息 </span>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              个人信息
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              账号安全
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              角色设置
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="profieRight flex-1 m-5 w-full">
      <div class="profieHeader">
        <div class="avatar flex space-x-1.5">
          <div class="mb-8 rounded-btn w-24 h-24">
            <img :src="this.$imgBaseUrl + user.avatar" />
          </div>
          <div style="position: relative">
            <button class="btn">上传头像</button>
            <input
              type="file"
              class="opacity-0"
              style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
              @change="uploadFile"
            />
          </div>
        </div>
      </div>
      <div class="profieMainContent flex-row space-y-3">
        <div class="form-control">
          <label class="input-group">
            <span>用户名</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered w-2/6"
              v-model="user.name"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="input-group">
            <span>个人签名</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered w-2/6"
              v-model="user.person"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="input-group">
            <span>学院</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered w-2/6"
              v-model="user.department"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="input-group">
            <span>专业</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered w-2/6"
              v-model="user.major"
            />
          </label>
        </div>
        <div class="manOrWoman p-6 card bordered w-1/4 flex-row space-x-4">
          -
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">男</span>
              <input
                type="radio"
                name="opt"
                checked="checked"
                class="radio"
                value=""
              />
            </label>
          </div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">女</span>
              <input
                type="radio"
                name="opt"
                checked="checked"
                class="radio radio-primary"
                value=""
              />
            </label>
          </div>
        </div>
        <div class="flex space-x-4">
          <button class="btn" @click="updateUserInf()">确定</button>
          <button class="btn btn-primary" @click="clearForm()">清空</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import { upload } from "../../network/upload.js";
import { updateUser } from "../../network/profie.js";
import { ElMessage } from "element-plus";
import { isLogin } from "../../network/NavBar";
export default {
  name: "Profie",
  components: { NavBar },
  data() {
    return {
      user: {
        name: "",
        department: "",
        major: "",
        avatar: this.$imgBaseUrl + this.$userInf.avatar,
        person: "",
      },
    };
  },
  methods: {
    uploadFile(e) {
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      upload(formData).then((res) => {
        let url = res.data;
        this.user.avatar = url;
        // this.user.avatar = url;
      });
    },
    clearForm() {
      console.log("清空");
      this.user = {
        name: "",
        department: "",
        major: "",
        avatar: "",
        person: "",
      };
    },
    updateUserInf() {
      updateUser(this.user).then(
        (res) => {
          console.log(res);
          let data = res.data;
          if (data.code === "200000") {
            this.successMessage(data.message);
            this.$userInf.avatar = data.data.avatar;
            this.$userInf.role = data.data.role;
            this.user.name = data.data.name;
            this.user.department = data.data.department;
            this.user.major = data.data.major;
            this.user.avatar = data.data.avatar;
            this.$refs.profieNarvar.changeAvatar();
          } else {
            this.wrongMessage(data.message);
          }
        },
        () => {
          this.wrongMessage("未知错误");
        }
      );
    },
    successMessage(message) {
      ElMessage({
        showClose: true,
        message: message,
        type: "success",
      });
    },
    wrongMessage(message) {
      ElMessage({
        showClose: true,
        message: message,
        type: "error",
      });
    },
  },
  beforeCreate() {
    isLogin().then((res) => {
      let data = res.data;
      this.$userInf.avatar = data.data.avatar;
      this.$userInf.role = data.data.role;
      this.user.name = data.data.name;
      this.user.department = data.data.department;
      this.user.major = data.data.major;
      this.user.avatar = data.data.avatar;
    });
  },
};
</script>

<style>
</style>