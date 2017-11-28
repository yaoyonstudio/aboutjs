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
      title: 'Deconstruction'
    }
  },
  created () {
    // 解构

    // 数组解构
    let numbers = [1, 2, 3, 4, 5]

    let [a, b] = numbers
    console.log(a)
    console.log(b)

    /* eslint-disable */
    let [a1, b1, c1, d1, e1, f1] = numbers
    console.log(e1)
    console.log(f1)  // undefined

    let [a2, ...b2] = numbers
    console.log(a2)
    console.log(b2)

    let [a3, b3, c3, d3, e3, f3 = 10] = numbers
    console.log(f3)

    console.log('--------------------')

    // 对象解构
    let obj = {
      name: 'ken',
      age: 18,
      sayHi() {
        console.log('hi!')
      }
    }

    let {name, age} = obj
    console.log(name)
    console.log(age)

    let {name: name2, sayHi} = obj
    console.log(name2)
    sayHi()

    let {name: name3, sayHi: greet} = obj
    console.log(name3)
    greet()
  },
  mounted () {
    let content = `// 解构

// 数组解构
let numbers = [1,2,3,4,5]

let [a,b] = numbers
console.log(a)
console.log(b)

let [a1,b1,c1,d1,e1,f1] = numbers
console.log(e1)
console.log(f1)  // undefined

let [a2, ...b2] = numbers
console.log(a2)
console.log(b2)


// 对象解构
let obj = {
  name: 'ken',
  age: 18,
  sayHi() {
    console.log('hi!')
  }
}

let {name, age} = obj
console.log(name)
console.log(age)

let {name: name2, sayHi} = obj
console.log(name2)
sayHi()

let {name: name3, sayHi: greet} = obj
console.log(name3)
greet()`
    this.initEditor('editor', content)
  }
}
</script>
