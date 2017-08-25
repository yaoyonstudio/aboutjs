<template>
  <div class="Proxy">
    <h2>{{ title }}</h2>
    <div class="content">
<p>Proxy对象一般用于为基本操作定义自定义行为。Proxy的使用一般有三个关键点：一是处理对象(handler)；二是处理方法；三是代理目标。</p>
<pre>
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : '不存在' + name
  }
}

let myObj = {
  name: 'ken',
  age: 28
}

let myProxy = new Proxy(myObj, handler)
console.log(myProxy)
console.log(myProxy.name)
console.log(myProxy.age)
console.log(myProxy.sex)
</pre>

<hr />

<h3>使用Proxy来进行表单验证</h3>
<pre>
let validator = {
  get: function (target, prop) {
    target['valid'] = false
    if (!target['name'] || !target['password'] || !target['telephone']) target['valid'] = false
    if (target['name'].length > 6 && target['password'].length >= 6 && checkMobile(target['telephone'])) {
      target['valid'] = true
    } else {
      target['valid'] = false
    }
    return target['valid']
  }
}

let userData = {
  name: 'kennndn',
  password: '123456',
  telephone: '13925542760'
}

let userProxy = new Proxy(userData, validator)
console.log(userProxy)
console.log(userProxy.valid)
if (userProxy.valid) {
  console.log('用户提交信息有效')
} else {
  console.log('用户提交信息无效')
}
</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Proxy'
    }
  },
  created () {
    let handler = {
      get: function (target, name) {
        return name in target ? target[name] : '不存在' + name
      }
    }

    let myObj = {
      name: 'ken',
      age: 28
    }

    let myProxy = new Proxy(myObj, handler)
    console.log(myProxy)
    console.log(myProxy.name)
    console.log(myProxy.age)
    console.log(myProxy.sex)

    console.log('----------------------')

    function checkMobile (telephone) {
      if (!(/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(telephone))) {
        return false
      } else {
        return true
      }
    }

    // 使用Proxy来进行表单验证
    let validator = {
      get: function (target, prop) {
        target['valid'] = false
        if (!target['name'] || !target['password'] || !target['telephone']) target['valid'] = false
        if (target['name'].length > 6 && target['password'].length >= 6 && checkMobile(target['telephone'])) {
          target['valid'] = true
        } else {
          target['valid'] = false
        }
        return target['valid']
      }
    }

    let userData = {
      name: 'kennndn',
      password: '123456',
      telephone: '13925542760'
    }

    let userProxy = new Proxy(userData, validator)
    console.log(userProxy)
    console.log(userProxy.valid)
    if (userProxy.valid) {
      console.log('用户提交信息有效')
    } else {
      console.log('用户提交信息无效')
    }
  }
}
</script>
