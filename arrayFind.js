// Find retorna el valor del primer elemento del array que satisface el pedido de la funcion, osea regresa el primer valor que sea true y se detiene. Util para buscar un dato unico.

const animales = ['gato', 'perro', 'zorro', 'puma', 'tapir'];
const resultado=animales.find(function (animal) {
    //return animal.includes('zorro');
    return animal.indexOf("zorro") === 0;
});
console.log(resultado);
const nuevoArray = animales.map((animal) => {
    return animal.toUpperCase();
});
console.log(nuevoArray);

//Obtener datos de un array de objetos

const peliculas = [
  {
    titulo: "Rambo - Acorralado",
    anio: 1982
  },
  {
    titulo: "Rambo - Acorralado parte 2",
    anio: 1985
  },
  {
    titulo: "Rambo III",
    anio: 1988
  },
  {
    titulo: "Rambo IV",
    anio: 2008
  },
  {
    titulo: "Rambo V -La ultima mision",
    anio: 2019
  },
];
const ultimaPelicula = peliculas.find((objeto) => {
    //return objeto.anio >= 2000;
    return objeto.titulo === "Rambo IV";
});
console.log(ultimaPelicula);