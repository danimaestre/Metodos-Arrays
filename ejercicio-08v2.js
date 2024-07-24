//VIDEO 109

function crearMazo() {
    const tipos = ['espada', 'copa', 'oro', 'palo'];
    const numeros = '1,2,3,4,5,6,7,10,11,12';
    const mazo = [];
         for (let numero of numeros.split(",")) {
           for (let tipo of tipos) {
             mazo.push({ numero, tipo });
           }
         }
         return mazo;
}
 
 function repartirUnaCarta(mazo, cartasRepartidas) {
        const carta = mazo.pop();
        cartasRepartidas.push(carta);
        return carta;
}
    
function repartirVariasCartas(numCartas, mazo, cartasRepartidas) {
        const cartas = [];
        for (let i = 0; i < numCartas; i++){
            cartas.push (repartirUnaCarta(mazo, cartasRepartidas));
        }
        return cartas;
}

function mezclar(mazo) {
    
    for (let i = mazo.length - 1; i > 0; i--){
        
        let j = Math.floor(Math.random() * (i + 1));
        
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    }
    
}

const cartasRepartidas = [];

//Creo un nuevo mazo
const nuevoMazo = crearMazo();

//Mezclo las cartas
mezclar(nuevoMazo);

//Muestro el mazo creado
console.log(nuevoMazo);

//Reparto cartas
console.log(repartirUnaCarta(nuevoMazo, cartasRepartidas));
const primero = repartirVariasCartas(5, nuevoMazo, cartasRepartidas);
const segundo = repartirVariasCartas(5, nuevoMazo, cartasRepartidas);

//Muestro cartas repartidas
console.log(segundo);

//Muestro el estado actual del mazo
console.log(nuevoMazo);
    