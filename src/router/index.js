import Vue from 'vue'
import Router from 'vue-router'
// import store from './../store'
import HelloWorld from '@/components/HelloWorld'
import scroll from '@/components/scroll'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: scroll,
      meta: {
        title: '滚动页'
      }

    }
    // {
    //   path: '/insure',
    //   name: 'insure',
    //   // component: insure,
    //   meta: {
    //     title: '首页'
    //   },
    //   component: resolve => {
    //     require(['@/views/insure/insure.vue'], resolve)
    //   }
    // }
  ]
})

// require(['@/views/login/login.vue'], resolve)
// require(['./../components/HelloWorld.vue'], resolve)

// Router.beforeEach((to, from, next) => {
//   store.dispatch('openLoading')
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

// router.afterEach(to => store.dispatch('closeLoading'))

export default router
