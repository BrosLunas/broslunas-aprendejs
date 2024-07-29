---
title: Arrays
description: Los arrays son cadenas de texto, unidas en un mismo objeto.
---

## Crear un array

```js title="06-arrays.js (Crear array)"
let animales = ['perro', 'gato']; // Crear un array
```

## Como visualizar un array
```js {3, 4} title="06-arrays.js (Console Log)"
let animales = ['perro', 'gato']; // Crear un array

console.log(animales);
console.log(animales[0]); // Visualizar el elemento 0
```

### Resultado
![Console Result](/img/01-tipos-y-variables/06-arrays-1.png)

## Añadir elemento a un array
```js {6, 7} title="06-arrays.js (Console Log)"
let animales = ['perro', 'gato']; // Crear un array

console.log(animales);
console.log(animales[0]); // Visualizar el elemento 0

animales[2] = 'conejo'; // Añadir otro elemento
console.log(animales);
```

### Resultado
![Console Result](/img/01-tipos-y-variables/06-arrays-2.png)

## Ver la longitud de un array
```js {9} title="06-arrays.js (Console Log)"
let animales = ['perro', 'gato']; // Crear un array

console.log(animales);
console.log(animales[0]); // Visualizar el elemento 0

animales[2] = 'conejo'; // Añadir otro elemento
console.log(animales);

console.log(animales.length); // Ver el numero de objetos dentro del array
```

### Resultado
![Console Result](/img/01-tipos-y-variables/06-arrays-3.png)
## [Ver Archivo JS](/js/01-tipos-y-variables/06-arrays.js)