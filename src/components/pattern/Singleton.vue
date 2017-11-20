<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="divider"></div>
      <p>创建型模式。这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。</p>
      <div class="divider"></div>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Singleton Design Pattern'
    }
  },
  created () {
    // JS 设计模式 — 单例模式
    var personSingleton = (function () {
      var instance
      function init () {
        function privateMethod () { // eslint-disable-line no-unused-vars
          console.log('I am private')
        }
        var privateVariable = 'I also private'   // eslint-disable-line no-unused-vars
        var privateRandomNumber = Math.random()
        return {
          publicMethod: function () {
            console.log('The public can see me!')
          },
          publicProperty: 'I am also public',
          getRandomNumber: function () {
            return privateRandomNumber
          }
        }
      }
      return {
        getInstance: function () {
          if (!instance) {
            instance = init()
          }
          return instance
        }
      }
    })()

    var singleA = personSingleton.getInstance()
    var singleB = personSingleton.getInstance()

    singleA.publicMethod()
    console.log(singleA.publicProperty)
    console.log(singleA.getRandomNumber() === singleB.getRandomNumber())
  },
  mounted () {
    let content = `var personSingleton = (function () {
  var instance
  function init () {
    function privateMethod () { // eslint-disable-line no-unused-vars
      console.log('I am private')
    }
    var privateVariable = 'I also private'   // eslint-disable-line no-unused-vars
    var privateRandomNumber = Math.random()
    return {
      publicMethod: function () {
        console.log('The public can see me!')
      },
      publicProperty: 'I am also public',
      getRandomNumber: function () {
        return privateRandomNumber
      }
    }
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()

var singleA = personSingleton.getInstance()
var singleB = personSingleton.getInstance()

singleA.publicMethod()
console.log(singleA.publicProperty)
console.log(singleA.getRandomNumber() === singleB.getRandomNumber())`

    this.initEditor('editor', content)
  }
}
</script>
