<template>
  <div class="StringExtension">
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
      title: 'StringExtension'
    }
  },
  created () {
    // codePointAt()方法：
    console.log('a'.charCodeAt())
    console.log('a'.charCodeAt(0))
    console.log('cd'.charCodeAt())
    console.log('cd'.charCodeAt(0))
    console.log('cd'.charCodeAt(1))
    console.log('cd'.charCodeAt(2))   // NaN

    // String.fromCodePoint()方法：
    console.log(String.fromCodePoint(105))
    console.log(String.fromCodePoint(1053342))

    console.log('-----------------')

    // includes()/startsWith()/endsWith()方法
    console.log('Hello'.includes('el'))
    console.log('Hello'.startsWith('H'))
    console.log('Hello'.endsWith('o'))
    console.log('Hello'.includes('e', 3))
    console.log('Hello Javascript'.startsWith('J', 6))
    console.log('Hello Javascript'.startsWith('o', 4))

    console.log('-----------------')

    // repeat()方法：
    console.log('o'.repeat(5))
    console.log('abc'.repeat(3))
  },
  mounted () {
    let content = `
// codePointAt()方法：
console.log('a'.charCodeAt())
console.log('a'.charCodeAt(0))
console.log('cd'.charCodeAt())
console.log('cd'.charCodeAt(0))
console.log('cd'.charCodeAt(1))
console.log('cd'.charCodeAt(2))   // NaN

// String.fromCodePoint()方法：
console.log(String.fromCodePoint(105))
console.log(String.fromCodePoint(1053342))

console.log('-----------------')

// includes()/startsWith()/endsWith()方法
console.log('Hello'.includes('el'))
console.log('Hello'.startsWith('H'))
console.log('Hello'.endsWith('o'))
console.log('Hello'.includes('e', 3))
console.log('Hello Javascript'.startsWith('J', 6))
console.log('Hello Javascript'.startsWith('o', 4))

console.log('-----------------')

// repeat()方法：
console.log('o'.repeat(5))
console.log('abc'.repeat(3))
`
    this.initEditor('editor', content)
  }
}
</script>
