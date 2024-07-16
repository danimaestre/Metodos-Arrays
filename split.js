const miArray = ['manzana', 'pera', 'lechuga'];
console.log(typeof (miArray));
let string = miArray.join(" * ");
console.log(string);
console.log(typeof string);

let string2 = "C/Rio Esla; nº29 , CP: 49024 , Zamora";


let arr2 = string2.split(/[/,CP:;]/);
console.log(arr2);
console.log(typeof arr2);

console.log(`Daniel vive en la calle ${arr2[2]} ${arr2[3]}`);