<template>
  <div class="Function">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>函数的定义</h3>
      <p>常见的函数定义方式：</p>
<pre>
// 1:使用function定义
function add1 (a, b) {
  return a + b
}

// 2:函数表达式
const add2 = function (a, b) {
  return a + b
}

// 3:ES6中的简记方法
let person = {
  name: 'ken',
  age: 28,
  add3 (a, b) {
    return a + b
  }
}

// 4:ES6中箭头函数
const add4 = (a, b) => {
  return a + b
}
</pre>

    <hr />

    <h3>自执行函数表达式（Immediately-Invoked Function Expression）</h3>
<pre>
(function () {
  console.log('hello')
})()
</pre>
    </div>
  </div>
</template>

<script>
// 自执行函数表达式（Immediately-Invoked Function Expression）
(function () {
  console.log('hello')
})()

export default {
  data () {
    return {
      title: 'Function'
    }
  },
  created () {
    // 函数的定义
    // 1:使用function定义
    function add1 (a, b) {
      return a + b
    }
    // 2:函数表达式
    const add2 = function (a, b) {
      return a + b
    }
    // 3:ES6中的简记方法
    let person = {
      name: 'ken',
      age: 28,
      add3 (a, b) {
        return a + b
      }
    }
    // 4:ES6中箭头函数
    const add4 = (a, b) => {
      return a + b
    }

    console.log('add1:', add1(1, 2))
    console.log('add2:', add2(1, 2))
    console.log('add3:', person.add3(1, 2))
    console.log('add4:', add4(1, 2))

    console.log('--------------')
  }
}
</script>
