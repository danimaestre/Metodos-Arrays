function crearObjeto() {
    const nombres = ['Daniel', 'Vicente', 'Julian'];
    const apellidos = ['Maestre', 'Roman', 'Perez'];
    const nombreCompleto = [];
    for (let nombre of nombres) {
        for (let apellido of apellidos) {
            nombreCompleto.push({ nombre, apellido });
        }
    }
    return nombreCompleto;
}
let nombreCompletado = crearObjeto();
console.log(nombreCompletado);
//******************************************

function crearCoches(cars){
    let coche = { marca: "", modelo: "", precio: 0 };
    for (let key in coche) {
        coche[key] = prompt(`Introduce un/una ${key}`);
    }
    cars.push(coche);
    alert("Coche registrado");
    return cars;
}
function listarCoche(coche) {
  let listado = "";
  for (let coch of coche) {
    for (let prop in coch) listado += prop+": "+coch[prop]+ "\n";
  }
    //alert(listado);
    return listado;
}