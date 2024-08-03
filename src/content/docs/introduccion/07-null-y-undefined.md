---
title: Null y Undefined
description: La particularidad de estos dos tipos de datos es que cada uno sólo tiene un valor. El tipo null sólo puede tener el valor null y el tipo undefined sólo puede tener el valor undefined.
---

¿Recuerdas que te he comentado que existen diferentes tipos de datos en JavaScript? Hemos visto números, cadenas de texto y booleanos.

En esta clase vas a aprender otros dos tipos de datos que, aunque son similares, tienen ligeras diferencias. Son null y undefined.

La particularidad de estos dos tipos de datos es que cada uno sólo tiene un valor. El tipo null sólo puede tener el valor null y el tipo undefined sólo puede tener el valor undefined.

:::note
Es como el tipo booleano que podía ser true y false pero, en este caso, sólo tiene un valor.

:::

## La diferencia entre null y undefined
Mientras que null es un valor que significa que algo no tiene valor, undefined significa que algo no ha sido definido. Por ejemplo, si creamos una variable sin asignarle ningún valor, su valor será undefined:

```js title="Undefined"
let rolloDePapel // -> undefined
```
También podemos asignar directamente el valor undefined a una variable:

```js title="Asignar Undefined"
let rolloDePapel = undefined // -> undefined
```

En cambio, para que una variable tenga el valor null, sólo podemos conseguirlo asignándole explícitamente ese valor:

```js title="Null"
let rolloDePapel = null
```
Un caso bastante ilustrativo para entender la diferencia entre null y undefined es el siguiente:

![Null y Undefined](/assets/img/introduccion/null-undefined.jpg)

## Comparaciones con null y undefined
Al usar la igualdad estricta que hemos visto en la clase anterior, null y undefined son considerados diferentes entre sí:

```js title="Comparar null y undefined"
null === undefined // -> false
```

Sólo cuando comparamos null con null o undefined con undefined obtenemos true:
```js title="Comparar null y undefined"
null === null // -> true
undefined === undefined // -> true
```
