<template>
  <div class="Recursion">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor"></code>
      <p>递归的三个关键点：</p>
      <p>一是要有一个决定是否继续递归的终结条件（if (x < 0) return）；</p>
      <p>二是一个最基本条件的返回值（if (x === 0) return 1）；</p>
      <p>三是递归本身（return x * factorial(x - 1)）。</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Recursion'
    }
  },
  created () {
    function factorialFunc (num) {
      if (num < 0) {
        return -1
      } else if (num === 0) {
        return 1
      }
      var tmp = num
      while (num-- > 2) {
        tmp *= num
      }
      return tmp
    }

    console.log('-------------------')

    // 阶乘
    function factorial (x) {
      if (x < 0) return
      if (x === 0) return 1
      return x * factorial(x - 1)
    }

    console.log(factorialFunc(5)) // 120
    console.log(factorial(5))     // 120
  },
  mounted () {
    let content = `
function factorial (x) {
  if (x < 0) return
  if (x === 0) return 1
  return x * factorial(x - 1)
}

console.log(factorial(5))   // 120
`
    this.initEditor('editor', content)
  }
}
</script>
