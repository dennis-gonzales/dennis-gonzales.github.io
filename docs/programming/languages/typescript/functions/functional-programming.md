# Functional Programming

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In this paradigm, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

TypeScript supports functional programming, as it is a superset of JavaScript, which is a multi-paradigm language that includes functional programming alongside other paradigms.

## Pure Functions

A fundamental concept in functional programming is the use of pure functions. A function is considered pure if it always produces the same output for the same set of inputs and does not have any observable side effects.

```ts title="PureFunctionExample.ts"
// highlight-start
function add(a: number, b: number): number {
  return a + b;
}
// highlight-end
```

## Immutability

In functional programming, data is immutable. This means that it cannot be changed after it is created. If you want to change an object, you create a new one with the desired changes.

```ts title="ImmutableExample.ts"
let a = [1, 2, 3];
// highlight-next-line
let b = [...a, 4]; // a is unchanged
```

**Related Links:**

- [Variable Immutability](../variables/deep-dive#immutability)

## Function Composition

Function composition is the process of combining two or more functions to produce a new function. Composing functions together is a common practice in functional programming.

```ts title="FunctionCompositionExample.ts"
function double(x: number): number {
  return x + x;
}
function increment(x: number): number {
  return x + 1;
}
function doubleThenIncrement(x: number): number {
// highlight-next-line
  return increment(double(x));
}
```

## Higher-Order Functions

Higher-order functions are functions that take other functions as arguments, return a function, or both.

### Functions as Arguments

A common use case for this is applying a custom transformation to data, like mapping an array using a specific function.

```ts title="HigherOrderFunctionExample.ts"
// highlight-next-line
function applyFunction(arr: number[], fn: (x: number) => number): number[] {
  return arr.map(fn);
}

const double = (x: number) => x * 2;
const result = applyFunction([1, 2, 3], double);
console.log(result); // Outputs: [2, 4, 6]
```

Here, `applyFunction` takes an array and a function `fn`, applying `fn` to each element of the array.

### Function as Return Type

This pattern is useful for creating functions with specific behaviors.

```ts title="HigherOrderFunctionExample.ts"
function multiplyBy(factor: number) {
// highlight-next-line
  return (x: number) => x * factor;
}

const triple = multiplyBy(3);
console.log(triple(5)); // Outputs: 15
```

Here, `multiplyBy` returns a new function that multiplies its input by a specific factor. You can create different multiplication functions by calling `multiplyBy` with different arguments.

### Functions that Accept and Return Functions

This pattern combines the previous two, allowing for powerful composition and customization.

```ts title="HigherOrderFunctionExample.ts"
import _ from 'lodash';

const double = (x: number) => x * 2;
const increment = (x: number) => x + 1;

// Using _.flow to compose the functions
// highlight-next-line
const doubleThenIncrement = _.flow([double, increment]);

console.log(doubleThenIncrement(3)); // Outputs: 7
```

In this example, Lodash's `_.flow` method takes an array of functions and returns a new function that represents their composition. When called with an argument, the composed function passes that argument through each function in the array, in order.

:::tip Utilize libraries like Lodash to simplify function composition.
The `_.flow` method in Lodash allows you to easily combine multiple functions into a [**single composed function**](#function-composition).

For example, `const composedFn = _.flow([fn1, fn2, fn3]);` creates a new function that passes its input through `fn1`, `fn2`, and `fn3` in sequence. It's a handy way to create complex functionality from simple building blocks.
:::

**Related Links:**

- [Anonymous Functions](./#anonymous-functions)
- [Callback Functions](./#callbacks)

## Common Pitfalls

### Ignoring Function Purity

A key principle of functional programming is to use pure functions, as they have predictable outputs and no side effects. Ignoring function purity can lead to bugs that are hard to trace and debug.

### Mutating Data

Mutating data can lead to unexpected behavior in your code. In functional programming, it's better to return a new copy with the changes applied.

## Best Practices

### Use Pure Functions

Whenever possible, use pure functions. They're easier to reason about and test because they don't depend on or alter anything outside of their scope.

### Avoid Side Effects

Avoid functions that cause side effects. Side effects could be anything that affects the state of the application outside of the scope of the function.

### Use Functional Programming Libraries

Consider using a functional programming library like lodash/fp or Ramda. These libraries provide utility functions that make it easier to write functional code.

## Design Patterns

In functional programming, design patterns are different than the traditional ones found in object-oriented programming. Here are a few examples:

### Function Composition Pattern

Function composition is a fundamental design pattern in functional programming. It allows you to build complex logic from simple, reusable functions.

### Recursion

Since functional programming avoids mutable state, recursion is often used where you might traditionally use a loop to iterate over data.
