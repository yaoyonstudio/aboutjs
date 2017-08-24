import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Basic from '@/components/Basic'
import Closure from '@/components/basic/Closure'

import New from '@/components/New'
import Argument from '@/components/new/Argument'
import ArrayKeysValues from '@/components/new/ArrayKeysValues'
import Generators from '@/components/new/Generators'

import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      alias: '/'
    },
    {
      path: '/basic/index',
      name: 'BasicIndex',
      component: Basic,
      alias: '/basic'
    },
    {
      path: '/basic/closure',
      component: Closure
    },
    {
      path: '/new/index',
      name: 'NewIndex',
      component: New,
      alias: '/new'
    },
    {
      path: '/new/argument',
      component: Argument
    },
    {
      path: '/new/array_keys_values',
      component: ArrayKeysValues
    },
    {
      path: '/new/generators',
      component: Generators
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
