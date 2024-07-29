---
title: Primitivos
description: Tipos de variables primitivas (son estáticas).
---

## Cuales son las variables Primitivas
Las variables  primitivas son las siguientes:
- Number
- String
- Boolean
- Undefined
- Null

```js title="02-primitivos.js"
let numero = 1; // Number
let texto = "Esto es un string"; // String

let verdadero = true; // Boolean
let falso = false; // Boolean

let noDefinido; // Undefined
let undef = undefined; // Undefined

let nulo = null; // Null
```

Si le añadimos a cada uno de estos un `console.log()`.

```js {12, 13, 14, 15, 16, 17} title="02-primitivos.js (+ console.log)"
let numero = 1; // Number
let texto = "Esto es un string"; // String

let verdadero = true; // Boolean
let falso = false; // Boolean

let noDefinido; // Undefined
let undef = undefined; // Undefined

let nulo = null; // Null

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(falso);
console.log(undef);
console.log(nulo);
```
El resultado de este `console.log()`
![Console](/img/01-tipos/02-primitivos.png)