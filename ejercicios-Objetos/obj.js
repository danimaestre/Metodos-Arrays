let total = 0;
function menu() {
  let salir = false;

  do {
    let opc = Number(
      prompt(`*****MENU*****\n1. Añadir\n2.  Listar\n3. Totales\n6. Salir`)
    );
    switch (opc) {
      case 1:
        anadir(coche);
        break;
      case 2:
        listar(coche);
        break;
      case 3:
        total = sumaTotal(coche);
        alert(`El total de los precios introducidos es: ${total}`);
        break;

      case 6:
        salir = true;
        break;
      default:
        alert(`Esta opccion no esta contemplada`);
    }
  } while (!salir);
  alert(`Hasta pronto`);

  return opc;
}

function listar(coche) {
  let listado = "";
  for (let coch of coche) {
    for (let prop in coch) listado += prop + ": " + coch[prop] + "\n";
  }

  alert(listado + `****************\n $`);

  return listado;
}

function anadir(cars) {
  let coche1 = { marca: "", modelo: "", precio: 0 };

  for (let key in coche1) {
    coche1[key] = prompt(`Introduce un/una ${key}`);
  }

  cars.push(coche1);
  alert(`Coche registrado `);
  return cars;
}

/************************************************/
function sumaTotal(coch) {
  let precioTotal = 0;
  for (let i = 0; i < coch.length; i++) {
    precioTotal += Number(coch[i].precio);
  }

  return precioTotal;
}
