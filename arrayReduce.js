/*Reduce
Ejecuta una funcion por cada elemento del array para que resulte en un unico valor.

[2,3,4,6,2].reduce((acumulador, valorActual)=> (acumulador+valorActual))
*/

console.log([2, 3, 4, 6, 2].reduce((acumulador, valorActual) => (acumulador + valorActual)));
console.log([2, 3, 4, 6, 2].reduce((acumulador, valorActual) => (acumulador * valorActual)));

const numeros = [13, 18, 12, 11, 10,34,2];
const numeroMayor=numeros.reduce((mayor, valorActual) => {
    if (valorActual > mayor) return valorActual;
    return mayor;
});

//mayor -->ACUMULADOR
console.log(numeroMayor);

const numeroMayor2 = numeros.reduce((mayor, valorActual) => {
  return Math.max(mayor,valorActual);
});
console.log(numeroMayor2);

const numeroMenor = numeros.reduce((menor, valorActual) => {
  return Math.min(menor, valorActual);
});
console.log(numeroMenor);