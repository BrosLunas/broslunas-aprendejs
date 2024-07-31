let i = 0;

do { // Primero se ejecuta el código
    if (i % 2 == 0) { 
        console.log('Número par: ', i);
    }
    i++; 
} while (i < 20); // Luego se verifica la condición, si esta se cumple se vuelve a ejecutar