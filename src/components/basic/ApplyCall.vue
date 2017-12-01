<template>
  <div class="main">
    <h2>{{title}}</h2>
    <div class="content1">
      <code id="editor1"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'ApplyCall'
    }
  },
  created () {
    function sayHello () {
      console.log('hello')
    }

    sayHello()

    function Person (personObj) {
      this.name = personObj && personObj.hasOwnProperty('name') ? personObj.name : 'anonymity'
      this.age = personObj && personObj.hasOwnProperty('age') ? personObj.age : 'unknown'
      this.email = personObj && personObj.hasOwnProperty('email') ? personObj.email : 'unknown'
    }

    console.log('---------------------')

    var ken = new Person({'name': 'ken', 'age': 28, 'email': 'ken@gmail.com'})
    var somebody = new Person()
    console.log(ken.name)
    console.log(ken.age)
    console.log(ken.email)
    console.log(somebody.name)
    console.log(somebody.age)
    console.log(somebody.email)

    console.log('----------call-------------')

    function test (a) {
      console.log(this)
      console.log(this.name)
      console.log(this.age)
      console.log(this.email)
      console.log(a)
      console.log('####')
    }

    var testObj = {
      'name': 'ken',
      'age': 28,
      'email': 'ken@gmail.com'
    }
    var testObj2 = {
      'color': 'red'
    }
    var testArray = [1, 2, 3, 4, 5, 6]

    // call接收对象（第一个参数）

    test.call(testObj, testArray, testArray[0], testArray[1], testObj2)
    test.call(testArray, testObj)

    console.log('----------apply-------------')

    // apply接收数组（第一个参数）
    test.apply(testObj, testArray, testArray[0], testArray[1], testObj2)
    test.apply(testArray, ['aaaaaaaaa', 'bbbbb'])

    console.log('------------bind-----------')
    // bind返回的是一个函数

    var testA = test.bind(testObj)
    var testB = test.bind(testArray)

    testA()
    testB()

    console.log('----------- apply 应用 ------------')
    function min (array) {
      return Math.min.apply(Math, array)
    }

    function max (array) {
      return Math.max.apply(Math, array)
    }

    console.log(min([10, 2, 33, 14, 5, 50]))
    console.log(min([5, 31, 12, 565, 2, 0]))

    console.log(max([10, 2, 33, 14, 5, 50]))
    console.log(max([5, 31, 12, 565, 2, 0]))

    console.log('----------------')

    function min2 (array) {
      return Math.min.apply(Math, array)
    }

    function max2 (array) {
      return Math.max.apply(Math, array)
    }

    console.log(min2([10, 2, 33, 14, 5, 50]))
    console.log(min2([5, 31, 12, 565, 2, 0]))

    console.log(max2([10, 2, 33, 14, 5, 50]))
    console.log(max2([5, 31, 12, 565, 2, 0]))
  },
  mounted () {
    let content1 = `
function sayHello () {
  console.log('hello')
}

sayHello()

function Person (personObj) {
  this.name = personObj && personObj.hasOwnProperty('name') ? personObj.name : 'anonymity'
  this.age = personObj && personObj.hasOwnProperty('age') ? personObj.age : 'unknown'
  this.email = personObj && personObj.hasOwnProperty('email') ? personObj.email : 'unknown'
}

console.log('---------------------')

var ken = new Person({'name': 'ken', 'age': 28, 'email': 'ken@gmail.com'})
var somebody = new Person()
console.log(ken.name)
console.log(ken.age)
console.log(ken.email)
console.log(somebody.name)
console.log(somebody.age)
console.log(somebody.email)

console.log('----------call-------------')

function test (a) {
  console.log(this)
  console.log(this.name)
  console.log(this.age)
  console.log(this.email)
  console.log(a)
  console.log('####')
}

var testObj = {
  'name': 'ken',
  'age': 28,
  'email': 'ken@gmail.com'
}
var testObj2 = {
  'color': 'red'
}
var testArray = [1, 2, 3, 4, 5, 6]

// call接收对象（第一个参数）

test.call(testObj, testArray, testArray[0], testArray[1], testObj2)
test.call(testArray, testObj)

console.log('----------apply-------------')

// apply接收数组（第一个参数）
test.apply(testObj, testArray, testArray[0], testArray[1], testObj2)
test.apply(testArray, ['aaaaaaaaa', 'bbbbb'])

console.log('------------bind-----------')
// bind返回的是一个函数

var testA = test.bind(testObj)
var testB = test.bind(testArray)

testA()
testB()
`

    this.initEditor('editor1', content1)
  }
}
</script>
