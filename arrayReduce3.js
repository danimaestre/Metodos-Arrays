/*
const reducer= (acumulador, valorActual)=> nuevoAcumulador;
const reducido= [1,2].reduce((acc,el)=>acc+el, 0);
*/

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
console.log(resultado);
/*****************************************************/

const mascotas = [
  { nombre: "Pelusa", edad: 12, tipo: "gato" },
  { nombre: "Puchini", edad: 12, tipo: "perro" },
  { nombre: "Pulga", edad: 10, tipo: "zorro" },
  { nombre: "Chanchito", edad: 3, tipo: "ave" },
];

const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.tipo]:el
}),{});

console.log(indexed);
console.log(indexed['gato']);
/***********************************************************/

const anidado = [1, [2, 3], 4, [5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);