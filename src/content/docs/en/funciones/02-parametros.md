---
title: Parameters
description: The behavior of a function can change depending on the data we pass it.
---

So far we have seen how to create functions and how to call them. But in order to unlock the full potential of functions, we need them to be able to receive parameters. That is, their behavior can change depending on the data we pass them.

Imagine that we want our greeting function to be able to greet anyone, not just Miguel. To do this, we can make the function accept a parameter, which will be the name of the person we want to greet.

``` js title="Pass Parameters"
function greet(name) {
console.log("Hello " + name)
}
```
Now, every time we call the function, we can pass it a text string:

``` js title="Pass Parameters 2"
greet('Miguel') // -> Hello Miguel
greet('Itziar') // -> Hello Itziar
greet('Carmen') // -> Hello Carmen
```

You see how something that seems so simple has enormous power. Functions are the basis of programming and allow us to create complex programs from small pieces.

For example, to create a calculator, we should start creating functions that perform the basic operations. In this case we will need to parameterize the function so that it accepts the two numbers to perform the operation.

``` js title="Add and subtract"
function add(a, b) {
return a + b
}

function subtract(a, b) {
return a - b
}
```

And now we can use them:

``` js title="Add and subtract - Results"
const sumResult = sum(2, 3)
console.log(sumResult) // -> 5

const SubtractResult = subtract(5, 2)
console.log(subtractResult) // -> 3
```

## Parameters and arguments
In the previous example, we have seen that we can pass values ​​to the function when we call it. These values ​​are called arguments. And the values ​​that the function receives are called parameters.

``` js title="Parameters and Arguments"
// the sum function has two parameters: a and b
function sum(a, b) {
return a + b
}

// when we call the function, we pass it two arguments: 2 and 3
const sumResult = sum(2, 3)
```

Normally many people confuse the terms and use parameter to refer to the arguments. But it is important that you know how to differentiate them, because they are different things.

## The order of the parameters matters
Something very important, and a very common mistake when starting to create functions, is to forget that the order of the parameters matters.

We are going to create a function that simulates a microwave. We will pass it the dish, time and power. And it will return the result of the cooked dish.

``` js title="Parameter Order"
function cookingMicrowave(dish, time, power) {
if (dish === '🐥' && time === 1 && power === 5) {
return '🍗'
}

if (dish === '🥚' && time === 2 && power === 3) {
return '🍳'
}

return '❌ Dish not supported'
}

```
:::tip
Yes, you can make a return inside a conditional. This makes the function stop and return the value indicated in the return.
:::

If we use the parameters correctly, the function works correctly:

``` js title="Parameter Order 2"
const result = cookingMicrowave('🐥', 1, 5)
console.log(result) // -> 🍗
```
But if we change the order of the parameters, the function does not work:

``` js title="Parameter Order 3"
const result = cookingMicrowave(1, 5, '🐥')
console.log(result) // -> '❌ Dish not supported'
```
This is because the function expects the first parameter to be the dish, the second the time and the third the power. If we change the order, we can have unexpected behaviors or errors.

Later we will see a way in which we can avoid this type of errors.