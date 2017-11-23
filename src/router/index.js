import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Basic from '@/components/Basic'
import Scope from '@/components/basic/Scope'
import Function from '@/components/basic/Function'
import Object from '@/components/basic/Object'
import Prototypes from '@/components/basic/Prototypes'
import Closure from '@/components/basic/Closure'
import Reduce from '@/components/basic/Reduce'
import Promise from '@/components/basic/Promise'
import Recursion from '@/components/basic/Recursion'
import ArrayMethods from '@/components/basic/ArrayMethods'

import New from '@/components/New'
import Let from '@/components/new/Let'
import ArrowFunction from '@/components/new/ArrowFunction'
import TemplateString from '@/components/new/TemplateString'
import Argument from '@/components/new/Argument'
import ArrayKeysValues from '@/components/new/ArrayKeysValues'
import ForOf from '@/components/new/ForOf'
import ObjectIteration from '@/components/new/ObjectIteration'
import Deconstruction from '@/components/new/Deconstruction'
import Class from '@/components/new/Class'
import Generators from '@/components/new/Generators'
import Proxy from '@/components/new/Proxy'
import Decorator from '@/components/new/Decorator'
import AsyncAwait from '@/components/new/AsyncAwait'
import Set from '@/components/new/Set'

import Patterns from '@/components/Patterns'
import Singleton from '@/components/pattern/Singleton'
import Module from '@/components/pattern/Module'
import Factory from '@/components/pattern/Factory'
import Constructor from '@/components/pattern/Constructor'

import DataStructure from '@/components/DataStructure'
import Array from '@/components/data_structures/Array'
import List from '@/components/data_structures/List'
import Stack from '@/components/data_structures/Stack'
import Queue from '@/components/data_structures/Queue'
import LinkedList from '@/components/data_structures/LinkedList'

import Links from '@/components/fun/Links'

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
    {path: '/basic/scope', component: Scope},
    {path: '/basic/function', component: Function},
    {path: '/basic/object', component: Object},
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
    {path: '/new/let', component: Let},
    {path: '/new/arrow', component: ArrowFunction},
    {path: '/new/template', component: TemplateString},
    {path: '/new/argument', component: Argument},
    {path: '/new/array_keys_values', component: ArrayKeysValues},
    {path: '/new/forof', component: ForOf},
    {path: '/new/object_iteration', component: ObjectIteration},
    {path: '/new/deconstruction', component: Deconstruction},
    {path: '/new/class', component: Class},
    {path: '/new/generators', component: Generators},
    {path: '/new/proxy', component: Proxy},
    {path: '/new/decorator', component: Decorator},
    {path: '/new/async_await', component: AsyncAwait},
    {path: '/new/set', component: Set},
    {
      path: '/patterns/index',
      name: 'PatternsIndex',
      component: Patterns,
      alias: '/patterns'
    },
    {path: '/pattern/singleton', component: Singleton},
    {path: '/pattern/module', component: Module},
    {path: '/pattern/factory', component: Factory},
    {path: '/pattern/constructor', component: Constructor},
    {
      path: '/data_structure/index',
      name: 'DataStructureIndex',
      component: DataStructure,
      alias: '/data_structure'
    },
    {path: '/data_structures/array', component: Array},
    {path: '/data_structures/list', component: List},
    {path: '/data_structures/stack', component: Stack},
    {path: '/data_structures/queue', component: Queue},
    {path: '/data_structures/linked_list', component: LinkedList},
    {
      path: '/fun/links',
      name: 'Links',
      component: Links,
      alias: '/links'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
