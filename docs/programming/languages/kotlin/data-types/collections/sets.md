# Sets

A Set in Kotlin is an unordered collection of items. In a set, all elements are unique. Kotlin provides two types of sets: immutable (read-only) and mutable.

## Defining a Set

A set is defined using the `setOf` function for an immutable set or the `mutableSetOf` function for a mutable set.

```kotlin title="DefineSet.kt"
val immutableSet = setOf(1, 2, 3, 4, 5)
val mutableSet = mutableSetOf(1, 2, 3, 4, 5)
```

## Accessing Elements

While the elements in a set are unordered, you can still iterate over a set using a loop.

```kotlin title="AccessElements.kt"
val numbers = setOf(1, 2, 3, 4, 5)
for (number in numbers) {
    println(number)
}
```

## Modifying a MutableSet

You can add or remove elements in a MutableSet.

```kotlin title="ModifyMutableSet.kt"
val numbers = mutableSetOf(1, 2, 3, 4, 5)
numbers.add(6)
numbers.remove(1)
println(numbers) // Prints: [2, 3, 4, 5, 6]
```

## Common Pitfalls and Best Practices

### Set vs List

While a list can contain duplicate elements and maintain their order, a set contains only unique elements and does not maintain any specific order. Be sure to choose the right type of collection based on your requirements.

### Mutable vs Immutable Sets

A mutable set allows for modification after its creation (adding, removing elements), while an immutable set does not. Using an immutable set can make your code safer from bugs and easier to reason about, since you know it cannot be changed after it's created.

### Null Safety

Kotlin's null safety features also apply to sets. If a set can contain null elements, you need to declare the type as nullable.

```kotlin title="NullableSet.kt"
val numbers: Set<Int?> = setOf(1, 2, null, 4, 5)
```

## Design Patterns

In the context of design patterns, sets are used in various ways:

- In the Flyweight pattern, a set can be used to store and retrieve shared flyweights.
- In the Composite pattern, a set can be used to store child components in a composite.
- In the Builder pattern, a set can be used to collect components that make up a product.

Sets are a useful tool when you need to store multiple items but want to ensure that all items in the collection are unique.
