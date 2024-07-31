---
title: While
description: El controlador While, sirve para repetir una acción hasta que tu decidas que termine.
---
## Qué es el controlador While
El controlador While, sirve para repetir una acción hasta que tu decidas que termine.

## Ejemplo
```js title="03-while.js"
let i = 0; // Creamos la variable 'i'

while (i <= 20) { // Si 'i' es menor o igual que que 20 se detiene el loop
    if (i % 2 == 0) { // Si 'i' es un numero par
        console.log('Número par: ', i);
    }
    i++; // Incrementamos el valor
}
console.log('He terminado el while'); // Aviso de que se ha terminado el while
```
### Resultado
![Console Result](/img/03-control-flujo/03-while.png)

## [Ver Archivo JS](/js/03-control-flujo/03-while.js)
