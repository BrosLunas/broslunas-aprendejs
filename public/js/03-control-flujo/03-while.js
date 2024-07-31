// While Loop

// dime 10 números pares
let i = 0;

while (i <= 20) { // Si 'i' es menor o igual que que 20 se detiene el loop
    if (i % 2 == 0) { // Si 'i' es un numero par
        console.log('Número par: ', i);
    }
    i++; // Incrementamos el valor
}
console.log('He terminado el while'); // Aviso de que se ha terminado el while