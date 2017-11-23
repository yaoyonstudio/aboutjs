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
      title: 'Object Iteration'
    }
  },
  created () {
    // 对象迭代扩展
    let obj1 = {
      name: 'ken',
      age: 18
    }

    let name = 'kenny'
    let age = 16
    let obj2 = {
      name,
      age
    }

    let obj3 = {
      name,
      age: 17,
      sayHi () {
        console.log('hi!')
      }
    }

    let field = 'hobby'
    let obj4 = {
      name,
      [field]: 'computer'
    }

    let obj5 = {
      name,
      'greet' () {
        console.log('hello!')
      }
    }

    console.log(obj1)
    console.log(obj2)
    console.log(obj3)
    obj3.sayHi()
    console.log(obj4)
    console.log(obj4[field])
    console.log(obj5)
    obj5['greet']()
  },
  mounted () {
    let content = `// 对象迭代扩展

let obj1 = {
  name: 'ken',
  age: 18
}

let name = 'kenny'
let age = 16
let obj2 = {
  name,
  age
}

let obj3 = {
  name,
  age: 17,
  sayHi() {
    console.log('hi!')
  }
}

let field = 'hobby'
let obj4 = {
  name,
  [field]: 'computer'
}

let obj5 = {
  name,
  'greet'() {
    console.log('hello!')
  }
}

console.log(obj1)
console.log(obj2)
console.log(obj3)
obj3.sayHi()
console.log(obj4)
console.log(obj4[field])
console.log(obj5)
obj5['greet']()`
    this.initEditor('editor', content)
  }
}
</script>
