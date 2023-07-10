# Inner Class

An inner class is a class which is nested within another class. An object of an inner class cannot exist without an instance of the outer class and can access its members.

## Defining an Inner Class

An inner class is defined within an outer class using the `inner` keyword, followed by the `class` keyword, and the class name.

```kotlin title="InnerClassDefinition.kt"
class Outer {
    inner class Inner {
        // Class body goes here
    }
}
```

## Accessing Outer Class Members

Inner classes carry a reference to an object of an outer class:

```kotlin title="AccessOuterClassMembers.kt"
class Outer {
    private val welcomeMessage: String = "Hello, World!"

    inner class Inner {
        fun greet() {
            println(welcomeMessage) // Can access outer class member
        }
    }
}

fun main() {
    val inner = Outer().Inner()
    inner.greet() // Prints: Hello, World!
}
```

In the above example, `Inner` is an inner class that can access the `welcomeMessage` property of the `Outer` class.

## Common Pitfalls and Best Practices

### Memory Leaks

Since inner classes carry a reference to an object of the outer class, they can unintentionally hold a reference to the full outer class, leading to memory leaks, particularly in contexts such as anonymous inner classes for listeners in Android. Be mindful of your usage of inner classes within lifecycle-aware components.

### Non-inner Nested Classes

By default, nested classes in Kotlin do not have access to the outer class instance. If you don't need to access the outer class instance, you can declare the nested class without the `inner` keyword:

```kotlin title="NestedClass.kt"
class Outer {
    class Nested {
        // This is a static nested class
    }
}
```

## Design Patterns

In the context of design patterns, inner classes can be useful in various scenarios:

- In the Factory Method pattern, an inner class can serve as a concrete creator that has access to private members of the outer class.
- In the Builder pattern, the Builder can be an inner class of the class it builds, allowing it to access private constructors or members.

Inner classes can be a powerful tool when you need to create classes that are logically bound to the outer class, have access to the outer class's private members, or control the visibility of the nested class. However, they should be used judiciously to avoid unnecessary complexity or memory leaks.
