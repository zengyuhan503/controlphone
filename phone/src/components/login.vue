<template>
  <div class="delu">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="logbox">
      <mt-field label="用户名:" placeholder="请输入用户名" v-model="username"></mt-field>
    </div>
    <div class="login-btn">
      <mt-button type="primary" size="normal" @click="login()">登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    console.log(this.$Global.identity);
  },
  methods: {
    login() {
      var that = this;
      this.axios
        .post("http://www.small-spark.com/face/login", {
          account: this.username
        })
        .then(function(res) {
          if (res.data.code == 10000) {
            that.$Global.identity = res.data.identity;
            
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="">
.logbox {
  width: 80%;
  margin: 10% auto;
  margin-top: 52%;
}
.delu {
  height: 100%;
  background-image: url("../assets/img/log.jpg");
}

.mint-button--primary {
  width: 80%;
  margin: 10%;
}

.login-btn {
  width: 100%;
}
.mint-cell {
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>