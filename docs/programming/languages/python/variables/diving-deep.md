# Diving Deep

In Python, understanding how memory works, how references are created, and how objects are passed to functions is crucial for writing effective code.

## Memory and Reference

When you create an object in Python, it gets stored in memory. When you assign that object to a variable, the variable becomes a reference to the object, not the object itself.

```python
x = [1, 2, 3]  # x is a reference to the list object [1, 2, 3] in memory
```

Multiple variables can refer to the same object:

```python
y = x  # y now also refers to the same list object [1, 2, 3]
```

If you modify a mutable object (like a list) through one reference, the changes are visible through all other references, because they're all referring to the same object:

```python
x.append(4)
print(y)  # Output: [1, 2, 3, 4]
```

### Immutable Objects

Immutable objects like integers and strings can't be changed. When you seem to change them, you're actually creating a new object.

```python
def change_value(n):
    n = 100

x = 5
change_value(x)
print(x)  # Output: 5
```

In this example, `change_value(x)` seems to change `x`, but it actually doesn't. The assignment `n = 100` inside the function creates a new integer object `100` and makes `n` refer to it, but `x` still refers to the original integer object `5`.

### Mutable Objects

Mutable objects like lists and dictionaries can be changed, and these changes are visible through all references to the object.

```python
def change_list(lst):
    lst.append('New Element')  # Modifies the original object
    lst = ['Another', 'List']  # Doesn't affect the original object

x = [1, 2, 3]
change_list(x)
print(x)  # Output: [1, 2, 3, 'New Element']
```

In this example, `change_list(x)` modifies the list that `x` refers to by appending a new element to it. This is because `lst.append('New Element')` modifies the list object in-place, and `lst` and `x` both refer to this same object.

However, the assignment `lst = ['Another', 'List']` inside the function doesn't affect `x`, because it doesn't modify the original list object. Instead, it creates a new list object and makes `lst` refer to it. Since `x` still refers to the original list object, it's not affected by this operation.

This behavior is an aspect of Python's "call by-object reference" strategy: you can modify mutable objects passed to a function, but you can't change the original reference to point to a new object.

## Pass By-Object Reference

Python uses a strategy called "pass by-object reference" for function arguments. When you pass an argument to a function, the function receives a reference to the object.

```python
def add_element(lst):
    lst.append('New Element')

x = [1, 2, 3]
add_element(x)
print(x)  # Output: [1, 2, 3, 'New Element']
```

In this example, `add_element(x)` passes the list `x` to the function. Inside the function, `lst` is a local reference to the same list object that `x` refers to outside the function. Because they're both referring to the same object, changes made through `lst` are visible when accessing the object through `x`.

### Call by Object Sharing

The mechanism of passing arguments is often referred to as "call by object sharing" or "call by sharing". It means that the called function and the caller share the same object, but the function can't change what the caller's variable refers to. The function can modify the shared object if it's mutable, but it can't make the caller's variable refer to a new object.

This behavior is a mix between traditional "pass by value" and "pass by reference" strategies. It's similar to pass-by-value because the function can't change the caller's variable to refer to a new object, and it's similar to pass-by-reference because the function can modify the caller's object if it's mutable.

However, it's not exactly either of these — it's its own approach that combines elements of both. Understanding this behavior is key to understanding how Python handles objects and function arguments.

:::info
The terms "pass by object reference" and "call by object sharing" are often used interchangeably to describe Python's argument passing model.
:::

**Related Links**:

- [Mutable Default Argument](./#mutable-default-argument)
- [Immutability](./#immutability)
