---
title: Do While
description: El controlador Do While, es muy parecido al while, la única diferencia es que la verificación del loop se realiza al final de la vuelta.
---
## Qué es un Loop Infinito
El controlador Do While, es muy parecido al while, la única diferencia es que la verificación del loop se realiza al final de la vuelta.

## Ejemplo
```js title="05-do-while.js"
let i = 0;

do { // Primero se ejecuta el código
    if (i % 2 == 0) { 
        console.log('Número par: ', i);
    }
    i++; 
} while (i < 20); // Luego se verifica la condición, si esta se cumple se vuelve a ejecutar
```
### Resultado
![Console Result](/img/03-control-flujo/05-do-while.png)

## [Ver Archivo JS](/js/03-control-flujo/05-do-while.js)
