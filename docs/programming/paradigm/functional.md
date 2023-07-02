# Functional (FP)

Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It's a **declarative type of programming**, which means programming is done with expressions or declarations instead of statements.

In simpler words, it's a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

## Key Concepts

Key concepts in functional programming include:

1. **First-class and higher-order functions:** In functional programming, functions are treated as first-class citizens, meaning that they can be passed as arguments to other functions, returned as values from other functions, and assigned to variables. Higher-order functions are a direct result of this: they are functions that take other functions as their arguments.

2. **Pure functions:** A function is considered pure if it always produces the same result given the same arguments, and its execution doesn't cause any side effects. This idea helps make your program more predictable and easier to understand and debug.

3. **Immutability and statelessness:** Functional programming emphasizes immutability, meaning that once a data value is created, it cannot be changed. This ties into the concept of statelessness - the idea that a program's state should not have to be tracked or depend on the output of other functions.

4. **Recursion:** Without the ability to change state or declare variables, iteration in functional programming is accomplished through recursion. Recursive functions call themselves until a base case is reached.

5. **Functional composition:** This is the process of building complex functions by gluing together simpler ones. The result of each function feeds into the input of the next.

Functional programming languages include Haskell, Erlang, and Clojure, among others. Some languages like JavaScript, Python, and Ruby have functional capabilities even though they are not purely functional languages.

## Pros & Cons

Functional programming is great for tasks that require concurrent processing, real-time updates, and where the output is a simple transformation of the input. It can make your code more concise, easier to test, and more predictable. However, it can also have a steep learning curve for programmers coming from an imperative background and may not be the best fit for all types of problems.
