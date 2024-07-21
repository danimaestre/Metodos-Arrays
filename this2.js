//VIDEO 104 This...Parte 4
//let cadena = new String('Marcos');

const objeto = {
    titulo: 'Mis nombres',
    nombres: ['Pedro', 'Raul', 'Maria'],
    mostrarNombres() {
        //con funcion flecha funciona, con funcion anonima no
        this.nombres.forEach((nombre) => {
            console.log(this.titulo,nombre);
        })
    }
}
objeto.mostrarNombres();

//**Esta es una funcion constructora que crea un objeto */
function Texto(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    console.log(this);
}

//Esta no crea un objeto this hace referencia a window
function otra() {
    console.log(this);
}
otra();

const nueva = new Texto('Hola mundo', 'Vivo en Zamora');

const miObjeto = {
    apellido: 'Castelli',
    dameNombre() {
        return 'Marcos';
    },
    imprimir() {
        console.log(this);
        document.addEventListener('click', (evento) => {
            console.log(this.dameNombre());
            console.log(this.apellido);
        })
    }
}

miObjeto.imprimir();