<template>
  <div class="Promise">
    <h2>{{ title }}</h2>
    <div class="content">
<pre>
function checkName (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && name === 'ken') {
        resolve(name + ' is valid!')
      } else {
        reject(name + ' is invalid!')
      }
    }, 3000)
  })
}

checkName('ken').then((res) => {
  console.log(res)
  console.log('success')
}, (error) => {
  console.log(error)
  console.log('fail')
})
</pre>

<div class="divider"></div>

<pre>
function checkAge (age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age && age === 28) {
        resolve(age + ' is valid')
      } else {
        reject(age + ' is invalid')
      }
    }, 5000)
  })
}

let promise1 = checkName('ken')
let promise2 = checkAge(28)
let allPromise = Promise.all([promise1, promise2])
allPromise.then((res) => {
  console.log(res)
  console.log('all promise resolved')
}, (error) => {
  console.log(error)
  console.log('something wrong happend')
})
</pre>

<hr />

<pre>
let api = 'http://www.thatyou.cn/wp-json/wp/v2/posts'
function getPosts (api) {
  return fetch(api)
}
getPosts(api).then((res) => {
  console.log(res)
  if (res.ok && res.status === 200) {
    res.json().then((data) => {
      console.log(data)
    })
  }
}, (error) => {
  console.log(error)
})
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Promise'
    }
  },
  created () {
    function checkName (name) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (name && name === 'ken') {
            resolve(name + ' is valid!')
          } else {
            reject(name + ' is invalid!')
          }
        }, 3000)
      })
    }

    function checkAge (age) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age && age === 28) {
            resolve(age + ' is valid')
          } else {
            reject(age + ' is invalid')
          }
        }, 5000)
      })
    }

    checkName('ken').then((res) => {
      console.log(res)
      console.log('success')
    }, (error) => {
      console.log(error)
      console.log('fail')
    })

    let promise1 = checkName('ken')
    let promise2 = checkAge(28)
    let allPromise = Promise.all([promise1, promise2])
    allPromise.then((res) => {
      console.log(res)
      console.log('all promise resolved')
    }, (error) => {
      console.log(error)
      console.log('something wrong happend')
    })

    // let api = 'http://www.thatyou.cn/wp-json/wp/v2/posts'
    // function getPosts (api) {
    //   return fetch(api)
    // }
    // getPosts(api).then((res) => {
    //   console.log(res)
    //   if (res.ok && res.status === 200) {
    //     res.json().then((data) => {
    //       console.log(data)
    //     })
    //   }
    // }, (error) => {
    //   console.log(error)
    // })
  }
}
</script>

<style scoped lang="scss">
.Promise {

}
</style>
