<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>纯净/纯粹Purity</h3>
      <p>一个纯净/纯粹函数是指函数在接收相同参数执行后，都返回相同的输出，没有产生任何副作用。</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Purity'
    }
  },
  created () {
    function add (x, y) {
      return x + y
    }

    console.log(add(1, 2))
    console.log(add(add(1, 2), add(4, 5)))
  },
  mounted () {
    let content = `
// Purity Function
function add (x, y) {
  return x + y
}

add(1, 2)
add(add(1, 2), add(4, 5))

// 反例
var page = 1
var url = 'http://www.testapi.com/posts/'
function getData() {
  page++
  fetch(url, { page: page })
    .then(function (response) {
      return response.json()
    })
    .then(function (res) {
      console.log(res)
    })
}

// 1: 函数调用了外部全局变量page和url
// 2: 函数改变了外部全局变量page的值
// 因此在使用时有可能会出现一系列副作用或不可预料的结果
`
    this.initEditor('editor', content)
  }
}
</script>
