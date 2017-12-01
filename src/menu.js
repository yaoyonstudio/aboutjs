const menus = [
  {
    id: 1,
    title: 'JS Basic',
    name: 'basic',
    link: '/basic/index',
    showMore: false,
    items: [
      {id: 1, title: 'Scope', link: '/basic/scope'},
      {id: 1, title: 'This', link: '/basic/this'},
      {id: 1, title: 'Function', link: '/basic/function'},
      {id: 1, title: 'Object', link: '/basic/object'},
      {id: 2, title: 'Prototypes', link: '/basic/prototypes'},
      {id: 2, title: 'Closure', link: '/basic/closure'},
      {id: 2, title: 'ApplyCall', link: '/basic/apply_call'},
      {id: 3, title: 'Callback', link: '/basic/callback'},
      {id: 3, title: 'Promise', link: '/basic/promise'},
      {id: 3, title: 'Recursion', link: '/basic/recursion'},
      {id: 3, title: 'ArrayMethods', link: '/basic/array_methods'}
    ]
  },
  {
    id: 2,
    title: 'ES6/ES7',
    link: '/new/index',
    showMore: false,
    items: [
      {id: 1, title: 'Let', link: '/new/let'},
      {id: 1, title: 'Arrow Function', link: '/new/arrow'},
      {id: 1, title: 'Template String', link: '/new/template'},
      {id: 1, title: 'Parameters & Arguments', link: '/new/argument'},
      {id: 1, title: 'Array.keys/values/entries', link: '/new/array_keys_values'},
      {id: 1, title: 'For...Of', link: '/new/forof'},
      {id: 1, title: 'Object Iteration', link: '/new/object_iteration'},
      {id: 1, title: 'Deconstruction', link: '/new/deconstruction'},
      {id: 1, title: 'Class', link: '/new/class'},
      {id: 1, title: 'Iterators', link: '/new/iterators'},
      {id: 1, title: 'Generators', link: '/new/generators'},
      {id: 1, title: 'Decorator', link: '/new/decorator'},
      {id: 1, title: 'Async/Await', link: '/new/async_await'},
      {id: 1, title: 'Proxy', link: '/new/proxy'},
      {id: 1, title: '字符串扩展', link: '/new/string_extension'},
      {id: 1, title: '对象扩展', link: '/new/object_extension'},
      {id: 1, title: '数组扩展', link: '/new/array_extension'},
      {id: 3, title: 'Modules', link: '/new/modules'}
    ]
  },
  {
    id: 3,
    title: 'Functional Programming',
    link: '/functional/index',
    showMore: false,
    items: [
      {id: 1, title: 'Function', link: '/functional/function'},
      {id: 1, title: 'High Order Function', link: '/functional/high_order'},
      {id: 1, title: 'Purity Function', link: '/functional/purity'},
      {id: 1, title: 'Currying & Partial', link: '/functional/currying'},
      {id: 1, title: 'Composition', link: '/functional/composition'}
    ]
  },
  {
    id: 4,
    title: 'Design Patterns',
    link: '/patterns/index',
    showMore: true,
    items: [
      {id: 1, title: 'Singleton Design Pattern', link: '/pattern/singleton'},
      {id: 2, title: 'Module Design Pattern', link: '/pattern/module'},
      {id: 3, title: 'Factory Design Pattern', link: '/pattern/factory'},
      {id: 3, title: 'Constructor Design Pattern', link: '/pattern/constructor'},
      {id: 3, title: 'Iterator Pattern', link: '/pattern/iterator'},
      {id: 3, title: 'Decorator Pattern', link: '/pattern/decorator'},
      {id: 3, title: 'Strategy Pattern', link: '/pattern/strategy'},
      {id: 3, title: 'Facade Pattern', link: '/pattern/facade'},
      {id: 3, title: 'Proxy Pattern', link: '/pattern/proxy'},
      {id: 3, title: 'Mediator Pattern', link: '/pattern/mediator'},
      {id: 3, title: 'Observer Pattern', link: '/pattern/observer'}
    ]
  },
  {
    id: 5,
    title: 'Data Structures',
    link: '/data_structure/index',
    showMore: true,
    items: [
      {id: 1, title: 'Array 数组', link: '/data_structures/array'},
      {id: 2, title: 'List 数组', link: '/data_structures/list'},
      {id: 3, title: 'Stack 栈', link: '/data_structures/stack'},
      {id: 3, title: 'Queue 队列', link: '/data_structures/queue'},
      {id: 3, title: 'LinkedList 链表', link: '/data_structures/linked_list'},
      {id: 3, title: 'Dictionary 字典', link: '/data_structures/dictionary'},
      {id: 1, title: 'Symbol', link: '/data_structures/symbol'},
      {id: 1, title: 'Set', link: '/data_structures/set'},
      {id: 1, title: 'Map', link: '/data_structures/map'}
    ]
  },
  {
    id: 6,
    title: 'Fun Part',
    link: '/fun/Links',
    showMore: false,
    items: []
  }
]

module.exports = {
  getMenus: function () {
    return menus
  }
}
