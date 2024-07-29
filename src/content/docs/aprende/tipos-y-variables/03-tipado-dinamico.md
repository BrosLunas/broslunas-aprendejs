---
title: Tipado Dinámico
description: Tipos de variables primitivas (son estáticas).
---

## Que es el **tipado dinámico**
El tipado dinámico, es un atributo que nos permite ver que tipo de variable estamos usando

## Ejemplo
```js title="03-tipado-dinamico.js"
let numero = 1;
let nombre = "Gustavo";
let verdadero = true;
let undef;
let nulo = null

console.log(typeof nombre); // string
console.log(typeof numero); // number
console.log(typeof verdadero); // boolean
console.log(typeof undef); // undefined
console.log(typeof nulo); // null --> object
```
## Resultado
Al visualizar la consola del navegador obtendremos los siguientes datos del `console.log()`.

![Console Result](/img/01-tipos-y-variables/03-tipado-dinamico.png)

Como podemos observar, `null` nos esta devolviendo que es un `object`, mas adelante podremos observar porque sucede esto.