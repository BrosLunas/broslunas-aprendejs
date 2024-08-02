---
title: Data Types
description: The console allows us to execute JavaScript code in real time and see the result.
---
In JavaScript, like any other programming language, we're going to want to bring real-world information into our code. To do this, we need to understand what types of data exist in the language in order to represent the information we need.

In JavaScript we have 9 types of data that are divided into two large groups: primitive or non-primitive. Later I'll tell you what this means, but for now, let's look at the primitive types.

Within the primitive types we have 7 types of data:
- **number**
- **string**
- **boolean**
- **null**
- **undefined**
- **symbol**
- **bigint**

Don't worry, you don't have to remember or understand them all now. In this lesson we're going to look at the first three, which are, without a doubt, the ones we're going to use the most at the beginning of the course.

## Numbers
Numbers (type number) are the most basic data that we can represent in JavaScript. In JavaScript, there is no difference between integers and decimal numbers, all numbers are of type number:

```js title="Numbers"
7
3.14
19.95
2.998e8
-1
```

## Arithmetic operators
With numbers, you can use arithmetic operators to perform mathematical operations. In JavaScript we have the following arithmetic operators:

- +: addition
- -: subtraction
- *: multiplication
- /: division
- %: modulus (remainder of division)
- **: exponent

When using arithmetic operators, the result will always be a number. For example:

```js title="Arithmetic Operators"
2 + 2 // 4
4 - 2 // 2
3 * 2 // 6
2 / 2 // 1
2 % 2 // 0
3 ** 3 // 27
```
:::note
What does the // mean that you see in the examples? It's a comment. In JavaScript, comments are written with // and anything you write after // will be ignored by the browser. Comments are very useful to explain what our code does.
:::

Just like math, operations follow an order of precedence. For example, if we want to calculate the result of 2 + 2 * 3, we will first multiply 2 * 3 and then add 2 + 6. The result will be 8.

You can also use parentheses to change the order of operations.
```js title="Order of Operations"
2 + 2 * 3 // 8
(2 + 2) * 3 // 12
```

## Strings
A string is another very common data type. In JavaScript, strings are represented by single quotes, double quotes, or backticks:

```js title="Strings"
'You're learning JavaScript'

"You're going to like JavaScript"

`This is a string`
```
Single and double quotes work the same, but by using backticks we can write strings that span multiple lines:

```js title="Multiple Line Strings"
`This is a string of text
that spans multiple lines. You can write as many lines as you want`
```

In later classes, we'll see how they work, some interesting methods, and their differences.

## Concatenation
To join two text strings, we can use the + operator:

```js title="Concatenations"
'You are learning ' + 'JavaScript' // 'You are learning JavaScript'
```

As you can see, the + operator for concatenating text strings is visually the same as the + operator for adding numbers. The + operator works differently depending on the data type we are using.

## Booleans
Booleans represent only two values: true or false. For example:

Is the light on (true) or off (false)?
Is it raining (true) or not raining (false)?
Is the user logged in (true) or not logged in (false)?
These are examples of questions that we can answer with a boolean value.
```js title="Booleans"
true
false
```