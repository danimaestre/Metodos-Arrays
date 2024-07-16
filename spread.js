/* SPREAD
En un array -Crea un nuevo array usando existentes
*/

const nombres = ['Daniel', 'Pepe', 'Carlos', 'Juan'];
const apellidos = ['Maestre', 'Perez', 'Sanchez', 'Juarez'];
const apodos = ['chui', 'oso', 'tito', 'tano'];

const nuevoAarray = ['Markinson',...nombres, ...apellidos, ...apodos];
console.log(nuevoAarray);

//Mas sencillo que concat()

const array = nombres.concat(apellidos);
console.log(array);
//Nos permite hacer una copia integra. (Paso por valor no por referencia. No se modifica el original).
const copiaApodos = [...apodos,'mozo'];
console.log(copiaApodos);
console.log(apodos);
console.log(copiaApodos === apodos);

let cadena = "Marcos";
const caracter = cadena.split('');
console.log(caracter);
const caracter2 = [...cadena, ...'Casteli','nombre y apellido'];
console.log(caracter2)