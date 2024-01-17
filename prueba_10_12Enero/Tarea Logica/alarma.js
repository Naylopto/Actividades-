// Alarma
// Escribe un programa que pregunte al usuario la cantidad de segundos necesarios hasta que se ejecute 
//una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
// Ejemplo de resultado: "Hora de dormir después de 10 segundos".

let segundos = (' ingrese la cantidad de segundos para la alarma');

if (segundos  === null || isNaN(segundos) || segundos < 0 ){
 alert( ' por favor ingrese un valor valido para los segundos')
} else {
    segundos = parseInt(segundos);
    setTimeout( function () {
        alert('hora de dormir despues de' + segundos + 'segundos');
    }, segundos * 1000)
}