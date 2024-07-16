//VIDEO 90 Spread con objetos no iterables

const cliente01 = {
    nombre: "Marcos",
    apellido: "Castelli"
}
const cliente02 = {
    nombre: "Juan",
    apellido: "Perez",
    notas: [10,9,9]
}

//console.log([...cliente01]); XError:los objetos no son iterables
console.log({...cliente02.notas});
const xxx = {
    ...cliente02,
    ...cliente01, //cliente01 pisa a cliente02 porque comparten los mismos clave, valor.
    vip: true,
    dni: '345678J'
}

console.log(xxx);

//Copiar objeto
const cliente03 = {
    ...cliente02
}
console.log(cliente03);
console.log(Math.min([2,7,8,56,78]));//No funciona
console.log(Math.min(...[2,7,8,56,78]));//spred si