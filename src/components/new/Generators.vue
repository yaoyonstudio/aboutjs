<template>
  <div class="argument">
    <h2>{{ title }}</h2>
    <div class="content">
      <code id="editor1"></code>
      <hr />
      <h3>参考：<a href="https://codeburst.io/generators-in-javascript-1a7f9f884439" target="blank">《Generators in JavaScript》</a></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Generators',
  data () {
    return {
      title: 'Generators'
    }
  },
  created () {
    /* eslint-disable no-unreachable */
    function* _testFun1 () {
      yield 1
      yield 2
      yield 3
    }
    function* _testFun2 () {
      yield 1
      yield 2
      yield 3
      return
    }
    function* _testFun3 () {
      yield 1
      yield 2
      yield 3
      return 10
    }
    function* _testFun4 () {
      yield 1
      yield 2
      return
      yield 3
    }

    let testFun1 = _testFun1()
    let testFun2 = _testFun2()
    let testFun3 = _testFun3()
    let testFun4 = _testFun4()

    console.log(testFun1.next().value)
    console.log(testFun1.next().value)
    console.log(testFun1.next().value)
    console.log(testFun1.next().value)

    console.log('--')

    console.log(testFun2.next().value)
    console.log(testFun2.next().value)
    console.log(testFun2.next().value)
    console.log(testFun2.next().value)

    console.log('--')

    console.log(testFun3.next().value)
    console.log(testFun3.next().value)
    console.log(testFun3.next().value)
    console.log(testFun3.next().value)

    console.log('--')

    console.log(testFun4.next().value)
    console.log(testFun4.next().value)
    console.log(testFun4.next().value)
    console.log(testFun4.next().value)

    console.log('-------------------------')

    function* idMaker () {
      let index = 0
      while (true) {
        yield index++
      }
    }

    let gen = idMaker()

    console.log(gen.next().value) // 0
    console.log(gen.next().value) // 1
    console.log(gen.next().value) // 2

    console.log('-------------------------')
  },
  mounted () {
    let content1 = `
function* _testFun1 () {
  yield 1
  yield 2
  yield 3
}
function* _testFun2 () {
  yield 1
  yield 2
  yield 3
  return
}
function* _testFun3 () {
  yield 1
  yield 2
  yield 3
  return 10
}
function* _testFun4 () {
  yield 1
  yield 2
  return
  yield 3
}

let testFun1 = _testFun1()
let testFun2 = _testFun2()
let testFun3 = _testFun3()
let testFun4 = _testFun4()

console.log(testFun1.next().value)
console.log(testFun1.next().value)
console.log(testFun1.next().value)
console.log(testFun1.next().value)

console.log('--')

console.log(testFun2.next().value)
console.log(testFun2.next().value)
console.log(testFun2.next().value)
console.log(testFun2.next().value)

console.log('--')

console.log(testFun3.next().value)
console.log(testFun3.next().value)
console.log(testFun3.next().value)
console.log(testFun3.next().value)

console.log('--')

console.log(testFun4.next().value)
console.log(testFun4.next().value)
console.log(testFun4.next().value)
console.log(testFun4.next().value)

console.log('-------------------------')

function* idMaker () {
  let index = 0
  while (true) {
    yield index++
  }
}

let gen = idMaker()

console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
`
    this.initEditor('editor1', content1)
  }
}
</script>

