function multi(x, y) {
    //if (typeof y === 'undefined') y = 5;//Forma antigua de parametros por defecto.
    y = typeof y === 'undefined' ? 4 : y;//operador ternario
    x = typeof x === 'undefined' ? 4 : x;//operador ternario
    return x * y;
}
console.log(multi(7, 9));

/*****************Forma actual*******************************/
function mult2(x=5, y=10) {
    return x * y;
}
console.log(mult2(3, 4));
console.log(mult2());

function saludar(nombre="null", apellido="null", tel="999-999/999") {
    console.log(`${nombre}, ${apellido}, ${tel}`);
}
saludar("daniel");