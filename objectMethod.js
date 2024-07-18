//VIDEO 99 CREAR OBJETOS CON METODOS******************

//Contenedor
const cliente01 = {
  //Propiedades del objeto
  nombre: "Carlos",
  apellido: "Zarrate",

  //Metodos del objeto
  sumar: (x, y) => x + y,

  restar: function restar(x, y) {
    return x - y;
  },
  multiplicar: function multiplicar(x, y) {
    return x * y;
    },
  dividir(x,y){return x/y}// -->Forma abreviada funcion en objetos.
};

console.log(cliente01.sumar(2, 9));
console.log(cliente01.restar(2, 9));
console.log(cliente01.multiplicar(2, 9));
console.log(cliente01.dividir(25, 5));
