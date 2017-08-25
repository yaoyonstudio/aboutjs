<template>
  <div class="closure">
    <h2>{{ title }}</h2>
    <div class="content">
<pre>
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
</pre>

<hr />

<pre>
function outer (outArg) {
  return function (innerArg) {
    return 'hello ' + outArg + ', ' + innerArg
  }
}

let greet = outer('ken')
console.log(greet('how are you?'))
</pre>
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
  }
}
</script>

<style scoped lang="scss">
.closure {

}
</style>
