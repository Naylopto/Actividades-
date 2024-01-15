// Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.

// Perfil de usuario
/**
 * nombre de usuario
 * edad
 * lista peliculas favoritas
 */


/*let nombreUsuaro = prompt('ingrese usuario');
let edadUsuario = prompt('edad');
let peliculasFav = prompt('ingrese peliculas favoritas, favor de separar con "," ')


const listaPeliculas = peliculasFav.split(',');

console.log('Perfil de usuario')
console.log('nombre de usuario: ' + nombreUsuaro);
console.log('Edad: ' + edadUsuario, 'años');

function imprimirPeliculas(peliculas) {
    
    for(let i = 0; i < peliculas.length; i++){
        console.log('la pelicula ' + peliculas[i] + ' es una de mis favoritas.');
        
    }
    return
} 
 this.imprimirPeliculas(listaPeliculas)*/

// Número más alto
// Escribe un programa que pida 10 números. Usando operadores lógicos y cualquier otra función/estructura javascript que 
//hayas visto antes, determina y da como salida el mayor de esos números.

let numbers = prompt(" ingrese 10 numeros diferentes separados por una coma")
const numbersList = numbers.split(',');

if (numbersList.length < 10 ){
    numbers = prompt('Hacen falta numeros, ingresa 10 numeros')
} else if(numbersList.length > 10) {
    numbers = prompt('ingreso mas de 10 numeros, favor de corregir')
}

//console.log(numbersList);
const parseNumber = numbersList.map((x) => parseInt(x));
//console.log(parseNumber);
parseNumber.sort(function (a, b) {
  return a - b;
 });
console.log('el numero mas alto es: ' + parseNumber[parseNumber.length-1]); 

    







// Alarma
// Escribe un programa que pregunte al usuario la cantidad de segundos necesarios hasta que se ejecute 
//una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
// Ejemplo de resultado: "Hora de dormir después de 10 segundos".

// Palíndromo
// Escribe un programa que pregunte por una palabra o frase (puede ir en mayúsculas, tener espacios y signos de puntuación). 
//Averigua si la frase/palabra es un palíndromo o no. Ignora la puntuación, los espacios y las mayúsculas.

// Factorial
// Escribe un programa que te pida un número entero n. Donde 1 <= n. Resuélvelo usando recursividad.

// Matriz plana
// Escribe un programa que tome la siguiente matriz anidada y la aplane (la convierta en una matriz 1D). Usa cualquier tipo de algoritmo que quieras como callbacks, recursión, etc...

// let multiDimension = [1, [2, 3, [4, 5, [6]]]];