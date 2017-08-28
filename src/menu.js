const menus = [
  {
    id: 1,
    title: 'JS Basic',
    name: 'basic',
    link: '/basic/index',
    showMore: true,
    items: [
      {id: 1, title: 'Scope', link: '/basic/scope'},
      {id: 1, title: 'Function', link: '/basic/function'},
      {id: 2, title: 'Prototypes', link: '/basic/prototypes'},
      {id: 2, title: 'Closure', link: '/basic/closure'},
      {id: 3, title: 'Reduce', link: '/basic/reduce'},
      {id: 3, title: 'Promise', link: '/basic/promise'},
      {id: 3, title: 'Recursion', link: '/basic/recursion'},
      {id: 3, title: 'ArrayMethods', link: '/basic/array_methods'}
    ]
  },
  {
    id: 2,
    title: 'ES6/ES7',
    link: '/new/index',
    showMore: true,
    items: [
      {id: 1, title: 'Parameters & Arguments', link: '/new/argument'},
      {id: 1, title: 'Array.keys/values/entries', link: '/new/array_keys_values'},
      {id: 1, title: 'Generators', link: '/new/generators'},
      {id: 1, title: 'Proxy', link: '/new/proxy'},
      {id: 1, title: 'Decorator', link: '/new/decorator'},
      {id: 1, title: 'Async/Await', link: '/new/async_await'}
    ]
  },
  {
    id: 3,
    title: 'Design Patterns',
    link: '/patterns/index',
    showMore: true,
    items: []
  },
  {
    id: 3,
    title: 'Data Structures',
    link: '/data_structure/index',
    showMore: true,
    items: [
      {id: 1, title: 'Array 数组', link: '/data_structures/array'},
      {id: 2, title: 'List 数组', link: '/data_structures/list'},
      {id: 3, title: 'Stack 栈', link: '/data_structures/stack'}
    ]
  },
  {
    id: 4,
    title: 'Fun Part',
    link: '/fun/Links',
    showMore: true,
    items: []
  }
]

module.exports = {
  getMenus: function () {
    return menus
  }
}
