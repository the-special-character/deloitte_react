// const app = require('./app')
import app from './app';
// import { x, y } from './app'

const add = (a, b) => {
  return a + b;
};

class Animal {
  makeSound() {
    return 'bow wow';
  }
}

const animal = new Animal();
console.log(animal.makeSound());

console.log(add(app.x, app.y));
