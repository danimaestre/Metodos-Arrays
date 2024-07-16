console.log("Hola Mundo");
let cadena = "Hello";
console.log(typeof cadena);

let cadena2 = new String("hola2");
console.log(typeof cadena2);

const arrNum = [
  [1, 2, 3],
  [5, 7, 20],
  [0, 0, 0],
  [45, 67, 78, 56]
];
let total = 0;
let parcial = 0;
for (let i = 0; i < arrNum.length; i++) {
  let fila = arrNum[i];
  for (let j = 0; j < fila.length; j++) {
    console.log(arrNum);
    parcial += arrNum[i][j];
  }
  console.log(parcial);
  total += parcial;
  parcial = 0;
};
console.log(total);


