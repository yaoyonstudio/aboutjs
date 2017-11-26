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
    console.log(map1.get('name'))
    console.log(map1.has('age'))
    map1.set('weight', 50)
    console.log(map1.get('weight'))
    map1.delete('age')
    console.log(map1)
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
    let content = `let map1 = new Map([['name', 'ken'], ['age', 18]])
console.log(map1)
console.log(map1.size)
console.log(map1.get('name'))
console.log(map1.has('age'))
map1.set('weight', 50)
console.log(map1.get('weight'))
map1.delete('age')
console.log(map1)
console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())
// map1.clear() // 清除所有成员`
    this.initEditor('editor', content)
  }
}
</script>
