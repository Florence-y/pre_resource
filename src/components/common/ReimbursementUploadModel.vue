<template>
  <label for="my-modal-2" class="btn btn-primary modal-button">报销申请</label>
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="报销类型">
          <el-select
            v-model="form.reimbursementType"
            placeholder="请选择报销类型"
          >
            <el-option label="个人报销" value="0"></el-option>
            <el-option label="团体报销" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款方式">
          <el-select v-model="form.payWay" placeholder="请选择你的收款方式">
            <el-option label="微信支付" value="0"></el-option>
            <el-option label="支付宝" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款具体账号">
          <el-input
            v-model="form.payDetail"
            placeholder="请输入你的微信号或者支付宝账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="报销事项描述">
          <el-input
            v-model="form.event"
            type="textarea"
            placeholder="请输入你报销的具体事件"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 文件上传 -->
      <div class="flex justify-center mt-8">
        <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
          <div class="m-4">
            <label class="inline-block mb-2 text-gray-500"
              >上传相关证明(报销金额由证明材料决定)</label
            >
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
      <div class="modal-action flex justify-center">
        <label
          for="my-modal-2"
          class="btn btn-primary"
          @click="onSubmit()"
          >确定</label
        >
        <label for="my-modal-2" class="btn">取消</label>
      </div>
    </div>
  </div>
</template>

<script>
import { upload } from "../../network/upload.js";
import { ElMessage } from "element-plus";
import {saveReimbursement} from "../../network/ReimbursementUploadModel";
export default {
  name: "ReimbursementUploadModel",
  components: {},
  props: {
    resourceId: Number,
  },
  data() {
    return {
      form: {
        reimbursementType: "",
        payWay: "",
        event:"",
        payDetail:"",
        proveDetail:""
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      saveReimbursement(this.form).then((res)=>{
        let data = res.data; 
        if(data.code==="200000"){
            this.successMessage(data.message);
        }else{
            this.wrongMessage(data.message);
        }
      })
    },
    uploadFile(e) {
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      upload(formData).then((res) => {
        let url = res.data;
        this.form.proveDetail = url;
      });
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