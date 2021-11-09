<template>
  <nav-bar></nav-bar>
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
            <td><button class="btn btn-success">同意</button> <button class="btn btn-error">拒绝</button></td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td><button class="btn btn-success">同意</button> <button class="btn btn-error">拒绝</button></td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td><button class="btn btn-success">同意</button> <button class="btn btn-error">拒绝</button></td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Crimson</td>
            <td><button class="btn btn-success">同意</button> <button class="btn btn-error">拒绝</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from "../nav/NavBar.vue";
import ExamineMenu from "../menu/ExamineMenu.vue";
export default {
  name: "ExamineManage",
  components: { NavBar, ExamineMenu },
};
</script>

<style>
</style>