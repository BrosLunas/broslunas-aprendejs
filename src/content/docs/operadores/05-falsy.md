---
title: Falsy
description: Los operadores Falsy.
---
## Operador lógico AND `&&` 
```js {4, 9, 13} title="05-falsy.js (Ejemplo AND "&&")"
// Ejemplo con AND = &&
function fn1() {
    console.log('soy función 1');
    return false;
    // Declaramos una función que nos devuelva false
}

function fn2() {
    console.log('soy función 2');
    return true;
    // Declaramos una función que nos devuelva true
}

let x = fn1() && fn2();
// Creamos una variable que diga que si una función sea true nos devuelva ese console log
```
### Resultado
![Console Result](/img/02-operadores/05-falsy-1.png)

## Operador lógico OR `||` 
```js {3} title="05-falsy.js (Ejemplo OR "||")"
// Ejemplo con OR = ||
let nombre = ''; // Creamos una variable sin ningún valor
let username = nombre || 'Username'; // Creamos otra variable que el valor es "nombre" y si esta es igual a "undefined" el valor de username es 'Username'
console.log(username);
```
### Resultado
![Console Result](/img/02-operadores/05-falsy-2.png)

## [Ver Archivo JS](/js/02-operadores/05-falsy.js)
