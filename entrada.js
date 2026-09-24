const prompt = require('prompt-sync')();
// La consola pausa la ejecución hasta que el usuario escribe y
// presiona Enter
let nombre = prompt("¿Cómo te llamás? ");
console.log("¡Hola, {Daniel elias} Bienvenido a la clase 3.");

let ingresaedad = prompt("ingresa edad: ");
let edad = Number(ingresaedad);
    if(edad>=65){
    console.log(" pagas la mitad de precio 500.");
    }else if(edad>=65){
    console.log("eresmenor es gratis");
    }else if(edad>=6){
}


// ejercicio 2
let total = prompt("ingresa tu nota final:")
let nota = Number(total)
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Sobresaliente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
// ejercicio3
let promedio = prompt("ingresa promedio:");
let meses = prompt("ingresa ingresos:")
let beca = Number(promedio)
let ingresos = Number(meses)
if(promedio>=9.0 && meses>=500) {
    console.log("tiene el 100 porciento de beca");
}else if (promedio>=8.0 && meses>=300){
    console.log("tienes el 50 porciento de la beca");
}else {
 console.log("no tienes beca")
}





