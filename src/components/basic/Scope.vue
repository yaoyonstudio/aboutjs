<template>
  <div class="Scope">
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
      title: 'Scope'
    }
  },
  created () {
    /* eslint-disable */
    var foo = 'foo'
    var wow = 'wow'

    function bar (wow) {
      var pow = 'pow'
      console.log(foo) // 'foo'
      console.log('inner pow:', pow) // 'pow'
      console.log('inner wow:', wow) // 'zoom'
    }

    bar('zoom')
    console.log('outer foo:', foo)
    console.log('outer wow:', wow)
    // console.log('outer pow:', pow) // ReferenceError: pow is not defined

    console.log('-------------------------')

    var a = 10
    if (a > 5) {
      var b = 5
    }
    var c = a + b
    console.log(c)

    console.log('-----------------')

    var doSomething = function () {
      var aa = 10
    }
    doSomething()
    // console.log(aa)  //报错

    console.log('-----------------')

    // var 声明的是全局变量
    var doSomething2 = function () {
      var bb = 10
      // cc =  1111 // 严格模式下报错
    }
    doSomething2()
    // console.log(bb)  // 报错
    // console.log(cc)     // 严格模式下报错，非严格模式下可以打印

    console.log('-----------------')

    // 子作用域
    var parentFun = function () {
      var pv = 1
      var childFun = function () {
        console.log(pv)
      }
      childFun()
    }
    parentFun()
  },
  mounted () {
    let content = `
var foo = 'foo'
var wow = 'wow'

function bar (wow) {
  var pow = 'pow'
  console.log(foo) // 'foo'
  console.log('inner pow:', pow) // 'pow'
  console.log('inner wow:', wow) // 'zoom'
}

bar('zoom')
console.log('outer foo:', foo)
console.log('outer wow:', wow)
// console.log('outer pow:', pow) // ReferenceError: pow is not defined
`
    this.initEditor('editor', content)
  }
}
</script>
