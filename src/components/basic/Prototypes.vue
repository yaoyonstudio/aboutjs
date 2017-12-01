<template>
  <div class="Prototypes">
    <h2>{{ title }}</h2>
    <div class="content">
    <h3>Object Prototypes</h3>
    <code id="editor1"></code>

    <h3>Function Prototypes</h3>
    <code id="editor2"></code>

    </div>
  </div>
</template>

<script>
// var ace = require('../../libs/ace')
export default {
  data () {
    return {
      title: 'Prototypes'
    }
  },
  created () {
    // console.log(Object)
    // console.log(Array)
    // console.log(Function)

    var myObj = {
      'name': 'ken'
    }
    console.log(myObj)
    console.log(myObj.name)
    console.log(myObj.hasOwnProperty('name'))
    console.log(myObj.hasOwnProperty('sex'))

    console.log('-------------')

    let prototypeObj = {
      name: 'ken'
    }
    let obj = Object.create(prototypeObj)
    console.log(obj)
    console.log(obj.name) // obj继承了来自prototypeObj的属性name，这在实际应用中非常有用，我们可以让对象继承来自其他任何的对象，而不仅仅是根对象原型

    // /////////////////////////////////////////

    function add (a, b) {
      let aa = a
      let bb = b
      return aa + bb
    }
    console.log(add)
    console.log(add.prototype)
    console.log(add(1, 2))

    console.log('-------------')

    // /////////////////////////////////////////

    function Fn () {}
    console.log(Fn.prototype.constructor)
    console.log(Fn.prototype.constructor === Fn)
    Fn.prototype.greet = function () {
      console.log('hello')
    }
    let myFun = new Fn()
    myFun.greet()

    console.log('-------------')

    // /////////////////////////////////////////

    function MyObject (name, message) {
      this.name = name.toString()
      this.message = message.toString()
    }

    // 使用对象原型继承扩展方法
    // 第一种写法：
    // MyObject.prototype = {
    //   getName: function() {
    //     return this.name
    //   },
    //   getMessage: function() {
    //     return this.message
    //   }
    // }

    // 第二种写法：
    // MyObject.prototype.getName = function() {
    //   return this.name
    // }
    // MyObject.prototype.getMessage = function() {
    //   return this.message
    // }

    // 第三种写法：
    (function () {
      this.getName = function () {
        return this.name
      }
      this.getMessage = function () {
        return this.message
      }
    }).call(MyObject.prototype)

    console.log(MyObject.prototype)
    console.log(MyObject)
    var me = new MyObject('ken', 'Hello')
    console.log(me)
    console.log(MyObject)
    console.log(MyObject.prototype)

    console.log(me.name)
    console.log(me.message)
    console.log(me.getName())
    console.log(me.getMessage())
  },
  mounted () {
    var content1 = `
var myObj = {
  'name': 'ken'
}
console.log(myObj)
console.log(myObj.name)
console.log(myObj.hasOwnProperty('name'))
console.log(myObj.hasOwnProperty('sex'))

console.log('-------------')

let prototypeObj = {
  name: 'ken'
}
let obj = Object.create(prototypeObj)
console.log(obj)
console.log(obj.name) // obj继承了来自prototypeObj的属性name，这在实际应用中非常有用，我们可以让对象继承来自其他任何的对象，而不仅仅是根对象原型
`
    let content2 = `
function add (a, b) {
  let aa = a
  let bb = b
  return aa + bb
}
console.log(add)
console.log(add.prototype)
console.log(add(1, 2))

console.log('-------------')

// /////////////////////////////////////////

function Fn () {}
console.log(Fn.prototype.constructor)
console.log(Fn.prototype.constructor === Fn)
Fn.prototype.greet = function () {
  console.log('hello')
}
let myFun = new Fn()
myFun.greet()

console.log('-------------')

// /////////////////////////////////////////

function MyObject (name, message) {
  this.name = name.toString()
  this.message = message.toString()
}

// 使用对象原型继承扩展方法
// 第一种写法：
// MyObject.prototype = {
//   getName: function() {
//     return this.name
//   },
//   getMessage: function() {
//     return this.message
//   }
// }

// 第二种写法：
// MyObject.prototype.getName = function() {
//   return this.name
// }
// MyObject.prototype.getMessage = function() {
//   return this.message
// }

// 第三种写法：
(function () {
  this.getName = function () {
    return this.name
  }
  this.getMessage = function () {
    return this.message
  }
}).call(MyObject.prototype)

console.log(MyObject.prototype)
console.log(MyObject)
var me = new MyObject('ken', 'Hello')
console.log(me)
console.log(MyObject)
console.log(MyObject.prototype)

console.log(me.name)
console.log(me.message)
console.log(me.getName())
console.log(me.getMessage())
`

    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
  }
}
</script>
