<template>
  <div>
    <div class="head">
      <ul class="tabbar">
        <li>姓名</li>
        <li>类型</li>
        <li>开始时间</li>
        <li>结束时间</li>
        <li>老师</li>
      </ul>
    </div>
    <div
      class="content-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <ul class="msg-list" v-for="(item,i) in list" :key="i">
        <li>{{item.name}}</li>
        <li>{{item.type}}</li>
        <li>{{format(item.startTime)}}</li>
        <li>{{format(item.endTime)}}</li>
        <li>{{item.teacher}}</li>
      </ul>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      list: [],
      pageNum: 0,
      pageSize: 100
    };
  },
  created() {},
  methods: {
    loadMore() {
      this.loading = true;
    },
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    format(shijianchuo) {
      var shijianchuo = shijianchuo * 1000;
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);

      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (
        y +
        "-" +
        this.add0(m) +
        "-" +
        this.add0(d) +
        " " +
        this.add0(h) +
        ":" +
        this.add0(mm) +
        ":" +
        this.add0(s)
      );
    },
    getlist() {
      var parmes = {
        endTime: 99999999999,
        startTime: 0,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        name: this.$Global.userinfo.data.name
      };
      this.axios
        .post("http://www.small-spark.com/find/find_student", parmes)
        .then(result => {
          var students = result.data.data.list;

          this.list = students;
        })
        .then(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getlist();
  }
};
</script>
<style lang="">
.tabbar {
  list-style: none;
  font-family: Schoolbook;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabbar li {
  width: 20%;
}
.msg-list {
  list-style: none;
  font-family: Schoolbook;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-list {
  border-top: 1px solid #cccccc;
  margin-top: 5%;
  line-height: 33px;
}
.msg-list li {
  width: 20%;
}
</style>