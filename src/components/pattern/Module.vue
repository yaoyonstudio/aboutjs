<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>ES5语法：</h3>
      <code id="editor"></code>
      <div class="divider"></div>
      <code id="editor2"></code>
      <hr />
      <h3>ES6语法：</h3>
      <code id="editor3"></code>
      <hr />
      <h3>模块依赖注入：</h3>
      <code id="editor4"></code>
    </div>
  </div>
</template>

<script>
import Cart from './Cart'

export default {
  data () {
    return {
      title: 'Module Pattern'
    }
  },
  created () {
    var personModule = (function () {
      var name = 'ken'

      var sayHello = function () {
        console.log('hello!', name)
      }

      return {
        sayHello: sayHello
      }
    })()

    personModule.sayHello()

    console.log('---------------------------')

    var myModule = (function () {
      var counter = 0

      return {
        incrementCounter: function () {
          return counter++
        },
        decrementCounter: function () {
          return counter--
        },
        getCounter: function () {
          return counter
        }
      }
    })()

    var myCounter = myModule.getCounter() // eslint-disable-line no-unused-vars
    console.log(myModule.getCounter())

    myModule.incrementCounter()
    myModule.incrementCounter()
    console.log(myModule.getCounter())

    myModule.decrementCounter()
    console.log(myModule.getCounter())

    console.log('---------------------------')

    var myCart = new Cart()
    console.log(myCart.cartList)
    myCart.addGoods('fish')
    console.log(myCart.cartList)

    console.log('---------------------------')

    // 模块依赖注入
    var MyModules = (function Manager () {
      var modules = {}

      function define (name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
          deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)
      }

      function get (name) {
        return modules[name]
      }

      return {
        define: define,
        get: get
      }
    })()

    MyModules.define('bar', [], function () {
      function hello (who) {
        return 'Let me introduce: ' + who
      }

      return {
        hello: hello
      }
    })

    MyModules.define('foo', ['bar'], function (bar) {
      var hungry = 'hippo'

      function awesome () {
        console.log(bar.hello(hungry).toUpperCase())
      }

      return {
        awesome: awesome
      }
    })

    var bar = MyModules.get('bar')
    var foo = MyModules.get('foo')

    console.log(
      bar.hello('hippo')
    ) // Let me introduce: hippo

    foo.awesome()  // LET ME INTRODUCE: HIPPO
  },
  mounted () {
    let content = `var personModule = (function () {
  var name = 'ken'

  var sayHello = function () {
    console.log('hello!', name)
  }

  return {
    sayHello: sayHello
  }
})()

personModule.sayHello()`

    let content2 = `var myModule = (function () {
  var counter = 0

  return {
    incrementCounter: function () {
      return counter++
    },
    decrementCounter: function () {
      return counter--
    },
    getCounter: function () {
      return counter
    }
  }
})()

var myCounter = myModule.getCounter() // eslint-disable-line no-unused-vars
console.log(myModule.getCounter())

myModule.incrementCounter()
myModule.incrementCounter()
console.log(myModule.getCounter())

myModule.decrementCounter()
console.log(myModule.getCounter())`
    let content3 = `// Cart.js
class Cart {
  constructor () {
    this.cartList = ['coffee', 'apple', 'water']
  }
  // public methods
  getCartList () {
    return this.cartList
  }
  // private methods
  addGoods (item) {
    this.cartList.push(item)
  }
}

export default Cart

// ----------------

// main.js
var myCart = new Cart()
console.log(myCart.cartList)
myCart.addGoods('fish')
console.log(myCart.cartList)
`
    let content4 = `
// 模块依赖注入
var MyModules = (function Manager () {
  var modules = {}

  function define (name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get (name) {
    return modules[name]
  }

  return {
    define: define,
    get: get
  }
})()

MyModules.define('bar', [], function () {
  function hello (who) {
    return 'Let me introduce: ' + who
  }

  return {
    hello: hello
  }
})

MyModules.define('foo', ['bar'], function (bar) {
  var hungry = 'hippo'

  function awesome () {
    console.log(bar.hello(hungry).toUpperCase())
  }

  return {
    awesome: awesome
  }
})

var bar = MyModules.get('bar')
var foo = MyModules.get('foo')

console.log(
  bar.hello('hippo')
) // Let me introduce: hippo

foo.awesome()  // LET ME INTRODUCE: HIPPO
`

    this.initEditor('editor', content)
    this.initEditor('editor2', content2)
    this.initEditor('editor3', content3)
    this.initEditor('editor4', content4)
  }
}
</script>
