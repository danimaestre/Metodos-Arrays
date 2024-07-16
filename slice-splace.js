//Slice crea un nuevo array tomando una porcion  del array que pasamos. Debemos indicar el indice donde comenzamos y el indice donde terminamos + 1.

const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'Cobra', 'Boa', 'Mambo'];

console.log(animales);

const felinos = animales.slice(0, 5);
const serpientes = animales.slice(5, 8);

console.log(felinos);
console.log(serpientes);

//splice ==> Se usa para trabajar con datos  en medio de un array. Podemos removerlos, reemplazarlos  o agregar nuevos elementos. Modifica el array original. splice(index,borrar,agregar).

const animales2 = [
  "Puma",
  "Tigre",
  "Pantera",
  "Leon",
  "Leopardo",
  "Cobra",
  "Boa",
  "Mambo",
];


console.log(animales2.splice(5, 0, "Piton"));//muestra los borrados
console.log(animales2);
