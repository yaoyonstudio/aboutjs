<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>函数是一等公民</h3>
      <p>函数可以被当作原始的数据类型（String/Number/Boolean）</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Functions'
    }
  },
  created () {
    var add = function (a, b) {
      return a + b
    }

    console.log(add(add(1, 2), 3))
  },
  mounted () {
    let content = `
var add = function (a, b) {
  return a + b
}

console.log(add(add(1, 2), 3))
`
    this.initEditor('editor', content)
  }
}
</script>
