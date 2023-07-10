# Diving Deep

## Depend upon Abstractions, Not Concretions

This principle, also known as the **Dependency Inversion Principle**, recommends using interfaces (abstractions) over concrete implementations for flexibility and adaptability in your code.

### Lists

Use `mutableListOf()` and `listOf()` over `arrayListOf()` and `arrayOf()`:

```kotlin title="Main.kt"
val lst = listOf<Int>(1, 2, 3, 4)
val lst2 = mutableListOf<Int>(1, 2, 3, 4)
```

### Maps

Use `mapOf()` and `mutableMapOf()` over `hashMapOf()`:

```kotlin title="Main.kt"
val map = mapOf<Int, String>(1 to "One", 2 to "Two")
val map3 = mutableMapOf<Int, String>(Pair(3, "Three"))
```

### Sets

Use `setOf()` and `mutableSetOf()` over `hashSetOf()`:

```kotlin title="Main.kt"
val set = setOf<String>("Apple", "Banana")
val set3 = mutableSetOf<String>("Orange")
```

**Related Links:**

- [Defining a List](./lists#defining-a-list)
- [Defining a Map](./maps#defining-a-map)
- [Defining a Set](./sets#defining-a-set)

## Usage of Data Classes

Data classes provide a concise way to create classes that are used to hold data. They automatically generate equals(), hashCode(), toString(), copy() and componentN() functions.

Example: Use a data class instead of a list with mixed types:

```kotlin title="Main.kt"
data class MyDataClass(val name: String, val number: Int)

val dataList: List<MyDataClass> = listOf(
    MyDataClass("One", 1),
    MyDataClass("Two", 2),
    MyDataClass("Three", 3)
)
```

**Related Links:**

- [Data Class](../../classes/data-class)

## Maps for Caching

 Maps can be used to store computed values for later use, which can greatly improve the efficiency of your code if the computation is expensive and the computed values are used repeatedly.

Example:

```kotlin title="Main.kt"
val squareCache = mutableMapOf<Int, Int>()

fun square(n: Int): Int {
    return squareCache.getOrPut(n) {
        n * n  // This will only be computed if n is not in the cache
    }
}
```

## Maps for Counting

If you want to count the occurrences of elements in a collection, you can use a map.

Example:

```kotlin title="Main.kt"
val list = listOf(1, 2, 2, 3, 3, 3, 4, 4, 4, 4)
val countMap = list.groupingBy { it }.eachCount()  
println(countMap)  // countMap will contain 1 to 1, 2 to 2, 3 to 3, 4 to 4
```
