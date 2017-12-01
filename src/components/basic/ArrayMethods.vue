<template>
  <div class="ArrayMethods">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>Array.sort()</h3>
      <p>Array.sort()用于数组排序，返回一个数组</p>
<pre>
let randomArr = [4, 12, 1, -3, 5, 312, 45]
let orderedArr = randomArr.sort((a, b) => a < b)
console.log(orderedArr)
</pre>
      <h3>Array.forEach()</h3>
      <p>Array.forEach()只用于遍历数组每一个元素，并不返回新数组。</p>
<pre>
let arr1 = [1, 2, 3, 4, 5, 6, 7]
arr1.forEach((item, index, array) => {
  console.log('第' + index + '个元素：' + item)
  // console.log(array)
})
</pre>

      <hr />

      <h3>Array.map()</h3>
      <p>Array.map()可以遍历数组每一个元素，同时返回一个新数组，新数组的元素由回调函数中处理后决定（如将数组元素都乘以2）。</p>
<pre>
let newArr = arr1.map((item, index, array) => {
  console.log('第' + index + '个元素：' + item)
  // console.log(array)
  return item * 2
})
console.log('原数组：', arr1)
console.log('Array.map()后新数组', newArr)
</pre>

    <hr />

    <h3>Array.filter()</h3>
    <p>Array.filter()用于过滤数组，并返回一个新数组。如过滤掉奇数项。</p>
<pre>
let filterArr = arr1.filter((item) => {
  if (item % 2 === 0) {
    return true
  } else {
    return false
  }
})
console.log('原数组：', arr1)
console.log('Array.filter()后新数组', filterArr)
</pre>

    <hr />

    <h3>Array.indexOf()</h3>
    <p>Array.indexOf()返回元素在数组中的位置，如果数组中有多个元素，则返回第一个出现元素的位置。</p>
<pre>
let index = arr1.indexOf(3)
console.log('3在数组', arr1, '中的位置：', index)
</pre>

    <hr />
    <h3>Array.lastIndexOf()</h3>
    <p>Array.lastIndexOf()返回元素在数组中的位置，如果数组中有多个元素，则返回最后一个出现元素的位置。</p>
<pre>
let arr2 = [1, 2, 1, 3, 4, 5, 6, 7]
let lastIndex = arr2.lastIndexOf(1)
console.log('1在数组', arr2, '中最后出现的位置：', lastIndex)
</pre>

    <hr />

    <h3>Array.every()</h3>
    <p>Array.every()返回所有元素经过回调函数处理后的结果，如果数组每个元素经过回调函数处理后都是true，则Array.every()返回True，否则返回False.</p>
<pre>
let result1 = arr1.every((item) => {
  return item % 2 === 0
})
let result2 = arr1.every((item) => {
  return item > 0
})
console.log('result1:', result1)
console.log('result2:', result2)
</pre>

    <hr />
    <h3>Array.includes()</h3>
    <p>Array.includes()返回数组中是否出现指定元素</p>
<pre>
console.log(arr1 + '数组中是否存在元素7：', arr1.includes(7))
</pre>

    <hr />
    <h3>Array.reduce()</h3>
    <p>Array.reduce()方法接受一个函数，对应一个累加器应用于数组中各个元素。</p>
<pre>
let count = arr1.reduce((sum, value) => sum + value, 0)
console.log('count:', count)
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'ArrayMethods'
    }
  },
  created () {
    // Array.sort
    let randomArr = [4, 12, 1, -3, 5, 312, 45]
    let orderedArr = randomArr.sort((a, b) => a < b)
    console.log(orderedArr)

    console.log('-----------------')

    // Array.forEach()
    let arr1 = [1, 2, 3, 4, 5, 6, 7]
    arr1.forEach((item, index, array) => {
      console.log('第' + index + '个元素：' + item)
      // console.log(array)
    })

    console.log('----------------')

    // Array.map()
    let newArr = arr1.map((item, index, array) => {
      console.log('第' + index + '个元素：' + item)
      // console.log(array)
      return item * 2
    })
    console.log('原数组：', arr1)
    console.log('Array.map()后新数组', newArr)

    console.log('----------------')

    // Array.filter()
    let filterArr = arr1.filter((item) => {
      if (item % 2 === 0) {
        return true
      } else {
        return false
      }
    })
    console.log('原数组：', arr1)
    console.log('Array.filter()后新数组', filterArr)

    console.log('--------------')

    // Array.indexOf()
    let index = arr1.indexOf(3)
    console.log('3在数组', arr1, '中的位置：', index)

    console.log('-----------------')

    // Array.lastIndexOf()
    let arr2 = [1, 2, 1, 3, 4, 5, 6, 7]
    let lastIndex = arr2.lastIndexOf(1)
    console.log('1在数组', arr2, '中最后出现的位置：', lastIndex)

    console.log('-----------------')

    // Array.every()
    let result1 = arr1.every((item) => {
      return item % 2 === 0
    })
    let result2 = arr1.every((item) => {
      return item > 0
    })
    console.log('result1:', result1)
    console.log('result2:', result2)

    console.log('-----------------')

    // Array.includes()
    console.log(arr1 + '数组中是否存在元素7：', arr1.includes(7))

    console.log('-----------------')

    // Array.reduce()
    let count = arr1.reduce((sum, value) => sum + value, 0)
    console.log('count:', count)
  }
}
</script>
