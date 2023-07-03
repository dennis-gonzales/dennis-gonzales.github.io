# Variables

A variable is a named location used to store data in the memory. It is a way of referring to the memory location used by a computer program. Here is an example:

```python title="main.py"
name = "John Doe"
age = 30
```

In the example above, `name` and `age` are variables that hold values `"John Doe"` and `30` respectively.

## Common Pitfalls

Here's the thing about Python that you might not expect coming from other languages: variables in Python are **dynamically typed**. This means that a variable can change its type over the course of a program's execution.

For instance, x can start off as an integer and later become a string:

```python title="main.py"
x = 5  # x is an integer
x = "Hello"  # x is now a string
```

### Uninitialized Variables

If you try to use a variable before you've assigned it a value, you'll get a `NameError`.

```python title="main.py"
print(my_var)  # NameError: name 'my_var' is not defined
```

### Mutable Default Argument

Setting a mutable object like a list or dictionary as a default value for a function argument.

This object is created once when the function is defined, not each time the function is called. This can lead to unexpected behavior.

```python title="main.py"
def add_employee(name, department, employee_list=[]):
    employee_list.append((name, department))
    return employee_list

print(add_employee("John", "Sales"))  # Prints: [("John", "Sales")]
print(add_employee("Jane", "Marketing"))  # Prints: [("John", "Sales"), ("Jane", "Marketing")]

```

Even though "John" and "Jane" were added in different calls to `add_employee()`, they ended up in the same list because the same default list object was used in both calls.

If you want to avoid this pitfall, a common practice is to use `None` as the default value and create a new object in the function if the argument is `None`:

```python title="main.py"
def append_to(num, target=None):
    if target is None:
        target = []
    target.append(num)
    return target

print(append_to(1))  # Prints: [1]
print(append_to(2))  # Prints: [2]

```

In this version of the function, a new list is created every time append_to() is called without a target argument, thus avoiding the problem.

### Immutability

Some Python objects, like strings and tuples, are immutable. This means that they can't be changed after they're created. If you try to change them, Python will create a new object instead. This can lead to unexpected behavior if you're not aware of it.

Consider this example with strings:

```python title="main.py"
s = "hello"
s[0] = "y"  # TypeError: 'str' object does not support item assignment

```

If you run this code, Python will give you an error message, because you're trying to change the first character of the string `s`, and strings are immutable in Python.

With a tuple, it's the same:

```python title="main.py"
t = (1, 2, 3)
t[0] = 5  # TypeError: 'tuple' object does not support item assignment

```

In this code, we're trying to change the first element of the tuple `t`, but tuples are also immutable, so Python won't allow it.

It's important to note that when you "change" an immutable object in Python, what actually happens is that Python creates a new object with the new data, and the variable now refers to this new object. The old object remains the same. This can be confusing if you're not expecting it.

For example, if you try to concatenate a new string onto the end of an existing one, it might look like the original string is changing:

```python title="main.py"
s = "hello"
s = s + ", world"

```

After this code runs, `s` is `"hello, world"`. However, the original `"hello"` string is still in memory, unchanged. Python created a new string `"hello, world"` and made `s` refer to this new object.

So, even though it may look like you're changing an immutable object, you're really just creating a new one.

### Variable Name Shadowing

This happens when a variable inside a function has the same name as a global variable.

```python title="main.py"
my_var = 10  # global variable

def my_func():
    my_var = 5  # local variable
    print(my_var)

my_func()  # prints 5
print(my_var)  # prints 10
```

## Best Practices

### Descriptive Naming

Variables should be lowercase, with words separated by underscores. They should be descriptive to improve readability.

```python title="main.py"
customer_count = 5 # Good
cc = 5 # Bad
```

### Avoid Using Reserved Words

Do not use Python keywords as variable names. E.g. print, list, etc.

### Avoid Global Variables

Global variables can be changed anywhere in the program, which can lead to confusing code.

:::info Notice
There may be situations where global variables are necessary or useful, such as when sharing data across multiple modules or when implementing certain design patterns. In such cases, it is important to use global variables judiciously and consider the potential impacts on code clarity and maintainability.
:::

### One Variable per Line

Declare each variable on a new line. This increases readability.

```python title="main.py"
# Good
x = 5 
y = 10 

# Bad
x, y = 5, 10
```
