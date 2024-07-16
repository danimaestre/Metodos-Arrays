/*Sort para numeros
si Funcion (a,b) retorna menos que 0 - ordena a y luego b.
si Funcion (a,b) retorna 0 deja todo como esta.
si Funcion (a,b) retorna mas de 0 -ordena b y luego a.
*/
const numeros = [2, 5, 100, 125, 256, 50, 300, 1200];
numeros.sort();
console.log(numeros);

const ordeAscendente = numeros.sort((a, b) => a - b);
console.log(ordeAscendente);

const ordenDescencente = numeros.sort((a, b) => b - a);
console.log(ordenDescencente);
//************************************************** */

const peliculas = [
  {
    titulo: "Rambo - Acorralado",
    anio: 1982,
    puntos: 6.6,
    genero: ["fantastico", "aventura"],
  },
  {
    titulo: "Rambo - Acorralado parte 2",
    anio: 1985,
    puntos: 5.5,
    genero: "belico",
  },
  {
    titulo: "Rambo III",
    anio: 1988,
    puntos: 4.8,
    genero: ["ciencia ficcion", "accion", "fantastico"],
  },
  {
    titulo: "Rambo IV",
    anio: 2008,
    puntos: 5.4,
    genero: ["aventura", "ciencia ficcion"],
  },
  {
    titulo: "Rambo V -La ultima mision",
    anio: 2019,
    puntos: 5.5,
    genero: "aventura",
  },
];

console.log(peliculas);
const orden = peliculas.sort((a, b) => a.puntos - b.puntos);
const ordenInverso = peliculas.sort((a, b) => b.puntos - a.puntos);
console.log(orden);
console.log(ordenInverso);