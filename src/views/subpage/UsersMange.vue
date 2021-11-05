<template>
  <nav-bar></nav-bar>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead class="">
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>用户角色</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="w-12 h-12 mask mask-squircle">
                  <img
                    src="/tailwind-css-component-profile-4@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ user.name }}</div>
                <div class="text-sm opacity-50">Russia</div>
              </div>
            </div>
          </td>
          <td>
            {{ user.job }}
            <br />
            <span class="badge badge-outline badge-sm">Office Assistant I</span>
          </td>
          <td>{{ user.location }}</td>
          <th>
            <select
              v-if="user.role == 0"
              class="select select-bordered w-full max-w-xs"
            >
              <option selected="selected">浏览者</option>
              <option>资源管理者</option>
              <option>最高管理者</option>
            </select>
            <select
              v-if="user.role == 1"
              class="select select-bordered w-full max-w-xs"
            >
              <option >浏览者</option>
              <option selected="selected">资源管理者</option>
              <option>最高管理者</option>
            </select>
            <select
              v-if="user.role == 2"
              class="select select-bordered w-full max-w-xs"
            >
              <option >浏览者</option>
              <option>资源管理者</option>
              <option selected="selected">最高管理者</option>
            </select>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
    <!-- <element-upload></element-upload> -->
</template>

<script>
import NavBar from "../nav/NavBar.vue";
// import ElementUpload from "../../components/common/Element-Upload.vue"
export default {
  name: "UsersManage",
  components: { NavBar},
  data() {
    return {
      users: [
        { name: "吴彦臻", job: "教务处", location: "北京", role: 0 },
        { name: "吴晓吟", job: "财务处", location: "上海", role: 1 },
        { name: "吴小文", job: "党建办", location: "广州", role: 2 },
      ],
    };
  },
};
</script>
<style>
</style>