// 1.  Hacer una función capaz de sumar 2 números =============================
// Ej: in: 1, 2; out: 3

// CODE HERE
export const sumThese = (x: number, y: number) => x + y;
const result1 = sumThese(10, 5);
console.log("input 1: 10, 5");
console.log("Resultado 1: ", result1);

//==============================================================================

// 2. Hacer una función capaz de restar 2 números ==============================
// Ej: in: 1, 2; out: -1

// CODE HERE

export const substractThese = (x: number, y: number) => x - y;
const result2 = substractThese(9, 5);
console.log("input 2: 9, 5");
console.log("Resultado 2: ", result2);

//==============================================================================

// 3. Hacer una función capaz de multiplicar 2 números =========================
// Ej: in: 4, 4; out: 16

// CODE HERE
export const multiplyThese = (x: number, y: number) => x * y;
const result3 = multiplyThese(5, 4);
console.log("input 3: 5, 4");
console.log("Resultado 3: ", result3);
//==============================================================================

// 4. Hacer una función capaz de saber si un número es par o impar =============
// Ej: in: 4; out: 'par'

// CODE HERE
export const parImpar = (x: number) => (x % 2 === 0 && "Par") || "Impar";
const result4 = parImpar(83);
console.log("input 4: 85");
console.log("Resultado 4: ", result4);

//==============================================================================

// 5. Hacer una función capaz de saber si un número es primo o no ==============
// Ej: in: 4; out: 'no es primo'

// CODE HERE
const esPrimo = (numero: number) => {
  // Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
};

const result5 = esPrimo(7);
console.log("input 5: 7");
console.log("Resultado 5: ", result5);

//==============================================================================

// 6. Hacer una función que reciba un número, un array, y multipique cada
// elemento del array por el número
// Ej: in: 2, [1, 2, 3]; out: [2, 4, 6]

const multiplicameEste = (x: number, y: number[]) => {
  let results: number[] = [];
  y.forEach((num) => {
    results.push(x * num);
  });
  return results;
};

const result6 = multiplicameEste(2, [3, 4, 5]);
console.log("input 6: 2, [3, 4, 5] ");
console.log("Resultado 6: ", result6);

// CODE HERE

//==============================================================================

// 7. Hacer una función que reciba un array de números y lo devuelva ordenado
// de mayor a menor
// Ej: in: [5, 3, 4, 1, 2]; out: [5, 4, 3, 2, 1]

// CODE HERE
const ordenDescendiente = (numeros: number[]): number[] => {
  return numeros.sort((a, b) => b - a);
};

const result7 = ordenDescendiente([2, 5, 7, 3, 84, 54, 23, 12]);
console.log("input 6: [2, 5, 7, 3, 84, 54, 23, 12] ");
console.log("Resultado 7: ", result7);

//==============================================================================

// 8. Hacer una función que reciba un array de números y devuelva solo los
// mayores de 5, si no hay ninguno devolver un mensaje de error
// Ej: in: [1, 2, 3, 4, 5, 6, 7, 8, 9]; out: [6, 7, 8, 9]
// Ej: in: [1, 2, 3, 4, 5]; out: 'No hay números mayores a 5'

// CODE HERE
const mayorQueCinco = (numeros: number[]): number[] | string => {
  let results: number[] = numeros.filter((num) => num > 5);

  return results.length > 0 ? results : "No hay números mayores a 5";
};

const result8 = mayorQueCinco([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("input 8: [1, 2, 3, 4, 5, 6, 7, 8, 9]");
console.log("Resultado 8: ", result8);

//==============================================================================

// 9. Hacer una función que reciba un array de números y devuelva su suma total
// Ej: in: [1, 2, 3, 4, 5]; out: 15

// CODE HERE
const sumAll = (array: number[]) => {
  let total: number = 0;
  array.forEach((num) => {
    total += num;
    return total;
  });
};

const result9 = sumAll([1, 2, 3, 4, 5]);
console.log("input 9: [1, 2, 3, 4, 5]");
console.log("Resultado 9: ", result9);

//==============================================================================

// 10. Hacer una función que reciba un entero n y un array de números. La función
// debe devolver un array con los n primeros números del array
// Ej: in: 3, [1, 2, 3, 4, 5]; out: [1, 2, 3]

// CODE HERE
const soloLosPrimeros = (x: number, y: number[]) => y.splice(0, x);

const result10 = soloLosPrimeros(3, [5, 3, 4, 1, 2]);
console.log("input 10: [5, 3, 4, 1, 2]");
console.log("Resultado 10: ", result10);

//==============================================================================

// 11. Hacer una función que reciba un entero n y un array de números. La función
// debe devolver el array muktiplicando solo los números pares
// Ej: in: 3, [1, 2, 3, 4, 5]; out: [1, 4, 3, 8, 5]

// CODE HERE
export const multiplicaPares = (n: number, numeros: number[]): number[] => {
  return numeros.filter((num) => num % 2 === 0).map((num) => num * n);
};
const result11 = multiplicaPares(2, [5, 6, 3, 2, 9]);
console.log("input 11: [5, 6, 3, 2, 9]");
console.log("Resultado 11: ", result11);

//==============================================================================

// 12. Hacer una función que pueda jugar piedra papel o tijera, la función debe
// recibir un string con la jugada del jugador 1 (humano) y debe elegir una
// jugada aleatoria para el jugador 2 (computadora). La función debe devolver la
// jugada que la computadora eligió y el resultado de la partida (ganador).

// Ej: in: 'piedra'; out: 'computadora: papel, ganador: computadora'

// CODE HERE

//==============================================================================
