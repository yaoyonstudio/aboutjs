<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>For...of循环可迭代对象（如数组、集合）</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'For...Of'
    }
  },
  created () {
    // for...of遍历数组
    let numbers = [1, 2, 3, 4, 5]
    for (let item of numbers) {
      console.log(item)
    }

    console.log('-----------')

    // for...of遍历集合
    let myNums = new Set([1, 3, 0.1, 7, 0.7, 0.5, 4])
    for (let setItem of myNums) {
      console.log(setItem)
    }
  },
  mounted () {
    let content = `// for...of遍历数组
let numbers = [1, 2, 3, 4, 5]
for (let item of numbers) {
  console.log(item)
}

console.log('-----------')

// for...of遍历集合
let myNums = new Set([1, 3, 0.1, 7, 0.7, 0.5, 4])
for (let setItem of myNums) {
  console.log(setItem)
}`
    this.initEditor('editor', content)
  }
}
</script>
