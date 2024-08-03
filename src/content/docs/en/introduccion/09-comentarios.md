---
title: Comments
description: Comments are a way to add explanations to code that are ignored when the program is run.
---

In JavaScript, comments are a way to add explanations to code that are ignored when the program is run.

Comments are useful for explaining the why of the code, documenting changes made to the code, and making the code easier to understand for other developers.

There are two types of comments in JavaScript: single-line comments and multi-line comments.

## Single-line comments //
Single-line comments start with // and are used to add an explanation to a single line of code. For example:

```js title="One-line comment"
// We only use 6 decimal places
const PI = 3.141592

// We start the radius at 10, but you can change it
let radius = 10
```

You can also add a single-line comment to the end of a line of code. For example:

```js title="Comment at the end of a line"
const PI = 3.141592 // We only use 6 decimal places
```

## Multi-line comments /* */
Multi-line comments start with /* and end with */. They are used to add explanatory notes that span multiple lines of code. For example:

```js title="Multi-line comment"
/*
This is a multi-line comment.
It is used to add explanatory notes that span multiple lines of code.
*/
```

Note that you can also achieve multiple lines using the // comment type, only in this case, each line of code must start with //. For example:

```js title="Multi-line comment with //"
// This is a multi-line comment.
// It is used to add explanatory notes that span multiple lines of code.
```

It is important to note that comments do not affect the way the code works. That is, if you remove the comments, the code will still work the same way.

It is advisable to use comments sparingly and effectively to make the code easier to understand and maintain. Comments should be clear and concise, and they should explain what the code does without repeating what is already obvious.

It is best to make your code clear enough to not need comments, but if necessary, use comments to explain the why of the code, not the what.