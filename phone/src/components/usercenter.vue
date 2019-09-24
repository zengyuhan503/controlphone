<template>
  <div class="center">
    <mt-header title="个人中心">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="usercenter">
      <img src="../assets/img/0d2a77d.jpg" alt />
      <p>账户：{{userinfo.account}}</p>
      <p>姓名：{{userinfo.name}}</p>
      <p>类型：{{userinfo.identity}}</p>

      <mt-button class="option-list-btn" type="primary" size="normal" @click="logout">退出登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: ""
    };
  },
  watch: {},
  created() {
    this.userinfo = this.$Global.userinfo;
    console.log(this.userinfo);
    if (this.userinfo == null) {
      this.logout();
    }
    this.userinfo = this.$Global.userinfo.data;
  },
  methods: {
    logout() {
      this.$router.push("/");
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
.center {
  height: 100%;
  background-image: url("../assets/img/log.jpg");
  z-index: 0;
}
.usercenter {
  text-align: center;
  margin-top: 27%;
  color: #fff;
}
.usercenter img {
  width: 24%;
  border-radius: 50%;
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