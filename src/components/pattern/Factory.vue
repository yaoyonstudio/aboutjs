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
