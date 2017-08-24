<template>
  <div class="argument">
    <h2>{{ title }}</h2>
    <div class="content">
<h3>基本参数</h3>
<pre>
function add (num1, num2, num3) {
  console.log('arguments count:', arguments.length)
  console.log('arguments:', arguments)
  return num1 + num2 + num3
}

console.log(add(1, 2, 3))       // 6
console.log(add(1, 2, 3, 4))    // 6
console.log(add(1, 2))          // NaN (1+2+undefined = NaN)
</pre>
      <p>arguments参数是函数所有参数的一个集合。使用arguments.length获得参数数量；使用arguments[index]获得指定位置参数。</p>

<div class="divider"></div>

<h3>不定参数（剩余参数/Rest Parameters）</h3>
<pre>
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

console.log(add2(1, 2, 3))
console.log(add2(1, 2, 3, 4))
console.log(add2(1, 2))
</pre>

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

    console.log(add2(1, 2, 3))
    console.log(add2(1, 2, 3, 4))
    console.log(add2(1, 2))
  }
}
</script>

<style scoped lang="scss">
.argument {

}
</style>
