<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>字典是一种以键 - 值对形式存储数据的数据结构</p>
      <p>本例实现一个Dictionay类。基础是 Array 类，而不是 Object 类。</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Dictionary'
    }
  },
  created () {
    /* eslint-disable */
    // 定义字典数据类型
    function Dictionary () {
      this.add = add
      this.datastore = new Array()
      this.find = find
      this.remove = remove
      this.showAll = showAll
      this.count = count
      this.clear = clear

      function add (key, value) {
        this.datastore[key] = value
      }
      function find (key) {
        return this.datastore[key]
      }
      function remove (key) {
        delete this.datastore[key]
      }
      function showAll () {
        var keys = Object.keys(this.datastore)
        var values = Object.values(this.datastore)
        for (var key in Object.keys(this.datastore)) {
          console.log(keys[key] + ' -> ' + values[key])
        }
      }
      function count () {
        var n = 0
        for(var key in Object.keys(this.datastore)) {
          ++n
        }
        return n
      }
      function clear () {
        var keys = Object.keys(this.datastore)
        var values = Object.values(this.datastore)
        for (var key in keys) {
          delete this.datastore[keys[key]]
        }
        console.log(this.datastore)
      }
    }

    // 使用字典数据类型
    var pbook = new Dictionary()
    pbook.add('Raymond','123')
    pbook.add('David', '345')
    pbook.add('Cynthia', '456')
    console.log('Number of entries: ' + pbook.count())
    console.log('David\'s extension: ' + pbook.find('David'))
    pbook.showAll()
    pbook.clear()
    console.log('Number of entries: ' + pbook.count())
  },
  mounted () {
    let content = `
// 定义字典数据类型
function Dictionary () {
  this.add = add
  this.datastore = new Array()
  this.find = find
  this.remove = remove
  this.showAll = showAll
  this.count = count
  this.clear = clear

  function add (key, value) {
    this.datastore[key] = value
  }
  function find (key) {
    return this.datastore[key]
  }
  function remove (key) {
    delete this.datastore[key]
  }
  function showAll () {
    var keys = Object.keys(this.datastore)
    var values = Object.values(this.datastore)
    for (var key in Object.keys(this.datastore)) {
      console.log(keys[key] + ' -> ' + values[key])
    }
  }
  function count () {
    var n = 0
    for(var key in Object.keys(this.datastore)) {
      ++n
    }
    return n
  }
  function clear () {
    var keys = Object.keys(this.datastore)
    var values = Object.values(this.datastore)
    for (var key in keys) {
      delete this.datastore[keys[key]]
    }
    console.log(this.datastore)
  }
}

// 使用字典数据类型
var pbook = new Dictionary()
pbook.add('Raymond','123')
pbook.add('David', '345')
pbook.add('Cynthia', '456')
console.log('Number of entries: ' + pbook.count())
console.log('David\'s extension: ' + pbook.find('David'))
pbook.showAll()
pbook.clear()
console.log('Number of entries: ' + pbook.count())
`
    this.initEditor('editor', content)
  }
}
</script>
