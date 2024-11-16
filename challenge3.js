function nonConstructibleChange(coins) {
    // Ordena las monedas en orden ascendente
    coins.sort((a, b) => a - b);

    // Inicializa la cantidad mínima de cambio que no se puede crear
    let currentChange = 0;

    // Recorre todas las monedas
    for (const coin of coins) {
        // Si la moneda actual es mayor que el cambio actual + 1, hay un espacio que equivale a un cambio que no se puede dar
        if (coin > currentChange + 1) {
            // Devuelve la primera cantidad de cambio que no se puede crear
            return currentChange + 1;
        }

        // Actualiza el cambio actual al sumar la moneda actual
        currentChange += coin;
    }

    // Si todas las monedas fueron utilizadas y no hay cambios que no se puedan dar menor a la suma de todas las monedas, devuelve el siguiente número
    return currentChange + 1;
}

// Ejemplos de prueba
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // Salida: 20
console.log(nonConstructibleChange([1, 1, 1, 1, 1]));        // Salida: 6
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // Salida: 55
