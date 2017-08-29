<template>
  <div class="Queue">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按顺序排列的数据，先进先出，这点和栈不一样，在栈中，最后入栈的元素反而被优先处理。可以将队列想象成在银行前排队的人群，排在最前面的人第一个办理业务，新来的人只能在后面排队，直到轮到他们为止。</p>
      <p>队列是一种先进先出（First-In-First-Out，FIFO）的数据结构。队列被用在很多地方，比如提交操作系统执行的一系列进程、打印任务池等，一些仿真系统用队列来模拟银行或杂货店里排队的顾客。</p>
      <p></p>
      <h3>队列的实现</h3>
<pre>
function Queue () {
  this.dataStore = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
  this.clear = clear
}
function enqueue (element) {
  this.dataStore.push(element)
}
function dequeue () {
  return this.dataStore.shift()
}
function front () {
  return this.dataStore[0]
}
function back () {
  return this.dataStore[this.dataStore.length - 1]
}
function toString () {
  let retStr = ''
  for (let i = 0, l = this.dataStore.length; i < l; i++) {
    retStr += this.dataStore[i] + '\n'
  }
  return retStr
}
function empty () {
  if (this.dataStore.length === 0) {
    return true
  } else {
    return false
  }
}
function clear () {
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
      title: 'Queue 队列'
    }
  },
  created () {
    function Queue () {
      this.dataStore = []
      this.enqueue = enqueue
      this.dequeue = dequeue
      this.front = front
      this.back = back
      this.toString = toString
      this.empty = empty
      this.clear = clear
    }
    function enqueue (element) {
      this.dataStore.push(element)
    }
    function dequeue () {
      return this.dataStore.shift()
    }
    function front () {
      return this.dataStore[0]
    }
    function back () {
      return this.dataStore[this.dataStore.length - 1]
    }
    function toString () {
      let retStr = ''
      for (let i = 0, l = this.dataStore.length; i < l; i++) {
        retStr += this.dataStore[i] + '\n'
      }
      return retStr
    }
    function empty () {
      if (this.dataStore.length === 0) {
        return true
      } else {
        return false
      }
    }
    function clear () {
      this.dataStore = []
    }

    // ////////////////

    let queue1 = new Queue()
    console.log('is empty:', queue1.empty())
    queue1.enqueue(1)
    queue1.enqueue(2)
    queue1.enqueue(3)
    queue1.enqueue(4)
    queue1.enqueue(5)
    console.log('queue1:', queue1)
    console.log('is empty:', queue1.empty())
    console.log('front:', queue1.front())
    console.log('back:', queue1.back())
    console.log('toString:', queue1.toString())
    queue1.dequeue()
    queue1.dequeue()
    console.log('queue1:', queue1)
    console.log('front:', queue1.front())
    console.log('back:', queue1.back())
    console.log('toString:', queue1.toString())
    queue1.clear()
    console.log('is empty:', queue1.empty())
  }
}
</script>
