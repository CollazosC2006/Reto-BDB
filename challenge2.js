//Codigo MD5 Hash Generado: 7d73355c601923a011833f841075f60c

function sortedSquaredArray(inputArray, S) {
    // Define el rango superior con base en S (SS)
    const upperLimit = Math.pow(S, 2); // Por ejemplo, para S=6, el límite es 6^2 = 36.

    // Eleva los elementos del vector
    const result = squareVector(inputArray);

    // Filtra los elementos que están fuera del rango permitido [0, SS]
    return OrdenarVector(result).filter((value) => value >= 0 && value <= upperLimit);
}

function OrdenarVector(arr) {
    // Recorremos el array varias veces
    for (let i = 0; i < arr.length; i++) {
        // En cada iteración, comparamos elementos adyacentes
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Si un elemento es mayor que el siguiente, los intercambiamos
            if (arr[j] > arr[j + 1]) {
                // Intercambiar valores usando una variable temporal
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Devolvemos el array ordenado
    return arr;
}

function squareVector(vector) {
    // Crea un nuevo vector donde almacenaremos los cuadrados
    const squaredVector = [];
    
    // Recorre el vector original
    for (let i = 0; i < vector.length; i++) {
        // Eleva cada elemento al cuadrado y lo agrega al nuevo vector
        squaredVector.push(vector[i] * vector[i]);
    }
    // Devuelve el vector con los cuadrados
    return squaredVector;
    
}

// Ejemplos de prueba
const S = 7;
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9], S)); // Salida: [1, 4, 9, 25, 36, 64]
console.log(sortedSquaredArray([-2, -1], S));              // Salida: [1, 4]
console.log(sortedSquaredArray([-6, -5, 0, 5, 6], S));     // Salida: [0, 25, 25, 36, 36]
console.log(sortedSquaredArray([-10, 10], S));             // Salida: []
