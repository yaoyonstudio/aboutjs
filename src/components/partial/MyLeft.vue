<template>
  <div class="myLeft">
    <ul>
      <li v-for="(menu, index) in menus" :key="index" class="item">
        <h4 @click="hrefTo(menu)">{{menu.title}}</h4>
        <ul v-show="menu.showMore">
          <router-link v-for="(subMenu, i) in menu.items" :key="i" :to="subMenu.link" tag="li" class="subItem">{{subMenu.title}}</router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

// https://codeburst.io/javascript-demystified-variable-hoisting-c3c4d2e8fd40
// https://codeburst.io/javascript-demystified-02-function-hoisting-b83dcaeb265
// https://codeburst.io/js-demystified-03-scope-f841ecad5c23

export default {
  name: 'myLeft',
  data () {
    return {
      menus: [
        {
          id: 1,
          title: 'JS基础',
          name: 'basic',
          link: '/basic/index',
          showMore: true,
          items: [
            {id: 1, title: '使用域Scope', link: '/basic/scope'},
            {id: 1, title: 'Function', link: '/basic/function'},
            {id: 2, title: 'Prototypes', link: '/basic/prototypes'},
            {id: 2, title: 'Closure', link: '/basic/closure'},
            {id: 3, title: 'Reduce', link: '/basic/reduce'},
            {id: 3, title: 'Promise', link: '/basic/promise'},
            {id: 3, title: 'Recursion', link: '/basic/recursion'},
            {id: 3, title: 'ArrayMethods', link: '/basic/array_methods'}
          ]
        },
        {
          id: 2,
          title: 'ES6/ES7',
          link: '/new/index',
          showMore: true,
          items: [
            {id: 1, title: 'Parameters & Arguments', link: '/new/argument'},
            {id: 1, title: 'Array.keys/values/entries', link: '/new/array_keys_values'},
            {id: 1, title: 'Generators', link: '/new/generators'},
            {id: 1, title: 'Proxy', link: '/new/proxy'},
            {id: 1, title: 'Async/Await', link: '/new/async_await'}
          ]
        },
        {
          id: 3,
          title: 'Design Patterns',
          link: '/pattern/index',
          showMore: true,
          items: []
        }
      ]
    }
  },
  methods: {
    hrefTo (menu) {
      if (this.$route.path === menu.link) {
        menu.showMore = !menu.showMore
      } else {
        menu.showMore = true
      }
      this.$router.push({path: menu.link})
    }
  }
}
</script>

<style scoped lang="scss">
.myLeft {
  position: relative;
  .item {
    display: block;
    margin-bottom: .5rem;
    h4 {
      cursor: pointer;
      font-weight: 600;
    }
    .subItem {
      display: block;
      padding-left: 2rem;
      height: 3rem;
      line-height: 3rem;
      cursor: pointer;
    }
  }
}
</style>
