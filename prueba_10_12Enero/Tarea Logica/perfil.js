// Perfil de usuario
/**
 * nombre de usuario
 * edad
 * lista peliculas favoritas
 */

let nombreUsuaro = prompt('ingrese usuario');
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
 this.imprimirPeliculas(listaPeliculas)