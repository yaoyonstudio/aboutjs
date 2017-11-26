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
    let content1 = `function* idMaker () {
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

