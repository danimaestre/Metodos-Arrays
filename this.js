/*
VIDEO 101-102-103--> Objeto This 1ª parte

This es un objeto especial de js que hace referencia al contexto
en el que se esta ejecuando la funcion.

objeto -- metodo --> this referencia al objeto
function --> this referencia al objeto global (window en navegadores y global en node).
*/

const objeto = {
  nombre: "Marcos",
  apellido: "Castelli",
  nombreCompleto() {
    const { nombre, apellido } = this; //Para no tener que usar this
    console.log(this);
    console.log(objeto.nombre);
    console.log(this.nombre + " " + this.apellido);
    console.log(this);
    return nombre + " " + apellido;
    //console.log(nombre);No lo reconoce
    
    //==> this hace referencia al objeto
  },
  imprimir() {
    console.log(this.nombreCompleto());
  },
  funcionFlecha: () => {
    console.log(
      "Ahora esta funcion dentro del objeto referencia al objeto window."
    );
    console.log(this);
  },
  start() {
    setInterval(function () {
      console.log(this);
    }, 3000); //setinterval pertenece a window
  },
  start2() {
    setInterval( ()=> {
      console.log(this);
    }, 3000); //setinterval pertenece al objeto las funcionenes flecha no tienen un this propio, lo toman del contesto.
  },
};
objeto.nombreCompleto();
objeto.imprimir();
objeto.apodo = "Chiquito";

function dameNombre() {
    console.log("Raul");
    console.log(this);  //==> this hace referencia a window
}
dameNombre();
objeto.miNuevaFuncion = function () {
    console.log('nueva funcion hace referencia ahora a window no al objeto');
    console.log(this.nombre);
}

objeto.miNuevaFuncion();

//otraConstante -->miNuevaFuncion (ahora this apunta al objeto global)

const otraConstante = objeto.imprimir;
otraConstante(); //Aqui ahora this apunta a window.

//Si tenemos una funcion flecha dentro de un objeto, hace referencia al objeto windows por una forma especial que tiene de trabajar.
objeto.funcionFlecha();
objeto.start();
objeto.start2();