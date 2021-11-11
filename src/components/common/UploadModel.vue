<template>
  <label for="my-modal-2" class="btn btn-primary modal-button">申请</label>
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <!-- 数量 -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">数量</span>
        </label>
        <input
          type="text"
          placeholder="请输入数量"
          class="input input-bordered"
        />
      </div>
      <!--证明说明-->
      <div class="form-control">
        <label class="label">
          <span class="label-text">资源申请原因与去处</span>
        </label>
        <textarea
          class="textarea h-24 textarea-bordered"
          placeholder="请输入资源申请原因与去处"
        ></textarea>
      </div>
      <!-- 文件上传 -->
      <upload></upload>
      <div class="modal-action">
        <label for="my-modal-2" class="btn btn-primary">确定</label>
        <label for="my-modal-2" class="btn">取消</label>
      </div>
    </div>
  </div>
</template>

<script>
import Upload from "../../components/common/Upload.vue";
export default {
    name:"UploadModel",
    components:{
        Upload
    }
};
</script>

<style>
</style>