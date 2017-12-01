<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>柯里化(Currying)</h3>
      <p>柯里化是指一个函数的执行（不管这个函数定义时带多少个参数）可以转化为多次迭代这个函数本身只带一个参数的执行，每次带一个参数执行后，返回一个函数，将接下来的另一个参数作为这个新函数的参数传入执行，直至参数完全迭代完成。</p>
      <p>如我们要用一个函数计算1 + 2的值。我们可以声明一个函数来计算：</p>
      <pre>
function add (x, y) {
  return x + y
}
add(x, y)</pre>
      <p>柯里化函数要求可以可以用以下方式执行：</p>
      <pre>
function curryAdd (x) {
  return function (y) {
    return x + y
  }
}
curryAdd(x)(y)</pre>
      <h3>局部化(Partial)</h3>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Currying & Partial'
    }
  },
  created () {
    /* eslint-disable no-unused-vars */

    // Currying
    function add (x, y) {
      return x + y
    }
    console.log(add(1, 2))

    function curryAdd (x) {
      return function (y) {
        return x + y
      }
    }
    console.log(curryAdd(1)(2))

    console.log('-----------------------')

    // Partial
    // Map
    const mapFunc = fn => arr => arr.map(fn)

    const double = mapFunc(x => x * 2)
    const cube = mapFunc(x => x ** 3)

    console.log(double([1, 2, 33]))
    console.log(cube([1, 2, 33]))

    // Filter
    const filterFunc = fn => arr => arr.filter(fn)
    // Reduce
    const reduceFunc = fn => start => arr => arr.reduce(fn, start)
  },
  mounted () {
    let content = ``
    this.initEditor('editor', content)
  }
}
</script>
