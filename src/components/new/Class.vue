<template>
  <div class="Tem">
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
      title: 'Class'
    }
  },
  created () {
    class Person {
      constructor (name, age) {
        this.name = name
        this.age = age
      }
      greet () {
        console.log(`Hello! My name is ${this.name} `)
      }
      // 类的静态方法
      static walk () {
        console.log('This man is walking...')
      }
      // 利用类的静态方法实现实例化类方法
      static create (name, age) {
        return new Person(name, age)
      }
    }

    const ken = new Person('ken', 18)
    console.log(ken.name)
    console.log(ken.age)
    console.log(ken instanceof Person)    // ken是Person类的一个实例
    console.log(typeof Person)            // 类的类型是function
    console.log(Person.prototype)
    ken.greet()

    console.log('---------------')

    // 调用类的静态方法
    Person.walk()
    // 利用类的静态方法实现实例化类方法
    const yaoyon = Person.create('yaoyon', 16)
    console.log(yaoyon.name)
    console.log(yaoyon.age)

    console.log('---------------')

    // 类的继承
    // 在实现类的继承时，如果子类中不声明constructor，则将继承来自父类的constructor，如果子类中声明了constructor，则将父类的constructor，如果子类要使用父类的constructor中的声明和定义，则需要使用super()来继承
    class Student extends Person {
      constructor (name, age, grade) {
        super(name, age)
        this.grade = grade
      }
      play () {
        console.log(`${this.name} is playing...`)
      }
    }

    class Worker extends Person {
      // 使用剩余参数
      constructor (job, ...args) {
        super(...args)
        this.job = job
      }
      work () {
        console.log(`${this.name} is working...`)
      }
    }

    const student1 = new Student('kenny', '10', 5)
    console.log(student1.name)
    console.log(student1.age)
    console.log(student1.grade)
    student1.greet()
    student1.play()

    console.log('---------------')

    const worker1 = new Worker('programmer', 'jobsh', 16)
    console.log(worker1.name)
    console.log(worker1.age)
    console.log(worker1.job)
    worker1.greet()
    worker1.work()
  },
  mounted () {
    let content = `
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log(\`Hello! My name is \${this.name} \`)
  }
  // 类的静态方法
  static walk () {
    console.log('This man is walking...')
  }
  // 利用类的静态方法实现实例化类方法
  static create (name, age) {
    return new Person(name, age)
  }
}

const ken = new Person('ken', 18)
console.log(ken.name)
console.log(ken.age)
console.log(ken instanceof Person)    // ken是Person类的一个实例
console.log(typeof Person)            // 类的类型是function
console.log(Person.prototype)
ken.greet()

console.log('---------------')

// 调用类的静态方法
Person.walk()
// 利用类的静态方法实现实例化类方法
const yaoyon = Person.create('yaoyon', 16)
console.log(yaoyon.name)
console.log(yaoyon.age)

console.log('---------------')

// 类的继承
// 在实现类的继承时，如果子类中不声明constructor，则将继承来自父类的constructor，如果子类中声明了constructor，则将父类的constructor，如果子类要使用父类的constructor中的声明和定义，则需要使用super()来继承
class Student extends Person {
  constructor (name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  play () {
    console.log(\`\${this.name} is playing...\`)
  }
}

class Worker extends Person {
  // 使用剩余参数
  constructor (job, ...args) {
    super(...args)
    this.job = job
  }
  work () {
    console.log(\`\${this.name} is working...\`)
  }
}

const student1 = new Student('kenny', '10', 5)
console.log(student1.name)
console.log(student1.age)
console.log(student1.grade)
student1.greet()
student1.play()

console.log('---------------')

const worker1 = new Worker('programmer', 'jobsh', 16)
console.log(worker1.name)
console.log(worker1.age)
console.log(worker1.job)
worker1.greet()
worker1.work()
`
    this.initEditor('editor', content)
  }
}
</script>
