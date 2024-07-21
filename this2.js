const miObjeto = {
    dameNombre() {
        return 'Marcos';
    },
    imprimir() {
        console.log(this);
        document.addEventListener('click', (evento) => {
            console.log(this.dameNombre());
        })
    }
}

miObjeto.imprimir();