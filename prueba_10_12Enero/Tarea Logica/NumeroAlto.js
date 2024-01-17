// Número más alto
// Escribe un programa que pida 10 números.
// Determinar y dar como salida el mayor de esos números.

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