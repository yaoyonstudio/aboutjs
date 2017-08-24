<template>
  <div class="argument">
    <h2>{{ title }}</h2>
    <div class="content">
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
      var index = 0
      while (true) {
        yield index++
      }
    }

    var gen = idMaker()

    console.log(gen.next().value) // 0
    console.log(gen.next().value) // 1
    console.log(gen.next().value) // 2
  }
}
</script>

<style scoped lang="scss">
.argument {

}
</style>
