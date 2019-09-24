<template>
  <div id="app">
    <router-view v-on:uplogo="receive"></router-view>
    <mt-tabbar v-model="selected" v-if="identity=='老师'">
      <mt-tab-item id="tab1" @click.native="selectChange('VoteList')">
        <span>下课</span>
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="selectChange('VoteList')">
        <span>统计</span>
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="selectChange('VoteList')">
        <span>个人中心</span>
      </mt-tab-item>
    </mt-tabbar>
    <mt-tabbar v-model="selected" v-else>
      <mt-tab-item id="tab2">统计</mt-tab-item>
      <mt-tab-item id="tab3">个人中心</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/",
      identity: "",
      selected: "tab3"
    };
  },
  created() {
    this.identity = this.$Global.identity;
    this.userinfo = this.$Global.userinfo;
    if (this.userinfo == null) {
      this.$router.push("/");
    }
  },
  mounted() {},
  watch: {
    selected(data) {
      this.selectChange(data);
    },
    identity(val, oldVal) {
      console.log(val, oldVal);
    }
  },
  methods: {
    selectChange(num) {
      console.log(num);
      var path;
      if (this.identity == "学生") {
        path = "/studentList";
      } else {
        path = "/tercherList";
      }
      switch (num) {
        case "tab1":
          this.$router.push("/option");
          break;
        case "tab2":
          this.$router.push(path);
          break;
        case "tab3":
          this.$router.push("/usercenter");
          break;
        default:
          break;
      }
    },
    receive(data) {
      console.log(data);
      this.identity = data.identity;
    }
  }
};
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body,
html,
div {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}
ul,
li {
  padding: 0;
}
body,
#app .el-header {
  margin: 0;
  padding: 0;
}
.mint-tab-item-label span{
  display: inline-block;
  height: 28px;;
  text-align: center;
  line-height: 28px
}
#app .logcont {
  background: #23262e;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  width: 100%;
  color: #009688;
  font-size: 27px;
}

#app .tac,
#app .el-row > div {
  height: 100%;
}
#app .el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;

  width: 100%;
  min-height: 400px;
}
.mainCont {
  background: #fff;
  padding-bottom: 5%;
}
.el-scrollbar__view > div {
  padding: 3% 6%;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.el-form-item__label {
  text-align: center;
}
.el-scrollbar__bar.is-horizontal {
  display: none !important;
}
.block {
  text-align: center;
  padding: 15px;
}
.el-scrollbar__view > div > .el-table {
  min-height: 600px;
  width: 95% !important;
}
.el-submenu .el-menu-item {
  min-width: 150px;
}
</style>
