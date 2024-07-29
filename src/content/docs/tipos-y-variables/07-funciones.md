---
title: Funciones
description: Las funciones son listas de tareas que el navegador ejecutara.
---
## Qué es una función
Una función es una lista de tareas que el navegador ejecutara.

## Crear una función
```js title="07-funciones.js (Crear función)"
// Crear función
function saludar() {
    console.log('Te saludo bro!');
}
```
Con eso simplemente hemos creado la función, pero esta no se ejecutara hasta que la llamemos.

## Ejecutar una función
```js {6} title="07-funciones.js (Ejecutar función)"
// Crear función
function saludar() {
    console.log('Te saludo bro!');
}

saludar();
```

### Resultado
![Console Result](/img/01-tipos-y-variables/07-funciones-1.png)
Muy bien una vez ya ejecutada la función, profundicemos un poco mas, creando otra función

## Crear función Sumar
```js title="07-funciones.js (Crear función sumar)"
function sumar() {
    return 2 + 2 - 180;
}
```
Una vez creada veremos diferentes métodos para poder ejecutarla

### Método 1
```js {5, 6} title="07-funciones.js (console.log #1)"
function sumar() {
    return 2 + 2 - 180;
}

let resultado = sumar(); // Definimos que resultado es lo mismo que sumar
console.log(resultado)
```
Con este método lo que hacemos es igualar `resultado`, con el valor que nos proporciona la función `sumar()`

### Método 2
```js {5} title="07-funciones.js (console.log #2)"
function sumar() {
    return 2 + 2 - 180;
}

console.log(sumar())
```
Con esto lo que hacemos es que nos imprima directamente la función en la consola.

### Resultado
El resultado de ambos métodos es el mismo.
![Console Result](/img/01-tipos-y-variables/07-funciones-2.png)