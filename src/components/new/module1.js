export let myObj = {
  name: 'ken',
  age: 18
}

export const PI = 3.14

export function add (a, b) {
  return a + b
}

export class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log('Hello...')
  }
}
