<template>
  <div class="Prototypes">
    <h2>{{ title }}</h2>
    <div class="content">
<h3>Object Prototypes</h3>
<pre>
var myObj = {
  'name': 'ken'
}

console.log(myObj)
console.log(myObj.name)
console.log(myObj.hasOwnProperty('name'))
console.log(myObj.hasOwnProperty('sex'))
</pre>

<h3>Function Prototypes</h3>


    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Prototypes'
    }
  },
  created () {
    // console.log(Object)
    // console.log(Array)
    // console.log(Function)

    var myObj = {
      'name': 'ken'
    }
    console.log(myObj)
    console.log(myObj.name)
    console.log(myObj.hasOwnProperty('name'))
    console.log(myObj.hasOwnProperty('sex'))
    console.log('-------------')

    // /////////////////////////////////////////

    function add (a, b) {
      let aa = a
      let bb = b
      return aa + bb
    }
    console.log(add)
    console.log(add.prototype)
    console.log(add(1, 2))

    console.log('-------------')

    // /////////////////////////////////////////

    function Fn () {}
    console.log(Fn.prototype.constructor)
    console.log(Fn.prototype.constructor === Fn)
    Fn.prototype.greet = function () {
      console.log('hello')
    }
    let myFun = new Fn()
    myFun.greet()

    console.log('-------------')

    // /////////////////////////////////////////

    let prototypeObj = {
      name: 'ken'
    }
    let obj = Object.create(prototypeObj)
    console.log(obj)
    console.log(obj.name) // obj继承了来自prototypeObj的属性name，这在实际应用中非常有用，我们可以让对象继承来自其他任何的对象，而不仅仅是根对象原型
  }
}
</script>

<style scoped lang="scss">
.Prototypes {

}
</style>
