<template>
  <div v-infinite-scroll="load">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="card lg:card-side bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <div class="card-actions">
            <label for="my-modal-2" class="btn btn-primary modal-button"
              >申请</label
            >
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
            <button class="btn btn-ghost">详细信息</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadResourceList } from "../../network/home";
import Upload from "../../components/common/Upload.vue"
export default {
  name: "Content",
  data() {
    return {
      current: 1,
      size: 3,
      list: [],
    };
  },
  methods: {
    load() {
      loadResourceList({
        current: this.current,
        size: this.size,
      }).then((res) => {
        this.list = this.list.concat(res.data.records);
        this.current += 1;
      });
    },
  },
  created() {
    this.load();
  },

    components: {Upload},
};
</script>

<style scpoed>
.item {
  width: 100%;
  float: left;
}
</style>