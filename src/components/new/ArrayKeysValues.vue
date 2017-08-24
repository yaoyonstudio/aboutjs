<template>
  <div class="arrayKeysValues">
    <h2>{{ title }}</h2>
    <div class="content">
<pre>
let arr = ['a', 'b', 'c']
let iterator = arr.keys()
let iterator2 = arr.values()
let iterator3 = arr.entries()

iterator.next() // {value: 0, done: false}
iterator.next() // {value: 1, done: false}
iterator.next() // {value: 2, done: false}
iterator.next() // {value: undefined, done: true}

console.log('------------')

iterator2.next().value() // a
iterator2.next().value() // b
iterator2.next().value() // c
iterator2.next().value() // undefined

console.log('------------')

iterator3.next().value // [0, 'a']
iterator3.next().value // [1, 'b']
iterator3.next().value // [2, 'c']
iterator3.next().value // undefined
</pre>
      <p>Array.keys和Array.values都返回一个数组迭代对象，使用对象的next()方法可以迭代访问元素。</p>
      <p>Array.keys返回数组下标，Array.values返回数组值，Array.entries返回数组对象</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'arrayKeysValues',
  data () {
    return {
      title: 'Array.keys / Array.values / Array.entries'
    }
  },
  created () {
    let arr = ['a', 'b', 'c']
    let iterator = arr.keys()
    // let iterator2 = arr.values()
    let iterator3 = arr.entries()

    console.log(iterator)
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())

    iterator.next() // {value: 0, done: false}
    iterator.next() // {value: 1, done: false}
    iterator.next() // {value: 2, done: false}
    iterator.next() // {value: undefined, done: true}

    console.log('------------')

    // console.log(iterator2)
    // console.log(iterator2.next())
    // console.log(iterator2.next())
    // console.log(iterator2.next())
    // console.log(iterator2.next())

    // iterator2.next().value() // a
    // iterator2.next().value() // b
    // iterator2.next().value() // c
    // iterator2.next().value() // undefined

    console.log('------------')

    console.log(iterator3)
    console.log(iterator3.next().value)
    console.log(iterator3.next().value)
    console.log(iterator3.next().value)
    console.log(iterator3.next().value)

    iterator3.next().value // [0, 'a']
    iterator3.next().value // [1, 'b']
    iterator3.next().value // [2, 'c']
    iterator3.next().value // undefined
  }
}
</script>

<style scoped lang="scss">
.arrayKeysValues {

}
</style>
