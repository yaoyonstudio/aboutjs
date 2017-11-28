<template>
  <div class="Tem">
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
      title: 'Map'
    }
  },
  created () {
    let map1 = new Map([['name', 'ken'], ['age', 18]])
    console.log(map1)
    console.log(map1.size)
    // get()方法
    console.log(map1.get('name'))
    // has()方法
    console.log(map1.has('age'))
    // set()方法
    map1.set('weight', 50)
    console.log(map1.get('weight'))
    // delete()方法
    map1.delete('age')
    console.log(map1)

    console.log('---------------------')

    // 遍历map
    let map2 = new Map([['name', 'ken'], ['age', 18], ['weight', 50]])
    map2.forEach((value, key, owner) => {
      console.log(`${key}: ${value}`)
      console.log(owner)
    })

    console.log('---------------------')

    console.log(map1.keys())
    console.log(map1.values())
    console.log(map1.entries())
    for (let item of map1.entries()) {
      console.log(`${item[0]}: ${item[1]}`)
    }
    // map1.clear() // 清除所有成员
  },
  mounted () {
    /* eslint-disable no-undef */
    let content = `
let map1 = new Map([['name', 'ken'], ['age', 18]])
console.log(map1)
console.log(map1.size)
// get()方法
console.log(map1.get('name'))
// has()方法
console.log(map1.has('age'))
// set()方法
map1.set('weight', 50)
console.log(map1.get('weight'))
// delete()方法
map1.delete('age')
console.log(map1)

console.log('---------------------')

// 遍历map
let map2 = new Map([['name', 'ken'], ['age', 18], ['weight', 50]])
map2.forEach((value, key, owner) => {
  console.log(\`\${key}: \${value}\`)
  console.log(owner)
})

console.log('---------------------')

console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())
for (let item of map1.entries()) {
  console.log(\`\${item[0]}: \${item[1]}\`)
}
// map1.clear() // 清除所有成员
`
    this.initEditor('editor', content)
  }
}
</script>
