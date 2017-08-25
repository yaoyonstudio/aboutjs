<template>
  <div class="Reduce">
    <h2>{{ title }}</h2>
    <div class="content">
<pre>
let nums = [1, 2, 3, 4, 5, 6, 7]
let count = nums.reduce((sum, value) => sum + value, 0)
console.log(count)
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Reduce'
    }
  },
  created () {
    let nums = [1, 2, 3, 4, 5, 6, 7]
    let count = nums.reduce((sum, value) => sum + value, 0)
    console.log(count)
  }
}
</script>

<style scoped lang="scss">
.Reduce {

}
</style>
