---
title: Else
description: The Else controller is used when the if controller is true to perform said action.
---
## What is the Else controller
The Else controller is used when the if controller is true to perform said action.

## Example 1
```js title="02-else.js (Example 1)"
let age = 15;

if (age >= 18) { // If age is equal to or greater than 18
console.log("You are of legal age ✅");
} else { // If age is less than 18
console.log("You are under legal age ❌");
}
```
### Result
![Console Result](/img/03-control-flujo/02-else-1.png)

## Example 2
```js title="02-else.js (Example 2)"
let age = 15;

if (age >= 18) { // If age is equal to or greater than 18
console.log("You are of legal age ✅");
} else if (age >= 13){ // If age is less than 18 and greater than or equal to 13
console.log("You are a minor. You need an adult ⚠️");
} else { // If age is less than 13
console.log("You are under 13 years old ❌");
}
```
### Result
![Console Result](/img/03-control-flujo/02-else-2.png)

## [View JS File](/js/03-control-flujo/02-else.js)