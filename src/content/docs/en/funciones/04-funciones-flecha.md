---
title: Arrow Functions
description: Arrow functions are a more concise way of creating functions in JavaScript, and have become very popular in recent years due to their simplified syntax.
---

In this class we are going to talk about arrow functions, also known as arrow functions in English.

Arrow functions are a more concise way of creating functions in JavaScript, and have become very popular in recent years due to their simplified syntax.

The basic syntax of an arrow function is as follows:

``` js title="Arrow Function"
const myArrowFunction = () => {
// code to execute
}
```

:::tip
Arrow functions are always anonymous functions and function expressions. This means that they do not have a name and are assigned to a variable.
:::

Instead of the function keyword, we use an arrow => to define the function. We can also omit the parentheses around parameters if we only have one:

``` js title="Arrow Function Example"
const greet = name => {
console.log("Hello " + name)
}
```

## Advantages of arrow functions
Arrow functions have several advantages over regular functions in JavaScript. Some of them are:

- More concise syntax: The syntax of arrow functions is shorter and easier to read than the syntax of regular functions, especially when working with single-line functions.

- Implicit return: Arrow functions can return the value of the expression without using the return keyword when they are single-line. This makes arrow functions even shorter and easier to read.

- More readable anonymous functions: Arrow functions are a more readable and concise way of creating anonymous functions in JavaScript, which can make our code easier to understand.

:::tip
Remember, anonymous functions are functions that do not have a name. They are like the ones we saw in the previous class.
:::

## Implicit return
When an arrow function has only one expression, we can omit the braces {} and the return keyword to make it even shorter. This is known as implicit return. Let's pass a regular function to an arrow function and see how it looks like with implicit return:

``` js title="Implicit return"
// Regular function declaration
function add(a, b) {
return a + b
}

// Arrow function
const addArrow = (a, b) => {
return a + b
}

// Arrow function with implicit return
const addArrow = (a, b) => a + b
```

As we can see, the arrow function with implicit return is much shorter and easier to read than the regular function. This is especially useful when we are working with single-line functions.