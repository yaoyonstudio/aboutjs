<template>
  <div class="Tem">
    <h2>{{ title }}</h2>
    <div class="content">
      <pre>
// 模板字符串
let name = 'ken'
let intro = `Hello,
My name is ${name},
I'm ${18 + 1 + ' years old'} ! haha...
Thank you!
      </pre>

      <div v-html="html_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Template String',
      html_content: ''
    }
  },
  created () {
    // 模板字符串
    let name = 'ken'
    let intro = `Hello,
    My name is ${name},
    I'm ${18 + 1 + ' years old'} ! haha...
    Thank you!
    `
    console.log(intro)
  },
  mounted () {
  }
}
</script>
