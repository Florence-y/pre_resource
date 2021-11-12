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
          <th>id</th>
          <th>学号</th>
          <th>名字</th>
          <th>头像</th>
          <th>学院与专业</th>
          <th>权限</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </td>
          <td>{{ user.id }}</td>
          <td>{{ user.number }}</td>
          <td>
            <div>
              <div class="font-bold">{{ user.name }}</div>
              <div class="text-sm opacity-50">Russia</div>
            </div>
          </td>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="w-12 h-12 mask mask-squircle">
                  <img
                    :src="this.$imgBaseUrl + user.avatar"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            {{ user.department }}
            <br />
            <span class="badge badge-outline badge-sm">{{ user.major }}</span>
          </td>
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
              <option>浏览者</option>
              <option selected="selected">资源管理者</option>
              <option>最高管理者</option>
            </select>
            <select
              v-if="user.role == 2"
              class="select select-bordered w-full max-w-xs"
            >
              <option>浏览者</option>
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
import { userList } from "../../network/UserManage";
// import ElementUpload from "../../components/common/Element-Upload.vue"
export default {
  name: "UsersManage",
  components: { NavBar },
  data() {
    return {
      users: [],
    };
  },
  methods: {},
  created() {
    userList().then((res) => {
      let data = res.data;
      this.users = data.data;
    });
  },
};
</script>
<style>
</style>