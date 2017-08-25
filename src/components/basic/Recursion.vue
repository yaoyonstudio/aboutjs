<template>
  <div class="Recursion">
    <h2>{{ title }}</h2>
    <div class="content">
<pre>
function factorial (x) {
  if (x < 0) return
  if (x === 0) return 1
  return x * factorial(x - 1)
}

console.log(factorial(5))
</pre>
<p>递归的三个关键点：一是要有一个决定是否继续递归的终结条件（if (x < 0) return）；二是一个最基本条件的返回值（if (x === 0) return 1）；三是递归本身（return x * factorial(x - 1)）。</p>
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
    // 阶乘
    function factorial (x) {
      if (x < 0) return
      if (x === 0) return 1
      return x * factorial(x - 1)
    }

    console.log(factorial(5))
  }
}
</script>

<style scoped lang="scss">
.Recursion {

}
</style>
