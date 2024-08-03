---
title: console.log()
description: console.log() is a built-in function in JavaScript that is used to print messages to the browser console.
---

console.log() is a built-in function in JavaScript that is used to print messages to the browser or code editor console. It is mainly used for debugging code and to print variable values ​​and messages to aid in the development process.

:::note
In programming, a function is a set of instructions that can be used over and over again to do a specific task. Many times, functions are used to avoid repeating code and are parameterizable. Later we will have a section just for them.
:::

## Syntax
In order to display these messages in the console, you must write console.log() and within the parentheses, the message you want to display.

```js title="Console Log"
console.log('Hello, JavaScript')
// -> 'Hello, JavaScript'
```

You can also find out the value of a variable by typing the variable name inside the parentheses.

```js title="Console Log + Variable"
const name = 'JavaScript'
console.log(name)
// -> 'JavaScript'
```

Since you already know how to concatenate text strings, you can display a message and a variable value in the same console.log().

```js title="Console Log + String"
const name = 'JavaScript'
console.log('Hello, ' + name)
// -> 'Hello, JavaScript'
```

Additionally, you can display multiple messages and variable values ​​in the same console.log() by separating them with commas.
```js title="Console Log + Various variables"
const name = 'JavaScript'
const version = 2023
console.log(name, version)
// -> 'JavaScript 2023'
```

## More console methods

In addition to console.log(), there are other methods you can use to print messages to the console. Some of them are:

- console.error(): Prints an error message to the console.
- console.warn(): Prints a warning message to the console.
- console.info(): Prints an information message to the console.

As you can see, the syntax is the same as console.log(), only the name of the method changes.

:::note
Although you can use console.log() to print any type of message, it is recommended to use the methods we just saw to print error, warning and information messages since they have a special format that makes them easier to identify.
:::

```js title="Console Error, Warn Info"
console.error('Error')
// ❌ Error
console.warn('Warning')
// ⚠️ Warning
console.info('Information')
// ℹ️ Information
```

Try these methods in the browser console and see the results.