<template>
  <div>
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="option-List">
      <mt-button class="option-list-btn" type="primary" size="normal" @click="timekeeping()">课时上课</mt-button>
      <mt-button class="option-list-btn" type="primary" size="normal" @click="player()">陪练课上课</mt-button>
      <mt-button class="option-list-btn" type="primary" size="normal" @click="classover()">下课</mt-button>
      <input type="file" id="upload" accept="image/jpg" @change="upload" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    timekeeping() {
      this.axios
        .post("http://www.small-spark.com/face/start_class")
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    upload() {}
  }
};
</script>
<style lang="">
.option-List {
  width: 100%;
  margin-top: 50%;
}
.option-list-btn {
  width: 80%;
  margin: 10%;
}
</style>