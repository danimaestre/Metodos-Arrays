//VIDEO 98 Computed Properties....

const profesion = "electricista";
const nombre = "Ivan";

const profesion2 = "tecnico mecanico";
const nombre2 = "Jose";

const objeto = {
    profesion: nombre
}

console.log(objeto);

const objeto2 = {}
objeto2[profesion2] = nombre2;

console.log(objeto2);

const agregarDato=(objeto, key, valor)=>{
    return {...objeto, [key]: valor}
}

//COMPUTES PROPERTIES

const objeto3 = {
    [profesion]:nombre,
    [profesion2]: nombre2,
    [23 + 98]: "suma",
    [nombre]:profesion2
}

console.log(objeto3);
const resultado = agregarDato(objeto3, 'medico', 'Juan');
console.log(resultado);