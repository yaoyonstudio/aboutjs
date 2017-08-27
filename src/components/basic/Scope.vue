<template>
  <div class="Scope">
    <h2>{{ title }}</h2>
    <div class="content">
<pre>

</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Scope'
    }
  },
  created () {
    var foo = 'foo'
    var wow = 'wow'

    function bar (wow) {
      var pow = 'pow'
      console.log(foo) // 'foo'
      console.log('inner pow:', pow) // 'pow'
      console.log('inner wow:', wow) // 'zoom'
    }

    bar('zoom')
    console.log('outer foo:', foo)
    console.log('outer wow:', wow)
    // console.log('outer pow:', pow) // ReferenceError: pow is not defined
  }
}
</script>
