---
title: Functions Expressions
description: A function expression is a function that is assigned to a variable.
---

So far we have seen how we can declare functions using the function keyword.

However, there are two more ways to declare functions in JavaScript: function expression and arrow function. In this case, let's talk about the first one.

## What is a function expression?
A function expression is a function that is assigned to a variable

``` js title="Function Expression"
// this is a function expression
const sum = function (a, b) {
return a + b
}

// this is a function declaration
function sum(a, b) {
return a + b
}
```
:::tip
Note that the function does not have a name in the function expression! When a function does not have a name it is called an anonymous function. Although in this case, the function is assigned to a variable that does have a name and that is why we can use it later.
:::
With the function expression, the function is assigned to the variable sum. This means that we can call the function using the variable name:

``` js
sum(1, 2) // 3
```
The behavior is very similar to that of a function declared with the keyword function. However, there is one very important difference between the two that you should be aware of: hoisting.

# Hoisting
Hoisting is a term used to describe how JavaScript appears to move function declarations to the beginning of the code, so that you can use them even before declaring them. For example:
``` js title="Hoisting"
sum(1, 2) // 3

function sum(a, b) {
return a + b
}
```
Here we use the function first and declare it later. And it works! How can that be? Shouldn't it give us an error since the function doesn't exist yet?

What is happening is that JavaScript allocates function declarations in memory during the compilation phase and that is why when the code is executed it has access to that memory location to which the function refers.

That would be the technical explanation of hoisting, but if it helps you, you can think of it as if JavaScript moved the function declarations to the beginning of the code.

## And what about function expressions?
Well, hoisting is not applied. For example:

``` js title="Hoisting in function expression"
sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
return a + b
}
```