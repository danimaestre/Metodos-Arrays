//Video 93 Desestructuracion de Arrays

const cliente01 = ['Juan', 'Perez', 'Avda 3 1500', 'Villa Gesel', '(2255)45-0358'];

//Como se hacia antiguamente
const nombre1 = cliente01[0];
const apellido1 = cliente01[1];
console.log(nombre1 + ' ' + apellido1);

//Como se hace actualmente:
//const [nombre, apellido, domicilio, localidad] = cliente01;
const [nombre, apellido, ...otrosDatos] = cliente01;
//console.log(nombre+' '+apellido+' '+domicilio+' '+localidad);
console.log(nombre+' '+apellido+' '+otrosDatos);