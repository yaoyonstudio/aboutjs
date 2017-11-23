<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>创建一个对象的三种方法</h3>
      <code id="editor1"></code>
      <hr />
      <h3>对象属性及赋值的四种方法</h3>
      <code id="editor2"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Object'
    }
  },
  created () {
  },
  mounted () {
    let content1 = `var myObj1 = {}
var myObj2 = Object.create( Object.prototype )
var myObj3 = new Object()`
    let content2 = `// 1. 点语法
// 赋值及获取
myObj1.name = 'ken'
console.log(myObj1.name)

// 2.中括号语法
myObj2['name'] = 'ken'
console.log(myObj2['name'])

// 3.Object.defineProperty
Object.defineProperty( myObj3, "name", {
  value: 'kenny',
  writable: true,
  enumerable: true,
  configurable: true
})
// 上面是定义一个属性的写法，可以使用函数封装赋值，如

var defineProp = function ( obj, key, value ) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  }
  Object.defineProperty( obj, key, config )
}

// 使用
var person = Object.create( Object.prototype )
defineProp( person, "name", "yaoyon")
defineProp( person, "age", 28)
console.log(person)

// 4. Object.defineProperties
var myObj4 = {}
Object.defineProperties( myObj4, {
  "name": {
    value: 'yaoyon',
    writable: true,
    enumerable: true,
    configurable: true
  },
  "age": {
    value: 18,
    writable: true,
    enumerable: true
  }
})
console.log(myObj4)`

    this.initEditor('editor1', content1)
    this.initEditor('editor2', content2)
  }
}
</script>
