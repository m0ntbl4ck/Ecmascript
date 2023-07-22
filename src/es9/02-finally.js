// Finally funcion para finalizar una promesa
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Whoooops!');
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('finally'));
