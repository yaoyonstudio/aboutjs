<template>
  <div class="Array">
    <h2>{{ title }}</h2>
    <div class="content">
      <h3>创建数组</h3>
<pre>
let arr1 = []
let arr2 = [1, 2, 3, 4, 5, 6, 7]
let arr3 = new Array()
let arr4 = new Array(1, 2, 3, 4, 5, 6, 7)
let arr5 = new Array(7)
console.log('Array.isArray(arr1):', Array.isArray(arr1))
</pre>

      <hr />
      <h3>读写数组</h3>
<pre>
arr1[0] = 1
arr1[1] = 2
arr1[2] = 3
console.log('arr1[0]:', arr1[0])
console.log('arr1[1]:', arr1[1])
console.log('arr1[2]:', arr1[2])
let sum = 0
for (let i = 0, l = arr1.length; i < l; i++) {
  sum += arr1[i]
}
console.log('sum:', sum)
</pre>

      <hr />
      <h3>字符串转换（生成）数组</h3>
<pre>
let str1 = 'how are you'
let str2 = 'angular,react,vue'
let arr6 = str1.split(' ')
let arr7 = str2.split(',')
console.log('arr6:', arr6)
console.log('arr7:', arr7)
let str3 = arr6.join()
let str4 = arr6.join('-')
let str5 = arr7.toString()
console.log('str3:', str3)
console.log('str4:', str4)
console.log('str5:', str5)
</pre>

      <hr />
      <h3>数组复制（浅复制/深复制）</h3>
<pre>
let originArr = [1, 2, 3, 4, 5, 6, 7]
// 浅复制，复制的只是原数组的一个引用。当源数组或复制数组任意一个发生变化时，另一个数组也相应变化。
let copyArr = originArr
console.log('originArr:', originArr)
console.log('copyArr:', copyArr)
originArr[1] = 100
copyArr[2] = 200
console.log('originArr:', originArr)
console.log('copyArr:', copyArr)

//深复制，是将原数组中的每一个元素都复制一份到新数组，这样， 不管源数组或复制后的数组，任意一个变化都不会影响另一个。
function deepCopy (originArr, copyArr) {
  for (let i = 0, l = originArr.length; i < l; i++) {
    copyArr[i] = originArr[i]
  }
}
let originArr2 = [1, 2, 3, 4, 5, 6, 7]
let copyArr2 = []
deepCopy(originArr2, copyArr2)
console.log('deep copy originArr:', originArr2)
console.log('deep copy copyArr:', copyArr2)
originArr2[1] = 100
copyArr2[2] = 200
console.log('deep copy originArr:', originArr2)
console.log('deep copy copyArr:', copyArr2)
</pre>

      <hr />
      <h3>数组合并/截取</h3>
<pre>
// 数组合并(concat)与截取(splice)
let arr10 = [1, 2, 3, 4, 5, 6, 7]
let arr11 = ['a', 'b', 'c']
let arr12 = arr10.concat(arr11)
console.log('arr12:', arr12)

// 数组截取(splice)
// splice() 方法从现有数组里截取一个新数组。该方法的第一个参数是截取的起始索引，第二个参数是截取的长度。
let arr13 = arr12.splice(5, 4)
let arr14 = arr12.splice(-1, 4)
let arr15 = arr12.splice(1, -4)
console.log('arr13:', arr13)
console.log('arr14:', arr14)
console.log('arr15:', arr15)
</pre>

      <hr />
      <h3>数组元素添加/删除</h3>
<pre>
// 有两个方法可以为数组添加元素： push() 和 unshift() 。 push() 方法会将一个元素添加到数组末尾； unshift() 方法可以将元素添加在数组的开头。
let arr16 = [1, 2, 3, 4, 5, 6, 7]
console.log('arr16:', arr16)
arr16[arr16.length] = 'a1'
arr16.push('a2')
arr16.push('a3', 'a4')
console.log('arr16:', arr16)
arr16.unshift('b1')
arr16.unshift('b2', 'b3')
console.log('arr16:', arr16)

// 删除数组元素
// 使用 pop() 方法可以删除数组末尾的元素; shift() 方法可以删除数组的第一个元素.
let arr17 = [1, 2, 3, 4, 5, 6, 7]
console.log('arr17:', arr17)
arr17.pop()
console.log('arr17:', arr17)
arr17.shift()
console.log('arr17:', arr17)

// 从数组中间位置添加和删除元素( splice())
// 使用 splice() 方法为数组添加元素，需提供如下参数：
  // 1: 起始索引（也就是你希望开始添加元素的地方）
  // 2: 需要删除的元素个数（添加元素时该参数设为 0）
  // 3: 想要添加进数组的元素
let arr18 = [1, 2, 3, 4, 5, 6, 7]
console.log('arr18:', arr18)

// 添加
arr18.splice(2, 0, 'a1')
console.log('arr18:', arr18)
arr18.splice(4, 0, 'a2', 'a3')
console.log('arr18:', arr18)

// 删除
arr18.splice(3, 4)
console.log('arr18:', arr18)
</pre>

      <hr />
      <h3>数组排序</h3>
<pre>
let arr19 = [3, 56, 123, 45, 4, 7, 41, 343, 6958]
let arr20 = ['ken', 'yaoyon', 'mike', 'yaoyonstudio']
console.log('arr19:', arr19)
arr19.sort()
arr20.sort()
console.log('arr19:', arr19)
console.log('arr20:', arr20)
arr19.reverse()
arr20.reverse()
console.log('arr19:', arr19)
console.log('arr20:', arr20)
arr19.sort((num1, num2) => {
  return num1 - num2
})
console.log('arr19:', arr19)
</pre>

      <hr />
      <h3>数组的迭代器方法</h3>
      <a href="/basic/array_methods">数组的迭代器方法(ArrayMethods)</a>

      <hr />
      <h3>二维和多维数组</h3>
<pre>
let arr21 = [[1, 2, 3], ['a', 'b', 'c']]
console.log(arr21)
console.log(arr21[0])
console.log(arr21[0][1])
console.log(arr21[1][2])

for (let i = 0, l = arr21.length; i < l; i++) {
  for (let j = 0, k = arr21[i].length; j < k; j++) {
    console.log('arr21[i][j]:', arr21[i][j])
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
      title: 'Array 数组'
    }
  },
  created () {
    // 一、创建数组
    let arr1 = []
    let arr2 = [1, 2, 3, 4, 5, 6, 7]
    // let arr3 = new Array()
    // let arr4 = new Array(1, 2, 3, 4, 5, 6, 7)
    // let arr5 = new Array(7)
    console.log('arr1:', arr1)
    console.log('arr1 length:', arr1.length)
    console.log('arr2:', arr2)
    console.log('arr2 length:', arr2.length)
    // console.log('arr3:', arr3)
    // console.log('arr3 length:', arr3.length)
    // console.log('arr4:', arr4)
    // console.log('arr4 length:', arr4.length)
    // console.log('arr5:', arr5)
    // console.log('arr5 length:', arr5.length)
    // console.log('Array.isArray(arr1):', Array.isArray(arr1))

    console.log('---------------------')

    arr1[0] = 1
    arr1[1] = 2
    arr1[2] = 3
    console.log('arr1[0]:', arr1[0])
    console.log('arr1[1]:', arr1[1])
    console.log('arr1[2]:', arr1[2])
    let sum = 0
    for (let i = 0, l = arr1.length; i < l; i++) {
      sum += arr1[i]
    }
    console.log('sum:', sum)

    console.log('---------------------')

    let str1 = 'how are you'
    let str2 = 'angular,react,vue'
    let arr6 = str1.split(' ')
    let arr7 = str2.split(',')
    console.log('arr6:', arr6)
    console.log('arr7:', arr7)
    let str3 = arr6.join()
    let str4 = arr6.join('-')
    let str5 = arr7.toString()
    console.log('str3:', str3)
    console.log('str4:', str4)
    console.log('str5:', str5)

    console.log('---------------------')

    let originArr = [1, 2, 3, 4, 5, 6, 7]
    // 浅复制，复制的只是原数组的一个引用。当源数组或复制数组任意一个发生变化时，另一个数组也相应变化。
    let copyArr = originArr
    console.log('originArr:', originArr)
    console.log('copyArr:', copyArr)
    originArr[1] = 100
    copyArr[2] = 200
    console.log('originArr:', originArr)
    console.log('copyArr:', copyArr)

    // 深复制，是将原数组中的每一个元素都复制一份到新数组，这样， 不管源数组或复制后的数组，任意一个变化都不会影响另一个。
    function deepCopy (originArr, copyArr) {
      for (let i = 0, l = originArr.length; i < l; i++) {
        copyArr[i] = originArr[i]
      }
    }
    let originArr2 = [1, 2, 3, 4, 5, 6, 7]
    let copyArr2 = []
    deepCopy(originArr2, copyArr2)
    console.log('deep copy originArr:', originArr2)
    console.log('deep copy copyArr:', copyArr2)
    originArr2[1] = 100
    copyArr2[2] = 200
    console.log('deep copy originArr:', originArr2)
    console.log('deep copy copyArr:', copyArr2)

    console.log('---------------------')

    // 查找元素
    // indexOf, lastIndexOf
    let array1 = [1, 2, 3, 2, 4, 2, 7, 1, 3, 7, 2, 43, 12]
    console.log('array1:', array1)
    console.log('2在array1数组中的第一个位置是：', array1.indexOf(2))
    console.log('2在array1数组中的最后一个位置是：', array1.lastIndexOf(2))

    console.log('---------------------')

    // 数组合并(concat)与截取(splice)
    let arr10 = [1, 2, 3, 4, 5, 6, 7]
    let arr11 = ['a', 'b', 'c']
    let arr12 = arr10.concat(arr11)
    console.log('arr12:', arr12)

    // 数组截取(splice)
    // splice() 方法从现有数组里截取一个新数组。该方法的第一个参数是截取的起始索引，第二个参数是截取的长度。
    let arr13 = arr12.splice(5, 4)
    let arr14 = arr12.splice(-1, 4)
    let arr15 = arr12.splice(1, -4)
    console.log('arr13:', arr13)
    console.log('arr14:', arr14)
    console.log('arr15:', arr15)

    console.log('---------------------')

    // 添加数组元素
    // 有两个方法可以为数组添加元素： push() 和 unshift() 。 push() 方法会将一个元素添加到数组末尾； unshift() 方法可以将元素添加在数组的开头。
    let arr16 = [1, 2, 3, 4, 5, 6, 7]
    console.log('arr16:', arr16)
    arr16[arr16.length] = 'a1'
    arr16.push('a2')
    arr16.push('a3', 'a4')
    console.log('arr16:', arr16)
    arr16.unshift('b1')
    arr16.unshift('b2', 'b3')
    console.log('arr16:', arr16)

    // 删除数组元素
    // 使用 pop() 方法可以删除数组末尾的元素; shift() 方法可以删除数组的第一个元素.
    let arr17 = [1, 2, 3, 4, 5, 6, 7]
    console.log('arr17:', arr17)
    arr17.pop()
    console.log('arr17:', arr17)
    arr17.shift()
    console.log('arr17:', arr17)

    // 从数组中间位置添加和删除元素( splice())
    // 使用 splice() 方法为数组添加元素，需提供如下参数：
      // 1: 起始索引（也就是你希望开始添加元素的地方）
      // 2: 需要删除的元素个数（添加元素时该参数设为 0）
      // 3: 想要添加进数组的元素
    let arr18 = [1, 2, 3, 4, 5, 6, 7]
    console.log('arr18:', arr18)

    // 添加
    arr18.splice(2, 0, 'a1')
    console.log('arr18:', arr18)
    arr18.splice(4, 0, 'a2', 'a3')
    console.log('arr18:', arr18)

    // 删除
    arr18.splice(3, 4)
    console.log('arr18:', arr18)

    console.log('---------------------')

    // 添加排序
    let arr19 = [3, 56, 123, 45, 4, 7, 41, 343, 6958]
    let arr20 = ['ken', 'yaoyon', 'mike', 'yaoyonstudio']
    console.log('arr19:', arr19)
    arr19.sort()
    arr20.sort()
    console.log('arr19:', arr19)
    console.log('arr20:', arr20)
    arr19.reverse()
    arr20.reverse()
    console.log('arr19:', arr19)
    console.log('arr20:', arr20)
    arr19.sort((num1, num2) => {
      return num1 - num2
    })
    console.log('arr19:', arr19)

    console.log('---------------------')

    let arr21 = [[1, 2, 3], ['a', 'b', 'c']]
    console.log(arr21)
    console.log(arr21[0])
    console.log(arr21[0][1])
    console.log(arr21[1][2])

    for (let i = 0, l = arr21.length; i < l; i++) {
      for (let j = 0, k = arr21[i].length; j < k; j++) {
        console.log('arr21[i][j]:', arr21[i][j])
      }
    }
  }
}
</script>
