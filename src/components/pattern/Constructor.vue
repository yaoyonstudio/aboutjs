<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor1"></code>
      <p>上面就是一个简单的构造模式，但仍然有一个缺点，在personConstructor中直接定义了sayHello方法，这在每次new一个新对象的时候都会重新定义这个方法。解决方法就是使用原型。如下例：</p>
      <code id="editor2"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Constructor Design Pattern'
    }
  },
  created () {
    var PersonConstructor = function (name, age) {
      this.name = name
      this.age = age

      this.sayHello = function () {
        console.log('Hello, I \'m ' + this.name + '!')
      }
    }

    // 要使用new关键字
    var ken = new PersonConstructor('ken', 16)
    var kenny = new PersonConstructor('kenny', 28)

    ken.sayHello()
    kenny.sayHello()

    console.log(ken.name)
    console.log(ken.age)

    console.log('----------')

    var MyConstructor = function (name, age) {
      this.name = name
      this.age = age
    }

    MyConstructor.prototype.sayHello = function () {
      console.log('Hello, I \'m ' + this.name + '!')
    }

    var meKen = new MyConstructor('ken', 16)
    var meKenny = new MyConstructor('kenny', 28)

    meKen.sayHello()
    meKenny.sayHello()
  },
  mounted () {
    let content1 = `var PersonConstructor = function (name, age) {
  this.name = name
  this.age = age

  this.sayHello = function () {
    console.log("Hello, I 'm " + this.name + "!")
  }
}

// 要使用new关键字
var ken = new PersonConstructor('ken', 16)
var kenny = new PersonConstructor('kenny', 28)

ken.sayHello()
kenny.sayHello()

console.log(ken.name)
console.log(ken.age)`

    let content2 = `var MyConstructor = function (name, age) {
      this.name = name
      this.age = age
    }

    MyConstructor.prototype.sayHello = function () {
      console.log("Hello, I 'm " + this.name + "!")
    }

    var meKen = new MyConstructor('ken', 16)
    var meKenny = new MyConstructor('kenny', 28)

    meKen.sayHello()
    meKenny.sayHello()`
    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
  }
}
</script>
