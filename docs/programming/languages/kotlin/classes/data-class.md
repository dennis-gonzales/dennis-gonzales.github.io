# Data Class

Data classes in Kotlin are used mainly for holding data. These are classes that do not usually contain any functionality and are often used to hold pure data. They're great for encapsulating multiple related data points into a single object.

## Defining a Data Class

A data class is defined with the `data` keyword, followed by the `class` keyword, the class name, and the primary constructor.

```kotlin title="DataClassDefinition.kt"
data class Person(val name: String, val age: Int)
```

In this example, `Person` is a data class with two properties: `name` and `age`.

## Benefits of a Data Class

Data classes automatically generate several utility functions, which can be tedious to create in regular classes. These include:

- `equals()`/`hashCode()`: These functions are used for comparing objects. In the data class, they are automatically generated to check for equality based on the values of the properties, not based on the memory address.
- `toString()`: This function returns a string representation of the object. In the data class, it's automatically generated to include the class name and the property values.
- `copy()`: This function creates a copy of the object. It's helpful for creating modified copies of immutable objects.

```kotlin title="DataClassBenefits.kt"
fun main() {
    val john = Person("John", 30)
    val jane = john.copy(name = "Jane") // Creates a copy with a modified name
    println(john) // Prints: Person(name=John, age=30)
    println(jane) // Prints: Person(name=Jane, age=30)
}
```

## Limitations of Data Classes

- Data classes cannot be `open`, `abstract`, `sealed`, or `inner`.
- The primary constructor needs to have at least one parameter.

## Common Pitfalls and Best Practices

### Using Data Classes for Complex Structures

Data classes are meant to hold data and don't usually contain any functionality. If you find that you're adding complex functions to a data class, it might be a sign that you should refactor your code to separate data and functionality.

### Using Proper Equals Checks

Remember that data classes generate their own `equals()` method to check for structural equality, not referential equality. This means two instances of a data class are equal if all their properties are equal.

```kotlin title="DataClassEquality.kt"
fun main() {
    val person1 = Person("John", 30)
    val person2 = Person("John", 30)
    println(person1 == person2) // Prints: true
}
```

In the above example, `person1` and `person2` are considered equal, even though they are different instances, because they have the same property values.

## Design Patterns

Data classes are mainly used in data-driven design patterns, such as:

- Data Transfer Object (DTO): Used for transferring data between software application subsystems.
- Value Object: An object that contains attributes but has no conceptual identity.

:::tip
In Android development, data classes are commonly used with Kotlin's serialization library to parse JSON into Kotlin objects, and with Room to define entities for SQLite tables. They're a powerful tool in any Kotlin developer's toolbox, especially when dealing with data-centric tasks.
:::