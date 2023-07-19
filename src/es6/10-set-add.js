const list = new Set();

// agrega un elemento a Set
list.add('item 1');

list.add('item 2').add('item 3');

console.log(list);

// eliminar un elemento del Set
list.delete('item 1');

//retornar un booleano si eciste un valor dentro del set

list.has('item 1'); // retorna true porque item 1 existe en el set

//clear elimianr todos los valores del set

list.clear();

console.log(list);

// size retorna la cantidad de elementos del Set

console.log(list.size);
