let names = ["Nayeli", "Byan", "Teodora"];
let numbers = [ 10, 5, 20.2, -52];
let mix = ["Nayeli", 10, 20, "lopez", "Generation Mexico", true];
let boolean = [true, false, true, false];

// Acceder a la info de un array 
// 
const userData = [ " Alondra Lopez", 28, "Generation Mexico", "NIN"];

//print
console.log(userData);

//longitud
const arrlength = userData.length;

console.log(userData.length);
console.log(arrlength)

// indices y/o posiciones son diferente a la longitud 
// indicamos la posicion dentro de corchetes

console.log(userData[3])
const userName = userData [0];
 console.log(`mi nombre es : ${userName}`);

 const matrix = [[-1, 0], [1, -1]];

 // Eje x y eje Y
 console.log(matrix [0][1]);

 //coordenadas de nombre 
 const london =[[51, "30'30 N'"],[ 0, " 7' 32 O'"]];
 
 // pop elimina el ultimo dato que encuentre en un array 
 userData.pop()
 console.log(userData);

 userData.push("ABBA");
 console.log(userData);

 // join une los elementos con el caracter o string que indiquemos 
 console.log(userData.join(""));

 // shift elimina el primer elemento y acomoda el resto 
 console.log(userData.shift());
 console.log(userData);

 // unshift agrega dato a inicio del array
 console.log(userData.unshift("kuromi", "sakura"));
 console.log(userData);

 