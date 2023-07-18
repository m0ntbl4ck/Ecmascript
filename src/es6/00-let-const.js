//var, let y const

var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
aminal = 'Cat';
console.lof(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope scope
    const fruit3 = 'Banana'; //block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
};
fruits();
