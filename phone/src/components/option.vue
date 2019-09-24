<template>
  <div>
    <mt-header title>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="option-List">
      <mt-button class="option-list-btn" type="primary" size="normal" @click="timekeeping(1)">课时上课</mt-button>
      <mt-button class="option-list-btn" type="primary" size="normal" @click="timekeeping(2)">陪练课上课</mt-button>
      <mt-button class="option-list-btn" type="primary" size="normal" @click="timekeeping(3)">下课</mt-button>
      <input
        type="file"
        ref="fileimg"
        id="fileload"
        accept="image/jpg"
        @change="getFile"
        capture="camera"
        style=" opacity: 0; width: 0; height: 0;"
      />
    </div>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      files: "",
      num: ""
    };
  },
  methods: {
    timekeeping(num) {
      this.num = num;
      this.$refs.fileimg.dispatchEvent(new MouseEvent("click"));
    },
    getFile() {
      var that = this;

      const inputFile = this.$refs.fileimg.files[0];
      this.files = inputFile;
      this.uploadimg();
      if (inputFile) {
        if (
          inputFile.type !== "image/jpeg" &&
          inputFile.type !== "image/png" &&
          inputFile.type !== "image/gif"
        ) {
          alert("不是有效的图片文件！");
          return;
        }
        this.imgInfo = Object.assign({}, this.imgInfo, {
          name: inputFile.name,
          size: inputFile.size,
          lastModifiedDate: inputFile.lastModifiedDate.toLocaleString()
        });
        const reader = new FileReader();
        reader.readAsDataURL(inputFile);
        reader.onload = function(e) {
          that.imgSrc = this.result;
        };
      } else {
        return;
      }
    },
    uploadimg() {
      Indicator.open();
      var account = this.$Global.userinfo.data.account;
      if (this.num == 3) {
        var urls = "/face/end_class?account=" + account;
      } else {
        var urls = "/face/start_class?account=" + account + "&type=" + this.num;
      }
      var params = new FormData();
      params.append("file", this.files);
      this.axios
        .post(urls, params)
        .then(res => {
          this.num = res.data.data;
          if (res.data.code != 10000) {
            MessageBox("提示", res.data.msg);
          } else {
            MessageBox("提示", res.data.data);
          }
          Indicator.close();
          this.$refs.fileimg.value = "";
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
<style lang="">
.option-List {
  width: 100%;
  margin-top: 40%;
}
.option-list-btn {
  width: 80%;
  margin: 10%;
}
</style>