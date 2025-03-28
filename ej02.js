import { PI, sumar, restar, multiplicar, dividir, numerosTexto } from "./modules/matematica.js";

let numero1 = 10, numero2 = 20;

console.clear();
console.log(`La constante PI vale '${PI}'`);
console.log(`sumar(${numero1}, ${numero2}) = ${sumar(numero1, numero2)}`);
console.log(`restar(${numero1}, ${numero2}) = ${restar(numero1, numero2)}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${multiplicar(numero1, numero2)}`);
console.log(`dividir(${numero1}, ${numero2}) = ${dividir(numero1, numero2)}`);

console.log("Array de números en texto:", numerosTexto);
