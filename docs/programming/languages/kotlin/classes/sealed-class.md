# Sealed Class

Sealed classes in Kotlin are used to represent restricted class hierarchies, where a value can be one of a set of types, but cannot be any other type. They are, in a sense, an extension of enum classes: the set of values for an enum type is also restricted, but each enum constant exists only as a single instance, whereas a subclass of a sealed class can have multiple instances, each with its own state.

## Defining a Sealed Class

A sealed class is declared with the `sealed` modifier. It is abstract by itself and cannot be instantiated directly. It can have abstract members and can also have a constructor, which is private by default.

```kotlin title="SealedClassDefinition.kt"
sealed class Result {
    // Sealed class body goes here
}
```

## Subclasses of Sealed Class

All subclasses of a sealed class must be declared in the same file as the sealed class itself. The subclasses can be of two types: object declaration or regular class.

```kotlin title="SealedClassSubclasses.kt"
sealed class Result {
    class Success(val data: String): Result()
    class Error(val error: String): Result()
}
```

In the above example, `Result` is a sealed class with two subclasses: `Success` and `Error`.

## Using When Expression

One of the main benefits of sealed classes comes into play when you use them in a `when` expression. If it's possible to verify that the statement covers all cases, you don't need to add an `else` clause to the statement.

```kotlin title="SealedClassWhenExpression.kt"
fun handleResult(result: Result) = when(result) {
    is Result.Success -> println(result.data)
    is Result.Error -> println(result.error)
}
```

## Common Pitfalls and Best Practices

### Sealed Class vs. Enum Class

Sealed classes are more flexible than enum classes as they can have multiple instances which can contain state.

```kotlin title="SealedClassVsEnumClass.kt"
sealed class Expr {
    data class Const(val number: Double) : Expr()
    data class Sum(val e1: Expr, val e2: Expr) : Expr()
    object NotANumber : Expr()
}
```

### Sealed Classes and Data Classes

Sealed classes can be data classes. This can provide automatic `hashCode()`, `equals()`, `copy()`, and `toString()` methods.

```kotlin title="SealedDataClasses.kt"
sealed class Result {
    data class Success(val data: String): Result()
    data class Error(val error: String): Result()
}
```

## Design Patterns

Sealed classes are useful in several design patterns:

- **State pattern:** Sealed classes are great for representing a finite number of states. You can represent each possible state as a subclass of the sealed class.
- **Event handling:** Events in an application can be modeled as a sealed class, with different event types as subclasses. This allows you to handle events in a type-safe manner.
- **Result handling:** A function that can return different types of results can return a sealed class, with different result types as subclasses.

Sealed classes, when used appropriately, can make your code more readable, maintainable, and easier to test. They enforce a finite set of possibilities which can be known at compile time, leading to safer code.
