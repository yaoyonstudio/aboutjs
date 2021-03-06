import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Basic from '@/components/Basic'
import Scope from '@/components/basic/Scope'
import This from '@/components/basic/This'
import Function from '@/components/basic/Function'
import Object from '@/components/basic/Object'
import Prototypes from '@/components/basic/Prototypes'
import Closure from '@/components/basic/Closure'
import ApplyCall from '@/components/basic/ApplyCall'
import Callback from '@/components/basic/Callback'
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
import Iterators from '@/components/new/Iterators'
import Proxy from '@/components/new/Proxy'
import Decorator from '@/components/new/Decorator'
import AsyncAwait from '@/components/new/AsyncAwait'
import StringExtension from '@/components/new/StringExtension'
import ObjectExtension from '@/components/new/ObjectExtension'
import ArrayExtension from '@/components/new/ArrayExtension'
import Modules from '@/components/new/Modules'

import Functional from '@/components/Functional'
import Functions from '@/components/functional/Functions'
import HighOrder from '@/components/functional/HighOrder'
import Purity from '@/components/functional/Purity'
import CurryingPartial from '@/components/functional/CurryingPartial'
import Composition from '@/components/functional/Composition'

import Patterns from '@/components/Patterns'
import Singleton from '@/components/pattern/Singleton'
import Module from '@/components/pattern/Module'
import Factory from '@/components/pattern/Factory'
import Constructor from '@/components/pattern/Constructor'
import Iterator from '@/components/pattern/Iterator'
import DecoratorPattern from '@/components/pattern/Decorator'
import Strategy from '@/components/pattern/Strategy'
import Facade from '@/components/pattern/Facade'
import ProxyPattern from '@/components/pattern/Proxy'
import Mediator from '@/components/pattern/Mediator'
import Observer from '@/components/pattern/Observer'

import DataStructure from '@/components/DataStructure'
import Array from '@/components/data_structures/Array'
import List from '@/components/data_structures/List'
import Stack from '@/components/data_structures/Stack'
import Queue from '@/components/data_structures/Queue'
import LinkedList from '@/components/data_structures/LinkedList'
import Dictionary from '@/components/data_structures/Dictionary'
import Symbol from '@/components/data_structures/Symbol'
import Set from '@/components/data_structures/Set'
import Map from '@/components/data_structures/Map'

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
    {path: '/basic/this', component: This},
    {path: '/basic/function', component: Function},
    {path: '/basic/object', component: Object},
    {path: '/basic/prototypes', component: Prototypes},
    {path: '/basic/closure', component: Closure},
    {path: '/basic/apply_call', component: ApplyCall},
    {path: '/basic/callback', component: Callback},
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
    {path: '/new/iterators', component: Iterators},
    {path: '/new/proxy', component: Proxy},
    {path: '/new/decorator', component: Decorator},
    {path: '/new/async_await', component: AsyncAwait},
    {path: '/new/string_extension', component: StringExtension},
    {path: '/new/object_extension', component: ObjectExtension},
    {path: '/new/array_extension', component: ArrayExtension},
    {path: '/new/modules', component: Modules},
    {
      path: '/functional/index',
      name: 'Functional',
      component: Functional,
      alias: '/functional'
    },
    {component: Functions, path: '/functional/function'},
    {component: HighOrder, path: '/functional/high_order'},
    {component: Purity, path: '/functional/purity'},
    {component: CurryingPartial, path: '/functional/currying'},
    {component: Composition, path: '/functional/composition'},
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
    {path: '/pattern/iterator', component: Iterator},
    {path: '/pattern/decorator', component: DecoratorPattern},
    {path: '/pattern/strategy', component: Strategy},
    {path: '/pattern/facade', component: Facade},
    {path: '/pattern/proxy', component: ProxyPattern},
    {path: '/pattern/mediator', component: Mediator},
    {path: '/pattern/observer', component: Observer},
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
    {path: '/data_structures/dictionary', component: Dictionary},
    {path: '/data_structures/symbol', component: Symbol},
    {path: '/data_structures/set', component: Set},
    {path: '/data_structures/map', component: Map},
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
