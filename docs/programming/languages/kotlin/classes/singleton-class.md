# Singleton Class

A singleton class is a design pattern that restricts the instantiation of a class to a single instance. This single instance is used throughout the entire application, providing a controlled access point to the instance.

Kotlin makes it easy to declare singletons using the `object` declaration.

## Defining a Singleton Class

A singleton class is defined with the `object` keyword, followed by the class name.

```kotlin title="SingletonClassDefinition.kt"
object MySingleton {
    // Class body goes here
}
```

## Using a Singleton Class

The singleton class can be accessed directly via its name without needing to create an instance.

```kotlin title="UseSingletonClass.kt"
object MySingleton {
    val welcomeMessage: String = "Hello, World!"

    fun greet() {
        println(welcomeMessage)
    }
}

fun main() {
    MySingleton.greet() // Prints: Hello, World!
}
```

In the above example, `MySingleton` is a singleton class with a property `welcomeMessage` and a function `greet`. The `greet` function is called directly on `MySingleton`.

## Common Pitfalls and Best Practices

### Singleton State

Since there's only one instance of a singleton class, state that is stored in a singleton is shared across the entire application. This can lead to unintended side effects if the state is changed in one part of the application and then accessed from another part. Be careful when storing state in singletons.

### Thread Safety

The singleton instance is created when the object is accessed for the first time. This is a thread-safe process (the initialization is done at most once) and is performed in a thread-safe manner in Kotlin.

## Design Patterns

In the context of design patterns, singleton classes are most commonly used in the following:

- Singleton Pattern: This is the primary pattern for which the singleton class is used. It ensures a class has only one instance and provides a global point of access to it.
- Abstract Factory, Builder, and Prototype can all be implemented as Singleton.

Singletons can be powerful, but they should be used sparingly. They're a form of global state, and while they can be useful for things like logging, configuration, or driving hardware devices, misuse of singletons can lead to problems in application architecture, such as hidden dependencies or difficulty in testing.
