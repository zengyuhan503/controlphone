import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Option from '@/components/option'
import StudentList from '@/components/studentList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: login
    },
    {
      path: '/option',
      name: '/option',
      component: Option
    },
    {
      path: '/studentList',
      name: '/studentList',
      component: StudentList
    },
  ]
})
