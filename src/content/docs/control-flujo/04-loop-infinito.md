---
title: Loop Infinito
description: El loop infinito, es un error muy básico, pero hay que tener muchísimo cuidado con el.
---
:::caution
  Este loop infinito hará que tu navegador deje de funcionar, por lo que tenga demasiado cuidado al ejecutarlo
:::

## Qué es un Loop Infinito
El loop infinito, es un error muy básico, pero hay que tener muchísimo cuidado con el.

## Ejemplo
```js title="04-loop-infinito.js"
let i = 0;

while (i <= 20) {
    console.log('Número par: ', i);
}
```
### Resultado
![Console Result](/img/03-control-flujo/04-loop-infinito.png)

## [Ver Archivo JS](/js/03-control-flujo/04-loop-infinito.js)
