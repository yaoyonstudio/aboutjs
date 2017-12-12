<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>在装饰者模式中，可以在运行时动态添加附加功能到对象中。装饰者模式的一个比较方便的特征在于其预期行为的可定制和可配置特性。可以从仅具有一些基本功能的普通对象开始，然后从可用装饰资源池中选择需要用于增强普通对象的那些功能进行装饰。</p>
      <p>实现装饰者模式的一种方法是使得每个装饰者成为一个对象，并且该对象包含了应该被重载的方法。每个装饰者实际上继承了目前已经被前一个装饰者进行增强后的对象。每个装饰方法在uber（继承的对象）上调用了同样的方法并且获取其值，此外它还继续执行了一些操作。</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Decorator Pattern'
    }
  },
  created () {
    function Formater (str) {
      this.str = str || ''
    }
    Formater.prototype.getString = function () {
      return this.str
    }
    Formater.decorators = {}
    Formater.decorators.Upper = {
      getString: function () {
        return this.str.toUpperCase()
      }
    }
    Formater.prototype.decorate = function (decorator) {
      var F = function () {}
      var overrides = this.constructor.decorators[decorator]
      var i, newobj
      F.prototype = this
      newobj = new F()
      newobj.uber = F.prototype
      for (i in overrides) {
        newobj[i] = overrides[i]
      }
      return newobj
    }
  },
  mounted () {
    let content = ``
    this.initEditor('editor', content)
  }
}
</script>
