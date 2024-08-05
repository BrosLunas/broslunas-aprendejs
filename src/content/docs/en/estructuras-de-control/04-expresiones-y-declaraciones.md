---
title: Expressions and Declarations
description: There are two types of building blocks for writing code, expressions and declarations. While these terms may seem confusing at first, they are key concepts for understanding how JavaScript works.
---

In JavaScript, there are two types of building blocks for writing code: expressions and declarations. While these terms may seem confusing at first, they are key concepts for understanding how JavaScript works.

## Declarations
Declarations in JavaScript are statements that define the creation of a variable, function, or class. We could say that declarations are like the instructions we give JavaScript to do something.

:::tip
We'll cover functions and classes later in the course, so don't worry.
:::

For example, a variable declaration is a statement that gives a name and a value to a variable. The following code is an example of a variable declaration:

``` js title="Declarations"
let name = "John"
```

You cannot use this code with the console.log method, as it does not produce any value. If you try it, you will get an error:
``` js title="Declarations 2"
console.log(let name = "John") // SyntaxError
```

## Expressions
Expressions in JavaScript are statements that produce a value. Expressions can be as simple as a single number or a string of text, or as complex as calculating a mathematical operation, evaluating different values, or calling a function.

For example, a numeric expression is a statement that produces a number:
``` js title="Expressions"
2 + 3 // -> 5
```

In fact, what we store in variables are expressions. For example, in the following code, the expression 2 + 3 is evaluated and the result is saved in the result variable:

``` js title="Expressions 2"
let result = 2 + 3
```

In this code we have the statement that we want to save in the result variable the result of the expression 2 + 3.

## Why is the difference important?
The difference between statements and expressions is important because we cannot use a statement where an expression is expected and vice versa.

For example, we have already learned about the if and while control structures. Both expect an expression that is evaluated to a boolean value. So we can't use a statement instead:

``` js title="Differences"
// ❌ Both codes are wrong and serve to
// illustrate that you should not use statements
// when you expect expressions

if (let name = "John") { // ❌ SyntaxError
console.log("Hello, John")
}

while (let i = 0) { // ❌ SyntaxError
console.log("Iteration")
i = i + 1
}
```