# Deep Dive

## Pass-by-sharing in Kotlin

In Kotlin, when an object is passed to a function, a copy of the reference to that object is passed, not the actual object itself. This concept is known as "pass-by-sharing" or "call-by-sharing". This is similar to the concept of "pass-by-reference" in some languages, but with an important difference: In "pass-by-reference", you can change the original reference itself, which isn't possible in "pass-by-sharing".

### Modification of Object

When you modify the object's fields within a function (for example, car.color = "Red"), these changes are reflected in the original object. This is because both the original reference and the copied reference (which is passed to the function) point to the same object in memory.

### Reassignment of Reference

If you try to reassign the reference to a new object within the function (like car = Car("Blue")), this change doesn't affect the original object. The new assignment creates a new object and assigns the copied reference to it, while the original reference still points to the original object.

## Example

Let's start with the basics. In Kotlin, all variables are references to objects. When you pass a variable to a function, what is actually passed is the reference to the object, not the object itself. This is why it's called "pass-by-sharing" or "call-by-sharing".

Now let's create an example to illustrate these concepts.

Let's define a simple `Car` class in Kotlin:

```kotlin title="Main.kt"
class Car(var color: String)
```

Here, `Car` is a class with a mutable property `color`.

Now, let's create a function `paintCar` that accepts a `Car` object and changes its color:

```kotlin title="Main.kt"
fun paintCar(car: Car, newColor: String) {
    car.color = newColor
}
```

In this function, we're modifying the `color` property of the `Car` object.

Let's create a `Car` object and call `paintCar`:

```kotlin title="Main.kt"
val myCar = Car("Blue")
println(myCar.color)  // Prints: Blue

paintCar(myCar, "Red")
println(myCar.color)  // Prints: Red
```

In this case, we can see that the changes made to `car` inside `paintCar` are reflected in `myCar` after the function call. This is because `car` inside the function and `myCar` outside the function are references to the same object.

Now, let's create another function `buyNewCar` that tries to reassign the `car` reference:

```kotlin title="Main.kt"
fun buyNewCar(car: Car, newColor: String) {
    car = Car(newColor)
}
```

If we call this function with `myCar`:

```kotlin title="Main.kt"
buyNewCar(myCar, "Green")
println(myCar.color)  // Prints: Red
```

We can see that the color of `myCar` hasn't changed. This is because the reassignment `car = Car(newColor)` inside `buyNewCar` only affects the `car` reference inside the function, not the `myCar` reference outside the function. The `car` reference inside the function is a copy of the `myCar` reference, so changing the `car` reference doesn't affect the `myCar` reference.

This demonstrates the concept of "pass-by-sharing" or "call-by-sharing" in Kotlin. The function receives a copy of the reference, so it can modify the object that the reference points to, but it can't change what the original reference points to.
