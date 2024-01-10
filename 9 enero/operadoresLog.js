
// operadores logicos 
/**
 *  && (y) se deben de cumplir las dos condiciones si no es false
 *  || (o) se debe cumplir alguna de las dos si ninguna se cumple es false
 * 
 */

// operadores de comparacion
/**
 *  == igual que                     1==1     true
 * === igual en valor o tipo         1==='1'  false
 * !=   diferente de                 1 != 2   true
 * !==  es diferente en valor y tipo 1 !== '1' true
 * >    mayor que                    
 * <    menor que
 * >=  mayor o igual que 
 * <=  menor o igual que  
 */

// alert("control de flujo")
// control de flujo (if-else)
/**
 * 
 * pasos para aclarar una estructura if - else
 * 
 * 1. palabras reservadas (if)
 * 2. Establecer una condicion ()
 * 3. delimitar el bloque que se ejecuta si la condicion se cumple 
 */


//let n = 5;
//let n = 15;
//let n = 20;
//let n = 25;
//

// condicion que evalue si un numeo con el nombre de mi variable es mayor que 10
// if(n>=10){ 
//     console.log("el numero cumple la condicion")
// } else {
//     console.log("no cumple la condicion")

// }
// condicion que evalue si 'n' es mayor que 10 y menor que '20'
// if(n>10 && n<20){ 
//     console.log("el numero cumple la condicion")
// } else {
//     console.log("no cumple la condicion")

// }

//si mi condicion es mayor a 10 o menor a 20 
//si mi condicionen es mayor que 10 y mayor que 20
//si mi numero es igual a 10
//si mi numero es igual a 20
// si mi numero no es mayor que 10 ni mayor que 20

// if(n>10 && n<20){
//     console.log("El numero es mayor que 10 y menor que 20")
// } else if(n>20){
//     console.log("El numero es mayor a 20")
// } else if(n === 10){ 
//  console.log("El numero es igual a 10")
// } else if( n === 20){
//     console.log("El numero es igual a 20")
// } else {
//     console.log("El numero no se encuentra dentro del rango")
// }

// Operador ternario
// version compacta de if- else
/**
 * Declaracion de un operador ternaio
 * 
 * 1. let para comernzar su declaracion
 * 2. asignar un nombre
 * 3. asignar un valor = 
 * 4. establecer una condicion
 * 
 * 
*/
//let calificacion = 5 ;

// Operador que me permita evaluar si una calificacion es aprobatoria
// let evaluarCalificacion = calificacion >= 7 ? "aprovado": "reprobado "
// console.log(evaluarCalificacion)

// if(calificacion >= 7){
//     console.log("aprobado")
// }else {
//     console.log("reprobado")
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Switch

/**
 * 1. palabra reservada 
 * 2. abrir parentecis () a este parentesis se le llama caso 
 * 3. abrir llaves que delimiten mi codigo {}
 * 
 */

let color = "verde";
function adinivarColor(color){
    
    switch(color.toLowerCase()){

        case "rojo":
            console.log("Tu color es rojo")
        break;
    
        case "verde":
            console.log("Tu color es verde")
        break;
    
        case "azul":
            console.log("Tu color es azul")
        break;
    
        default:
            console.log("No conozco ese color")
        break;
}

}
// Realizar una funcion que evalue si un numero es par o impar

function parImpar(numero){
    if(numero%2===0){
        console.log(`tu numero ${ numero} es par`)
    } else {
        console.log(`tu numero ${ numero} es impar `)
    }
}

//console.log(color.toLowerCase());

