/*
SINTAXIS
[2,4,8].reduce((acumulador, valorActual)=>{},valorInicial);
[y,n,y].reduce((total, porCadaVoto) => {}, {});
*/

//RESULTADO DE ENCUESTA

const votos = ['yes', 'no', 'no', 'yes', 'no', 'yes', 'yes'];

const resultados = votos.reduce((total, porCadaVoto) => {
    if (total[porCadaVoto]) {
        total[porCadaVoto]++;
    }
    else {
        total[porCadaVoto] = 1;
    }
    return total;
}, {});
console.log(resultados);

//************************************************* */
const resultados2 = votos.reduce((total, porCadaVoto) => {
    total[porCadaVoto] = (total[porCadaVoto] || 0) + 1;
  return total;
}, {});
console.log(resultados2);
/*****************************************************/

const peliculas = [
  {
    titulo: "Rambo - Acorralado",
    anio: 1982,
    puntos: 5.5
  },
  {
    titulo: "Rambo - Acorralado parte 2",
    anio: 1985,
    puntos: 3.2
  },
  {
    titulo: "Rambo III",
    anio: 1988, 
    puntos: 6.5
  },
  {
    titulo: "Rambo IV",
    anio: 2008,
    puntos: 4.7
  },
  {
    titulo: "Rambo V -La ultima mision",
    anio: 2019,
    puntos: 8.2
  },
];

const grupoPeliculas = peliculas.reduce((grupo, cadaPelicula) => {
    const puntos = Math.floor(cadaPelicula.puntos); 
    if (!grupo[puntos]) {
        grupo[puntos] = [];
    }
    grupo[puntos].push(cadaPelicula);
    return grupo;
}, {});

console.log(grupoPeliculas);