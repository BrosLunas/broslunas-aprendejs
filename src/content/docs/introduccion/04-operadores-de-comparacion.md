---
title: Los operadores de comparación
description: Los operadores de comparación en JavaScript nos permiten comparar dos valores.
---

<video class="container video" controls>
    <source src="/assets/video/introduccion/operadores-de-comparacion.mp4" type="video/mp4">
</video>

Los operadores de comparación en JavaScript nos permiten comparar dos valores. Siempre devuelven un valor booleano (true o false).
Por ejemplo, podemos comparar si un número es mayor que otro con el operador >, o si un número es menor que otro con el operador <.
```js title="Mayor o Menor"
5 > 3 // true
5 < 3 // false
```
También tenemos los operadores >= y <= que nos permiten comparar si un número es mayor o igual que otro, o si un número es menor o igual que otro.
```js title="Mayor o igual, Menor o igual"
5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true
```
Para saber si dos valores son iguales podemos usar el operador === o, para saber si son diferentes, el operador !==.
```js title="Igual"
5 === 5 // true
5 !== 5 // false
```

## Comparando cadenas de texto
No sólo podemos usar los comparadores para comparar números, también podemos usarlos para comparar cadenas de texto y otros tipos de datos.
```js title="Comprar Cadenas de texto"
'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
"JavaScript" !== 'PHP' // true
`Estoy Aprendiendo JavaScript` === 'Estoy Aprendiendo JavaScript' // true
```
:::tip
Fíjate que puedes comparar cadenas de texto que usan comillas simples, dobles o acentos graves. Al final, siguen siendo cadenas de texto y lo importante es que sean iguales.
:::

## ¿Y si usamos el operador > con cadenas de texto?
Aunque no es muy común, podemos usar los operadores **>** , **>=**, **<** y **<=** para comparar cadenas de texto.

JavaScript comparará las cadenas de texto según el valor de su código Unicode.

Por ejemplo, la letra **A** tiene un valor de **65** y la letra **B** tiene un valor de **66**. Por lo tanto, la letra **A** es menor que la letra **B**. Pero ten cuidado, ya que **las letras mayúsculas tienen un valor menor que las letras minúsculas**.
```js title="Comprar Cadenas de texto"
'Alfa' > 'Beta' // false
'Omega' > 'Beta' // true
'alfa' > 'Alfa' // true
```

## Comparando booleanos
También podemos comparar booleanos con los operadores de comparación.
```js title="Comprar Booleanos"
true === true // true
true === false // false
false !== false // false
```
Por si te preguntas cómo se comportan los operadores de mayor o menor que (> y <) con booleanos te diré que, aunque no tiene sentido, debes saber que true es mayor que false.
```js title="Comprar Booleanos"
true > false // true
false < true // true
true > true // false
false < false // false
```

## Comparando valores de diferentes tipos
Por ahora hemos visto cómo comparar valores de un mismo tipo, pero ¿Qué pasa si queremos comparar valores de diferentes tipos? En JavaScript es algo que es posible pero no suele ser recomendable.

En clases posteriores veremos cómo funciona este tipo de mecanismo y explicaremos el operador de igualdad débil == y el operador de desigualdad débil != pero, por ahora, nos limitaremos a utilizar siempre el operador de igualdad estricta === y el operador de desigualdad estricta !==.