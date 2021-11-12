<template>
  <label for="my-modal-2" class="btn btn-primary modal-button">报销申请</label>
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
          v-model="resourceForm.changeAmount"
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
          v-model="resourceForm.description"
        ></textarea>
      </div>
      <!-- 文件上传 -->
      <div class="flex justify-center mt-8">
        <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
          <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">上传相关证明</label>
            <div class="flex items-center justify-center w-full">
              <label
                class="
                  flex flex-col
                  w-full
                  h-32
                  border-4 border-blue-200 border-dashed
                  hover:bg-gray-100 hover:border-gray-300
                "
              >
                <div class="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p
                    class="
                      pt-1
                      text-sm
                      tracking-wider
                      text-gray-400
                      group-hover:text-gray-600
                    "
                  >
                    Attach a file
                  </p>
                </div>
                <input
                  type="file"
                  class="opacity-0"
                  value=""
                  @change="uploadFile"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-action">
        <label
          for="my-modal-2"
          class="btn btn-primary"
          @click="sendResourceRequest"
          >确定</label
        >
        <label for="my-modal-2" class="btn">取消</label>
      </div>
    </div>
  </div>
</template>

<script>
import { upload } from "../../network/upload.js";
import { resourceRequest } from "../../network/upload.js";
import { ElMessage } from "element-plus";
export default {
  name: "ReimbursementUploadModel",
  components: {},
  props: {
    resourceId: Number,
  },
  data() {
    return {
      resourceForm: {
        img: "",
        changeAmount: "",
        description: "",
      },
    };
  },
  methods: {
    uploadFile(e) {
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      upload(formData).then((res) => {
        let url = res.data;
        this.resourceForm.img = url;
      });
    },
    sendResourceRequest() {
      resourceRequest(this.resourceForm).then(
        //成功
        (res) => {
          let data = res.data;
          console.log(res.data);
          if (data.code == "200000") {
            this.successMessage(data.message);
          } else {
            this.wrongMessage("请检查参数是否填写正确");
          }
        },
        //失败
        () => {
          this.wrongMessage("请检查参数是否填写正确");
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
};
</script>

<style>
</style>