<template>
  <div class="Stack">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>栈的实现</h3>
      <p>栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。</p>
      <p>栈被称为一种后入先出（LIFO，last-in-first-out）的数据结构。</p>
      <p>由于栈具有后入先出的特点，所以任何不在栈顶的元素都无法访问。为了得到栈底的元
素，必须先拿掉上面的元素。</p>
<pre>
function Stack () {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.clear = clear
  this.length = length
}
function push (element) {
  this.dataStore[this.top++] = element
}
function pop (element) {
  return this.dataStore[--this.top]
}
function peek () {
  return this.dataStore[this.top - 1]
}
function length () {
  return this.top
}
function clear () {
  this.top = 0
  this.dataStore = []
}
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Stack 栈'
    }
  },
  created () {
    function Stack () {
      this.dataStore = []
      this.top = 0
      this.push = push
      this.pop = pop
      this.peek = peek
      this.clear = clear
      this.length = length
    }
    function push (element) {
      this.dataStore[this.top++] = element
    }
    function pop (element) {
      return this.dataStore[--this.top]
    }
    function peek () {
      return this.dataStore[this.top - 1]
    }
    function length () {
      return this.top
    }
    function clear () {
      this.top = 0
      this.dataStore = []
    }

    // //////////

    let stack1 = new Stack()
    stack1.push(1)
    stack1.push(2)
    stack1.push(3)
    stack1.push(4)
    stack1.push(5)
    console.log('stack1 length:', stack1.length())
    console.log('stack1:', stack1)
    console.log(stack1.peek())
    stack1.pop()
    stack1.pop()
    console.log(stack1.peek())
    console.log(stack1.length())
    stack1.clear()
    console.log('stack1:', stack1)
    console.log(stack1.peek())
  }
}
</script>
