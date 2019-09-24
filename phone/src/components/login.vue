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
      <p v-show="logerror" style="height:30px;lin-height:30px;color:red">*{{mssage}}</p>
    </div>
    <div class="login-btn">
      <mt-button type="primary" size="normal" @click="login()">登录</mt-button>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      username: "15127157729",
      password: "",
      mssage: "1111",
      logerror: false
    };
  },
  created() {},
  mounted() {
    this.MessageBox = MessageBox;
  },
  methods: {
    login() {
      this.logerror = false;
      var that = this;
      this.axios
        .post("http://www.small-spark.com/face/login", {
          account: this.username
        })
        .then(function(res) {
          if (res.data.code == 10000) {
            that.$Global.userinfo = res.data;
            if (res.data.identity == "学生") {
              that.$Global.identity = false;
            }
            that.$router.push("/usercenter");
            that.$emit("uplogo", res.data.data);
          } else {
            that.mssage = res.data.msg;
            that.logerror = true;
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scope>
.logbox {
  width: 80%;
  margin: 10% auto;
  margin-top: 52%;
}
.delu {
  height: 100%;
  background-image: url("../assets/img/log.jpg");
  position: relative;
  left: 0;
  top: 0;
  z-index: 99999;
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