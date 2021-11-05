<template>
  <nav-bar></nav-bar>
  <div class="profieContainer flex space-x-10">
    <div class="profieleft flex-grow-0 m-5">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <ul class="menu p-4 shadow-lg bg-base-100 rounded-box">
          <li class="menu-title">
            <span> Menu Title </span>
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
              Item with icon
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
              Item with icon
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
              Item with icon
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="profieRight flex-1 m-5 w-full">
      <div class="profieHeader">
        <div class="avatar flex space-x-1.5">
          <div class="mb-8 rounded-btn w-24 h-24">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            />
          </div>
          <button class="btn">上传头像</button>
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
            />
          </label>
        </div>
        <div class="form-control">
          <label class="input-group">
            <span>用户名</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered w-2/6"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="input-group">
            <span>用户名</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered w-2/6"
            />
          </label>
        </div>
        <div class="manOrWoman p-6 card bordered w-1/4 flex-row space-x-4">
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
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";

export default {
  name: "Profie",
  components: { NavBar },
};
</script>

<style>
</style>