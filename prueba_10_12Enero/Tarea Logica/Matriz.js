// Matriz plana
// Escribe un programa que tome la siguiente matriz anidada y la aplane (la convierta en una matriz 1D). Usa cualquier tipo de algoritmo que quieras como callbacks, recursión, etc...

// let multiDimension = [1, [2, 3, [4, 5, [6]]]];

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function aplanarMatriz(matriz) {
    let resultado = [];

    function aplanar(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                aplanar(arr[i]);
            } else {
                resultado.push(arr[i]);
            }
        }
    }

    aplanar(matriz);
    return resultado;
}

let matrizAplanada = aplanarMatriz(multiDimension);
console.log(matrizAplanada);
