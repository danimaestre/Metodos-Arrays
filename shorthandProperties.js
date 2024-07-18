//VIDEO 97 Shorthand properties es una forma sencilla de crear un objeta de forma literal asignandole variables.

const miArray = [4, 8, 32, 31, 13, 17, 24];

const dameResultados = (array) => {
    const max = Math.max(...miArray);
    const min = Math.min(...miArray);

    const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual);
    
    let promedio = suma / array.length;
    promedio= promedio.toFixed(2);
    return {
        /* max: max,
         min: min,
         suma: suma,
         prom: promedio*/
        max,
        min,
        suma,
        promedio
    }
};

const resultados = dameResultados(miArray);
console.log(resultados);