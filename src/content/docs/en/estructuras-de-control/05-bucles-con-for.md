---
title: Loops with for
description: There are two types of fundamental elements for writing code, expressions and statements. Although these terms may seem confusing at first, they are key concepts to understanding how JavaScript works.
---

The for control structure in JavaScript is very useful for executing a series of instructions a set number of times. Unlike while which uses a condition to determine whether or not the block of code is executed, for uses a counter that is incremented on each iteration until a condition is met.

The syntax for for is as follows:

``` js title="For"
for (initialization; condition; update) {
// code to execute
}
```

Important, notice that for has three parts separated by ;:

- Initialization is done before the loop starts and is used to declare variables and assign initial values.

- The condition is a boolean expression that is evaluated before each iteration of the loop. If the expression evaluates to true, the code block inside the loop is executed. If the expression evaluates to false, the loop ends.

- Update is used to update the value of the loop control variable after each iteration. Typically, the value of the loop control variable is incremented or decremented.

## Example of using for
The following example shows how for can be used to print the numbers from 1 to 10:

``` js title="For Example"
for (let number = 1; number <= 10; number++) {
console.log(number)
}
```
- Initialization is the declaration of the variable number and the assignment of the value 1.
- The condition is that while number <= 10, the loop is iterated.
- Update is number++ which increments the value of number by 1 after each iteration.

Oh wait, what is number++? Let me explain.

## Incrementing numbers with ++
The ++ operator allows us to increment the value of a number variable by 1. For example, if we have the variable i with the value 5, i++ would increment the value of i by 1, that is, i would become 6.

``` js title="Increment with ++"
let i = 5
i++
console.log(i) // -> 6
```

It is a shorthand way of writing i = i + 1. And, as you can see, it is the most typical way to use in loops like for so you don't have to write i = i + 1 every time.

## Iterating backwards
The for method in JavaScript can also be used to iterate backwards. To do this, the syntax i-- is used in the update section of the loop instead of i++.

The syntax for the for method to iterate backwards is as follows:

``` js title="Increment + for loop"
for (let i = 10; i >= 0; i--) {
if (i === 0) {
console.log('Take off 🚀!')
} else {
console.log('' + i + ' seconds left')
}
}
```

## Taking the for loop further
Although the examples with for are always the same, keep in mind that you can do anything in the initialization, condition, and update. You could, for example, use two variables at once.

``` js title="For + Complex"
for (let i = 0, j = 5; i < 5; i++, j--) {
console.log(i, j);
}
```

The comma allows us to declare two variables in the initialization and update them in the update. In this case, the , is an operator that evaluates each of its operands (from left to right) and returns the value of the last operand.

It is not very common to use it, but it is good to know that it exists.

## continue and break
As in while, for also has the reserved words continue and break to control the flow of execution of the loop.

Remember that continue is used to jump to the next iteration of the loop and break to exit the loop.

Example:

``` js title="Continue & Break"
for (let i = 0; i < 10; i++) {
const isEven = i % 2 === 0
if (isEven) {
continue
}

// We only show this console.log if it is odd
console.log(i)

// We exit the loop when we get to 7
if (i === 7) {
break
}
}
```

## Nested for loops
Imagine that you want to create the multiplication table from 1 to 10. To do this, you need a loop that iterates from 1 to 10 and, inside that loop, another loop that iterates from 1 to 10. This can be done with two nested for loops (one inside the other).

``` js title="Nested Loops"
for (let i = 1; i <= 10; i++) { 
  for (let j = 1; j <= 10; j++) { 
    const result = i * j console.log(i + ' x ' + j + ' = ' + result) 
    } 
} 
```