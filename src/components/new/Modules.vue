<template>
  <div class="Modules">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor1"></code>
      <hr />
      <code id="editor2"></code>
      <hr />
      <code id="editor3"></code>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-duplicate-imports */
import { myObj, myObj as me, PI, add, Person } from './module1'
import * as MyModule from './module1'

import People from './module2'

export default {
  data () {
    return {
      title: 'Modules'
    }
  },
  created () {
    console.log(myObj)
    console.log(me)
    console.log(PI)
    console.log(add(1, 2))

    const ken = new Person('ken', 18)
    console.log(ken.name)
    console.log(ken.age)

    console.log('--------------------')

    console.log(MyModule.myObj)
    console.log(MyModule.PI)
    console.log(MyModule.add(1, 2))
    const kenny = new MyModule.Person('kenny', 16)
    console.log(kenny.name)
    console.log(kenny.age)

    console.log('--------------------')

    const yaoyon = new People('yaoyon', 20)
    console.log(yaoyon.name)
    console.log(yaoyon.age)
  },
  mounted () {
    let content1 = `
// ---------------------------------------
//./module1.js
// ---------------------------------------
export let myObj = {
  name: 'ken',
  age: 18
}

export const PI = 3.14

export function add (a, b) {
  return a + b
}

export class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log('Hello...')
  }
}
// ---------------------------------------
`
    let content2 = `
// ---------------------------------------
//./module1.js
// ---------------------------------------
export default class People {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log('Hello...')
  }
}
// ---------------------------------------
`
    let content3 = `
import { myObj, myObj as me, PI, add, Person } from './module1'
import * as MyModule from './module1'

import People from './module2'

console.log(myObj)
console.log(me)
console.log(PI)
console.log(add(1, 2))

const ken = new Person('ken', 18)
console.log(ken.name)
console.log(ken.age)

console.log('--------------------')

console.log(MyModule.myObj)
console.log(MyModule.PI)
console.log(MyModule.add(1, 2))
const kenny = new MyModule.Person('kenny', 16)
console.log(kenny.name)
console.log(kenny.age)

console.log('--------------------')

const yaoyon = new People('yaoyon', 20)
console.log(yaoyon.name)
console.log(yaoyon.age)
`
    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
    this.initEditor('editor3', content3)
  }
}
</script>
