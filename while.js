const numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto);
let maquina = Math.floor(Math.random() * 10);
let intentos = 1;
while (numeroSecreto !== maquina) {
    console.log(`${numeroSecreto} contra ${maquina}`);
    maquina = Math.floor(Math.random() * 10);
    intentos++;
}
console.log(`${numeroSecreto} contra ${maquina}`);
console.log(`Lo encontramos en ${intentos} intentos`);