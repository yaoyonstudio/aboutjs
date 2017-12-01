<template>
  <div class="Function">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>函数的定义</h3>
      <p>常见的函数定义方式：</p>
      <code id="editor1"></code>
      <p>使用function testFun()的形式定义函数，函数所在作用域会被提升，即可以在函数声明前调用函数</p>
      <p>使用var定义的函数必须在"声明"后才能调用</p>
      <p>函数可以自己调用自己</p>
      <hr />
      <h3>自执行函数表达式（Immediately-Invoked Function Expression）</h3>
      <code id="editor2"></code>
      <h3>用new关键字实例化函数</h3>
      <code id="editor3"></code>
      <h3>对象和函数的关系</h3>
      <p>(1) 空对象和空函数都返回true</p>
      <pre>
var emptyFun = function(){}
var emptyObj = {}
if(emptyFun && emptyObj){
	console.log('空对象和空函数都返回true')
}</pre>
      <p>(2) 对象和函数都是对象</p>
      <p>函数的prop函数可以直接赋值，其他属性返回函数名</p>
      <pre>
var myObj = {}
var myFunc = function(){ }
myObj.name = "ken"
myFunc.name = "kenny"
myObj.prop = "some value";
myFunc.prop = "some value";
console.log(myObj.name)
console.log(myFunc.name)
console.log(myObj.prop)
console.log(myFunc.prop)</pre>
    </div>
  </div>
</template>

<script>
// 自执行函数表达式（Immediately-Invoked Function Expression）
// (function () {
//   console.log('hello')
// })()

// const addFun = (function (a, b) {
//   return a + b
// })(1, 2)
// console.log(addFun)

export default {
  data () {
    return {
      title: 'Function'
    }
  },
  created () {
    // 函数的定义
    // 1:使用function定义
    function add1 (a, b) {
      return a + b
    }
    // 2:函数表达式
    const add2 = function (a, b) {
      return a + b
    }
    // 3:ES6中的简记方法
    let person = {
      name: 'ken',
      age: 28,
      add3 (a, b) {
        return a + b
      }
    }
    // 4:ES6中箭头函数
    const add4 = (a, b) => {
      return a + b
    }

    console.log('add1:', add1(1, 2))
    console.log('add2:', add2(1, 2))
    console.log('add3:', person.add3(1, 2))
    console.log('add4:', add4(1, 2))

    console.log('--------------')

    // 一：用new关键字实例化函数
    // 1、对于没有return 函数
    function MyFun () {
      this.name = 'ken'
    }

    var testFun = MyFun
    console.log(testFun)
    // console.log(testFun.name)

    var otherFun = MyFun
    console.log(otherFun)

    var anotherFun = new MyFun()
    console.log(anotherFun)
    // console.log(anotherFun.name)

    console.log('-----------------------')

    // 2、对于有return的函数
    function MyFun1 () {
      this.name = 'ken'
      return this
    }

    // 有返回值的函数下面定义在严格模式下会报错
    // var testFun2 = MyFun1()
    // console.log(testFun2)
    // console.log(testFun2.name)

    // 有返回值的函数下面定义在严格模式下会报错
    // var otherFun2 = MyFun1()
    // console.log(otherFun2)

    var anotherFun2 = new MyFun1()
    console.log(anotherFun2)
    // console.log(anotherFun2.name)

    console.log('-----------------------')

    // 二：函数方法
    function MeFun (name) {
      this.changeName = function (name) {
        this.name = name
      }

      this.changeName(name)
    }

    var me = new MeFun('ken')
    console.log(me.name)

    me.changeName('yaoyon')
    console.log(me.name)

    console.log('-----------------------')

    // 三：有new和无new

    function MeFunC (name) {
      this.name = name
    }

    // 有使用new
    var me2 = new MeFunC('ken')
    console.log(me2)
    // console.log(me2.name)

    // 不使用new
    var anotherMe = MeFunC('ken')
    // 下面返回undefined
    console.log(anotherMe)
    // console.log(anotherMe.name)

    console.log('---------------------')

    // /////////////////////
    // 为了防止上面情况，需要保证new关键字一直被使用

    function YouFun (name) {
      if (!(this instanceof YouFun)) {
        return new YouFun(name)
      }
      this.name = name
    }

    // 上面函数中判断函数youFun是否有实例化，这里的YouFun是写死的，可以使用下面来代替，效果一样
    /* eslint-disable no-caller, no-unused-vars */
    function YouFun2 (name) {
      if (!(this instanceof arguments.callee)) {
        return new YouFun2(name)
      }
      this.name = name
    }

    // 有new的情况正常
    var you = new MeFunC('yaoyon')
    console.log(you)
    console.log(you.name)

    // 无new的情况也正常
    var anotherYou = YouFun('yaoyon')
    console.log(anotherYou)
    console.log(anotherYou.name)
  },
  mounted () {
    let content1 = `// 1:使用function定义
function add1 (a, b) {
  return a + b
}

// 2:函数表达式
const add2 = function (a, b) {
  return a + b
}

// 3:ES6中的简记方法
let person = {
  name: 'ken',
  age: 28,
  add3 (a, b) {
    return a + b
  }
}

// 4:ES6中箭头函数
const add4 = (a, b) => {
  return a + b
}`
    let content2 = `(function () {
  console.log('hello')
})()


(function (a, b) {
  console.log(a + b)
})(1, 2)


const addFun = (function (a, b) {
  return a + b
})(1, 2)
console.log(addFun)
`
    let content3 = `
// 1、对于没有return 函数
function MyFun () {
  this.name = 'ken'
}

var testFun = MyFun
console.log(testFun)
// console.log(testFun.name)

var otherFun = MyFun
console.log(otherFun)

var anotherFun = new MyFun()
console.log(anotherFun)
// console.log(anotherFun.name)

console.log('-----------------------')

// 2、对于有return的函数
function MyFun1 () {
  this.name = 'ken'
  return this
}

// 有返回值的函数下面定义在严格模式下会报错
// var testFun2 = MyFun1()
// console.log(testFun2)
// console.log(testFun2.name)

// 有返回值的函数下面定义在严格模式下会报错
// var otherFun2 = MyFun1()
// console.log(otherFun2)

var anotherFun2 = new MyFun1()
console.log(anotherFun2)
// console.log(anotherFun2.name)

console.log('-----------------------')

// 二：函数方法
function MeFun (name) {
  this.changeName = function (name) {
    this.name = name
  }

  this.changeName(name)
}

var me = new MeFun('ken')
console.log(me.name)

me.changeName('yaoyon')
console.log(me.name)

console.log('-----------------------')

// 三：有new和无new

function MeFunC (name) {
  this.name = name
}

// 有使用new
var me2 = new MeFunC('ken')
console.log(me2)
// console.log(me2.name)

// 不使用new
var anotherMe = MeFunC('ken')
// 下面返回undefined
console.log(anotherMe)
// console.log(anotherMe.name)

console.log('---------------------')

// /////////////////////
// 为了防止上面情况，需要保证new关键字一直被使用

function YouFun (name) {
  if (!(this instanceof YouFun)) {
    return new YouFun(name)
  }
  this.name = name
}

// 上面函数中判断函数youFun是否有实例化，这里的YouFun是写死的，可以使用下面来代替，效果一样
/* eslint-disable no-caller, no-unused-vars */
function YouFun2 (name) {
  if (!(this instanceof arguments.callee)) {
    return new YouFun2(name)
  }
  this.name = name
}

// 有new的情况正常
var you = new MeFunC('yaoyon')
console.log(you)
console.log(you.name)

// 无new的情况也正常
var anotherYou = YouFun('yaoyon')
console.log(anotherYou)
console.log(anotherYou.name)
`

    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
    this.initEditor('editor3', content3)
  }
}
</script>
