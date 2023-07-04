# Dictionary

In Python, a dictionary is a mutable, unordered collection of items. Each item stored in a dictionary has a key and a value. Dictionaries are optimized for retrieving the value when we know the key, but not the other way around.

Here's an example of a dictionary:

```python title="main.py"
my_dict = {"name": "John", "age": 30, "city": "New York"}
```

You can access elements of a dictionary by their key:

```python title="main.py"
print(my_dict["name"])  # Outputs "John"
```

## Understanding Dictionary

In Python, a dictionary can hold any type of data as its values including, but not limited to, integers, floats, strings, lists, sets, tuples, and other dictionaries. It can also hold objects and user-defined classes. However, the keys must be of an immutable data type such as strings, numbers, or tuples.

Here is a code example:

```python title="main.py"
class MyClass:
    def __init__(self, x):
        self.x = x

obj = MyClass(10)

my_dict = {
    "integer": 10,
    "float": 3.14,
    "string": "hello",
    "list": [1, 2, 3],
    "set": {1, 2, 3},
    "tuple": (1, 2, 3),
    "nested_dict": {"key": "value"},
    "object": obj
}

print(my_dict["integer"])  # Outputs: 10
print(my_dict["float"])  # Outputs: 3.14
print(my_dict["string"])  # Outputs: "hello"
print(my_dict["list"])  # Outputs: [1, 2, 3]
print(my_dict["set"])  # Outputs: {1, 2, 3}
print(my_dict["tuple"])  # Outputs: (1, 2, 3)
print(my_dict["nested_dict"])  # Outputs: {"key": "value"}
print(my_dict["object"].x)  # Outputs: 10
```

### Immutable Keys

For dictionary keys, they need to be immutable types because dictionaries use these keys' hash value for faster lookup. In Python, strings, numbers, tuples, and frozensets are examples of immutable types that can be used as keys.

```python title="main.py"
my_dict = {
    "string": "value",
    10: "value",
    (1, 2): "value",
    frozenset([1, 2, 3]): "value"
}
```

### Unhashable

Dictionaries themselves are not hashable because they are mutable i.e., they can be changed after they are created. This means you can't use a dictionary as a key to another dictionary. However, if you need a hashable version of a dictionary, consider using a `frozenset` or create a custom class and define a `__hash__` method.

#### **Related Links:**

- [Hashability in Python](../data-types#hashability-in-python)
- [Tuple Hashability](./tuple#hashability)
- [Unhashable Keys](./dict#unhashable-keys)

## Common Pitfalls

### KeyError

Attempting to access a non-existent key will raise a `KeyError`. You can use the `dict.get(key, default)` method to avoid this error.

```python title="main.py"
print(my_dict.get("country", "USA"))  # Outputs "USA"
```

### Unhashable Keys

In Python, an object is hashable if it has a hash value which never changes during its lifetime. It needs a `__hash__()` method and an `__eq__()` method. The object is then "hashable" and can be used as a key in a dictionary or as an element in a set.

The basic types like integers, floating-point numbers, and strings are hashable.

For example:

```python title="main.py"
d = {}  # Create an empty dictionary

# Integer key
d[1] = "one"
print(d)  # Outputs: {1: 'one'}

# String key
d["two"] = 2
print(d)  # Outputs: {1: 'one', 'two': 2}

# Floating-point number key
d[3.0] = "three"
print(d)  # Outputs: {1: 'one', 'two': 2, 3.0: 'three'}

# Tuple key (must contain only hashable types itself)
d[(1, 2, 3)] = "tuple"
print(d)  # Outputs: {1: 'one', 'two': 2, 3.0: 'three', (1, 2, 3): 'tuple'}
```

However, lists, sets, and dictionaries are not hashable because their contents can change over time (they are mutable). If you try to use a list as a dictionary key, you will get a TypeError:

```python title="main.py"
# This will raise a TypeError
d[[1, 2, 3]] = "list"
```

The error message will be "TypeError: unhashable type: 'list'".

Tuples are an exception. They are immutable so they are hashable, but they can only be used as dictionary keys if they contain only strings, numbers, or tuples, all of which are hashable themselves.

#### **Related Links:**

- [Unhashable](./dict#unhashable)

### Modifying During Iteration

Modifying the size of a dictionary while iterating over it can lead to unexpected results or errors.

### Mutable Default Arguments

Default arguments in functions are created once at function definition. If a mutable object like a list is used as a default argument, it can retain changes between function calls.

#### **Related Links:**

- [Mutable Default Arguments](../variables#mutable-default-argument)

## Best Practices

### Use for Lookups

Dictionaries are best used when you frequently need to look up values based on some key, as they offer O(1) lookup time.

"O(1)" is a way of expressing the efficiency of an algorithm in computer science. It's known as Big O notation, and "O(1)" specifically means that the operation takes constant time. In other words, no matter how large the dictionary is, the time it takes to look up a value based on its key remains constant.

In the context of a Python dictionary, this is possible because it's implemented as a hash table. When you insert a key-value pair into a dictionary, a hash function computes the hash of the key and uses it to determine where in the table to store the value. Then, when you need to look up a value, the dictionary uses the key's hash to go directly to its location in the table. This process is very fast and doesn't depend on the size of the dictionary.

For example:

```python title="main.py"
# Creating a dictionary
d = {"apple": 1, "banana": 2, "cherry": 3}

# Look up the value associated with the key "banana"
print(d["banana"])  # Outputs: 2
```

In this code, regardless of how many key-value pairs are in the dictionary `d`, looking up the value for "banana" will take approximately the same amount of time. This is what makes dictionaries excellent for tasks where you need to frequently retrieve values based on their associated keys.

### Dictionary Comprehensions

Just like [lists](./list#list-comprehensions), dictionaries also support dictionary comprehensions. They allow you to express creation of dictionaries in a concise way.

```python title="main.py"
squares = {x: x**2 for x in range(6)}
```

### Using `defaultdict`

If you need a dictionary with a default value for non-existent keys, consider using `collections.defaultdict`.

```python title="main.py"
from collections import defaultdict
count = defaultdict(int)
for x in 'hello':
   count[x] += 1
print(count)  # Outputs defaultdict(<class 'int'>, {'h': 1, 'e': 1, 'l': 2, 'o': 1})
```

## Design Patterns

Dictionaries, being versatile and powerful data structures, are used in various design patterns:

### Factory Pattern

 Dictionaries are often used in the Factory pattern, where the dictionary keys are used to create and recall specific object types.

### Flyweight Pattern

The Flyweight pattern uses dictionaries to prevent creation of large number of similar immutable objects, thereby saving memory.

### State/Strategy Pattern

The State or Strategy patterns can use dictionaries to determine which behavior/state should be activated.

Remember that although dictionaries are widely used and extremely useful, they may not always be the best tool for the job, depending on your specific use case.
