<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>集合是一个无序的唯一元素的集合。</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Set集合'
    }
  },
  created () {
    // 集合创建
    let ints = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    let floats = new Set([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])
    let myNums = new Set([1, 3, 0.1, 7, 0.7, 0.5, 4])

    console.log(ints)
    console.log(floats)
    console.log(myNums)

    // 判断元素是否在集合中
    console.log(ints.has(1))
    console.log(ints.has(21))

    // 添加元素到集合
    ints.add(11)
    floats.add(11.0)

    // 集合并集
    let union1 = new Set([...ints, ...myNums])
    let union2 = new Set([...floats, ...myNums])
    console.log(union1)
    console.log(union2)

    // 集合交集
    let intersection1 = new Set([...ints].filter(x => myNums.has(x)))
    console.log(intersection1)

    // 集合差集
    let difference1 = new Set([...ints].filter(x => !myNums.has(x)))
    console.log(difference1)
  },
  mounted () {
    let content = `// 集合创建
let ints = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
let floats = new Set([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])
let myNums = new Set([1, 3, 0.1, 7, 0.7, 0.5, 4])

console.log(ints)
console.log(floats)
console.log(myNums)

// 判断元素是否在集合中
console.log(ints.has(1))
console.log(ints.has(21))

// 添加元素到集合
ints.add(11)
floats.add(11.0)

// 集合并集
let union1 = new Set([...ints, ...myNums])
let union2 = new Set([...floats, ...myNums])
console.log(union1)
console.log(union2)

// 集合交集
let intersection1 = new Set([...ints].filter(x => myNums.has(x)))
console.log(intersection1)

// 集合差集
let difference1 = new Set([...ints].filter(x => !myNums.has(x)))
console.log(difference1)
`
    this.initEditor('editor', content)
  }
}
</script>
