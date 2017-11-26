<template>
  <div class="Reduce">
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
      title: 'Reduce'
    }
  },
  created () {
    let nums = [1, 2, 3, 4, 5, 6, 7]
    let count = nums.reduce((sum, value) => sum + value, 0)
    console.log(count)

    console.log('--------------')

    let team = [
      {name: 'ken', age: 18},
      {name: 'yaoyon', age: 19},
      {name: 'kenny', age: 20}
    ]
    let teamFormat = team.reduce((newTeam, member) => {
      newTeam[member.name] = member.age
      return newTeam
    }, {})
    console.log(teamFormat)
  },
  mounted () {
    let content = `let nums = [1, 2, 3, 4, 5, 6, 7]
let count = nums.reduce((sum, value) => sum + value, 0)
console.log(count)

console.log('--------------')

let team = [
  {name: 'ken', age: 18},
  {name: 'yaoyon', age: 19},
  {name: 'kenny', age: 20}
]
let teamFormat = team.reduce((newTeam, member) => {
  newTeam[member.name] = member.age
  return newTeam
}, {})
console.log(teamFormat)

`
    this.initEditor('editor', content)
  }
}
</script>

<style scoped lang="scss">
.Reduce {

}
</style>
