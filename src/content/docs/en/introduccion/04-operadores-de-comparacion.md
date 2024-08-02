---
title: Comparison operators
description: Comparison operators in JavaScript allow us to compare two values.
---

Comparison operators in JavaScript allow us to compare two values. They always return a boolean value (true or false).
For example, we can compare whether one number is greater than another with the > operator, or whether one number is less than another with the < operator.
```js title="Greater or Less"
5 > 3 // true
5 < 3 // false
```
We also have the >= and <= operators that allow us to compare whether one number is greater than or equal to another, or whether one number is less than or equal to another.
```js title="Greater or equal, Less or equal"
5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true
```
To find out if two values ​​are equal we can use the === operator or, to find out if they are different, the !== operator.
```js title="Equals"
5 === 5 // true
5 !== 5 // false
```

## Comparing strings
Not only can we use comparators to compare numbers, we can also use them to compare strings and other data types.
```js title="Buy Strings"
'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
"JavaScript" !== 'PHP' // true
`I'm Learning JavaScript` === 'I'm Learning JavaScript' // true
```
:::note
Note that you can compare strings that use single quotes, double quotes, or backticks. In the end, they are still strings and the important thing is that they are equal.
:::

## What about using the > operator with strings?
Although it is not very common, we can use the **>** , **>=** , **<** , and **<=** operators to compare text strings.

JavaScript will compare text strings based on their Unicode code value.

For example, the letter **A** has a value of **65** and the letter **B** has a value of **66**. Therefore, the letter **A** is less than the letter **B**. But be careful, since **uppercase letters have a lower value than lowercase letters**.
```js title="Buy Text Strings"
'Alpha' > 'Beta' // false
'Omega' > 'Beta' // true
'alpha' > 'Alpha' // true
```

## Comparing booleans
We can also compare booleans with the comparison operators.
```js title="Buy Booleans"
true === true // true
true === false // false
false !== false // false
```
In case you're wondering how the greater than and less than operators (> and <) behave with booleans, I'll tell you that, although it doesn't make sense, you should know that true is greater than false.
```js title="Buy Booleans"
true > false // true
false < true // true
true > true // false
false < false // false
```

## Comparing values ​​of different types
So far we've seen how to compare values ​​of the same type, but what happens if we want to compare values ​​of different types? In JavaScript it's possible but not usually recommended.

In later classes we'll see how this type of mechanism works and we'll explain the weak equality operator == and the weak inequality operator != but, for now, we'll just limit ourselves to always using the strict equality operator === and the strict inequality operator !==.