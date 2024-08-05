---
title: Bucles con Do While
description: Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.
---

<video class="container video" controls>
    <source src="/assets/video/estructuras-de-control/do-while.mp4" type="video/mp4">
</video>

Aunque no es muy famoso ni muy utilizado, es interesante que sepas que existe en JavaScript un bucle que se ejecuta al menos una vez, y luego se repite mientras se cumpla una condición. Este bucle se llama do while y tiene la siguiente sintaxis:

``` js title="Do While"
do {
  // código que se ejecuta al menos una vez
} while (condición);
``` 

Vamos a aprovechar para hacer más interesante la clase. Por eso te voy a presentar una función integradas en JavaScript que nos van a dar mucho juego: confirm.

## confirm
La función confirm muestra un cuadro de diálogo con dos botones: "Aceptar" y "Cancelar". Si el usuario pulsa "Aceptar", la función devuelve true. Si pulsa "Cancelar", devuelve false.
``` js title="Confirm"
confirm("¿Te gusta JavaScript?");
```

Llamar a la función confirm es una expresión y, por lo tanto, produce un valor que podemos guardar en una variable.
``` js title="Confirm Ejemplo"
let respuesta = confirm("¿Te gusta JavaScript?")
console.log(respuesta) // -> true o false
```

## Usando do while
Vamos a hacer un programa que saldrá de un bucle do while cuando el usuario pulse "Cancelar" en el cuadro de diálogo que muestra la función confirm.
``` js title="Do While Ejemplo"
let respuesta

do {
  respuesta = confirm("¿Te gusta JavaScript?");
} while (respuesta)
```

:::tip
¿Por qué hay que poner la variable respuesta fuera? Porque si no, no podría ser usada en la condición del bucle. Ya vas viendo lo que comentámos antes del ámbito de las variables.
:::

Si el usuario pulsa "Aceptar", la variable respuesta valdrá true y el bucle se repetirá. Si el usuario pulsa "Cancelar", la variable respuesta valdrá false y el bucle se detendrá.