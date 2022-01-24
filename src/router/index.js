import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        // path: 'about/:test/:name',
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        // 第一种：props的对象写法
        // props:{a:1,b:'hello '},
        // 第二种：布尔值
        props:true,
        // 第三种 函数写法
        props($route){
          return {id:$route.query.test,title:$route.query.name}
        },
        meta:{isAbout:true},
        beforeEnter: (to, from, next) => {
          console.log("独享路由守卫")
        }
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

// router.afterEach((to,from, next)=>{
//   if(to.meta.isAbout){
//     console.log("被拦截了")
//     document.title = "关于"
//   }else{
//     // next()
//   }
// })

export default router
