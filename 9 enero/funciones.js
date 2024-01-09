//alert ("200 ok")

// Funciones 

/** 
 * 
 * Declaracion de funciones 
 * 
 * 1 palabra recerbada function
 * 2 designar un nombre y nuestra function
 * 3 colocar parentecis y despues llaves 
 * 
 */

//Funcion sencilla sin parametros no devuelve ningun valor
function miFuncion(){
    
    console.log("Mi primera funcion");
}

// Funcion que salude a quien le mande invocar 
function saludarUsuario(nombre){
    console.log(`hola ${ nombre}`);
}

// function que realice la suma de 4 numeros diferentes
function sumarNumeros(a, b, c, d,){
console.log(`La suma de los numeros es: ${a+ b+ c+ d}`) ;
}

////////////////////////////////////////////

/**
 * 
 * 1. palabra reservada const
 * 2.asignar nombre 
 * 3. operador de asignacion "=" y los parametros ()
 * 4. fat arrow => y llaves {}
 * 
 */
const miFuncionFlecha = () => {
    console.log("Mi primera funcion" + " java script");
}

const sumarNumerosFlecha = ( e, g) => e + g;
