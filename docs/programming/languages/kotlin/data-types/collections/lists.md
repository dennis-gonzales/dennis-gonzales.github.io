# Lists

A List in Kotlin is an ordered collection of items. Lists can contain duplicate elements. Kotlin provides methods to manipulate lists and their elements.

## Defining a List

A list is defined using the `listOf` function for an immutable list or the `mutableListOf` function for a mutable list.

```kotlin title="DefineList.kt"
val immutableList = listOf(1, 2, 3, 4, 5)
val mutableList = mutableListOf(1, 2, 3, 4, 5)
```

## Accessing Elements

You can access an element of a list using its index. The indices start from zero.

```kotlin title="AccessElements.kt"
val numbers = listOf(1, 2, 3, 4, 5)
println(numbers[1]) // Prints: 2
```

## Modifying a MutableList

You can add, remove, or update elements in a MutableList.

```kotlin title="ModifyMutableList.kt"
val numbers = mutableListOf(1, 2, 3, 4, 5)
numbers[1] = 22
numbers.add(6)
numbers.removeAt(0)
println(numbers) // Prints: [22, 3, 4, 5, 6]
```

## Common Pitfalls and Best Practices

## Null Safety

Kotlin's null safety features also apply to lists. If a list can contain null elements, you need to declare the type as nullable.

```kotlin title="NullableList.kt"
val numbers: List<Int?> = listOf(1, 2, null, 4, 5)
```

### Avoid Mutating Lists

It's a good practice to use immutable lists whenever possible. This makes your code safer because you can't accidentally modify the list.

### List vs MutableList

A List is immutable. You can't add, remove, or change elements in it. A MutableList is mutable. You can add, remove, or change elements. Be sure to choose the right type of list based on your requirements.

## Design Patterns

In the context of design patterns, lists are used in many ways:

- In the Iterator pattern, a list is a common type of aggregate that you can iterate over.
- In the Composite pattern, a composite object might store its children in a list.
- In the Decorator pattern, a decorator might add elements to a list or alter their order.

Lists are one of the fundamental data structures in programming and are used in a wide variety of applications. Understanding how to use lists effectively is an essential skill in Kotlin programming.
