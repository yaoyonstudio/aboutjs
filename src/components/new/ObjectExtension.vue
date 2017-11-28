<template>
  <div class="ObjectExtension">
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
      title: 'Object Extension'
    }
  },
  created () {
    // 创建对象
    // ES5
    /* eslint-disable */
    function createPerson (name, age) {
      return {
        name: name,
        age: age
      }
    }
    // ES6
    function createPerson2 (name, age) {
      return {
        name,
        age
      }
    }
    // 对象方法定义
    var ken = {
      name: 'ken',
      age: 18,
      greet () {
        console.log('hello...')
      }
    }
    ken.greet()

    // 变量属性
    let prop = 'weight'
    ken[prop] = '50KG'
    console.log(ken.weight)
    console.log(ken['weight'])

    console.log('------------------')

    // 对象方法
    // Object.is()方法
    console.log(+0 == -0) // true
    console.log(+0 === -0) // true
    console.log(Object.is(+0, -0)) // false
    console.log(NaN == NaN) // false
    console.log(NaN === NaN) // false
    console.log(Object.is(NaN, NaN)) // true
    console.log(5 == 5) // true
    console.log(5 == "5") // true
    console.log(5 === 5) // true
    console.log(5 === "5") // false
    console.log(Object.is(5, 5)) // true
    console.log(Object.is(5, "5")) // false

    // Object.assign()方法
    let common = {
      page: 1,
      pageSize: 10,
      Authorization: 'Bear DS3240222FSDF328423OIRHFF0239R02IJF02JF023'
    }
    let requestOption = Object.assign({
      id: 1
    }, common)
    console.log(requestOption)

    // 对象原型
    let person = {
      greet () {
        console.log('hello...')
      }
    }
    let student = Object.create(person)
    let teacher = Object.create(person)
    student.greet()
    teacher.greet()
    console.log(Object.getPrototypeOf(student))
    console.log(Object.getPrototypeOf(teacher))
    console.log(Object.getPrototypeOf(teacher) === person)

    console.log('-------------')

    let me = {
      name: 'ken',
      age: 18
    }
    Object.setPrototypeOf(me, person)
    console.log(me)
    console.log(Object.getPrototypeOf(me))
    console.log(Object.getPrototypeOf(me) === person)
    me.greet()
  },
  mounted () {
    let content = ``
    this.initEditor('editor', content)
  }
}
</script>
