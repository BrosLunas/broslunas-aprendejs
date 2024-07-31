---
title: While
description: The While controller is used to repeat an action until you decide it ends.
---
## What is the While controller
The While controller is used to repeat an action until you decide it ends.

## Example
```js title="03-while.js"
let i = 0; // We create the variable 'i'

while (i <= 20) { // If 'i' is less than or equal to 20, the loop stops
if (i % 2 == 0) { // If 'i' is an even number
console.log('Even number: ', i);
}
i++; // We increase the value
}
console.log('I have finished the while'); // Notice that the while has finished
```
### Result
![Console Result](/img/03-control-flujo/03-while.png)

## [View JS File](/js/03-control-flujo/03-while.js)