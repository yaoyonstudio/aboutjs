<template>
  <div class="Let">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Let & Const'
    }
  },
  created () {
    // let声明块级变量
    // const声明常量

    let a = 1
    console.log(a)

    let name = 'ken'
    function doFun () {
      name = 'kenny'
    }
    doFun()
    console.log(name)

    let name1 = 'ken1'
    function doFun2 () {
      let name1 = 'ken2'
      console.log(name1)
    }
    doFun2()
    console.log(name1)

    console.log('-----------------------')

    var funcArr = []
    for (var i = 0; i < 5; i++) {
      funcArr.push(function () {
        console.log(i)
      })
    }
    funcArr.forEach(function (func) {
      func()  // 打印五次5
    })
    // 上面例子打印出五次5，而不是0, 1, 2, 3, 4。因为变量i是全局的，函数执行在后面，所以循环到最后的i值会改变原来的i值
    // 解决方法一：使用IIFE自执行函数，将循环参数j值传入IIFE函数，让它创建关于j值的局部变量存储
    var funcArr2 = []
    for (var j = 0; j < 5; j++) {
      funcArr2.push((function (v) {
        return function () {
          console.log(v)
        }
      }(j)))
    }
    funcArr2.forEach(function (func) {
      func()  // 0, 1, 2, 3, 4
    })

    // 解决方法二：使用let
    var funcArr3 = []
    for (let k = 0; k < 5; k++) {
      funcArr3.push(function () {
        console.log(k)
      })
    }
    funcArr3.forEach(function (func) {
      func() // 0, 1, 2, 3, 4
    })

    console.log('-----------------------')

    const NUMS = [1, 2, 3, 4, 5]
    for (let i = 0, l = NUMS.length; i < l; i++) {
      console.log(NUMS[i])
    }
    // console.log(i)  报错：i is not defined

    console.log('-----------------------')

    const PI = 3.14
    // PI = 4 报错：常量不能被修改
    console.log(PI)
  },
  mounted () {
    let content = `// let声明块级变量
// const声明常量

let a = 1
console.log(a)

let name = 'ken'
function doFun () {
  name = 'kenny'
}
doFun()
console.log(name)

let name1 = 'ken1'
function doFun2 () {
  let name1 = 'ken2'
  console.log(name1)
}
doFun2()
console.log(name1)

console.log('-----------------------')

var funcArr = []
for (var i = 0; i < 5; i++) {
  funcArr.push(function () {
    console.log(i)
  })
}
funcArr.forEach(function (func) {
  func()  // 打印五次5
})
// 上面例子打印出五次5，而不是0, 1, 2, 3, 4。因为变量i是全局的，函数执行在后面，所以循环到最后的i值会改变原来的i值
// 解决方法一：使用IIFE自执行函数，将循环参数j值传入IIFE函数，让它创建关于j值的局部变量存储
var funcArr2 = []
for (var j = 0; j < 5; j++) {
  funcArr2.push((function (v) {
    return function () {
      console.log(v)
    }
  }(j)))
}
funcArr2.forEach(function (func) {
  func()  // 0, 1, 2, 3, 4
})

// 解决方法二：使用let
var funcArr3 = []
for (let k = 0; k < 5; k++) {
  funcArr3.push(function () {
    console.log(k)
  })
}
funcArr3.forEach(function (func) {
  func() // 0, 1, 2, 3, 4
})

console.log('-----------------------')

const NUMS = [1, 2, 3, 4, 5]
for (let i = 0, l = NUMS.length; i < l; i++) {
  console.log(NUMS[i])
}
// console.log(i)  报错：i is not defined

console.log('-----------------------')

const PI = 3.14
// PI = 4 报错：常量不能被修改
console.log(PI)
`
    this.initEditor('editor', content)
  }
}
</script>
