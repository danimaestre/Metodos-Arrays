//map se podria traducir por cada elemento. Por cada elemento muestrame o traeme el elemento o su indice.

const numeros = [1, 2, 3, 4, 5];

const doble = numeros.map(ele => ele * 3);//funcion flecha optimizada
console.log(doble);

const raiz = numeros.map(el => Math.sqrt(el).toFixed(2));
//const raiz = numeros.map(Math.sqrt);
const raiz2 = doble.map(el => Math.sqrt(el).toFixed(2));
console.log(raiz);
console.log(raiz2);

const nuevo = doble.map((elem, index) => `${index}, su valor es: ${elem}`);

console.log(nuevo);