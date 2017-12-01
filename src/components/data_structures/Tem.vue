<template>
  <div class="main">
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
      title: 'Tem'
    }
  },
  created () {
  },
  mounted () {
    let content = ``
    this.initEditor('editor', content)
  }
}
</script>
