---
title: Typeof Operator
description: The typeof operator returns a string indicating the type of an operand. It can be used with any type of operand, including variables and literals.
---

The typeof operator returns a string indicating the type of an operand. It can be used with any type of operand, including variables and literals.

```js title="typeof operator"
const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // "number"
```

You can also use it directly with the values ​​you want to check:

```js title="typeof operator types"
typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof "Hello world" // "string"
```

There is, however, a special value in JavaScript, null, which is considered a bug in the language. The typeof operator returns "object" when used with null:

```js title="Typeof null operator"
typeof null // "object"
```

The correct thing to do would be to have typeof null return "null", but that is a [historical bug that can't be fixed without breaking existing code](https://2ality.com/2013/10/typeof-null.html).

So if you want to check if a variable is null, you have to use the strict comparison ===:

```js title="Check if null"
const foo = null
foo === null // true
```

Another question is... What is that object? It is a data type that is at the core of JavaScript and we will look at it in detail later.

## Using with comparison operators
The typeof operator is very useful when used with comparison operators. For example, to check if a variable is of the type we expect:
```js title="Comparison and check if number"
const age = 42
typeof age === "number" // true
```

Once we have logical expressions, we can start chaining logical operators to check multiple conditions:
```js title="Comparison and check if number and AND comparator"
const age = 42
typeof age === "number" && age > 18 // true
```