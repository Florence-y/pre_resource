<template>
  <label for="my-modal-2" class="btn btn-primary modal-button">拒绝</label>
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <!-- 数量 -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">不同意原因</span>
        </label>
        <input
          type="text"
          placeholder="请输入拒绝原因"
          class="input input-bordered"
          v-model="statusDescription"
        />
      </div>
      <div class="modal-action">
        <label for="my-modal-2" class="btn btn-primary" @click="disagree()"
          >确定</label
        >
        <label for="my-modal-2" class="btn">取消</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgreeModel",
  data() {
    return { statusDescription: "" };
  },
  props: {
    id: Number,
  },
  methods: {
    disagree() {
      console.log(this.id,this.statusDescription);
    },
  },
};
</script>

<style>
</style>