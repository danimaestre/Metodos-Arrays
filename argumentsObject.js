// VIDEO 91...
//arguments no se puede recorrer aunque es iterable. Es un tipo de objeto especial.No es un array, se usa con spread para usarlo con reduce(). Solo funciona con funciones declaradas, no funciona con funciones flecha.

function sumar() {
    console.log(arguments);
    const valores = [...arguments];
    return valores.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    });
}

function cliente(nombre, apellido) {
    console.log(arguments);
}

cliente("Pepe", "Perez", 3456789, "Avd La Feria");

console.log(sumar(10, 20, 8));
console.log(Math.max(10, 89, 25));//El programador no sabe cuantos argumentos le pasamos 
const xxx = () => {
    console.log(arguments);
}
xxx(20, 45, 2, 6); //No funciona en funcion flecha