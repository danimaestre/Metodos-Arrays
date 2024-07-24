const crearMazoCartas = () => {
    return {
  tipos: ["espada", "oro", "copa", "palo"],
  numeros: "1,2,3,4,5,6,7,10,11,12",
  mazo: [],
  cartasRepartidas: [],

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
    const carta = this.mazo.pop();
    this.cartasRepartidas.push(carta);
    return carta;
  },
  repartirVariasCartas(numCartas) {
    const cartas = [];
    for (let i = 0; i < numCartas; i++) {
      cartas.push(this.repartirUnaCarta());
    }
    return cartas;
  },

  mezclar() {
    //const {mazo}=this; Desestructuring para no usar this
    for (let i = this.mazo.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [this.mazo[i], this.mazo[j]] = [this.mazo[j], this.mazo[i]];
    }
  },
}
} //Termina la funcion flecha


const mazo1 = crearMazoCartas();
const mazo2 = crearMazoCartas();
console.log(mazo1);
mazo1.crearMazo();
mazo1.mezclar();
console.log(mazo1.mazo);
console.log(mazo2.mazo);