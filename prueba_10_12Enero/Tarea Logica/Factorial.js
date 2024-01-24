//Factorial
// Escribe un programa que te pida un número entero n. Donde 1 <= n. Resuélvelo usando recursividad.

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

let numero = parseInt(prompt("Ingrese un número entero mayor o igual a 1:"));

if (!isNaN(numero) && numero >= 1) {
    let factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${factorial}`);
} else {
    console.log("Entrada no válida. ingrese un número entero mayor o igual a 1.");
}
