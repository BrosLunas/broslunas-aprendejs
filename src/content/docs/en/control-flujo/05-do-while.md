---
title: Do While
description: The Do While controller is very similar to the while, the only difference is that the loop check is done at the end of the loop.
---
## What is an Infinite Loop
The Do While controller is very similar to the while, the only difference is that the loop check is done at the end of the loop.

## Example
```js title="05-do-while.js"
let i = 0;

do { // The code is executed first
if (i % 2 == 0) {
console.log('Even number: ', i);
}
i++;
} while (i < 20); // Then the condition is checked, if it is met it is executed again
```
### Result
![Console Result](/img/03-control-flujo/05-do-while.png)

## [View JS File](/js/03-control-flujo/05-do-while.js)