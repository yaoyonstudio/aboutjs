<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor1"></code>
    </div>
    <h2>Context</h2>
    <div class="content">
      <code id="editor2"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'This'
    }
  },
  created () {
    // this - 上下文
    // this是函数的对象
    function MeFun () {
      this.name = 'ken'
      // console.log(this)

      this.myFriend = function () {
        // console.log(this)
        // console.log('name:', this.name)
        this.name = 'yaoyon'
        return this.name
      }
      // return this.name
    }

    var me = new MeFun()
    // 先执行myFriend方法将会覆盖外层函数的name
    // console.log(me.myFriend())
    console.log(me.name)
    console.log(me.myFriend())
    console.log(me.name)

    console.log('-------------------------')

    // Context

    // 报错
    // console.log(name)
    // console.log(age)

    function testFun () {
      this.name = 'ken'
    }
    testFun()
    console.log(name)

    var testObj = {
      myFun: function () {
        this.age = 20
      }
    }
    testObj.myFun()
    // console.log(age) // 报错
    console.log(testObj.age)

    // ------------------------------

    // 改变context
    var obj = {}
    function fn () {
      return this
    }

    console.log(fn() === this)
    console.log(fn.call(obj) === obj)

    // ------------------------------

    // 改变context的两种方法
    function add (a, b) {
      return a + b
    }

    // call方法接收单个参数(对象)
    // apply方法接收数组参数
    console.log(add.call(this, 1, 2))
    console.log(add.apply(this, [1, 2]))
  },
  mounted () {
    let content1 = `
// this - 上下文
// this是函数的对象

function MeFun () {
  this.name = 'ken'
  // console.log(this)

  this.myFriend = function () {
    // console.log(this)
    // console.log('name:', this.name)
    this.name = 'yaoyon'
    return this.name
  }
  // return this.name
}

var me = new MeFun()
// 先执行myFriend方法将会覆盖外层函数的name
// console.log(me.myFriend())
console.log(me.name)
console.log(me.myFriend())
console.log(me.name)
`
    let content2 = `
// 报错
// console.log(name)
// console.log(age)

function testFun () {
  this.name = 'ken'
}
testFun()
console.log(name)

var testObj = {
  myFun: function () {
    this.age = 20
  }
}
testObj.myFun()
// console.log(age) // 报错
console.log(testObj.age)

// ------------------------------

// 改变context
var obj = {}
function fn () {
  return this
}

console.log(fn() === this)
console.log(fn.call(obj) === obj)

// ------------------------------

// 改变context的两种方法
function add (a, b) {
  return a + b
}

// call方法接收单个参数(对象)
// apply方法接收数组参数
console.log(add.call(this, 1, 2))
console.log(add.apply(this, [1, 2]))
`

    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
  }
}
</script>
