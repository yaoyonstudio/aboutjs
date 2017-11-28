<template>
  <div class="ArrayExtension">
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
      title: 'Array Extension'
    }
  },
  created () {
    /* eslint-disable no-array-constructor */
    // JS中使用构造函数定义数组时要注意的地方
    let arr1 = new Array(1, 2, 3, 4)
    let arr2 = new Array(4)
    let arr3 = new Array('1', '2', '3', '4')
    let arr4 = new Array('4')

    console.log(arr1.length)    // 4
    console.log(arr1[0])        // 1
    console.log(arr1[1])        // 2

    console.log('----')

    console.log(arr2.length)    // 4
    console.log(arr2[0])        // undefined
    console.log(arr2[1])        // undefined

    console.log('----')

    console.log(arr3.length)    // 4
    console.log(arr3[0])        // '1'
    console.log(arr3[1])        // '2

    console.log('----')

    console.log(arr4.length)    // 1
    console.log(arr4[0])        // 4
    console.log(arr4[1])        // undefined

    console.log('---------------------------')

    // Array.of()定义数组
    // 使用Array.of()定义数组可以防止
    let arr5 = Array.of(1, 2, 3, 4)
    let arr6 = Array.of(4)
    let arr7 = Array.of('1', '2', '3', '4')
    let arr8 = Array.of('4')

    console.log(arr5.length)
    console.log(arr5[0])
    console.log(arr5[1])

    console.log('----')

    console.log(arr6.length)
    console.log(arr6[0])
    console.log(arr6[1])

    console.log('----')

    console.log(arr7.length)
    console.log(arr7[0])
    console.log(arr7[1])

    console.log('----')

    console.log(arr8.length)
    console.log(arr8[0])
    console.log(arr8[1])

    console.log('---------------------------')

    // Array.from() 将类数组对象转为数组，在转换过程中，也可以作操作
    let add = function () {
      // arguments是一个类数组对象
      let argsArr = Array.from(arguments)
      console.log(argsArr)
      return argsArr.reduce((sum, num) => sum + num, 0)
    }
    console.log(add(1, 2, 3, 4))

    console.log('---------------------------')

    let makeDouble = function () {
      return Array.from(arguments, (num) => num * 2)
    }
    console.log(makeDouble(1, 2, 3, 4))

    console.log('---------------------------')

    // ES6中新数组方法
    let nums = [1, 2, 3, 4, 5, 6, 7]

    // find()/findIndex()
    console.log(nums.find(num => num % 2 === 0))
    console.log(nums.findIndex(num => num % 2 === 0))

    // fill() 用给定值填充数组
    let nums2 = [0, 1, 2, 3, 4]
    nums2.fill(1)
    console.log(nums2)
    let nums3 = [1, 3, 2, 3, 2]
    nums3.fill('a', 2)    // 从第2个位置开始填充
    console.log(nums3)
    let nums4 = [4, 34, 1, 67, 23, 12]
    nums4.fill('haha', 1, 3)  // 从第1个位置（包含）开始填充到第3个位置（不包含）
    console.log(nums4)

    console.log('---------------------------')

    // copyWithin() 从数组本身中取出元素填充数组
    // 两个参数：第一个参数是要填充的开始位置，第二个位置是填充元素来源的开始位置
    let nums5 = [1, 42, 12, 65, 123, 5, 6, 26]
    nums5.copyWithin(1, 3)  // 从数组的第3个位置拿取一系列元素值，从数组的第1个元素开始进行填充
    console.log(nums5)
  },
  mounted () {
    let content = `
// JS中使用构造函数定义数组时要注意的地方
let arr1 = new Array(1, 2, 3, 4)
let arr2 = new Array(4)
let arr3 = new Array('1', '2', '3', '4')
let arr4 = new Array('4')

console.log(arr1.length)    // 4
console.log(arr1[0])        // 1
console.log(arr1[1])        // 2

console.log('----')

console.log(arr2.length)    // 4
console.log(arr2[0])        // undefined
console.log(arr2[1])        // undefined

console.log('----')

console.log(arr3.length)    // 4
console.log(arr3[0])        // '1'
console.log(arr3[1])        // '2

console.log('----')

console.log(arr4.length)    // 1
console.log(arr4[0])        // 4
console.log(arr4[1])        // undefined

console.log('---------------------------')

// Array.of()定义数组
// 使用Array.of()定义数组可以防止
let arr5 = Array.of(1, 2, 3, 4)
let arr6 = Array.of(4)
let arr7 = Array.of('1', '2', '3', '4')
let arr8 = Array.of('4')

console.log(arr5.length)
console.log(arr5[0])
console.log(arr5[1])

console.log('----')

console.log(arr6.length)
console.log(arr6[0])
console.log(arr6[1])

console.log('----')

console.log(arr7.length)
console.log(arr7[0])
console.log(arr7[1])

console.log('----')

console.log(arr8.length)
console.log(arr8[0])
console.log(arr8[1])

console.log('---------------------------')

// Array.from() 将类数组对象转为数组，在转换过程中，也可以作操作
let add = function () {
  // arguments是一个类数组对象
  let argsArr = Array.from(arguments)
  console.log(argsArr)
  return argsArr.reduce((sum, num) => sum + num, 0)
}
console.log(add(1, 2, 3, 4))

console.log('---------------------------')

let makeDouble = function () {
  return Array.from(arguments, (num) => num * 2)
}
console.log(makeDouble(1, 2, 3, 4))

console.log('---------------------------')

// ES6中新数组方法
let nums = [1, 2, 3, 4, 5, 6, 7]

// find()/findIndex()
console.log(nums.find(num => num % 2 === 0))
console.log(nums.findIndex(num => num % 2 === 0))

// fill() 用给定值填充数组
let nums2 = [0, 1, 2, 3, 4]
nums2.fill(1)
console.log(nums2)
let nums3 = [1, 3, 2, 3, 2]
nums3.fill('a', 2)    // 从第2个位置开始填充
console.log(nums3)
let nums4 = [4, 34, 1, 67, 23, 12]
nums4.fill('haha', 1, 3)  // 从第1个位置（包含）开始填充到第3个位置（不包含）
console.log(nums4)

console.log('---------------------------')

// copyWithin() 从数组本身中取出元素填充数组
// 两个参数：第一个参数是要填充的开始位置，第二个位置是填充元素来源的开始位置
let nums5 = [1, 42, 12, 65, 123, 5, 6, 26]
nums5.copyWithin(1, 3)  // 从数组的第3个位置拿取一系列元素值，从数组的第1个元素开始进行填充
console.log(nums5)
`
    this.initEditor('editor', content)
  }
}
</script>
