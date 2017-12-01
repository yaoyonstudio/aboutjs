<template>
  <div class="main">
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
      title: 'Composition'
    }
  },
  created () {
    const someStr = 'hello, Javascript functional programming!'

    const scream = str => str.toUpperCase()
    const exclaim = str => `${str}`
    const repeat = str => `${str} ${str}`

    // 旧的写法
    const text = repeat(exclaim(scream(someStr)))
    console.log(text)

    console.log('--------------')

    // Composition的写法：
    // compose 接收一系列函数，返回一个函数
    const compose = (...fns) => x => fns.reduceRight((val, fn) => fn(val), x)
    const text2 = compose(
      repeat,
      exclaim,
      scream
    )  // This is a function

    console.log(typeof text2)
    console.log(text2(someStr))
  },
  mounted () {
    let content = ``
    this.initEditor('editor', content)
  }
}
</script>
