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
      title: 'Arrow Function'
    }
  },
  created () {
    function doFun1 () {
      console.log('do fun 1')
    }

    var doFun2 = function () {
      console.log('do fun 2')
    }

    var doFun3 = () => {
      console.log('do fun 3')
    }

    var doFun4 = () => console.log('do fun 4')

    var doFun5 = () => 'do fun 5'

    doFun1()
    doFun2()
    doFun3()
    doFun4()
    console.log(doFun5())

    var add1 = (a, b) => a + b
    var add2 = a => a + 1

    console.log(add1(1, 2))
    console.log(add2(3))

    setTimeout(() => console.log('haha...'), 2000)

    function someFun1 () {
      console.log(this)
    }

    var someFun2 = () => {
      console.log(this)
    }

    var btn1 = document.createElement('button')
    var btn2 = document.createElement('button')

    btn1.addEventListener('click', someFun1)
    btn2.addEventListener('click', someFun2)

    // 模拟按钮点击
    // btn1.click(); // 执行打印出的this指向的是按钮本身的作用域
    // btn2.click(); // 执行打印出的this指向的是window全局作用域
  },
  mounted () {
    let content = `function doFun1 () {
  console.log('do fun 1')
}

var doFun2 = function () {
  console.log('do fun 2')
}

var doFun3 = () => {
  console.log('do fun 3')
}

var doFun4 = () => console.log('do fun 4')

var doFun5 = () => 'do fun 5'

doFun1()
doFun2()
doFun3()
doFun4()
console.log(doFun5())



var add1 = (a, b) => a + b
var add2 = a => a + 1

console.log(add1(1, 2))
console.log(add2(3))



setTimeout(() => console.log('haha...'), 2000)



function someFun1 () {
  console.log(this)
}

var someFun2 = () => {
  console.log(this)
}

var btn1 = document.createElement('button')
var btn2 = document.createElement('button')

btn1.addEventListener('click', someFun1)
btn2.addEventListener('click', someFun2)

// 模拟按钮点击
// btn1.click(); // 执行打印出的this指向的是按钮本身的作用域
// btn2.click(); // 执行打印出的this指向的是window全局作用域`
    this.initEditor('editor', content)
  }
}
</script>
