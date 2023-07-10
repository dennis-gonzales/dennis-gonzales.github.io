# Abstract Class

Abstract classes in Kotlin are used as a base class for other classes. An abstract class cannot be instantiated, meaning you cannot create an object of an abstract class. It is used to define a common interface for its subclasses.

## Defining an Abstract Class

An abstract class is defined with the `abstract` keyword, followed by the `class` keyword, and the class name.

```kotlin title="AbstractClassDefinition.kt"
abstract class Animal {
    // Abstract class body goes here
}
```

## Abstract Properties and Functions

Abstract classes can contain abstract properties and functions. These are properties and functions without a body, and they must be overridden by any non-abstract child class.

```kotlin title="AbstractPropertiesFunctions.kt"
abstract class Animal {
    abstract val name: String

    abstract fun sound()
}
```

In the above example, `Animal` is an abstract class with an abstract property `name` and an abstract function `sound`.

## Implementing an Abstract Class

An abstract class is meant to be inherited by other classes. The subclass must provide implementations for the abstract properties and functions of the abstract class.

```kotlin title="ImplementAbstractClass.kt"
abstract class Animal {
    abstract val name: String
    abstract fun sound()
}

class Dog(override val name: String) : Animal() {
    override fun sound() {
        println("The dog barks.")
    }
}
```

In the above example, `Dog` is a class that inherits from `Animal` and provides implementations for `name` and `sound`.

## Common Pitfalls and Best Practices

### Abstract Classes vs. Interfaces

A common dilemma in object-oriented programming is whether to use an abstract class or an interface when designing large functional units. Abstract classes can have constructor parameters and can maintain state, while interfaces cannot. However, a class can implement multiple interfaces but can only inherit from one abstract class. The choice depends on the design requirements.

### Abstract Classes and Open Functions

In abstract classes, all functions are 'open' by default, meaning they can be overridden by subclasses. If you do not want a function to be overridden, declare it as 'final'.

```kotlin title="AbstractClassFinalFunction.kt"
abstract class Animal {
    open fun sound() {
        println("The animal makes a sound.")
    }

    final fun eat() {
        println("The animal eats.")
    }
}
```

## Design Patterns

In the context of design patterns, abstract classes are used in many ways:

- In the Template Method pattern, an abstract class defines a 'template' of an algorithm, and concrete subclasses implement the abstract steps of the algorithm.
- In the Factory Method pattern, the Creator class is often an abstract class with the Factory Method being an abstract method.
- In the Strategy pattern, the Strategy is often represented as an abstract class, with each ConcreteStrategy being a subclass.

Understanding abstract classes is essential for object-oriented programming in Kotlin. They are a powerful tool for creating reusable and organized code.
