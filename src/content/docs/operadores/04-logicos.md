---
title: Lógicos
description: Los operadores Lógicos son los que se utilizan de forma lógica, como el "y", "o", entre otros.
---

## Que son los operadores Lógicos
Los operadores Lógicos son los que se utilizan de forma lógica, como el "y", "o", entre otros.

## Operador lógico AND `&&` 
```js {5} title="04-logicos.js (AND "&&")"
let mayor = false;
let suscrito = true;

// AND = &&
console.log('Operador AND: ', mayor && suscrito); // false
// El operador AND, devuelve "true", solo cuando ambas variables es true, si alguna de estas es false, el operador AND, devuelve "false"
```
### Resultado
![Console Result](/img/02-operadores/04-logicos-1.png)

## Operador lógico OR `||` 
```js {8} title="04-logicos.js (OR "||")"
let mayor = false;
let suscrito = true;

// AND = &&
console.log('Operador AND: ', mayor && suscrito); // false

// OR = ||
console.log('Operador OR: ', mayor || suscrito); // true
// El operador OR, devuelve "true", solo cuando una o mas variables es true, si ambas son false, el operador OR, devuelve "false"
```
### Resultado
![Console Result](/img/02-operadores/04-logicos-2.png)

## Operador lógico NOT `!` 
```js {11} title="04-logicos.js (NOT "!")"
let mayor = false;
let suscrito = true;

// AND = &&
console.log('Operador AND: ', mayor && suscrito); // false

// OR = ||
console.log('Operador OR: ', mayor || suscrito); // true

// NOT = !
console.log('Operador NOT: ', !mayor); // Devuelve lo contrario
// El operador NOT, devuelve el valor contrario al que contiene la variable. 
```
### Resultado
![Console Result](/img/02-operadores/04-logicos-3.png)

## [Ver Archivo JS](/js/02-operadores/04-logicos.js)
