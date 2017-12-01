<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>在迭代器模式，通常有一个包含某种数据集合的对象。该数据可能存储在一个复杂数据结构内部，而要提供一种简单的方法能够访问数据结构中每个元素。对象的消费者并不需要知道如何组织数据，只要知道根据迭代器提供的接口取出数据即可。</p>
      <p>在迭代器模式中，对象通常提供了next()/hasNext()/rewind()/current()等方法</p>
      <p></p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Iterator Pattern'
    }
  },
  created () {
    var iteratorObj = (function () {
      var index = 0
      var data = [1, 2, 3, 4, 5]
      var length = data.length

      return {
        next: function () {
          var element
          if (!this.hasNext()) {
            return null
          }

          element = data[index]
          index = index + 1
          return element
        },
        hasNext: function () {
          return index < length
        },
        rewind: function () { // 重置指针到初始位置
          index = 0
        },
        current: function () { // 返回当前元素，因为不可能在不前进指针的情况下使用next()执行该操作
          return data[index]
        }
      }
    }())

    console.log(iteratorObj)
    console.log(iteratorObj.hasNext())
    console.log('current:', iteratorObj.current())
    console.log(iteratorObj.next())
    console.log('current:', iteratorObj.current())
    console.log(iteratorObj.next())
    console.log(iteratorObj.next())
    console.log(iteratorObj.next())
    console.log(iteratorObj.hasNext())
    console.log('current:', iteratorObj.current())
    console.log(iteratorObj.next())
    console.log(iteratorObj.hasNext())
    console.log('current:', iteratorObj.current())
    console.log('---------')
    iteratorObj.rewind()
    console.log(iteratorObj.hasNext())
    console.log('current:', iteratorObj.current())
  },
  mounted () {
    let content = `
var iteratorObj = (function () {
  var index = 0
  var data = [1, 2, 3, 4, 5]
  var length = data.length

  return {
    next: function () {
      var element
      if (!this.hasNext()) {
        return null
      }

      element = data[index]
      index = index + 1
      return element
    },
    hasNext: function () {
      return index < length
    },
    rewind: function () { // 重置指针到初始位置
      index = 0
    },
    current: function () { // 返回当前元素，因为不可能在不前进指针的情况下使用next()执行该操作
      return data[index]
    }
  }
}())

console.log(iteratorObj)
console.log(iteratorObj.hasNext())
console.log('current:', iteratorObj.current())
console.log(iteratorObj.next())
console.log('current:', iteratorObj.current())
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.hasNext())
console.log('current:', iteratorObj.current())
console.log(iteratorObj.next())
console.log(iteratorObj.hasNext())
console.log('current:', iteratorObj.current())
console.log('---------')
iteratorObj.rewind()
console.log(iteratorObj.hasNext())
console.log('current:', iteratorObj.current())
`
    this.initEditor('editor', content)
  }
}
</script>
