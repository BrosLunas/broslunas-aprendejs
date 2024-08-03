---
title: If Conditional
description: Conditional code is a block of code that is executed only if a condition is met. In JavaScript we use the reserved word if to create a conditional block.
---
Conditional code is a block of code that is executed only if a condition is met. In JavaScript we use the reserved word if to create a conditional block, like this:

``` js title="Conditional If"
if (condition) {
// code that is executed if the condition is true
}
```

As you can see, we put the condition in parentheses and the code is executed if the condition in braces is true. If the condition is false, the code is not executed.

Imagine that you want to display a message if a user's age is greater than or equal to 18 years. You could do it like this:
``` js title="Conditional If Example"
const age = 18

if (age >= 18) {
console.log('You are of legal age')
}
```

## else
It is possible to use the else keyword to execute a different block of code if the condition is false:
``` js title="Else"
const age = 17

if (age >= 18) {
console.log('You are of legal age')
} else {
console.log('You are a minor')
}
```

This is useful for executing one block of code or another depending on whether a condition is met or not.

## else if
We can also use the else if keyword to check more than one condition:

``` js title="Else If"
const age = 17

if (age >= 18) {
console.log('You are of legal age')
} else if (age >= 16) {
console.log('You are almost of legal age')
} else {
console.log('You are a minor')
}
```
The program checks the first condition. If it is true, it runs the code inside the if block. If it is false, it checks the next condition. If it is true, it runs the code inside the else if block. If it is false, it runs the code inside the else block.

In other words, it will enter the first block that meets the condition and will not enter the others. If it does not meet any, then it will enter the else block.

## Nesting conditionals
It is possible to nest conditionals inside other conditionals. For example:

``` js title="Nesting conditions"
const age = 17
const hasLicense = true

if (age >= 18) {
if (hasLicense) {
console.log('You can drive')
} else {
console.log('You can't drive, you don't have a license')
}
} else {
console.log('You can't drive')
}
```

There are many times when you'll want to avoid unnecessary nesting of conditionals as they become difficult to read and maintain. In these cases it is better to use logical operators to create the condition:

``` js title="Apply logical operators"
const age = 17
const hasLicense = true

// if the person is of legal age and has a license then...
if (age >= 18 && hasLicense) {
console.log('You can drive')
} else {
console.log('You cannot drive')
}
```

Another very interesting technique is to save the result of the condition in a variable, so that your conditions are much more readable:
``` js title="Unify variables"
const age = 17
const hasLicense = true
const canDrive = age >= 18 && hasLicense

if (canDrive) {
console.log('You can drive')
} else {
console.log('You cannot drive')
}
```

:::tip
Wow! Have you seen how we've improved the readability of our code? It's much easier to read and understand! This type of technique is called refactoring and consists of improving the code without changing its behavior.
:::

## The importance of curly braces
It's important for you to know that curly braces {} are not always mandatory. If the code block is only one line long, you can omit the braces:

``` js title="No need to use {}"
const age = 17

if (age >= 18)
console.log('You are of legal age')
else
console.log('You are a minor')
```

You can also write it on the same line:

``` js title="Same line"
const age = 18

if (age >= 18) console.log('You are of legal age')
else console.log('You are a minor')
```

However, I recommend that you always write the braces while you are learning. This will help you avoid mistakes and make your code more readable.