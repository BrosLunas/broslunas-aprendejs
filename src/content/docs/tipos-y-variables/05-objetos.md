---
title: Objetos
description: Los objetos son conjuntos de variables, las cuales puedes llamar de diferentes maneras.
---

## Crear un objeto

```js title="05-objetos.js (Crear objeto)"
// Creamos las variables para Personaje Minecraft
let nombre = "Steave";
let juego = "Minecraft";
let edad = 21;

// Juntamos las variables para crear un objeto
let personaje = {
    nombre,
    juego: "Fortnite", // Cambiar el valor
    edad,
};
```

## Como podemos llamar a cada variable o al objeto
```js title="05-objetos.js (Console Result Log)"
console.log(personaje); // Ver todos los valores
console.log(personaje.nombre); // Ver el valor seleccionado

personaje.juego = "Call of Duty"; // Cambiar valor

console.log(personaje.juego); // Ver el nuevo valor

delete personaje.juego; // Eliminar la variable

console.log(personaje); // Verificar si la variable está eliminada
```

## Resultado
![Console Result Result](/img/01-tipos-y-variables/05-objetos.png)

## [Ver Archivo JS](/js/01-tipos-y-variables/05-objetos.js)