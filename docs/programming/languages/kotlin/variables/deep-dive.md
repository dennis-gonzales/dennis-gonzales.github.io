# Deep Dive

## Immutable Primitive Types

 In Kotlin, all primitive data types are immutable. Immutable means once you've assigned a value to a variable, you can't change that value. If you try to modify the value of the variable, what actually happens is that a new variable is created with the new value. The original variable still holds its initial value. This is in contrast to mutable variables, where the value can change after it's been assigned.

For instance, consider this Kotlin code:

```kotlin title="Main.kt"
var a = 5
a = 6  // This doesn't change `a`, but creates a new `a` with value 6.
```

## Compilation to JVM

 Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM). When Kotlin code is compiled, it's turned into bytecode that the JVM can understand and execute. Because JVM also treats its primitive types as immutable, Kotlin's immutable primitive types can be directly translated to JVM primitive types. This translation is efficient in terms of memory usage and performance.

## Treating Primitive Types as Objects

 In Kotlin, you can treat primitive types as objects. This means you can call methods on them just like you would with objects. For instance, you can do something like this:

```kotlin title="Main.kt"
val a = 5
println(a.plus(3))  // This will print 8.
```

Here, `plus` is a method that can be called on the integer `a`. This is similar to how you can call methods on objects in object-oriented programming languages.

## Optimization by Kotlin Compiler

 When compiling the Kotlin code to Java bytecode, the Kotlin compiler optimizes these types to be JVM primitive types whenever possible. Although in your Kotlin code you treat them as objects, under the hood they often get compiled to JVM primitives for better performance.
