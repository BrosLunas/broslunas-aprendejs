---
title: Else
description: El controlador Else, sirve para cuando el controlador if es true realizar dicha acción.
---
## Qué es el controlador Else
El controlador Else, sirve para cuando el controlador if es true realizar dicha acción.

## Ejemplo 1
```js title="02-else.js (Ejemplo 1)"
let edad = 15;

if (edad >= 18) { // Si edad es igual o mayor que 18
    console.log("Eres mayor de edad ✅");
} else { // Si edad es menor a 18
    console.log("Eres menor de edad ❌");
}
```
### Resultado
![Console Result](/img/03-control-flujo/02-else-1.png)

## Ejemplo 2
```js title="02-else.js (Ejemplo 2)"
let edad = 15;

if (edad >= 18) { // Si edad es igual o mayor que 18
    console.log("Eres mayor de edad ✅");
} else if (edad >= 13){ // Si edad es menor a 18 y mayor o igual a 13
    console.log("Eres menor de edad. Necesitas a un mayor de edad ⚠️");
} else { // Si edad es menor a 13
    console.log("Tienes menos de 13 años ❌");
}
```
### Resultado
![Console Result](/img/03-control-flujo/02-else-2.png)

## [Ver Archivo JS](/js/03-control-flujo/02-else.js)
