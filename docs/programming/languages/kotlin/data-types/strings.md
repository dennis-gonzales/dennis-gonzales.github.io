# Strings

A String in Kotlin is an immutable sequence of characters (Char). Once a string is created, it cannot be changed. This immutability is useful for multi-threaded programming as it allows safe sharing of strings between threads without synchronization.

## Defining a String

Strings are defined using string literals. Kotlin provides two types of string literals: escaped strings that may have escaped characters in them, and raw strings that can contain newlines and arbitrary text.

```kotlin title="DefineString.kt"
val str1 = "Hello, World!" // Escaped String
val str2 = """
    Hello,
    World!
""" // Raw String
```

## String Interpolation

Kotlin supports string interpolation, which allows you to include variable references and expressions inside a string.

```kotlin title="StringInterpolation.kt"
val name = "World"
println("Hello, $name!") // Prints: Hello, World!
```

## String Functions

Kotlin provides a rich set of functions to work with strings.

```kotlin title="StringFunctions.kt"
val str = "Hello, World!"
println(str.length) // Prints: 13
println(str.toUpperCase()) // Prints: HELLO, WORLD!
println(str.substring(0, 5)) // Prints: Hello
```

## Common Pitfalls and Best Practices

### Null Safety with Strings

Kotlin's null safety features also apply to strings. If a string can be null, you need to declare it as nullable.

```kotlin title="NullableString.kt"
val str: String? = null
```

### Raw Strings

Raw strings are useful for multi-line strings and can contain newlines and arbitrary text. However, leading indentation can be included in the string, so be aware of this when formatting your code.


### Immutability of Strings

Since strings in Kotlin are immutable, concatenating strings using the '+' operator creates a new string and can be inefficient if done repeatedly in a loop. If you need to concatenate strings in a loop, consider using a `StringBuilder`.

**Related Links:**

- [Immutable Primitive Types](../variables/deep-dive#immutable-primitive-types)

## Design Patterns

In the context of design patterns, strings are used in various ways:

- In the Prototype pattern, a string might be part of the state that gets copied to new objects.
- In the Flyweight pattern, strings might be shared between different contexts.

Understanding strings is fundamental to Kotlin programming as they are used in almost every program. Kotlin's string class provides a rich set of functions to handle common string operations.
