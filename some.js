//Some es muy parecido al metodo every pero every requiere que todo sea true, some por otro lado con que un solo valor cumpla la condicion, regresa true.
const palabras = ['tomate', 'pepino', 'ciudad', 'año', 'remo', 'perro', 'liebre'];
//Algunas de estas palabras tienen mas de 6 caracteres?
const mayor = palabras.some(function (pal) {
    return pal.length >= 6;
});
console.log(mayor);

//Alguna palabra empieza con la b?
const palB = palabras.some((pal) => {
    //return pal.startsWith('p');
    return pal[0];
});
console.log(palB);

//Alguna de estas palabras contiene mate?

const mate = palabras.some((pal) => {
    return pal.includes('mate');
  
});
console.log(mate);

//********************************************

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

const mejor = peliculas.some((peli) => {
    return peli.puntos > 5;
});
console.log(mejor);
