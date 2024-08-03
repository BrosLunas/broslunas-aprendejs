---
title: Logical Operators
description: Logical operators in JavaScript (and many other programming languages) are used to evaluate logical expressions.
---

Logical operators in JavaScript (and many other programming languages) are used to evaluate logical expressions.
In JavaScript, there are three logical operators: AND (&&), OR (||), and NOT (!).

## Logical Operator AND &&
The logical operator AND is denoted by &&. It returns true when both values ​​it connects are true.
```js title="AND &&"
true && true // → true
true && false // → false
false && false // → false
```
:::tip
A real-life example would be asking. Are all the lights on? Each light is checked and if all are on (true), then the answer is true. If any light is off (false), then the answer is false.
:::

## Logical OR operator ||
The logical OR operator is denoted by || and returns true when any of the values ​​it connects is true.

```js title="OR ||"
true || true // → true
true || false // → true
false || false // → false
```
:::tip
A real-life example would be asking. Are any lights on? Each light is checked and if any of them are on (true), then the answer is true. Only if all lights are off (false), then the answer is false.
:::

## Logical NOT operator !

```js title="NOT !"
!true // → false
!false // → true
```
:::tip
A real-life example would be flipping the light switch. If the light is on (true), then flipping the switch turns it off (false). If the light is off (false), then flipping the switch turns it on (true).
:::

## Combining logical, arithmetic, and comparison operators
Logical operators and comparison operators can be combined to create more complex expressions. For example, we can ask if a number is between two values.

```js title="Combining operators"
2 < 3 && 3 < 4 // → true
```
:::tip
In this case, the expression evaluates to true because 2 < 3 is true and 3 < 4 is true. If either expression were false, then the expression would be false.
:::

You can also use parentheses to group operations and use logical and arithmetic operators.

```js title="Combining Operators (With Parentheses)"
(2 + 2) < 3 && (10 < (8 * 2)) // → false
```

It is also important to know that arithmetic operations take precedence over comparison operations.

```js title="Combining Operators (Order)"
2 + 2 < 3 && 10 < 8 * 2
// First, the arithmetic operations are performed:
// → 4 < 3 && 10 < 16
// Now the comparisons:
// → false && true
// Finally:
// → false
```

## Two or more operands
Although all the examples you have seen so far use two operands, logical operators can also be used with more than two operands.

```js title="Two operands"
true && true && true // → true
```
You can also mix logical operators:

```js title="Different operands"
true && true || false // → true
!true && !true // → false
false && true || !true // → false
```
Now it may be a bit difficult to understand what is happening, but with practice it will become easier. Try to do the exercises and play with the logical operators so that they become clearer.