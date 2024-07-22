//VIDEO 105 - 106

const objeto = {
    tipos: ['espada', 'oro', 'copa', 'palo'],
    numeros: '1,2,3,4,5,6,7,10,11,12',
    mazo: [],
    
    crearMazo() {
        const { tipos, numeros, mazo } = this;
         for (let numero of numeros.split(",")) {
           for (let tipo of tipos) {
             mazo.push({ numero, tipo });
           }
         }
         return mazo;
    },
    
    repartirUnaCarta() {
        return this.mazo.pop();
    },
     
};

console.log(objeto);
objeto.crearMazo();
console.log(objeto.mazo);
let carta1 = objeto.repartirUnaCarta();
console.log(carta1);

//******************************************************/

function crearMazo() {
    const tipos = ['espada', 'oro', 'copa', 'palo'];
    const numeros = '1,2,3,4,5,6,7,10,11,12';
    const mazo = [];
    for (let numero of numeros.split(",")) {
        for (let tipo of tipos) {
            mazo.push({ numero, tipo });
        }
    }
    return mazo;
}
function repartirUnaCarta(mazo) {
    return mazo.pop();

}
//console.log(crearMazo());

const nuevoMazo = crearMazo();
//console.log(repartirUnaCarta(nuevoMazo));
//console.log(nuevoMazo);