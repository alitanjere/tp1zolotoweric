import Alumno from "./modules/alumno.js";

let alumno1 = new Alumno("Esteban Dido", "22888444", 20);
let alumno2 = new Alumno("Matias Queroso", "28946255", 51);
let alumno3 = new Alumno();
alumno3.username = "Elba Calao";
alumno3.dni = "32623391";

console.clear();
console.log(alumno1.toString());
console.log(alumno2.toString());
console.log(alumno3.toString());
