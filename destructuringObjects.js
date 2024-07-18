// Video 94--- Destructuring de objetos.

const clientes = {
    nombre: 'Juan',
    apellido: 'Perez',
    domicilio: 'Av 3 1500',
    localidad: 'Villa Gesell',
    tel:'(2255)45-0358'
};

const { nombre : name, apellido, ...otrosDatos } = clientes;
//console.log(nombre + ' ' + apellido);
console.log(otrosDatos);
console.log(name);