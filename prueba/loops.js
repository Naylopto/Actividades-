console.log('archivo de loops');

// Bucle 
//Algo que se repite 

const names = ["Nayeli", "Zabdiel", "Yare", "Aridai", "Fernando"];
console.log(names.length)

// for es un punto incial 
// for (let count = 0; count < names.length; count++){
//  console.log(names [count]);
// }

// for (let i = 1500; i => 0; i--) {
//     console.log(i);
// }

for (let i = 0; i <= names.length - 1; i++){
    console.log(names[i]);
}

// while este siempre confirma y despues realiza
let count = 10;
while(count <= 10){
    console.log(count);
    count++;
}
// al poner la funcion true se volvera infinito o tambien se puede poner infinito de una sola 
//pero no lo hagas o morira la compu 

// while (true){
//     console.log(true);
// }


// Do while este realiza y despues lo confirma
do {
    console.log(count);
    count++;

} while (count < 1); 

// forEach
// este es un metodo y dentro de esto siempre lleva una funcion
// esta no lleva nombre ni dimencion es anonima
// realiza un rpcedimiento / bloque 
// de codigo por cada  elemento de un array
// el bloque de codigo dentro de un forEach puede
// ser cualquier instruccion

names.forEach(name => console.log (name));

function printName(name){
    console.log(`user name ${name}`)
}
names.forEach((user) => {
    printName(user)
})

// funcion que use loops y que resulte en factorial de un numero n donde 
// 1000 > n > 0 

const n = 5;

const calcFact = (number) => {
    let res = 1;
    for (number; number >= 1; number--) {
        res*= number;
    }
    return res;
}

console.log(calcFact(n));

// Recursividad 
 const factorial = (num) => {
    if (num === 1){
        factorial (num*num -1);
    }
    return num;
 }


