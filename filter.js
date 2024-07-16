//Filter permite generar en un nuevo array en base a la funcion y su condicion, evalua true o false, cuando el resultado a la condicion sea true ese data pasara a formar parte del nuevo array filtrado.

const numeros = [12, 13, 5, 67, 89, 29, 100];
const numPar=numeros.filter((elemento) => {
    return elemento % 2 === 0;
});
const numImPar = numeros.filter((elemento) => {
  return elemento % 2 === 1;
});
const numMayor = numeros.filter((elemento) => {
  return elemento > 60;
});
console.log(numPar);
console.log(numImPar);
console.log(numMayor);

const peliculas = [
  {
    titulo: "Rambo - Acorralado",
    anio: 1982,
    puntos: 6.6,
    genero:['fantastico','aventura']
  },
  {
    titulo: "Rambo - Acorralado parte 2",
    anio: 1985,
    puntos: 5.5,
    genero:"belico"
  },
  {
    titulo: "Rambo III",
    anio: 1988,
    puntos: 4.8,
    genero :['ciencia ficcion', 'accion','fantastico'], 
  },
  {
    titulo: "Rambo IV",
    anio: 2008,
    puntos: 5.4,
    genero:['aventura', 'ciencia ficcion']
  },
  {
    titulo: "Rambo V -La ultima mision",
    anio: 2019,
    puntos: 5.5,
    genero:'aventura'
  },
];

const fantastico = peliculas.filter((obj) => {
    return obj.genero.includes('fantastico') ||obj.genero.includes('aventura');
});

const puntuaje= peliculas.filter((obj) => {
    return obj.puntos >= 5.5;
});
console.log(puntuaje);
console.log(fantastico);

const search = "acorralado";
const resultado = peliculas.filter((obj) => {
    const titulo = obj.titulo.toLowerCase();
    return titulo.includes(search.toLowerCase());
});
console.log(resultado)
