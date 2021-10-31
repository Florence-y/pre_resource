<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="flex-col justify-center hero-content lg:flex-row">
      <div class="text-center lg:text-left">
        <h1 class="mb-5 text-5xl font-bold">欢迎使用资源管理系统</h1>
        <p class="mb-5 leftContainer">
          有了我，你再也不用为了繁琐的步骤跑东跑西，线上一键完成物资申请、报销申请、
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">学号</span>
            </label>
            <input
              type="text"
              placeholder="学号"
              class="input input-bordered"
              v-model="loginForm.number"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">密码</span>
            </label>
            <input
              type="password"
              placeholder="密码"
              class="input input-bordered"
              v-model="loginForm.password"
            />
            <label class="label">
              <a href="#" class="label-text-alt">忘记密码?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <input
              type="button"
              @click="clickTologin"
              value="Login"
              class="btn btn-primary"
            />
          </div>
          <div class="alert">
            <div class="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2196f3"
                class="w-6 h-6 mx-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <label v-if="loginStatus==0">请输入你的学号与密码</label>
              <label v-if="loginStatus==1">账号密码错误</label>
              <label v-if="loginStatus==2">请输入你的学号与密码</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../network/welcome";

export default {
  name: "welcome",
  components: {},
  computed: {},
  data() {
    return {
      loginStatus:0,
      loginForm: {
        number: "",
        password: "",
      },
    };
  },
  methods: {
    clickTologin() {
      login(this.loginForm).then((res) => {
        let data = res.data;
        if (data.code == "200000") {
          this.$router.push("/home");
        } else {
          this.loginStatus = 1;
        }
      });
    },
  },
};
</script>
 
<style scoped>
.leftContainer {
  width: 700px;
}
</style>