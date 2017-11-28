<template>
  <div class="Symbol">
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
      title: 'Symbol'
    }
  },
  created () {
    /* eslint-disable */
    // Symbol表示一个独一无二的值，可用于作为对象的Key值

    // Symbol一般用于以下场景：
    // 1: 创建独一无二的值
    // 2: 作为对象属性存储meta data

    // 创建Symbol
    let symbol1 = Symbol()
    let symbol2 = Symbol('symbol2')
    let symbol3 = Symbol('symbol3')

    // Symbol是独一无二的
    console.log(symbol2 == symbol3)

    console.log('------------------')

    let testObj = {
      title: 'test'
    }
    testObj[symbol2] = 'symbol1 string'
    console.log(testObj)

    console.log('------------------')

    // Symbol Coercion
    let uid = Symbol.for('uid'),
        desc = String(uid)
    console.log(uid)
    console.log(Symbol.for('uid'))
    console.log(Symbol.keyFor(uid))

    let obj = {}
    obj[uid] = 'something...'
    console.log(obj)

    //
  },
  mounted () {
    let content = ``
    this.initEditor('editor', content)
  }
}
</script>
