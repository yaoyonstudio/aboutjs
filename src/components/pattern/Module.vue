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

    this.initEditor('editor', content)
    this.initEditor('editor2', content2)
    this.initEditor('editor3', content3)
  }
}
</script>
