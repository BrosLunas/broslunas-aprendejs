---
title: Variables
description: Una breve introducción de JavaScript.
---

## Como crear variables
Para crear variables, es lo mas básico de todo JS, la forma recomendada de hacerlo es de la siguiente manera:

### Let
let, normalmente se utiliza, para crear variables que puedan ser modificadas a lo largo del código.
```js {8} title="01-variables.js (let)"
let nombre = "Gustavo"; // Declaramos la variable "nombre", con el valor "Gustavo"

let nombreCompleto; // Declaramos la variable "nombreCompleto"
nombreCompleto = "Gustavo Pérez"; // Añadimos el valor a la variable

console.log(nombreCompleto); // Pedimos a la consola que nos muestre los datos
```
### Const
const, en cambio se utiliza para crear variables que no se pueden modificar.

```js {8} title="01-variables.js (const)"
const nombre = "Gustavo"; // Declaramos la variable "nombre", con el valor "Gustavo"

const nombreCompleto; // Declaramos la variable "nombreCompleto"
nombreCompleto = "Completo"; // Añadimos el valor a la variable

console.log(nombreCompleto); // Pedimos a la consola que nos muestre los datos
```