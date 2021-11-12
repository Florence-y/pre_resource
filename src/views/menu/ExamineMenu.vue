<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @mouseenter="isCollapse = false"
    @mouseleave="isCollapse = true"
  >
    <el-menu-item index="1" @click="changeStatus(0)">
      <el-icon><list /></el-icon>
      <template #title> 审批中 </template>
    </el-menu-item>
    <el-menu-item index="2" @click="changeStatus(1)">
      <el-icon><check /></el-icon>
      <template #title>已同意</template>
    </el-menu-item>
    <el-menu-item index="3" @click="changeStatus(2)">
      <el-icon><close /></el-icon>
      <template #title>已拒绝</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Check, Close, List } from "@element-plus/icons";

export default defineComponent({
  name: "ExamineMenu",
  components: {
    Check,
    Close,
    List,
  },
  methods:{
    changeStatus(status){
      this.$emit('changeStatus',status)
    }
  },
  setup() {
    const isCollapse = ref(true);
    const handleOpen = () => {
    };
    const handleClose = () => {
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>