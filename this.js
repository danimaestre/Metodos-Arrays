/*
VIDEO 101 Objeto This 1ª parte

This es un objeto especial de js que hace referencia al contexto
en el que se esta ejecuando la funcion.

objeto -- metodo --> this referencia al objeto
function --> this referencia al objeto global (window en navegadores y global en node).
*/

const objeto = {
    nombre: "Marcos",
    apellido: "Castelli",
    nombreCompleto() {
        console.log(this);
        console.log(objeto.nombre);
        console.log(this.nombre);
        //console.log(nombre);No lo reconoce
        console.log(this);
        //==> this hace referencia al objeto
    }
};
objeto.nombreCompleto();

function dameNombre() {
    console.log("Raul");
    console.log(this);  //==> this hace referencia a window
}