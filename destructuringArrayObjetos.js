//VIDEO 95 Destructuracion de Array de Objetos.

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
    genero: ["belico", "accion"],
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
    genero: ["aventura", "belico"],
  },
];

const [, { titulo: pelicula2, anio },,{titulo, anio:year}] = peliculas;
console.log(pelicula2+' '+anio);
console.log(titulo + ' ' + year);

const [, , , , objetoCuatro] = peliculas;
console.log(objetoCuatro);
const {titulo:peli, puntos} = objetoCuatro;
console.log(peli+' -  '+puntos);