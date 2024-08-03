---
title: Null and Undefined
description: The peculiarity of these two data types is that each has only one value. The null type can only have the value null and the undefined type can only have the value undefined.
---

Remember that I mentioned that there are different data types in JavaScript? We have seen numbers, text strings and booleans.

In this class you will learn two other data types that, although they are similar, have slight differences. They are null and undefined.

The peculiarity of these two data types is that each has only one value. The null type can only have the value null and the undefined type can only have the value undefined.

:::note
It is like the boolean type that could be true and false but, in this case, it only has one value.

:::

## The difference between null and undefined
While null is a value that means that something has no value, undefined means that something has not been defined. For example, if we create a variable without assigning it any value, its value will be undefined:

```js title="Undefined"
let rolloDePapel // -> undefined
```
We can also directly assign the value undefined to a variable:

```js title="Assign Undefined"
let rolloDePapel = undefined // -> undefined
```

However, for a variable to have the value null, we can only achieve this by explicitly assigning that value to it:

```js title="Null"
let rolloDePapel = null
```
A fairly illustrative case to understand the difference between null and undefined is the following:

![Null and Undefined](/assets/img/introduccion/null-undefined.jpg)

## Comparisons with null and undefined
When using strict equality that we have seen in the previous class, null and undefined are considered different from each other:

```js title="Compare null and undefined" 
undefined" null === undefined // -> false 
``` 

Only when we compare null with null or undefined with undefined do we get true: 
```js title="Compare null and undefined" 
null === null // -> true undefined === undefined // -> true 
```