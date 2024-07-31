---
title: Infinite Loop
description: The infinite loop is a very basic error, but you have to be very careful with it.
---
:::caution
This infinite loop will make your browser stop working, so be very careful when running it
:::

## What is an Infinite Loop
The infinite loop is a very basic error, but you have to be very careful with it.

## Example
```js title="04-infinite-loop.js"
let i = 0;

while (i <= 20) {
console.log('Even number: ', i);
}
```
### Result
![Console Result](/img/03-control-flujo/04-loop-infinito.png)

## [View JS File](/js/03-control-flujo/04-loop-infinito.js)