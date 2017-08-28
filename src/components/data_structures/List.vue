<template>
  <div class="List">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>列表的抽象数据类型定义</h3>
<table border="1" bordercolor="#ccc" style="border-collapse:collapse">
  <tr>
    <td>listSize （属性）</td>
    <td>列表的元素个数</td>
  </tr>
  <tr>
    <td>pos （属性）</td>
    <td>列表的当前位置</td>
  </tr>
  <tr>
    <td>length （属性）</td>
    <td>返回列表中元素的个数</td>
  </tr>
  <tr>
    <td>clear （方法）</td>
    <td>清空列表中的所有元素</td>
  </tr>
  <tr>
    <td>toString （方法）</td>
    <td>返回列表的字符串形式</td>
  </tr>
  <tr>
    <td>getElement （方法）</td>
    <td>返回当前位置的元素</td>
  </tr>
  <tr>
    <td>insert （方法）</td>
    <td>在现有元素后插入新元素</td>
  </tr>
  <tr>
    <td>append （方法）</td>
    <td>在列表的末尾添加新元素</td>
  </tr>
  <tr>
    <td>remove （方法）</td>
    <td>从列表中删除元素</td>
  </tr>
  <tr>
    <td>front （方法）</td>
    <td>将列表的当前位置设移动到第一个元素</td>
  </tr>
  <tr>
    <td>end （方法）</td>
    <td>将列表的当前位置移动到最后一个元素</td>
  </tr>
  <tr>
    <td>prev （方法）</td>
    <td>将当前位置后移一位</td>
  </tr>
  <tr>
    <td>next （方法）</td>
    <td>将当前位置前移一位</td>
  </tr>
  <tr>
    <td>currPos （方法）</td>
    <td>返回列表的当前位置</td>
  </tr>
  <tr>
    <td>moveTo （方法）</td>
    <td>将当前位置移动到指定位置</td>
  </tr>
</table>

    <hr />
    <h3>列表实现</h3>

<pre>
function List () {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains
}

function find (element) {
  for (let i = 0, l = this.dataStore.length; i < l; i++) {
    if (this.dataStore[i] === element) {
      return i
    }
  }
  return -1
}
function append (element) {
  this.dataStore[this.listSize++] = element
}
function remove (element) {
  let elementIndex = this.find(element)
  if (elementIndex > -1) {
    this.dataStore.splice(elementIndex, 1)
    --this.listSize
    return true
  }
  return false
}
function length () {
  return this.listSize
}
function toString () {
  return this.dataStore
}
function insert (element, after) {
  let insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }
  return false
}
function clear () {
  delete this.dataStore
  this.dataStore = []
  this.listSize = this.pos = 0
}
function contains (element) {
  for (let i = 0, l = this.dataStore.length; i < l; i++) {
    if (this.dataStore[i] === element) {
      return true
    }
  }
  return false
}
function front () {
  this.pos = 0
}

function end () {
  this.pos = this.listSize - 1
}
function prev () {
  if (this.pos > 0) {
    --this.pos
  }
}
function next () {
  if (this.pos < this.listSize - 1) {
    ++this.pos
  }
}
function currPos () {
  return this.pos
}
function moveTo (position) {
  this.pos = position
}
function getElement () {
  return this.dataStore[this.pos]
}
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'List 列表'
    }
  },
  created () {
    function List () {
      this.listSize = 0
      this.pos = 0
      this.dataStore = []
      this.clear = clear
      this.find = find
      this.toString = toString
      this.insert = insert
      this.append = append
      this.remove = remove
      this.front = front
      this.end = end
      this.prev = prev
      this.next = next
      this.length = length
      this.currPos = currPos
      this.moveTo = moveTo
      this.getElement = getElement
      this.contains = contains
    }

    function find (element) {
      for (let i = 0, l = this.dataStore.length; i < l; i++) {
        if (this.dataStore[i] === element) {
          return i
        }
      }
      return -1
    }
    function append (element) {
      this.dataStore[this.listSize++] = element
    }
    function remove (element) {
      let elementIndex = this.find(element)
      if (elementIndex > -1) {
        this.dataStore.splice(elementIndex, 1)
        --this.listSize
        return true
      }
      return false
    }
    function length () {
      return this.listSize
    }
    function toString () {
      return this.dataStore
    }
    function insert (element, after) {
      let insertPos = this.find(after)
      if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element)
        ++this.listSize
        return true
      }
      return false
    }
    function clear () {
      delete this.dataStore
      this.dataStore = []
      this.listSize = this.pos = 0
    }
    function contains (element) {
      for (let i = 0, l = this.dataStore.length; i < l; i++) {
        if (this.dataStore[i] === element) {
          return true
        }
      }
      return false
    }
    function front () {
      this.pos = 0
    }

    function end () {
      this.pos = this.listSize - 1
    }
    function prev () {
      if (this.pos > 0) {
        --this.pos
      }
    }
    function next () {
      if (this.pos < this.listSize - 1) {
        ++this.pos
      }
    }
    function currPos () {
      return this.pos
    }
    function moveTo (position) {
      this.pos = position
    }
    function getElement () {
      return this.dataStore[this.pos]
    }

    // ////////
    let list1 = new List()
    console.log('list1:', list1)
    list1.append(1)
    list1.append(2)
    list1.append(3)
    list1.append(4)
    list1.append(5)
    list1.append(6)
    list1.append(7)
    console.log('list1:', list1)
    console.log(list1.getElement())
    list1.front()
    console.log(list1.getElement())
    list1.next()
    console.log(list1.getElement())
    list1.prev()
    console.log(list1.getElement())
  }
}
</script>

<style scoped lang="scss">
table {
  tr {
    td {
      height: 28px;
      padding: 0 10px;
    }
  }
}
</style>
