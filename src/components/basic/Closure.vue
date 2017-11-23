<template>
  <div class="closure">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor1"></code>
      <hr />
      <code id="editor2"></code>
      <hr />
      <h3>闭包解析：内容摘自《JavaScript设计模式》</h3>
      <code id="editor3"></code>
      <p>上面的示例中，a定义在函数foo中，函数bar可以访问它，因为bar也定义在foo中。bar在执行过程中将a设置为a * 2。当bar在foo中被调用时它能够访问a，这是函数作用域的原因，容易理解。</p>
      <p>但如果bar是在foo外部被调用呢？</p>
      <code id="editor4"></code>
      <p>上面的代码，所返回的对bar函数的引用被赋给变量baz。这个函数现在是在foo外部被调用，但它依然能够访问a。这是因为Javascript中的作用域是词法性的。函数是运行在定义它们的作用域中（本例中是foo内部的作用域），而不是运行在调用它们的作用域中。只要bar被定义在foo中，它就能访问在foo中定义的所有变量。即使foo的执行已经结束。</p>
      <p>这就是闭包的一个例子。在foo返回后，它的作用域被保存下来，但只有它返回的那个函数能够访问这个作用域。在前面的示例中，baz和blat各有这个作用域及a的一个副本，而且只有它们自己能对其进行修改。</p>
      <p>返回一个内嵌函数是创建闭包最常用的手段。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'closure',
  data () {
    return {
      title: 'Closure'
    }
  },
  created () {
    var globalVar = 'global varibles'

    function funA () {
      var localA = 'local A'
      console.log('在父函数funA中访问全局变量:', globalVar)
      console.log('在父函数funA中访问funA局部变量:', localA)

      function funB () {
        var localB = 'local B'
        console.log('在子函数funB中访问全局变量:', globalVar)
        console.log('在子函数funB中访问funA局部变量:', localA)
        console.log('在子函数funB中访问funB局部变量:', localB)
      }

      funB()
      console.log('------------')
      localA = 'change a'
      funB()
    }

    funA()

    console.log('------------')

    function outer (outArg) {
      return function (innerArg) {
        return 'hello ' + outArg + ', ' + innerArg
      }
    }

    let greet = outer('ken')
    console.log(greet('how are you?'))

    console.log('------------')

    function foo () {
      var a = 10

      function bar () {
        a *= 2
        return a
      }

      return bar
    }

    var baz = foo() // baz现在是bar函数的一个引用
    baz()  // 20
    baz()  // 40
    baz()  // 80

    var blat = foo()  // blat 是bar的另一个引用
    blat() // 20 一个新的复制的引用
  },
  mounted () {
    let content1 = `var globalVar = 'global varibles'

function funA () {
  var localA = 'local A'
  console.log('在父函数funA中访问全局变量:', globalVar)
  console.log('在父函数funA中访问funA局部变量:', localA)

  function funB () {
    var localB = 'local B'
    console.log('在子函数funB中访问全局变量:', globalVar)
    console.log('在子函数funB中访问funA局部变量:', localA)
    console.log('在子函数funB中访问funB局部变量:', localB)
  }

  funB()
  console.log('------------')
  localA = 'change a'
  funB()
}

funA()`

    let content2 = `function outer (outArg) {
  return function (innerArg) {
    return 'hello ' + outArg + ', ' + innerArg
  }
}

let greet = outer('ken')
console.log(greet('how are you?'))`

    let content3 = `function foo () {
  var a = 10

  function bar () {
    a *= 2
  }

  bar()
  return a
}`

    let content4 = `function foo () {
  var a = 10

  function bar () {
    a *= 2
    return a
  }

  return bar
}

var baz = foo () // baz现在是bar函数的一个引用
baz()  // 20
baz()  // 40
baz()  // 80

var blat = foo()  //blat 是bar的另一个引用
blat() //20 一个新的复制的引用`

    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
    this.initEditor('editor3', content3)
    this.initEditor('editor4', content4)
  }
}
</script>
