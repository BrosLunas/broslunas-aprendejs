---
title: Asignación
description: Los operadores de Asignación
---
## Creamos las operaciones
Los operadores de Asignación, son diferentes formas de calcular diferentes operaciones.
```js title="02-asignacion.js"
// Creamos las variables
let a = 5;
let b = 5;
let c = 5;
let d = 5;
let e = 5;
let f = 5;

// Las operamos
a += 5; // Sumar 5 a la variable 'a'
b -= 5; // Restar 5 a la variable 'a'
c *= 5; // Multiplicar 5 a la variable 'a'
d /= 5; // Dividir 5 a la variable 'a'
e %= 5; // Módulo 5 a la variable 'a'
f **= 5; // Potencia 5 a la variable 'a'
```
## Añadimos el `console.log`
```js {17, 18, 19, 20, 21, 22} title="02-asignacion.js (console.log)"
// Creamos las variables
let a = 5;
let b = 5;
let c = 5;
let d = 5;
let e = 5;
let f = 5;

// Las operamos
a += 5; // Sumar 5 a la variable 'a'
b -= 5; // Restar 5 a la variable 'a'
c *= 5; // Multiplicar 5 a la variable 'a'
d /= 5; // Dividir 5 a la variable 'a'
e %= 5; // Módulo 5 a la variable 'a'
f **= 5; // Potencia 5 a la variable 'a'

console.log('Sumar: ', a);
console.log('Restar:', b);
console.log('Multiplicar:', c);
console.log('Dividir: ', d);
console.log('Módulo: ', e);
console.log('Potencia: ', f);
```
### Resultado
![Console Result](/img/02-operadores/02-asignacion.png)

## [Ver Archivo JS](/js/02-operadores/02-asignacion.js)
