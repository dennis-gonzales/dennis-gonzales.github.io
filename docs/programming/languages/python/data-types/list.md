# List

In Python, a list is a mutable sequence type, i.e., it can be changed after creation. It is similar to an [array](./array), but can contain elements of different types.

Here's an example of a list:

```python title="main.py"
my_list = [1, "Hello", 3.14]
```

You can access, add, remove, and change elements of a list:

```python title="main.py"
print(my_list[1])  # Access element - Outputs "Hello"

my_list.append("World")  # Add element
print(my_list)  # Outputs [1, "Hello", 3.14, "World"]

my_list.remove("Hello")  # Remove element
print(my_list)  # Outputs [1, 3.14, "World"]

my_list[0] = "Goodbye"  # Change element
print(my_list)  # Outputs ["Goodbye", 3.14, "World"]
```

## Common Pitfalls

### Changing Lists During Iteration

Modifying a list while iterating over it can lead to unexpected results because the iterator is not aware of the changes.

### List Index Out of Range

Trying to access a list element that does not exist will result in an `IndexError`.

### Mutable Default Arguments

Default arguments in functions are created once at function definition. If a mutable object like a list is used as a default argument, it can retain changes between function calls.

:::info
Previously discussed in [**Variables**](../variables#mutable-default-argument) section.
:::

## Best Practices

### List Comprehensions

List comprehensions provide a concise way to create lists based on existing lists. For example, you can create a list of squares using the following:

```python title="main.py"
squares = [x**2 for x in range(10)]
```

### Slicing

Use slicing to access parts of a list.

```python title="main.py"
first_two = my_list[:2]
```

### Iterating

You can iterate over the elements of a list directly.

```python title="main.py"
for element in my_list:
    print(element)
```

## Design Patterns

While there are no specific design patterns centered around lists, lists are a fundamental data structure in Python and are used in many different contexts. For example:

### Lists as Stacks

The list methods make it very easy to use a list as a stack, where the last element added is the first element retrieved (“last-in, first-out”).

```python title="main.py"
stack = [3, 4, 5]
stack.append(6)  # Push
print(stack.pop())  # Pop - Outputs 6
```

In Python, the `list` data type provides methods such as `append()` and `pop()` which can be used to implement the behavior of a stack. For example, you can use `append()` to push an item onto the stack and `pop()` to remove an item from the top of the stack. This is efficient because both operations are O(1), meaning they take the same amount of time regardless of the size of the list.

:::info
While lists in Python can be used to implement stack operations efficiently, for larger and more complex applications where both queue and stack operations are needed, using collections like `deque` would be more efficient and versatile.
:::

### Lists as Queues

It is also possible to use a list as a queue, where the first element added is the first element retrieved (“first-in, first-out”).

```python title="main.py"
from collections import deque

queue = deque(["Eric", "John", "Michael"])
queue.append("Terry")  # Terry arrives
print(queue.popleft())  # Eric leaves - Outputs "Eric"
```

:::caution
You can use list operations to simulate a queue's "First-In, First-Out" (FIFO) behavior. However, lists in Python are not optimized for this use-case.
:::

In the examples above, we used lists to create stack and queue data structures. This demonstrates the flexibility and power of lists in Python.
