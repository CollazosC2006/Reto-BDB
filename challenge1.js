const readline = require('readline');

// Configuración de entrada y salida para leer del terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para pedir el tamaño del vector y validarlo
function solicitarTamanioVector() {
    rl.question('Introduce el tamaño del vector (n <= 100): ', (n) => {
        n = parseInt(n, 10);
        if (isNaN(n) || n > 100 || n <= 0) {
            console.log('El valor debe ser un número entre 1 y 100.');
            return solicitarTamanioVector(); // Pedir de nuevo si no es válido
        }

        const vector = generarVectorAleatorio(n);
        console.log('Vector generado:', vector);

        processAndReverseList(vector,S);

        rl.close();
    });
}

// Función para generar el vector con números aleatorios
function generarVectorAleatorio(n) {
    const vector = [];
    for (let i = 0; i < n; i++) {
        vector.push(Math.floor(Math.random() * 100)); // Números entre 0 y 99
    }
    return vector;
}

function processAndReverseList(numbers, S) {
    const result = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        let number = numbers[i]
            .toString()                // Convierte el número a cadena
            .split('')                 // Divide la cadena en caracteres individuales
            .filter(digit => parseInt(digit, 10) < S) // Filtra los dígitos menores a S
            .join('');                 // Une los dígitos restantes en una nueva cadena
        
        if (number !== '') {           // Si el número no está vacío
            result.push(parseInt(number, 10)); // Lo convierte nuevamente a número y lo guarda
        }
    }
    
    console.log(result);               // Imprime el resultado final
}

// Ejemplos
const S=7;
processAndReverseList([1, 2, 3, 4, 7, 5], S); // Salida: [5, 4, 3, 2, 1]
processAndReverseList([10, 20, 30, 40], S);   // Salida: [40, 30, 20, 10]
processAndReverseList([7], S);                // Salida: []
processAndReverseList([77], S);               // Salida: []
processAndReverseList([75], S);               // Salida: [5]
processAndReverseList([7, 2, 1], S);          // Salida: [1, 2]
processAndReverseList([70, 7, 5, 4, 3, 2, 7, 7, 29, 1], S); // Salida: [1, 2, 2, 3, 4, 5, 0]


// Inicia el programa
solicitarTamanioVector();


