# Tuple

In Python, a tuple is an immutable sequence type. It is similar to a [list](./list) in that it can contain elements of different types, but unlike lists, it cannot be changed once created (i.e., you cannot add, remove, or change elements).

Here's an example of a tuple:

```python title="main.py"
my_tuple = (1, "Hello", 3.14)
```

You can access elements of a tuple:

```python title="main.py"
my_tuple = (1, "two", 3.0)

# Access first element
print(my_tuple[0])  # Output: 1

# Access second element
print(my_tuple[1])  # Output: two

# Access last element
print(my_tuple[-1])  # Output: 3.0
```

## Understanding Tuple

Tuple in Python can hold different types of data including integers, strings, floats, classes, other objects, and even other collections like lists, sets, and dictionaries. It also supports nesting, i.e., tuples can contain other tuples. Here's an example:

```python title="main.py"
my_tuple = (1, "Hello", 3.14, [5, 6, 7], {'name': 'John'}, ("another", "tuple"))
```

In the above code, `my_tuple` contains an integer, a string, a float, a list, a dictionary, and another tuple.

### User-Defined Types

Moreover, Python's tuples can hold user-defined types, i.e., instances of user-defined classes. This is because Python is a dynamically-typed language, and its data structures, including tuples, do not require a uniform type for all elements.

For example, consider a user-defined class `Person`.

```python title="main.py"
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

You can create a tuple that contains instances of this class:

```python title="main.py"
p1 = Person("Alice", 25)
p2 = Person("Bob", 30)

people = (p1, p2)  # This is a tuple containing Person objects
```

### Nesting

The same applies to nested tuples:

```python title="main.py"
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

nested_tuple = (tuple1, tuple2)  # This is a tuple containing other tuples
```

### Hashability

In terms of hashability, a Python tuple is hashable if all its elements are also hashable. In Python, an object is hashable if it has a hash value which never changes during its lifetime (it needs a `__hash__()` method), and can be compared to other objects (it needs an `__eq__()` or `__cmp__()` method). Hashable objects which compare equal must have the same hash value.

When you call `hash(my_tuple)`, Python internally calls the `__hash__()` method for the tuple object. This works by first checking if all elements of the tuple are hashable. If they are, it combines their hash values to generate a new hash value. If any element is not hashable (like lists or dictionaries), it raises a `TypeError`.

So, a tuple containing only hashable elements (like numbers, strings, or other hashable tuples) is itself hashable, while a tuple containing non-hashable elements (like lists or dictionaries) is not. For example:

```python title="main.py"
hashable_tuple = (1, 2, 3)
print(hash(hashable_tuple))  # This will print a hash value

non_hashable_tuple = ([1, 2, 3], 4, 5)
print(hash(non_hashable_tuple))  # This will raise a TypeError
```

Please note that instances of user-defined classes are hashable by default as they inherit their `__hash__()` method from the base object, but their hashability might change if you override the `__hash__()` method. If the `__hash__()` method for the class returns a constant value or is not defined (which results in a constant return value of `None`), then the instances of that class are not hashable. If `__hash__()` returns a unique and constant value for each object during its lifetime, the instances are hashable.

#### **Related Links:**

- [Mutable vs Immutable Types](../variables#mutable-vs-immutable-types)

## Common Pitfalls

### Immutable But Contain Mutable Elements

A common misunderstanding is to think that because tuples are immutable, their elements are too. This is not true. If a tuple contains a mutable type, like a list, that element can be changed.

```python title="main.py"
t = (1, [2, 3], 4)
t[1].append(5)
print(t)  # Outputs (1, [2, 3, 5], 4)
```

:::caution
**A tuple is considered hashable if and only if all its elements are hashable.**
Tuples containing non-hashable elements are not suitable for use as keys in dictionaries or elements in sets, which require hashable objects.
:::

#### **Related Links:**

- [Hashability](./tuple#hashability)

### Single Element Tuples

If you want to create a tuple with a single element, you need to include a trailing comma, otherwise Python interprets it as a simple parenthesized expression.

```python title="main.py"
not_a_tuple = (50)
print(type(not_a_tuple))  # Outputs <class 'int'>

a_tuple = (50,)
print(type(a_tuple))  # Outputs <class 'tuple'>
```

## Best Practices

### Use When Data Shouldn't Change

Because tuples are immutable, they're useful for storing a sequence of elements that shouldn't change throughout the course of your program.

Tuples are not as flexible as lists because once you create a tuple, you cannot change its contents. However, this feature is advantageous in some situations. For instance, if a function is using a set of values that must not change, using a tuple can prevent accidental modification of those values, which could otherwise lead to bugs or incorrect results.

### Unpacking

Tuples are commonly used for multiple assignment (also called unpacking).

```python title="main.py"
x, y, z = (1, 2, 3)
print(x, y, z)  # Outputs 1 2 3
```

### Return Multiple Values from a Function

Functions in Python can return multiple values using tuples.

```python title="main.py"
def min_max(nums):
    return min(nums), max(nums)

print(min_max([1, 2, 3]))  # Outputs (1, 3)
```

In general, tuples are less flexible than lists or dictionaries because they are immutable, and they do not have the range of methods that lists and dictionaries have. However, they are a basic data type that is used in many different contexts in Python, and understanding them is essential to writing Pythonic code.
