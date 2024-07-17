//VIDEO 92

function sumar(...valores) {
  console.log(valores);
  
  return valores.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  });
}
console.log(sumar(10, 20, 30, 50));

function clientes(nombre, apellidos, ...otrosDatos) {
    console.log(nombre);
    console.log(apellidos);
    console.log(otrosDatos);
}
clientes('Daniel', 'Maestre', 'C/Sol', 'Nº67');

const sumar2 = (...valores) => {
    return valores.reduce((acumulador, valorActual)=> {
        return acumulador + valorActual;
    }
)}
console.log(sumar2(10, 20, 45, 75, 123));

const multiplicar = (...valores) => 
   valores.reduce((acumulador, valorActual) =>  acumulador * valorActual
    
  );

console.log(multiplicar(10, 50, 4, 75, 1));