---
title: Switch
description: The switch statement is a control structure that allows us to execute different blocks of code depending on the value of an expression.
---

In JavaScript, the switch statement is a control structure that allows us to execute different blocks of code depending on the value of an expression. This structure is useful when we want to perform different actions based on a single variable.

## Syntax
The switch statement evaluates an expression, comparing the value with the different cases that we have defined. If there is a match, it executes the associated code block. To do this, the break statement is used to separate each case and prevent the rest of the cases from being evaluated further.
``` js title="Switch"
switch (expression) {
case value1:
// code to execute if the expression matches value1
break

case value2:
// code to execute if the expression matches value2
break
default:
// code to execute if the expression does not match any value
break
}
```
:::tip
The default condition is optional. You don't have to use it if you don't need it. It's like the else in if conditions.
:::

For example, if we want to display a different message depending on the day of the week:
``` js title="Example 1"
const dia = "lunes"

switch (dia) {
case "lunes":
console.log("¡Hoy es lunes! 😢")
break

default:
console.log("No es lunes, YAY! 🚀")
break
}
```
Let's make this a little more interesting. In JavaScript we can retrieve time and date information using the Date object. This object has a method called getDay() that returns the day of the week in numeric format, with 0 being Sunday and 6 being Saturday.

:::tip
Just like console is an object, so is Date. An object in JavaScript is not very different from an object in real life. It has properties and functions that we can use. In this case, getDay() is a function that returns the day of the week.
:::
``` js title="Example 2"
const dia = new Date().getDay()

// depending on the day of the week, we show a different message
switch (dia) {
case 0:
console.log("Today is Sunday! 😴")
break
case 1:
console.log("Nooo, it's Monday! 😢")
break
case 2:
console.log("Today is Tuesday! 🥵")
break
case 3:
console.log("Today is Wednesday! 🤓")
break
default:
console.log("The weekend is coming! 🚀")
br
```

## switch vs if
Many times you will see that you can write the same code using switch or if. The above example with an if:

``` js title="Switch vs If"
const dia = new Date().getDay()

if (dia === 0) {
console.log("Today is Sunday! 😴")
} else if (dia === 1) {
console.log("Nooo, it's Monday! 😢")
} else if (dia === 2) {
console.log("Today is Tuesday! 🥵")
} else if (dia === 3) {
console.log("Today is Wednesday! 🤓")
} else {
console.log("The weekend is coming! 🚀")
}
```

Sometimes it's easier to read with switch and other times with if. It's up to you! Although later in the course we will see alternatives to switch using some data structures.

## Grouping cases
Sometimes, we want several cases to execute the same code. Instead of repeating the same code in each case, we can group them using the same case for each of them.

``` js title="Grouping Cases"
const dia = new Date().getDay()

switch (dia) {
case 0:
case 6:
console.log("Today is the weekend! 🥳")
break
case 1:
case 2:
case 3:
case 4:
console.log("Nooo, let's work! 😢")
break
case 5:
console.log("Today is Friday! 🤓")
break
}
```
As you can see, in this case, we are not using the default either. As I mentioned before, it is totally optional, you do not have to use it all the time.

## Don't forget the break!
It is very important that you do not forget to put the break at the end of each case. If you don't put it, all the cases that come after the one that matches will be executed. For example:

``` js title="Break"
// ❌ This code is not correct
// I show it so you can see what happens
// if you don't put a break in your cases
const dia = new Date().getDay()

switch (dia) {
case 0:
console.log("Today is Sunday! 😴")
case 1:
console.log("Nooo, it's Monday! 😢")
case 2:
console.log("Today is Tuesday! 🥵")
case 3:
console.log("Today is Wednesday! 🤓")
default:
console.log("The end of is coming! 🚀")
}
```
If today is Tuesday (2), all the cases after that one will be executed, since there is no break that prevents it. So the result in the console would be:

``` js title="Result"
Today is Tuesday! 🥵
Today is Wednesday! 🤓
The end of! 🚀
```

## The switch(true) pattern
There is a pattern that is sometimes used with switch which is switch(true). That is, instead of evaluating an expression, it evaluates a condition completely ignoring the value of the expression.

For example:
``` js title="switch(true)"
let age = 25;

switch(true) {
case (age >= 18 && age < 25):
console.log("You are of legal age and you are a legal adult, ...oven");
break;
case (age >= 25 && age < 40):
console.log("You are of legal age and are in full maturity");
break;
case (age >= 40):
console.log("You are of legal age and are in the prime of life");
break;
default:
console.log("You are a minor");
}
```
This is a slightly more advanced pattern and is an alternative to using if and else if. In my opinion, it is harder to read, as it can be a bit confusing. But it is good to know it in case you come across it somewhere.