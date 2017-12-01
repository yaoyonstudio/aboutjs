<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>工厂模式的目的是为了创建对象，它通常在类或类的静态方法中实现，具有下列目标：</p>
      <p>（1）当创建相似对象时执行重复操作</p>
      <p>（2）在编译时不知道具体类型（类）的情况下，为工厂客户提供一种创建对象的接口</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Factory Design Pattern'
    }
  },
  created () {
    var personFactory = function (name, age) {
      return {
        name: name,
        age: age,
        sayHello: function () {
          console.log('Hello, I \'m ' + name + '!')
        }
      }
    }

    var ken = personFactory('ken', 16)
    var kenny = personFactory('kenny', 28)

    ken.sayHello()
    kenny.sayHello()

    console.log(ken.name)
    console.log(ken.age)
  },
  mounted () {
    let content = `var personFactory = function (name, age) {
    return {
      name: name,
      age: age,
      sayHello: function () {
        console.log("Hello, I 'm " + name + "!")
      }
    }
  }

  var ken = personFactory('ken', 16)
  var kenny = personFactory('kenny', 28)

  ken.sayHello()
  kenny.sayHello()

  console.log(ken.name)
  console.log(ken.age)
`
    this.initEditor('editor', content)
  }
}
</script>
