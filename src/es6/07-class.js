// declarando una clase
class User {}
// instanciar una clase
//const newUser = new User();

class user {
  //metodos
  greeting() {
    return 'hello';
  }
}

const bdev = new user();
console.log(bdev.greeting());
const developer = new user();
console.log(developer.greeting());

//constructor

class user {
  //constructor
  constructor() {
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'hello';
  }
}

const Brad = new user();

// this elemento padre

class user {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}
const ana = new user('Ana');
console.log(ana.greeting());

// setters, getters

class user {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const develop = new user('David', 15);

console.log(develop.uAge);
console.log((develop.uAge = 20));
