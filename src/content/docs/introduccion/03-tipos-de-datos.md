---
title: Tipos de datos
description: La consola nos permite ejecutar código JavaScript en tiempo real y ver el resultado.
---

<video class="container video" controls>
    <source src="/assets/video/introduccion/tipos-de-datos.mp4" type="video/mp4">
</video>


En JavaScript, como cualquier otro lenguaje de programación, vamos a querer trasladar la información del mundo real a nuestro código. Para ello, necesitamos entender qué tipos de datos existen en el lenguaje para poder representar la información que necesitamos.

En JavaScript tenemos 9 tipos de datos que se dividen en dos grandes grupos: primitivos o no primitivos. Más adelante te contaré qué significa esto, pero por ahora, vamos a ver los tipos primitivos.

Dentro de los tipos primitivos tenemos 7 tipos de datos:
- **number**
- **string**
- **boolean**
- **null**
- **undefined**
- **symbol**
- **bigint**

No te preocupes, no tienes ni recordarlos ni entenderlos todos ahora. En esta lección vamos a ver los tres primeros que son, sin ninguna duda, los que más vamos a usar al inicio del curso.

## Números
Los números (tipo number) son los datos más básicos que podemos representar en JavaScript. En JavaScript, no hay una diferencia entre números enteros y números decimales, todos los números son de tipo number:

```js title="Números"
7
3.14
19.95
2.998e8
-1
```

## Operadores aritméticos
Con los números, puedes usar los operadores aritméticos para realizar operaciones matemáticas. En JavaScript tenemos los siguientes operadores aritméticos:

- +: suma
- -: resta
- *: multiplicación
- /: división
- %: módulo (resto de la división)
- **: exponente

Al usar los operadores aritméticos, el resultado siempre será un número. Por ejemplo:

```js title="Operadores Aritméticos"
2 + 2 // 4
4 - 2 // 2
3 * 2 // 6
2 / 2 // 1
2 % 2 // 0
3 ** 3 // 27
```	
:::tip
¿Qué significa el // que ves en los ejemplos? Es un comentario. En JavaScript, los comentarios se escriben con // y todo lo que escribas después de // será ignorado por el navegador. Los comentarios son muy útiles para explicar qué hace nuestro código.
:::

Al igual que las matemáticas, las operaciones siguen un orden de precedencia. Por ejemplo, si queremos calcular el resultado de 2 + 2 * 3, primero se multiplicará 2 * 3 y luego se sumará 2 + 6. El resultado será 8.

También puedes usar paréntesis para cambiar el orden de las operaciones.
```js title="Orden Operaciones"
2 + 2 * 3 // 8
(2 + 2) * 3 // 12
```	

## Cadenas de texto
La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o acentos graves:

```js title="Strings"
'Estás aprendiendo JavaScript'

"JavaScript te va a gustar"

`Esto es una cadena de texto`
```	
Las comillas simples y dobles funcionan igual, pero al usar acentos graves podemos escribir cadenas de texto que ocupen varias líneas:

```js title="Strings Varias Líneas"
`Esto es una cadena de texto
que ocupa varias líneas. Puedes escribir
tantas líneas como quieras`
```	

En clases posteriores, veremos cómo funcionan, algunos métodos interesantes y sus diferencias.

## Concatenación
Para unir dos cadenas de texto, podemos usar el operador +:

```js title="Concatenaciones"
'Estás aprendiendo ' + 'JavaScript' // 'Estás aprendiendo JavaScript'
```	

Como ves, el operador + de concatenación de cadenas de texto es visualmente el mismo que el operador + de suma de números. El operador + funciona de forma diferente dependiendo del tipo de dato que estemos usando.

## Booleanos
Los booleanos representa sólo dos valores: true (verdadero) o false (falso). Por ejemplo:

¿La luz está encendida (true) o apagada (false)?
¿Está lloviendo (true) o no está lloviendo (false)?
¿Está el usuario logueado (true) o no está logueado (false)?
Estos son ejemplos de preguntas que podemos responder con un valor booleano.
```js title="Booleanos"
true
false
```	