<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="content">
      <p>高阶函数是指至少满足以下一个条件的函数：</p>
      <p>（1）接受一个函数作为其参数</p>
      <p>（2）函数返回的是一个函数</p>
      <p>如：filter/map/reduce</p>
      <code id="editor"></code>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'High Order Function'
    }
  },
  created () {
    const memberArray = [
      {'id': 1, 'name': 'ken1', 'sex': 'man', 'age': 21, 'email': 'ken1@gmail.com', 'salary': 9999.99},
      {'id': 2, 'name': 'ken2', 'sex': 'female', 'age': 22, 'email': 'ken2@gmail.com', 'salary': 8888.88},
      {'id': 3, 'name': 'ken3', 'sex': 'female', 'age': 23, 'email': 'ken3@gmail.com', 'salary': 7777.777},
      {'id': 4, 'name': 'ken4', 'sex': 'man', 'age': 24, 'email': 'ken4@gmail.com', 'salary': 10999.9},
      {'id': 5, 'name': 'ken5', 'sex': 'man', 'age': 25, 'email': 'ken5@gmail.com', 'salary': 11999.8},
      {'id': 6, 'name': 'ken6', 'sex': 'female', 'age': 26, 'email': 'ken6@gmail.com', 'salary': 12999.7},
      {'id': 7, 'name': 'ken7', 'sex': 'man', 'age': 27, 'email': 'ken7@gmail.com', 'salary': 13999.00},
      {'id': 8, 'name': 'ken8', 'sex': 'female', 'age': 28, 'email': 'ken8@gmail.com', 'salary': 15999.98},
      {'id': 9, 'name': 'ken9', 'sex': 'man', 'age': 29, 'email': 'ken9@gmail.com', 'salary': 19999.99}
    ]

    // 筛选出年龄(age)大于27，工资(salary)大于等于10000的会员，并且在这些会员属性中加入一个talent属性，取值为'great'

    // 1：传统模式
    let memberArray1 = []
    for (let i = 0, l = memberArray.length; i < l; i++) {
      if (memberArray[i].salary >= 10000 && memberArray[i].age > 27) {
        memberArray[i].talent = 'great'
        memberArray1.push(memberArray[i])
      }
    }

    // 2：js map
    let memberArray2 = []
    memberArray.map(function (member) {
      if (member.salary >= 10000 && member.age > 27) {
        member.talent = 'great'
        memberArray2.push(member)
      }
    })

    // 3：js map es6
    let memberArray3 = []
    memberArray.map(m => {
      if (m.salary >= 10000 && m.age > 27) {
        m.talent = 'great'
        memberArray3.push(m)
      }
    })

    console.log(memberArray1)
    console.log(memberArray2)
    console.log(memberArray3)

    console.log('--------------------')

    // 筛选出年龄(age)大于27，工资(salary)大于等于10000的会员

    // 1：传统模式
    let memberArray4 = []
    for (let i = 0, l = memberArray.length; i < l; i++) {
      if (memberArray[i].salary >= 10000 && memberArray[i].age > 27) {
        memberArray4.push(memberArray[i])
      }
    }

    // 2：js filter
    let memberArray5 = []
    memberArray5 = memberArray.filter(function (member) {
      return member.salary >= 10000 && member.age > 27
    })

    // 3：js filter es6
    let memberArray6 = []
    memberArray6 = memberArray.filter(member => member.salary >= 10000 && member.age > 27)

    console.log(memberArray4)
    console.log(memberArray5)
    console.log(memberArray6)

    console.log('--------------------')

    // 计算出年龄(age)大于27，工资(salary)大于等于10000的会员总工资
    let allSalary1 = 0
    let allSalary2 = 0
    let allSalary3 = 0

    // 1：传统模式
    for (let i = 0, l = memberArray.length; i < l; i++) {
      if (memberArray[i].salary >= 10000 && memberArray[i].age > 27) {
        allSalary1 += memberArray[i].salary
      }
    }

    // 2：js reduce
    memberArray.reduce(function (start, member) {
      if (member.salary >= 10000 && member.age > 27) {
        allSalary2 += member.salary
      }
    }, 0)

    // 3：js reduce es6
    memberArray.reduce((start, member) => {
      if (member.salary >= 10000 && member.age > 27) {
        allSalary3 += member.salary
      }
    })

    console.log(allSalary1)
    console.log(allSalary2)
    console.log(allSalary3)

    console.log('--------------------')

    // 计算所有会员的平均工资
    let average1 = 0
    let average2 = 0

    // 传统方式
    let totalSalary = 0
    for (let i = 0, l = memberArray.length; i < l; i++) {
      totalSalary += memberArray[i].salary
    }
    average1 = totalSalary / memberArray.length

    // map + reduce
    average2 = memberArray.map(m => m.salary).reduce((total, salary) => total + salary, 0) / memberArray.length

    console.log('average1', average1)
    console.log('average2', average2)

    console.log('--------------------')

    // 计算所有男性会员的平均工资

    let average3 = 0
    let average4 = 0
    let average5 = 0

    // 传统方式
    let totalMenSalary = 0
    let menCount = 0
    for (let i = 0, l = memberArray.length; i < l; i++) {
      if (memberArray[i].sex === 'man') {
        totalMenSalary += memberArray[i].salary
        menCount += 1
      }
    }
    average3 = totalMenSalary / menCount

    // filter + map + reduce
    average4 = memberArray.filter(member => member.sex === 'man').map(m => m.salary).reduce((total, salary) => total + salary, 0) / memberArray.filter(member => member.sex === 'man').length

    var filterArray = memberArray.filter(member => member.sex === 'man')
    average5 = filterArray.map(m => m.salary).reduce((total, salary) => total + salary, 0) / filterArray.length

    console.log('average3', average3)
    console.log('average4', average4)
    console.log('average5', average5)
  },
  mounted () {
    let content = `
const memberArray = [
  {'id': 1, 'name': 'ken1', 'sex': 'man', 'age': 21, 'email': 'ken1@gmail.com', 'salary': 9999.99},
  {'id': 2, 'name': 'ken2', 'sex': 'female', 'age': 22, 'email': 'ken2@gmail.com', 'salary': 8888.88},
  {'id': 3, 'name': 'ken3', 'sex': 'female', 'age': 23, 'email': 'ken3@gmail.com', 'salary': 7777.777},
  {'id': 4, 'name': 'ken4', 'sex': 'man', 'age': 24, 'email': 'ken4@gmail.com', 'salary': 10999.9},
  {'id': 5, 'name': 'ken5', 'sex': 'man', 'age': 25, 'email': 'ken5@gmail.com', 'salary': 11999.8},
  {'id': 6, 'name': 'ken6', 'sex': 'female', 'age': 26, 'email': 'ken6@gmail.com', 'salary': 12999.7},
  {'id': 7, 'name': 'ken7', 'sex': 'man', 'age': 27, 'email': 'ken7@gmail.com', 'salary': 13999.00},
  {'id': 8, 'name': 'ken8', 'sex': 'female', 'age': 28, 'email': 'ken8@gmail.com', 'salary': 15999.98},
  {'id': 9, 'name': 'ken9', 'sex': 'man', 'age': 29, 'email': 'ken9@gmail.com', 'salary': 19999.99}
]

// 筛选出年龄(age)大于27，工资(salary)大于等于10000的会员，并且在这些会员属性中加入一个talent属性，取值为'great'

// 1：传统模式
let memberArray1 = []
for (let i = 0, l = memberArray.length; i < l; i++) {
  if (memberArray[i].salary >= 10000 && memberArray[i].age > 27) {
    memberArray[i].talent = 'great'
    memberArray1.push(memberArray[i])
  }
}

// 2：js map
let memberArray2 = []
memberArray.map(function (member) {
  if (member.salary >= 10000 && member.age > 27) {
    member.talent = 'great'
    memberArray2.push(member)
  }
})

// 3：js map es6
let memberArray3 = []
memberArray.map(m => {
  if (m.salary >= 10000 && m.age > 27) {
    m.talent = 'great'
    memberArray3.push(m)
  }
})

console.log(memberArray1)
console.log(memberArray2)
console.log(memberArray3)

console.log('--------------------')

// 筛选出年龄(age)大于27，工资(salary)大于等于10000的会员

// 1：传统模式
let memberArray4 = []
for (let i = 0, l = memberArray.length; i < l; i++) {
  if (memberArray[i].salary >= 10000 && memberArray[i].age > 27) {
    memberArray4.push(memberArray[i])
  }
}

// 2：js filter
let memberArray5 = []
memberArray5 = memberArray.filter(function (member) {
  return member.salary >= 10000 && member.age > 27
})

// 3：js filter es6
let memberArray6 = []
memberArray6 = memberArray.filter(member => member.salary >= 10000 && member.age > 27)

console.log(memberArray4)
console.log(memberArray5)
console.log(memberArray6)

console.log('--------------------')

// 计算出年龄(age)大于27，工资(salary)大于等于10000的会员总工资
let allSalary1 = 0
let allSalary2 = 0
let allSalary3 = 0

// 1：传统模式
for (let i = 0, l = memberArray.length; i < l; i++) {
  if (memberArray[i].salary >= 10000 && memberArray[i].age > 27) {
    allSalary1 += memberArray[i].salary
  }
}

// 2：js reduce
memberArray.reduce(function (start, member) {
  if (member.salary >= 10000 && member.age > 27) {
    allSalary2 += member.salary
  }
}, 0)

// 3：js reduce es6
memberArray.reduce((start, member) => {
  if (member.salary >= 10000 && member.age > 27) {
    allSalary3 += member.salary
  }
})

console.log(allSalary1)
console.log(allSalary2)
console.log(allSalary3)

console.log('--------------------')

// 计算所有会员的平均工资
let average1 = 0
let average2 = 0

// 传统方式
let totalSalary = 0
for (let i = 0, l = memberArray.length; i < l; i++) {
  totalSalary += memberArray[i].salary
}
average1 = totalSalary / memberArray.length

// map + reduce
average2 = memberArray.map(m => m.salary).reduce((total, salary) => total + salary, 0) / memberArray.length

console.log('average1', average1)
console.log('average2', average2)

console.log('--------------------')

// 计算所有男性会员的平均工资

let average3 = 0
let average4 = 0
let average5 = 0

// 传统方式
let totalMenSalary = 0
let menCount = 0
for (let i = 0, l = memberArray.length; i < l; i++) {
  if (memberArray[i].sex === 'man') {
    totalMenSalary += memberArray[i].salary
    menCount += 1
  }
}
average3 = totalMenSalary / menCount

// filter + map + reduce
average4 = memberArray.filter(member => member.sex === 'man').map(m => m.salary).reduce((total, salary) => total + salary, 0) / memberArray.filter(member => member.sex === 'man').length

var filterArray = memberArray.filter(member => member.sex === 'man')
average5 = filterArray.map(m => m.salary).reduce((total, salary) => total + salary, 0) / filterArray.length

console.log('average3', average3)
console.log('average4', average4)
console.log('average5', average5)
`
    this.initEditor('editor', content)
  }
}
</script>
