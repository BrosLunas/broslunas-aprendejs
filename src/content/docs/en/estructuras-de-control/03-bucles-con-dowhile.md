---
title: Loops with Do While
description: A loop is a control structure that allows you to repeat a block of instructions. In other words, repeat a task as many times as you want.
---

Although it is not very famous or widely used, it is interesting to know that there is a loop in JavaScript that runs at least once, and then repeats itself as long as a condition is met. This loop is called do while and has the following syntax:

``` js title="Do While"
do {
// code that runs at least once
} while (condition);
```

Let's take advantage of this to make the class more interesting. That's why I'm going to introduce you to a function built into JavaScript that will give us a lot of play: confirm.

## confirm
The confirm function displays a dialog box with two buttons: "OK" and "Cancel". If the user clicks "OK", the function returns true. If the user clicks "Cancel", it returns false.
``` js title="Confirm"
confirm("Do you like JavaScript?");
```

Calling the confirm function is an expression and therefore produces a value that we can store in a variable.
``` js title="Confirm Example"
let response = confirm("Do you like JavaScript?")
console.log(response) // -> true or false
```

## Using do while
Let's make a program that will exit a do while loop when the user clicks "Cancel" in the dialog box displayed by the confirm function.
``` js title="Do While Example"
let response

do {
response = confirm("Do you like JavaScript?");
} while (response)
```

:::tip
Why do we have to put the response variable outside? Because if not, it couldn't be used in the loop condition. You can see what we discussed earlier about the scope of variables. 
:::

If the user clicks "OK", the response variable will be true and the loop will repeat. If the user clicks "Cancel", the response variable will be false and the loop will stop.