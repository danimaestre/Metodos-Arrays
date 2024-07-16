let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

const operacionesArray = [suma, resta, multiplicar, dividir];

for (let elem of operacionesArray) {
    console.log(elem(10, 2));
}

const objetoFunciones = {
    sum: suma,
    res: resta,
    mult: multiplicar,
    div: dividir
};
console.log(objetoFunciones.sum(20, 5));
console.log(objetoFunciones.res(20, 5));
console.log(objetoFunciones.mult(20, 5));
console.log(objetoFunciones.div(20, 5));

const user = {
    name: "Daniel",
    age: 35,
    city: "Zamora"
};

for (let el in user) {
    console.log(`${el}: ${user[el]}`);
};