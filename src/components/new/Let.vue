<template>
  <div class="Let">
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
      title: 'Let & Const'
    }
  },
  created () {
    // let声明块级变量
    // const声明常量

    let a = 1
    console.log(a)

    let name = 'ken'
    function doFun () {
      name = 'kenny'
    }
    doFun()
    console.log(name)

    let name1 = 'ken1'
    function doFun2 () {
      let name1 = 'ken2'
      console.log(name1)
    }
    doFun2()
    console.log(name1)

    // let的常用场景
    const NUMS = [1, 2, 3, 4, 5]
    for (let i = 0, l = NUMS.length; i < l; i++) {
      console.log(NUMS[i])
    }
    // console.log(i)  报错：i is not defined

    console.log('-----------------------')

    const PI = 3.14
    // PI = 4 报错：常量不能被修改
    console.log(PI)
  },
  mounted () {
    let content = `// let声明块级变量
// const声明常量

let a = 1
console.log(a)

let name = 'ken'
function doFun () {
  name = 'kenny'
}
doFun()
console.log(name)

let name1 = 'ken1'
function doFun2 () {
  let name1 = 'ken2'
  console.log(name1)
}
doFun2()
console.log(name1)

// let的常用场景
const NUMS = [1, 2, 3, 4, 5]
for (let i = 0, l = NUMS.length; i < l; i++) {
  console.log(NUMS[i])
}
// console.log(i)  报错：i is not defined

console.log('-----------------------')

const PI = 3.14
// PI = 4 报错：常量不能被修改
console.log(PI)
`
    this.initEditor('editor', content)
  }
}
</script>
