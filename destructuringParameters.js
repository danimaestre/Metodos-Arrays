// video 96  Desestructuracion parammetros

const cliente01 = {
  nombre: "Juan",
  apellido: "Perez",
  domicilio: "Av 3 1500",
  localidad: "Villa Gesell",
  tel: "(2255)45-0352",
  estadoCivil: "soltero",
  edad: 50,
  deportes: ["natacion", "basketball", "futbol"],
  cajaAhorro: "1255-4545454-333",
  cajaDolares: "4559-4545454-123",
  banco: "ICBC",
};
//Extraer solo cierta informacion del objeto. Usammos desetructuracion....

/*function print(objeto) {
    const { nombre, apellido, tel } = objeto;
    console.log(`${nombre} ${apellido}: ${tel}`)
}*/

function print({ nombre, apellido, tel }) {
  console.log(`${nombre} ${apellido}: ${tel}`);
}

print(cliente01);

const cliente02 = [
  "Juan",
  "Perez",
  "Av 3 1500",
  "Villa Gesell",
  "(2255)45-0352",
];

function print2([nombre, apellido, , , tel]) {
  console.log(`${nombre} ${apellido}: ${tel}`);
}

print2(cliente02);
