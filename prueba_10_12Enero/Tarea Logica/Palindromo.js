// Palíndromo
// Escribe un programa que pregunte por una palabra o frase (puede ir en mayúsculas, tener espacios y signos de puntuación). 
//Averigua si la frase/palabra es un palíndromo o no. Ignora la puntuación, los espacios y las mayúsculas.

function limpiarDatos (datos1) {
    return datos1.replace(/[^a-zA-Z]/g, '').toLowerCase();
}

function esPalindromo(datos) {
    let inicio = 0;
    let fin = -1;

    while (inicio < fin) {
        if (datos [inicio] !== cadena[fin]) {
            return false;
        }
        inicio++;
        fin--;
    }
    return true;
}

function main() {
    let entrada = prompt('ingrese una frase que se lea de la misma forma al derecho y al revez');

    let cadenaOrdenada = limpiarDatos(entrada);

    if (esPalindromo(cadenaOrdenada)){
        console.log(' es un palindromo.');
    } else {
        console.log('No es un palindromo.')
    }
}