import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Basic from '@/components/Basic'
import Function from '@/components/basic/Function'
import Prototypes from '@/components/basic/Prototypes'
import Closure from '@/components/basic/Closure'
import Reduce from '@/components/basic/Reduce'
import Promise from '@/components/basic/Promise'
import Recursion from '@/components/basic/Recursion'
import ArrayMethods from '@/components/basic/ArrayMethods'

import New from '@/components/New'
import Argument from '@/components/new/Argument'
import ArrayKeysValues from '@/components/new/ArrayKeysValues'
import Generators from '@/components/new/Generators'
import Proxy from '@/components/new/Proxy'
import AsyncAwait from '@/components/new/AsyncAwait'

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
    {path: '/basic/function', component: Function},
    {path: '/basic/prototypes', component: Prototypes},
    {path: '/basic/closure', component: Closure},
    {path: '/basic/reduce', component: Reduce},
    {path: '/basic/promise', component: Promise},
    {path: '/basic/recursion', component: Recursion},
    {path: '/basic/array_methods', component: ArrayMethods},
    {
      path: '/new/index',
      name: 'NewIndex',
      component: New,
      alias: '/new'
    },
    {path: '/new/argument', component: Argument},
    {path: '/new/array_keys_values', component: ArrayKeysValues},
    {path: '/new/generators', component: Generators},
    {path: '/new/proxy', component: Proxy},
    {path: '/new/async_await', component: AsyncAwait},
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
