<template>
  <div class="LinkedList">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>链表</h3>
      <p>链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链。数组元素靠它们的位置进行引用，链表元素则是靠相互之间的关系进行引用。</p>
      <p>遍历链表，就是跟着链接，从链表的首元素一直走到尾元素（但这不包含链表的头节点，头节点常常用来作为链表的接入点）。链表的尾元素指向一个 null 节点。</p>

      <h3>基于对象的链表</h3>
<pre>
function Node (element) {
  this.element = element
  this.next = null
}
function LinkedList () {
  this.head = new Node('head')
  this.find = find
  this.findPrevious = findPrevious
  this.insert = insert
  this.remove = remove
  this.display = display
}
function find (item) {
  let currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}
function insert (newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}
function display () {
  let currNode = this.head
  while (!(currNode.next === null)) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}
function findPrevious (item) {
  let currNode = this.head
  while (!(currNode === null) && (currNode.next.element !== item)) {
    currNode = currNode.next
  }
  return currNode
}
function remove (item) {
  let prevNode = this.findPrevious(item)
  if (!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next
  }
}
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'LinkedList 链表'
    }
  },
  created () {
    // 基于对象的链表
    // 设计的链表包含两个类。 Node 类用来表示节点， LinkedList 类提供了插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法。
    // Node类
    function Node (element) {
      this.element = element
      this.next = null
    }
    // LinkedList类
    // head 节点的 next 属性被初始化为 null ，当有新元素插入时， next 会指向新的元素
    function LinkedList () {
      this.head = new Node('head')
      this.find = find
      this.findPrevious = findPrevious
      this.insert = insert
      this.remove = remove
      this.display = display
    }
    // find()方法遍历链表，查找给定的数据，如果找到数据，返回保存该数据的节点
    function find (item) {
      let currNode = this.head
      while (currNode.element !== item) {
        currNode = currNode.next
      }
      return currNode
    }
    function insert (newElement, item) {
      let newNode = new Node(newElement)
      let current = this.find(item)
      newNode.next = current.next
      current.next = newNode
    }
    function display () {
      let currNode = this.head
      while (!(currNode.next === null)) {
        console.log(currNode.next.element)
        currNode = currNode.next
      }
    }
    function findPrevious (item) {
      let currNode = this.head
      while (!(currNode === null) && (currNode.next.element !== item)) {
        currNode = currNode.next
      }
      return currNode
    }
    function remove (item) {
      let prevNode = this.findPrevious(item)
      if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next
      }
    }

    // ////////////////////

    let life = new LinkedList()
    life.insert('getup', 'head')
    life.insert('wash', 'getup')
    life.insert('eat', 'wash')
    life.insert('work', 'eat')
    life.insert('havefun', 'work')
    life.insert('back', 'havefun')
    console.log(life.display())
    life.remove('havefun')
    console.log(life.display())
  }
}
</script>

