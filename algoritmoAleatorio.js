/* VIDEO 109
Algoritmo ALEATORIO de Fisher Yates.

Concepto:
El algoritmo de Fisher Yates es un algoritmo de codificacion aleatoria, tambien conocido como algoritmo de codificacion de knuth. Se utiliza para dividir aleatoriamente una secuencia finita en desorden y genera una secuencia aleatoria.

Pensamiento:
Para una secuencia finita, un elemento se selecciona al azar cada vez y se coloca al final, y luego la secuencia, excepto el ultimo elemento, se repite de forma recursiva. Siempre de que  se asegure de cada ubicación es una seleccion verdaderamente aleatoria, la secuencia final es la original. Un arreglo aleatorio. Por lo tanto, el algoritmo no requiere una sobrecarga de memoria adiccional y la complejidad es 0 (n).

*/

function mezclar(array) {
    //Recorre el array de atras hacia adelante.
    for (let i = array.length - 1; i > 0; i--){
        //Elige un indice aleatorio antes del elemento actual.
        let j = Math.floor(Math.random() * (i + 1));
        //Intercambia [a,b] por [b,a].
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
}

mezclar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/***********************************************/

//***********INDICE  0      1        2        3         4
const palabras = ['auto', 'moto', 'perro', 'gato', 'tractor'];
[palabras[1], palabras[3]] = [palabras[3], palabras[1]];

console.log(palabras);