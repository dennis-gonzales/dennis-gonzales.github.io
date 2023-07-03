# Tuple

In Python, a tuple is an immutable sequence type. It is similar to a [list](./list) in that it can contain elements of different types, but unlike lists, it cannot be changed once created (i.e., you cannot add, remove, or change elements).

Here's an example of a tuple:

```python title="main.py"
my_tuple = (1, "Hello", 3.14)
```

You can access elements of a tuple by their index:

```python title="main.py"
print(my_tuple[1])  # Outputs "Hello"
```

## Common Pitfalls

### Immutable But Contain Mutable Elements

A common misunderstanding is to think that because tuples are immutable, their elements are too. This is not true. If a tuple contains a mutable type, like a list, that element can be changed.

```python title="main.py"
t = (1, [2, 3], 4)
t[1].append(5)
print(t)  # Outputs (1, [2, 3, 5], 4)
```

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
