<template>
  <div class="argument">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>基本参数</h3>
      <p>arguments参数是函数所有参数的一个集合。使用arguments.length获得参数数量；使用arguments[index]获得指定位置参数。</p>
      <code id="editor1"></code>

      <div class="divider"></div>

      <h3>默认参数</h3>
      <code id="editor2"></code>

      <div class="divider"></div>

      <h3>不定参数（剩余参数/Rest Parameters）</h3>
      <code id="editor3"></code>

    </div>
  </div>
</template>

<script>
export default {
  name: 'argument',
  data () {
    return {
      title: 'Parameters & Arguments'
    }
  },
  created () {
    function add (num1, num2, num3) {
      console.log('arguments count:', arguments.length)
      console.log('arguments:', arguments)
      console.log('arguments[1]:', arguments[1])
      return num1 + num2 + num3
    }

    console.log(add(1, 2, 3))
    console.log(add(1, 2, 3, 4))
    console.log(add(1, 2))

    console.log('--------------')

    function add1 (a, b = 0) {
      return a + b
    }
    console.log(add1(1, 2))
    console.log(2)

    console.log('--------------')

    function add2 (...restArgs) {
      console.log('restArgs count:', restArgs.length)
      console.log('restArgs:', restArgs)
      console.log('restArgs[1]:', restArgs[1])
      let count = 0
      restArgs.map((item) => {
        count += item
      })
      return count
    }

    function add3 (...restArgs) {
      return restArgs.reduce((a, b) => a + b, 0)
    }

    console.log(add2(1, 2, 3))
    console.log(add2(1, 2, 3, 4))
    console.log(add2(1, 2))
    console.log(add3(1, 2, 3, 4, 5, 6, 7, 8, 9))
  },
  mounted () {
    let content1 = `function add (num1, num2, num3) {
  console.log('arguments count:', arguments.length)
  console.log('arguments:', arguments)
  return num1 + num2 + num3
}

console.log(add(1, 2, 3))       // 6
console.log(add(1, 2, 3, 4))    // 6
console.log(add(1, 2))          // NaN (1+2+undefined = NaN)`

    let content2 = `function add1 (a, b = 0) {
  return a + b
}
console.log(add1(1, 2))
console.log(2)
`

    let content3 = `function add2 (...restArgs) {
  console.log('restArgs count:', restArgs.length)
  console.log('restArgs:', restArgs)
  console.log('restArgs[1]:', restArgs[1])
  let count = 0
  restArgs.map((item) => {
    count += item
  })
  return count
}

function add3 (...restArgs) {
  return restArgs.reduce((a, b) => a + b, 0)
}

console.log(add2(1, 2, 3))
console.log(add2(1, 2, 3, 4))
console.log(add2(1, 2))
console.log(add3(1, 2, 3, 4, 5, 6, 7, 8, 9))`

    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
    this.initEditor('editor3', content3)
  }
}
</script>

