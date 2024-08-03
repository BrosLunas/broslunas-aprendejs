---
title: Variables
description: When creating programs, it is vital to be able to store information for future use. In JavaScript, we use variables to achieve this.
---

When creating programs, it is vital to be able to store information for future use. In JavaScript, we use variables to achieve this.

To create a variable, we can use the let keyword and give the variable a name. For example:

## LET Constant
```js title="LET Variable"
let number
```

We have a variable called number but we have not assigned a value to it. To assign a value to it, we use the assignment operator =:
```js title="LET Variable + Value"
let number = 1;
```
Now, we can refer to the variable number and get the value we have assigned to it.
```js title="Call Variable"
let number = 1;
number + 1 // -> 1 + 1
```
We can also reassign a value to the variable:
```js title="Reassign value"
let number = 5;
number = number + 1 // -> 5 + 1
```
Note that the value of the variable does not have to be a number. It can be any data type, such as text or a boolean.
```js title="Reassign value"
let welcomeText = 'Hello'
let isCool = true
```

## CONST Constants
Constants are variables that cannot be reassigned. To create a constant, we use the reserved word const:
```js title="Const"
const PI = 3.1415
```
If you try to reassign the value of a constant, you will get an error:
```js title="Reassign value"
const PI = 3.1415
PI = 3 // -> TypeError: Assignment to constant variable.
```
Since they cannot be reassigned, constants must always be initialized with some value. This is another difference from let, which does not need to be initialized with a value.
```js title="Assign value to const variable"
let number // ✅
const RADIUS // ❌ SyntaxError: Missing initializer in const declaration
```
They are very useful for storing values ​​that are not going to change. Whenever you can, try to use constants to make your code more predictable.

## VAR Constants
In JavaScript, we can also create variables using the reserved word var. It is the oldest way and you will normally find many tutorials using it. However, nowadays, it is not recommended to use var as it has strange behaviors that can cause errors in your code.

In a later class I will explain what the difference is between let, const and var as well as why you should avoid var whenever possible.

## Variable names
In JavaScript, variable names can contain letters, numbers and the underscore (_). Also, the first character of the variable name cannot be a number.

It is important to note that variable names are case sensitive, which means that myVariable and myVariable are two different variables in JavaScript.
```js title="Variable names"
let myVariable = 1
let myVariable = 2
myVariable + myVariable // -> 1 + 2
```
It is also important that variable names are descriptive. For example, if we want to store a user's name, we can call the variable userName. This way, when we read the code, we will know that the variable contains the name of a user.
```js title="Variable names"
let n = 'Pepe' // ❌ Bad, it is not descriptive
let userName = 'Juan' // ✅ Good, it is understood
```

## Conventions and nomenclatures
In JavaScript, there are different nomenclatures for naming variables: **camelCase**, **snake_case** and **SCREAMING_CASE**.

camelCase is the most common way of naming variables in JavaScript. It consists of writing the first word in lowercase and the following words with their first letter in uppercase. For example:

```js title="camelCase"
let camelCase = 1
let camelCaseIsCool = 2
let userName = 'Broslunas'
```
snake_case is a way of naming that consists of writing all the words in lowercase and separating them with underscores. For example:

```js title="snake_case"
let snake_case = 1
let snake_case_is_cool = 2
let user_name = 'Broslunas'
```
In some programming languages ​​it is very common to use snake_case to name variables. In JavaScript it is not so common, but you can still find code that uses it.

The most common, and a good idea, is to use it in file names. For example, my_file.js. This is because some operating systems are case sensitive, so my_file.js and My_file.js are two different files.

:::tip
There is also kebab-case, which is a form of naming that involves writing all words in lowercase and separating them with hyphens. For example: my-file.js. It is very similar to snake_case but with hyphens instead of underscores. It cannot be used to name variables, but it is common to use it in file names.
:::

SCREAMING_CASE is a form of naming that involves writing all words in uppercase and separate them with underscores. For example:

```js title="SCREAMING_CASE"
const SCREAMING_CASE = 1
const SCREAMING_CASE_IS_COOL = 2
const USER_NAME = 'Broslunas'
```
For constants, with values ​​that are not going to change, it is very common to use SCREAMING_CASE. This way you can easily distinguish it from variables that do change value. Therefore, you should not use it to name variables with let.