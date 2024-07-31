let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; // Salta al siguiente ciclo sin continuar
    }

    if (i === 4) {
        break; // Termina ciclo 
    }
    console.log(i);
    
    }

// Esto funciona para todos los loops (while, do while, for...)