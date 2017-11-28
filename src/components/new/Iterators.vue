<template>
  <div class="Iterators">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor"></code>
      <ul class="list">
        <li>内置迭代器</li>
        <li>字符串迭代器</li>
        <li>NodeList迭代器</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Iterators'
    }
  },
  created () {
    // 内置迭代器
    // entries()
    // values()
    // keys()

    let arr = ['a', 'b', 'c']
    let set = new Set(['a', 'b', 'c'])

    for (let entry of arr.entries()) {
      console.log(entry)
    }
    for (let key of arr.keys()) {
      console.log(key)
    }

    console.log('------------')

    for (let entry of set.entries()) {
      console.log(entry)
    }
    for (let key of set.keys()) {
      console.log(key)
    }
    for (let value of set.values()) {
      console.log(value)
    }

    console.log('------------')

    // 字符串迭代器
    let str = 'HELLO'
    for (let c of str) {
      console.log(c)
    }

    console.log('------------')

    // NodeList迭代器
    let liList = document.querySelectorAll('ul.list li')
    for (let li of liList) {
      console.log(li)
    }
  },
  mounted () {
    let content = `
// 内置迭代器
// entries()
// values()
// keys()

let arr = ['a', 'b', 'c']
let set = new Set(['a', 'b', 'c'])

for (let entry of arr.entries()) {
  console.log(entry)
}
for (let key of arr.keys()) {
  console.log(key)
}

console.log('------------')

for (let entry of set.entries()) {
  console.log(entry)
}
for (let key of set.keys()) {
  console.log(key)
}
for (let value of set.values()) {
  console.log(value)
}

console.log('------------')

// 字符串迭代器
let str = 'HELLO'
for (let c of str) {
  console.log(c)
}

console.log('------------')

// NodeList迭代器
let liList = document.querySelectorAll('ul.list li')
for (let li of liList) {
  console.log(li)
}
`
    this.initEditor('editor', content)
  }
}
</script>
