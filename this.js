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
        const { nombre, apellido } = this;//Para no tener que usar this
        console.log(this);
        console.log(objeto.nombre);
        console.log(this.nombre+' '+this.apellido);
        return (nombre+' '+apellido);
        //console.log(nombre);No lo reconoce
        console.log(this);
        //==> this hace referencia al objeto
    },
    imprimir() {
        console.log(this.nombreCompleto());
    }
};
objeto.nombreCompleto();
objeto.imprimir();
objeto.apodo = "Chiquito";

function dameNombre() {
    console.log("Raul");
    console.log(this);  //==> this hace referencia a window
}
objeto.miNuevaFuncion = function () {
    console.log('nueva funcion hace referencia ahora a window no al objeto');
    console.log(this.nombre);
}

objeto.miNuevaFuncion();

//otraConstante -->miNuevaFuncion (ahora this apunta al objeto global)

const otraConstante = objeto.miNuevaFuncion;
otraConstante();
