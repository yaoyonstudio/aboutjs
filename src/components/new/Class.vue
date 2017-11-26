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
    }

    const ken = new Person('ken', 18)
    console.log(ken.name)
    console.log(ken.age)
    ken.greet()

    console.log('---------------')

    class Student extends Person {
      constructor (name, age, grade) {
        super(name, age)
        this.grade = grade
      }
      play () {
        console.log(`${this.name} is playing...`)
      }
    }

    const student1 = new Student('kenny', '10', 5)
    console.log(student1.name)
    console.log(student1.age)
    console.log(student1.grade)
    student1.greet()
    student1.play()
  },
  mounted () {
    let content = `class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log(\`Hello! My name is ${this.name} \`)
  }
}

const ken = new Person('ken', 18)
console.log(ken.name)
console.log(ken.age)
ken.greet()

console.log('---------------')

class Student extends Person {
  constructor (name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  play () {
    console.log(\`${this.name} is playing...\`)
  }
}

const student1 = new Student('kenny', '10', 5)
console.log(student1.name)
console.log(student1.age)
console.log(student1.grade)
student1.greet()
student1.play()
`
    this.initEditor('editor', content)
  }
}
</script>
