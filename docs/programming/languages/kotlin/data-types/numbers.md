# Numbers

Numbers are one of the fundamental types in Kotlin, as in many other programming languages. Kotlin handles numbers in a way that is consistent with Java, but adds some additional features to improve safety and expressiveness.

## Defining Numbers

Kotlin provides several built-in types of numbers, which cover both integers and floating-point numbers.

```kotlin title="DefineNumbers.kt"
val byte: Byte = 1
val short: Short = 1
val int: Int = 1
val long: Long = 1L
val float: Float = 1.0f
val double: Double = 1.0
```

## Number Conversions

In Kotlin, smaller types are not implicitly converted to bigger types. This means that we can't assign a value of type Byte to an Int variable without an explicit conversion.

```kotlin title="NumberConversions.kt"
val byte: Byte = 1
val int: Int = byte.toInt() // explicit conversion
```

## Numeric Operations

Kotlin provides a set of standard arithmetic operations (plus, minus, times, div, mod) that can be used with number types.

```kotlin title="NumericOperations.kt"
val a = 5
val b = 2
println(a + b)  // Prints: 7
println(a - b)  // Prints: 3
println(a * b)  // Prints: 10
println(a / b)  // Prints: 2
println(a % b)  // Prints: 1
```

## Common Pitfalls and Best Practices

### Division of Integers

In Kotlin, as in Java, the division of integers uses integer division. If you want to get a floating point result, you should convert at least one argument to a floating point number type.

```kotlin title="IntegerDivision.kt"
val a = 5
val b = 2
println(a / b)  // Prints: 2 (integer division)
println(a / b.toDouble())  // Prints: 2.5 (floating point division)
```

### Checking for Overflow

Kotlin does not have built-in overflow checking for arithmetic operations. If you're performing an operation that may overflow, you need to check for this manually.

### Null Safety with Numbers

Kotlin's null safety features also apply to numbers. If a number can be null, you need to declare it as nullable.

```kotlin title="NullableNumber.kt"
val num: Int? = null
```

## Design Patterns

In the context of design patterns, numbers are used in various ways:

- In the Factory pattern, a number might be a parameter that controls how an object is created.
- In the Strategy pattern, a number might be a parameter that changes the behavior of a strategy.

Numbers are a fundamental part of any programming language, and understanding how to use them effectively is an essential skill in Kotlin programming.
