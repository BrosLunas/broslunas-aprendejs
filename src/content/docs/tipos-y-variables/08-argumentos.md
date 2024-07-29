---
title: Argumentos
description: Los argumentos son propiedades que vamos a pasar a una función.
---
## Qué es un argumento
Los argumentos son propiedades que vamos a pasar a una función.

## Crear una función con un argumento
```js title="08-argumentos.js (Crear función + argumentos)"
// Creamos el parámetro 'a'
function sumar(a) {
    return a + 5;
}
```
Con eso hemos creado una función en la que el valor `a` no esta definido.

### Añadir el valor a el argumento `a`
```js {6} title="08-argumentos.js (Añadir valor a el argumento)"
// Creamos el parámetro 'a'
function sumar(a) {
    return a + 7;
}

let resultado = sumar(5); // El valor que se encuentra entro los paréntesis, es el valor de "a"
console.log(resultado); // Imprimimos el resultado en la consola
```

### Resultado
![Console Result](/img/01-tipos-y-variables/08-argumentos-1.png)

## Añadamos mas argumentos a la función
```js {6} title="08-argumentos.js (Añadir mas argumentos)"
// Creamos el parámetro 'a' y 'b'
function sumar(a, b) {
    console.log(arguments); // Ver todos los argumentos
    return a + b;
}

let resultado = sumar(5, 4);
console.log(resultado); // Imprimimos el resultado en la consola
```
Ahora con esto visualizaremos cuales son todos los argumentos de esta función y el resultado al haber añadido el valor `b`

### Resultado
![Console Result](/img/01-tipos-y-variables/08-argumentos-2.png)