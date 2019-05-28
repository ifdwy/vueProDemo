import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
import hotgoods from '@/components/goods/hotgoods'
import setmeal from '@/components/goods/setmeal'
import sweet from '@/components/goods/sweet'
import snack from '@/components/goods/snack'
import goodsContent from '@/components/goods/goodsContent'
import axios from  'axios'

Vue.use(Router)
Vue.prototype.$axios = axios

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods/hotgoods'

    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      children:[
        {
          path: '/goods/hotgoods',
          name: 'hotgoods',
          component: hotgoods,
        },
        {
         path: '/goods/setmeal',
          name: 'setmeal',
          component: setmeal, 
        },
        {
          path: '/goods/sweet',
          name: 'sweet',
          component: sweet,
        },
        {
         path: '/goods/snack',
          name: 'snack',
          component: snack, 
        }
      ],
      redirect: '/goods/hotgoods'
    },

    {
      path: '/ratings',
      name: 'ratings',
      component: ratings, 
    },

    {
      path: '/seller',
      name: 'seller',
      component: seller, 
    },

    {
      path: '/hotgoods',
      name: 'hotgoods',
      component: hotgoods, 
    },

    {
      path: '/goods/hotgoods/goodsContent',
      name: 'goodsContent',
      component: goodsContent, 
    },

  ]
})
