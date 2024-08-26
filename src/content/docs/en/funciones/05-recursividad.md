---
title: Recursion
description: Recursion is a programming technique that involves a function calling itself.
---

Recursion is a programming technique that involves a function calling itself.

But of course, if a function calls itself, when does it end? How do you prevent it from being called infinitely? With a base condition.

## Recursion Example

Let's create a function that counts from a number to zero.

``` js title="Recursion"
function countDown(number) {
// Base condition: If the number received is
// less than 0 then we exit the function
if (number < 0) { return }

// If the number was greater than or equal to 0, we display it
console.log(number)

// And we call the function with the previous number
countDown(number - 1)
}
```

If we call the function with the number 3, the result will be:

``` js title="Function result"
countDown(3)
// -> 3
// -> 2
// -> 1
// -> 0
```
The execution would look like this:
``` js title="Execution"
countDown(3) -> (sample 3)
\
countDown(2) -> (sample 2)
\
countDown(1) -> (sample 1)


countDown(0) -> (sample 0)


countDown(-1) -> exit
```
:::tip
Be careful! If we don't put the base condition, the function will be called infinitely and the browser will crash. When we do recursion we ALWAYS have to have a condition that makes the function exit itself.
:::

## Using recursion and returning a value
Recursion is often used to solve algorithms. For example, let's create a function that calculates the factorial of a number.

:::tip
The factorial of a number is the result of multiplying that number by all the previous numbers until reaching 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
:::
``` js title="Factorial"
function factorial(n) {
// Base condition: If the number is 0 or 1, we return 1
// and we do not call the function again
if (n === 0 || n === 1) {
return 1
} else {
// If the number is greater than 1, we call the function
return n * factorial(n - 1)
}
}

console.log(factorial(5)) // Result: 120
console.log(factorial(3)) // Result: 6
```
``` js title="Factorial Result"
factorial(3) --------------------------> 6
\
3 * factorial(2) ---------------> 6
\
2 * factorial(1) -----------> 2
\
1 * factorial(0) -------> 1
```
Recursion is a concept that is hard to understand at first. A function that calls itself? A lot of people get confused.

What do I recommend to learn it? First, understand the examples we have done and draw on a piece of paper how the functions are executed.

- Then, do these recursion exercises:

- Write a function that calculates the sum of the first n integers recursively. For example: sum(3) -> 1 + 2 + 3 = 6

- Write a function that calculates the Fibonacci sequence recursively. The Fibonacci sequence is a series of numbers that starts with 0 and 1 and each number is the sum of the previous two. For example: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)