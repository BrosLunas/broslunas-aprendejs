---
title: Your First Function
description: A function is a block of code that performs a specific task when called.
---

A function is a block of code that performs a specific task when called. You can think of a function like a microwave: you give it something to cook, pass it some parameters (like time and power), and then it does its job and returns the result to you.

In JavaScript, functions can be defined in a number of ways, but the most common and basic way is through the function keyword. Here's your first function:

``` js title="Function Syntax"
function greet() {
console.log('Hello Michael')
}
```
As you can see, declaring a function consists of:

- The reserved word function that indicates that we are defining a function.
- The name of the function, in this case greet. We usually use verbs to name functions, since they are actions that they perform.
- A pair of parentheses () after the name. They can contain parameters. In this case, we don't have any.
- A block of code between curly braces {}. In this case, we only have one line of code, but we could have many more.

Our function right now doesn't return anything but every time we call it, it will print Hello to the console.

:::tip
Functions can return a result (a number, a text string, a boolean...) or they can return nothing. In that case, the function returns undefined.
:::

To call a function, we simply write its name followed by parentheses:
``` js title="Call a Function"
greet() // -> Hello Michael
greet() // -> Hello Michael
greet() // -> Hello Michael
```

## Returning a result

Functions can return a result. To do this, we use the reserved word return and then the value we want to return:

``` js title="Return a result"
function add() {
return 1 + 1
}
```
Now, every time we call the add function, it will return the result of the sum:

``` js title="Return a result"
// we can save the result in a variable
const result = add()

// or see the result directly in the console
console.log(add()) // -> 2
```
:::tip
In the next class you will see how you can pass parameters to a function to make them even more interesting and reusable.
:::

:::tip
Remember, if we don't use return, the function will return undefined.
:::

## A really useful function
The greet and add functions don't seem very useful, but with the little we know we can already do more productive things. For example, we can create a function that returns a random number from 1 to 10.

To do this, we are going to discover Math, an object built into JavaScript that has properties and methods for constants and mathematical functions. We are going to look at two methods that are going to be very useful:

- Math.random(): returns a random number between 0 and 1, with decimals.
- Math.floor(): rounds a number down.

:::tip
Math.random is similar to console.log, in the sense that they are methods that JavaScript incorporates by default and that we can use at any point in our program
:::

Knowing this, we could create a function that returns a random number from 1 to 10

``` js title="Function Example"
function getRandomNumber() {
// we retrieve a random number between 0 and 1
const random = Math.random() // for example: 0.6803487380457318

// we multiply it by 10 so that it is between 0 and 10
const multiplied = random * 10 // -> 6.803487380457318

// we round down so that it is between 0 and 9
const rounded = Math.floor(multiplied) // -> 6

// we add one so that it is between 1 and 10
const result = rounded + 1 // -> 7

// we return the result
return result
}
```
Well! Look how many things you've put into practice in just a few lines of code: constants, variables, operators, comments... and all in one function!

You know what's best? That function will be with you throughout your career. It's very common to need to create a random number in a program, so it's very useful to have a function that does it for us.

:::tip
In the function we used several variables to store the intermediate results. We could have done it all in one line, but it's easier to understand this way.
:::