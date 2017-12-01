<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor1"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Callback'
    }
  },
  created () {
    // 循环执行callback
    const testArray = [1, 2, 3, 4, 5]
    // 第一种
    function loop1 (array, fn) {
      for (let i = 0, l = array.length; i < l; i++) {
        console.log('执行操作：' + array[i])
        fn(array[i])
      }
    }

    loop1(testArray, function (value) {
      console.log(value)
    })

    console.log('-------------------------')

    // 第二种
    function loop2 (array, fn) {
      for (var i = 0, l = array.length; i < l; i++) {
        console.log('执行操作：' + array[i])
        fn.call(array, array[i], i)
      }
    }
    loop2(testArray, function (value, index) {
      console.log(value)
      console.log(index)
    })
  },
  mounted () {
    let content1 = `
// 循环执行callback
const testArray = [1, 2, 3, 4, 5]
// 第一种
function loop1 (array, fn) {
  for (let i = 0, l = array.length; i < l; i++) {
    console.log('执行操作：' + array[i])
    fn(array[i])
  }
}

loop1(testArray, function (value) {
  console.log(value)
})

console.log('-------------------------')

// 第二种
function loop2 (array, fn) {
  for (var i = 0, l = array.length; i < l; i++) {
    console.log('执行操作：' + array[i])
    fn.call(array, array[i], i)
  }
}
loop2(testArray, function (value, index) {
  console.log(value)
  console.log(index)
})
`
    this.initEditor('editor1', content1)
  }
}
</script>
