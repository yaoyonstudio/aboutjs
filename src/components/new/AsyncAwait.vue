<template>
  <div class="AsyncAwait">
    <h2>{{ title }}</h2>
    <div class="content">
    <button id="getBtn">Get Data</button>
    <button id="clearBtn">Clear Data</button>
    <ul>
      <li v-if="loading">正在加载中...</li>
      <li v-for="(post, index) in data" :key="index">{{post.title.rendered}}</li>
    </ul>
<pre>
let that = this
let url = 'http://www.thatyou.cn/wp-json/wp/v2/posts'

async function getData (apiUrl, failCallback) {
  const defaultFailCallback = function (err) {
    return {
      data: [],
      error: err,
      status: false
    }
  }
  if (!failCallback || typeof failCallback !== 'function') {
    failCallback = defaultFailCallback
  }

  try {
    const res = await fetch(apiUrl)
    if (res.ok && res.status === 200) {
      const json = await res.json()
      return {
        data: json,
        status: true
      }
    } else {
      failCallback(res.statusText)
    }
  } catch (err) {
    failCallback(err)
  }
}

function failCallback (error) {
  console.log('出错了...', error)
  return {
    data: [],
    error: error,
    status: false
  }
}

document.querySelector('#getBtn').addEventListener('click', (event) => {
  that.loading = true
  getData(url, failCallback).then((res) => {
    if (res && res.status && res.data) {
      that.data = res.data
    }
    that.loading = false
  })
})
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Async/Await',
      loading: false,
      data: []
    }
  },
  mounted () {
    let that = this
    let url = 'http://www.thatyou.cn/wp-json/wp/v2/posts'

    async function getData (apiUrl, failCallback) {
      // 默认请求失败回调函数
      const defaultFailCallback = function (err) {
        return {
          data: [],
          error: err,
          status: false
        }
      }
      if (!failCallback || typeof failCallback !== 'function') {
        failCallback = defaultFailCallback
      }

      try {
        const res = await fetch(apiUrl)
        if (res.ok && res.status === 200) {
          const json = await res.json()
          return {
            data: json,
            status: true
          }
        } else {
          failCallback(res.statusText)
        }
      } catch (err) {
        failCallback(err)
      }
    }

    function failCallback (error) {
      console.log('出错了...', error)
      return {
        data: [],
        error: error,
        status: false
      }
    }

    document.querySelector('#getBtn').addEventListener('click', (event) => {
      that.loading = true
      getData(url, failCallback).then((res) => {
        if (res && res.status && res.data) {
          that.data = res.data
        }
        that.loading = false
      })
    })

    document.querySelector('#clearBtn').addEventListener('click', (event) => {
      that.data = []
    })
  }
}
</script>

<style scoped lang='scss'>
.AsyncAwait {
  .content {
    padding: 1rem 0;
  }
  button {
    border: none;
    background-color: #0a8acd;
    color: #fff;
    padding: .8rem 1rem;
    border-radius: 4px;
  }
  ul {
    li {
      line-height: 2.4rem;
    }
  }
}
</style>
