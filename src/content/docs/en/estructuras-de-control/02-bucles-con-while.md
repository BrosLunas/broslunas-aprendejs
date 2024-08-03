---
title: While Loops
description: A loop is a control structure that allows you to repeat a block of instructions. In other words, repeat a task as many times as you want.
---

A loop is a control structure that allows you to repeat a block of instructions. In other words, repeat a task as many times as you want.

In JavaScript, there are several ways to achieve this, and one of them is the while loop. The while loop is a flow control structure that executes a section of code while a certain condition is met.

In this class, we are going to explain how the while loop works in JavaScript and how we can use it in our programs.

## Syntax
The syntax of the while loop is similar to that of an if conditional. The only difference is that, instead of executing the code only once, it is executed while the condition is met.

``` js title="While"
while (condition) {
// code to execute while the condition is met
}
```

The loop begins by evaluating the condition inside the parentheses. If the condition is true, the code inside the curly braces is executed.

After the code is executed, the condition is evaluated again, and if it is still true, the code inside the curly braces is executed again. This process is repeated until the condition evaluates to false.

Note that if the condition is false from the beginning, the code inside the curly braces will never be executed.

:::tip
Each turn of the loop is called an iteration. An iteration is the repetition of a process or action a set number of times, in an orderly and systematic manner.
:::

## Example of using while
Let's create a countdown for a rocket. We create a variable countDown that contains the number of seconds left until launch. In this case, we'll start with 10 seconds.
``` js title="While Example 1"
let countDown = 10
```

To remove a second from the countdown, we will use the subtraction operator (-) and the assignment operator (=).

``` js title="While Example 2"
let countDown = 10
countDown = countDown - 1
console.log(countDown) // -> 9
```

Knowing this and how the while loop works, we can create the rocket countdown.

``` js title="While Example 3"
// initialize the variable outside the loop
let countdown = 10

// while the countdown is greater than 0
while (countdown > 0) {
// display the countdown value at each iteration
console.log(countdown)
// subtract 1 from the countdown
countdown = countdown - 1
}

console.log('Takeoff! 🚀')
```

If you run this code in the console, you should see the numbers from 10 to 1, and then the takeoff message.

## Beware of infinite loops

While loops are very powerful, but they can also be dangerous. If the condition never evaluates to false, the loop will run infinitely.
``` js title="Infinite Loops"
while (true) {
console.log('Hello to infinity!')
}
```
This will evaluate the condition true to true, and run the code inside the braces over and over again.

## Breaking out of a loop
We can control when we want to break out of a loop by using the break keyword. When the JavaScript interpreter encounters the break keyword, it breaks out of the loop and continues running whatever code comes after it.

``` js title="Break"
let countdown = 10

while (countdown > 0) {
console.log(countdown)
countdown = countdown - 1

// if countdown is 5, we break out of the loop
if (countdown === 5) {
break // <---- we break out of the loop
}
}
```

What is the value of countdown in this code? Let's see, the loop was doing a countdown... but we told it to exit the loop when it reached the value 5. Therefore, the value of countDown is 5.

Using break can be useful in loops if we want to exit them due to a specific condition or to avoid infinite loops.

## Skipping an iteration with continue
Just as we have the possibility of "breaking" the loop with break, we can also skip an iteration with continue. When the JavaScript interpreter encounters the word continue, it jumps to the next iteration of the loop.

``` js title="Continue"
while (countdown > 0) {
countdown = countdown - 1

// if the countdown is an even number...
if (countdown % 2 === 0) {
continue // <---- skip to the next iteration
}

console.log(countdown)
}
```

What appears in the console output? The loop is counting down... but we've told it that if the number is even, it should skip that iteration and stop executing the code that follows it.

That's why even numbers don't appear in the console.

## Loop Nesting
We can nest loops inside other loops. Imagine that in our countdown for the rocket, we have to check that 3 things are in its parameters: oxygen, fuel, and temperature.

``` js title="Loop Nesting"
const NUMBER_REVISIONS = 3
let countdown = 10

// while the countdown is greater than 0
while (countdown > 0) {
// we show the countdown value
console.log(countdown)

// we create a variable to count the revisions made
// and we initialize it to zero
let revisionsMade = 0

// until we have made the 3 revisions...
while (revisionsMade < NUMBER_REVISIONS) {
// and we add 1 to the revisions made
revisionsMade = revisionsMade + 1
console.log(revisionsMade + ' revisions made...')
}

// now we can subtract 1 from the countdown
countdown = countdown - 1
}
```

:::tip
Why did we put the constant all in uppercase? As we explained in the JavaScript introduction class, it is a convention to indicate that it is a constant and that it will not change.
:::

In addition to the nested loop, there is also something very interesting in the previous code and that is the creation of the let variable revisionsCompleted.

Note that this variable will be created and initialized to 0 in each iteration of the loop.

Variables created with let and const that are created within a loop only exist within that loop. When the loop ends, the variable disappears. In fact, if you try to access it outside the loop, it will give you an error.

``` js title="Accessing a variable inside a loop"
let countBack = 10

while (countBack > 0) {
let revisionsRealized = 3
console.log(revisionsRealized)
countBack = countBack - 1
}

console.log(revisionsRealized) // -> ERROR: ReferenceError
```

This also happens with other control structures. That's because the scope of variables created with let and const is the block between {} in which they are created. We'll see this later so you can practice, don't worry.