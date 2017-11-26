// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// var ace = require('./libs/ace')

import '../static/css/style.scss'

Vue.mixin({
  data () {
    return {
      initEditor: function (el, content) {
        var editor = window.ace.edit(el)
        editor.setValue(content, 1)
        editor.$blockScrolling = Infinity
        editor.setTheme('ace/theme/monokai')
        editor.getSession().setMode('ace/mode/javascript')
      }
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
