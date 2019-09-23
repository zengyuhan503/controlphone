<template>
  <div>
    <div class="head">
      <ul class="tabbar">
        <li>姓名</li>
        <li>电话</li>
        <li>上课时间</li>
        <li>位置</li>
        <li>状态</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="content-list">
      <ul class="msg-list" v-for="(item,i) in list" :key="i">
        <li>{{item.name}}</li>
        <li>123456789111</li>
        <li>状态</li>
        <li>状态</li>
        <li>状态</li>
        <mt-button size="small" type="primary">small</mt-button>
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
      pageSize: 10
    };
  },
  created() {},
  methods: {
    getlist() {
      this.axios
        .post("http://www.small-spark.com/account/student_list", {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        })
        .then(result => {
          console.log(result);
          var students = result.data.data.list;
          console.log(students);
          this.list = students;
        console.log(this.list)
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
  display: flex;
  font-family: Schoolbook;
}

.tabbar li {
  margin-right: 5%;
}
.msg-list {
  list-style: none;
  display: flex;
  font-family: Schoolbook;
}

.content-list {
  border-top: 1px solid #cccccc;
  margin-top: 5%;
  line-height: 33px;
}
.msg-list li {
  margin-right: 7%;
}
</style>