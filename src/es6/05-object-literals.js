// SIntaxis clasica
function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country,
  };
}
//enhanced  object literals
function newUser2(user, age, country, id) {
  return {
    user,
    age,
    country,
    id,
  };
}

console.log(newUser2('Brandon', 28, 'CO', 1));
