# Deep Dive

## Memory Reference

Every variable in your program occupies space in memory. When you create a variable, a specific amount of memory is allocated to store its value. Each memory location has a unique address, and this address is used by TypeScript (and the underlying JavaScript engine) to access and manipulate the variable.

```ts title="MemoryReferenceExample.ts"
let x = 10;
// highlight-next-line
let y = x;
```

In this example, `x` is allocated a memory location that stores the value `10`. When `y` is assigned the value of `x`, it's actually getting a copy of the value stored in `x`'s memory location. This is known as a memory reference.

## Immutability

When we say something is "immutable," we mean that its state or value cannot be changed after it has been set. For data structures, this means that once they are created, their content or structure cannot be changed without creating a new instance.

### Primitive Types and Immutability

In TypeScript and JavaScript, primitive types (number, string, boolean, null, undefined, symbol, and BigInt in newer versions) are immutable. What this means is that once a value of a primitive type is created, that exact value can never be changed.

However, the confusion often arises because of the distinction between the value itself and the variable that holds the value. While the value is immutable, the variable can be reassigned to point to a different value.

Let's use a string as an example:

```ts title="StringImmutability.ts"
let str = "hello";
// highlight-next-line
str = str + " world";  // Reassigning the variable to a new value
```

In this case, the original string "hello" hasn't been changed or mutated. Instead, a new string "hello world" has been created, and the variable `str` has been updated to reference this new string. The original string remains unchanged in memory until it's eventually garbage collected (if no references to it remain).

The same principle applies to numbers:

```ts title="NumberImmutability.ts"
let x = 10;
// highlight-next-line
x = x + 5;  // Reassigning the variable to a new value
```

The number 10 itself hasn't changed. Instead, the expression `x + 5` creates a new number value (15), and the variable `x` is then updated to reference this new value.

## Pass-by-Value and Pass-by-Reference

The terms "pass-by-value" and "pass-by-reference" describe how data is transferred when you pass a variable to a function.

### Pass-by-Value

When you pass a variable to a function by value, a copy of the variable's value is made and stored in a new memory location. Changes to the copy do not affect the original variable. In TypeScript, all primitive types (like `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`) are passed by value.

```ts title="PassByValueExample.ts"
function changeValue(x: number) {
// highlight-next-line
  x = 2; // reassigning primitive type to a new value
}

let x = 1;
changeValue(x);
console.log(x); // Outputs: 1
```

Here, `x` remains `1` even after `changeValue()` is called because the function only modifies a copy of `x`.

### Pass-by-Reference

Pass-by-reference means that when a variable is passed to a function, what's actually passed is the memory address of the variable, not a copy of its value. So, any change made inside the function is reflected globally in the main memory.

```ts title="PassByReferenceExample.ts"
function changeProp(obj: { [key: string]: number }) {
// highlight-next-line
  obj.prop = 2; // changing state from passed object reference
}

let obj = { prop: 1 };
changeProp(obj);
console.log(obj); // Outputs: { prop: 2 }
```

In this case, obj.prop changes to 2 because obj is passed by reference. However, it's important to note that the term "pass-by-reference" is often used to describe this behavior, but the more accurate description is **"call-by-sharing,"** as detailed below.

## Call-by-Sharing

TypeScript (like JavaScript) actually uses a strategy known as "call-by-sharing" (also known as "call-by-object", "call-by-object-sharing" or "pass by object reference"). Call-by-sharing means that while objects and arrays are passed by reference, the "references" themselves are actually passed by value. In TypeScript, non-primitive types (like `object` and `array`) are passed by object reference (call by sharing).

```ts title="CallBySharingExample.ts"
function changeRef(obj: { [key: string]: number }) {
// highlight-next-line
  obj = { prop: 2 }; // reassigned to a new object that lives to a new location in memory
}

let obj = { prop: 1 };
changeRef(obj);
console.log(obj); // Outputs: { prop: 1 }
```

In this example, `obj.prop` remains `1` because the `obj` inside `changeRef()` is a copy of the reference to the original object. When that reference is overwritten with a new object, it doesn't affect the original object.

The key point is that for objects, arrays, and functions, TypeScript and JavaScript use call-by-sharing. When you pass one of these types to a function, the function receives a reference to the object, not the variable itself. You can modify the contents of the object through that reference, but if you try to reassign the reference itself inside the function, it won't affect the corresponding variable outside the function.

This behavior is consistent with call-by-sharing, not true pass-by-reference as seen in some other programming languages.

## Common Pitfalls

### Not Understanding the Difference Between Pass-by-Value and Pass-by-Reference

One common mistake is to assume that TypeScript is strictly pass-by-value or pass-by-reference. As we've seen, it uses pass-by-value for primitive types and pass-by-reference for objects and arrays.

### Assuming That Arrays Are Copied When Assigned

When you assign an array to a new variable, you're actually copying the reference, not the array itself. This can lead to unexpected behavior if you're not aware of it.

```ts title="ArrayReference.ts"
var originalArray = [1, 2, 3];
// highlight-next-line
var copiedArray = originalArray;

console.log(originalArray); // Output: [1, 2, 3]
console.log(copiedArray);   // Output: [1, 2, 3]

// Modifying the copied array will affect the original array
// highlight-next-line
copiedArray[0] = 99;

console.log(originalArray); // Output: [99, 2, 3]
console.log(copiedArray);   // Output: [99, 2, 3]

```

In this example, `originalArray` and `copiedArray` both refer to the same array in memory. When you modify `copiedArray`, the changes are reflected in `originalArray` as well, since they are both pointing to the same memory location.

If you want to create a true copy of the array that doesn't share the same reference, you can use methods like `slice()` or the spread operator:

```ts title="ArrayCloning.ts"
var trueCopy = originalArray.slice();
// or
var trueCopy = [...originalArray];
```

These methods will create a new array that is a copy of the original, and changes to one will not affect the other.

## Best Practices

### Be Aware of Mutations

When you're passing around objects and arrays, be aware that these are passed by reference and can be mutated by the functions that receive them.

### Use `const` for Variables That Shouldn't Be Reassigned

Using `const` makes it clear that the variable's value should not be changed once it's been assigned. This can help prevent bugs.

### Consider Using Immutable Data Structures

Immutable data structures can be incredibly useful in programming, as they help prevent unexpected changes to data, which can lead to bugs and difficult-to-maintain code.

You can achieve immutability by using methods that return new instances rather than modifying existing ones.

```ts title="BasicImmutability.ts"
// Function to add an element to the array in an immutable way
function addElement(arr: number[], element: number) {
// highlight-next-line
  return [...arr, element]; // Returns a new array with the added element
}

// Original array
const originalArray = [1, 2, 3];

// Adding an element using our immutable function
const newArray = addElement(originalArray, 4);

console.log(originalArray); // Output: [1, 2, 3]
console.log(newArray);      // Output: [1, 2, 3, 4]
```

In TypeScript, you can leverage `readonly` and other mechanisms to create immutable data structures.

```typescript title="InterfaceImmutability.ts"
// Define an immutable interface
interface ImmutablePerson {
  // highlight-start
  readonly name: string;
  readonly age: number;
  // highlight-end
}

// Create an object that implements the immutable interface
const person: ImmutablePerson = {
  name: 'Alice',
  age: 25
};

// Trying to modify the object's properties will result in a TypeScript error
// This will error
person.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.

// To update the object, you can create a new object with the modified values
const updatedPerson: ImmutablePerson = {
  ...person,
  name: 'Bob'
};

console.log(updatedPerson); // Output: { name: 'Bob', age: 25 }
```

In this example, we've defined an `ImmutablePerson` interface with `readonly` properties. Attempting to change these properties will result in a TypeScript compile-time error, enforcing immutability.

If you need to "update" an immutable object, the typical approach is to create a new object that contains the modified values, as shown with the `updatedPerson` constant. The spread operator (`...`) is used to copy all the existing properties from the `person` object, and the modified values are provided afterward.

This ensures that the original object remains unchanged, and the new object reflects the desired changes, adhering to the principles of immutability.

:::tip Use Immer for Immutable State Management

Immer simplifies handling immutable data in state management by allowing you to write code that appears to mutate objects directly. Under the hood, it creates new immutable objects that reflect those changes. It's an efficient way to manage complex state updates, reducing verbosity and error risk.
:::
