"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[9289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},s="Deep Dive",l={unversionedId:"programming/languages/typescript/variables/deep-dive",id:"programming/languages/typescript/variables/deep-dive",title:"Deep Dive",description:"Memory Reference",source:"@site/docs/programming/languages/typescript/variables/deep-dive.md",sourceDirName:"programming/languages/typescript/variables",slug:"/programming/languages/typescript/variables/deep-dive",permalink:"/programming/languages/typescript/variables/deep-dive",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/languages/typescript/variables/deep-dive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/programming/languages/typescript/variables/"},next:{title:"Data Types",permalink:"/programming/languages/typescript/data-types/"}},o={},p=[{value:"Memory Reference",id:"memory-reference",level:2},{value:"Immutability",id:"immutability",level:2},{value:"Primitive Types and Immutability",id:"primitive-types-and-immutability",level:3},{value:"Pass-by-Value and Pass-by-Reference",id:"pass-by-value-and-pass-by-reference",level:2},{value:"Pass-by-Value",id:"pass-by-value",level:3},{value:"Pass-by-Reference",id:"pass-by-reference",level:3},{value:"Call-by-Sharing",id:"call-by-sharing",level:2},{value:"Common Pitfalls",id:"common-pitfalls",level:2},{value:"Not Understanding the Difference Between Pass-by-Value and Pass-by-Reference",id:"not-understanding-the-difference-between-pass-by-value-and-pass-by-reference",level:3},{value:"Assuming That Arrays Are Copied When Assigned",id:"assuming-that-arrays-are-copied-when-assigned",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Be Aware of Mutations",id:"be-aware-of-mutations",level:3},{value:"Use <code>const</code> for Variables That Shouldn&#39;t Be Reassigned",id:"use-const-for-variables-that-shouldnt-be-reassigned",level:3},{value:"Consider Using Immutable Data Structures",id:"consider-using-immutable-data-structures",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deep-dive"},"Deep Dive"),(0,r.kt)("h2",{id:"memory-reference"},"Memory Reference"),(0,r.kt)("p",null,"Every variable in your program occupies space in memory. When you create a variable, a specific amount of memory is allocated to store its value. Each memory location has a unique address, and this address is used by TypeScript (and the underlying JavaScript engine) to access and manipulate the variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="MemoryReferenceExample.ts"',title:'"MemoryReferenceExample.ts"'},"let x = 10;\n// highlight-next-line\nlet y = x;\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is allocated a memory location that stores the value ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),". When ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is assigned the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", it's actually getting a copy of the value stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"'s memory location. This is known as a memory reference."),(0,r.kt)("h2",{id:"immutability"},"Immutability"),(0,r.kt)("p",null,'When we say something is "immutable," we mean that its state or value cannot be changed after it has been set. For data structures, this means that once they are created, their content or structure cannot be changed without creating a new instance.'),(0,r.kt)("h3",{id:"primitive-types-and-immutability"},"Primitive Types and Immutability"),(0,r.kt)("p",null,"In TypeScript and JavaScript, primitive types (number, string, boolean, null, undefined, symbol, and BigInt in newer versions) are immutable. What this means is that once a value of a primitive type is created, that exact value can never be changed."),(0,r.kt)("p",null,"However, the confusion often arises because of the distinction between the value itself and the variable that holds the value. While the value is immutable, the variable can be reassigned to point to a different value."),(0,r.kt)("p",null,"Let's use a string as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="StringImmutability.ts"',title:'"StringImmutability.ts"'},'let str = "hello";\n// highlight-next-line\nstr = str + " world";  // Reassigning the variable to a new value\n')),(0,r.kt)("p",null,'In this case, the original string "hello" hasn\'t been changed or mutated. Instead, a new string "hello world" has been created, and the variable ',(0,r.kt)("inlineCode",{parentName:"p"},"str")," has been updated to reference this new string. The original string remains unchanged in memory until it's eventually garbage collected (if no references to it remain)."),(0,r.kt)("p",null,"The same principle applies to numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="NumberImmutability.ts"',title:'"NumberImmutability.ts"'},"let x = 10;\n// highlight-next-line\nx = x + 5;  // Reassigning the variable to a new value\n")),(0,r.kt)("p",null,"The number 10 itself hasn't changed. Instead, the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"x + 5")," creates a new number value (15), and the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is then updated to reference this new value."),(0,r.kt)("h2",{id:"pass-by-value-and-pass-by-reference"},"Pass-by-Value and Pass-by-Reference"),(0,r.kt)("p",null,'The terms "pass-by-value" and "pass-by-reference" describe how data is transferred when you pass a variable to a function.'),(0,r.kt)("h3",{id:"pass-by-value"},"Pass-by-Value"),(0,r.kt)("p",null,"When you pass a variable to a function by value, a copy of the variable's value is made and stored in a new memory location. Changes to the copy do not affect the original variable. In TypeScript, all primitive types (like ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),") are passed by value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="PassByValueExample.ts"',title:'"PassByValueExample.ts"'},"function changeValue(x: number) {\n// highlight-next-line\n  x = 2; // reassigning primitive type to a new value\n}\n\nlet x = 1;\nchangeValue(x);\nconsole.log(x); // Outputs: 1\n")),(0,r.kt)("p",null,"Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," remains ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," even after ",(0,r.kt)("inlineCode",{parentName:"p"},"changeValue()")," is called because the function only modifies a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,r.kt)("h3",{id:"pass-by-reference"},"Pass-by-Reference"),(0,r.kt)("p",null,"Pass-by-reference means that when a variable is passed to a function, what's actually passed is the memory address of the variable, not a copy of its value. So, any change made inside the function is reflected globally in the main memory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="PassByReferenceExample.ts"',title:'"PassByReferenceExample.ts"'},"function changeProp(obj: { [key: string]: number }) {\n// highlight-next-line\n  obj.prop = 2; // changing state from passed object reference\n}\n\nlet obj = { prop: 1 };\nchangeProp(obj);\nconsole.log(obj); // Outputs: { prop: 2 }\n")),(0,r.kt)("p",null,'In this case, obj.prop changes to 2 because obj is passed by reference. However, it\'s important to note that the term "pass-by-reference" is often used to describe this behavior, but the more accurate description is ',(0,r.kt)("strong",{parentName:"p"},'"call-by-sharing,"')," as detailed below."),(0,r.kt)("h2",{id:"call-by-sharing"},"Call-by-Sharing"),(0,r.kt)("p",null,'TypeScript (like JavaScript) actually uses a strategy known as "call-by-sharing" (also known as "call-by-object", "call-by-object-sharing" or "pass by object reference"). Call-by-sharing means that while objects and arrays are passed by reference, the "references" themselves are actually passed by value. In TypeScript, non-primitive types (like ',(0,r.kt)("inlineCode",{parentName:"p"},"object")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),") are passed by object reference (call by sharing)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="CallBySharingExample.ts"',title:'"CallBySharingExample.ts"'},"function changeRef(obj: { [key: string]: number }) {\n// highlight-next-line\n  obj = { prop: 2 }; // reassigned to a new object that lives to a new location in memory\n}\n\nlet obj = { prop: 1 };\nchangeRef(obj);\nconsole.log(obj); // Outputs: { prop: 1 }\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.prop")," remains ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," because the ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"changeRef()")," is a copy of the reference to the original object. When that reference is overwritten with a new object, it doesn't affect the original object."),(0,r.kt)("p",null,"The key point is that for objects, arrays, and functions, TypeScript and JavaScript use call-by-sharing. When you pass one of these types to a function, the function receives a reference to the object, not the variable itself. You can modify the contents of the object through that reference, but if you try to reassign the reference itself inside the function, it won't affect the corresponding variable outside the function."),(0,r.kt)("p",null,"This behavior is consistent with call-by-sharing, not true pass-by-reference as seen in some other programming languages."),(0,r.kt)("h2",{id:"common-pitfalls"},"Common Pitfalls"),(0,r.kt)("h3",{id:"not-understanding-the-difference-between-pass-by-value-and-pass-by-reference"},"Not Understanding the Difference Between Pass-by-Value and Pass-by-Reference"),(0,r.kt)("p",null,"One common mistake is to assume that TypeScript is strictly pass-by-value or pass-by-reference. As we've seen, it uses pass-by-value for primitive types and pass-by-reference for objects and arrays."),(0,r.kt)("h3",{id:"assuming-that-arrays-are-copied-when-assigned"},"Assuming That Arrays Are Copied When Assigned"),(0,r.kt)("p",null,"When you assign an array to a new variable, you're actually copying the reference, not the array itself. This can lead to unexpected behavior if you're not aware of it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ArrayReference.ts"',title:'"ArrayReference.ts"'},"var originalArray = [1, 2, 3];\n// highlight-next-line\nvar copiedArray = originalArray;\n\nconsole.log(originalArray); // Output: [1, 2, 3]\nconsole.log(copiedArray);   // Output: [1, 2, 3]\n\n// Modifying the copied array will affect the original array\n// highlight-next-line\ncopiedArray[0] = 99;\n\nconsole.log(originalArray); // Output: [99, 2, 3]\nconsole.log(copiedArray);   // Output: [99, 2, 3]\n\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"originalArray")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"copiedArray")," both refer to the same array in memory. When you modify ",(0,r.kt)("inlineCode",{parentName:"p"},"copiedArray"),", the changes are reflected in ",(0,r.kt)("inlineCode",{parentName:"p"},"originalArray")," as well, since they are both pointing to the same memory location."),(0,r.kt)("p",null,"If you want to create a true copy of the array that doesn't share the same reference, you can use methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"slice()")," or the spread operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ArrayCloning.ts"',title:'"ArrayCloning.ts"'},"var trueCopy = originalArray.slice();\n// or\nvar trueCopy = [...originalArray];\n")),(0,r.kt)("p",null,"These methods will create a new array that is a copy of the original, and changes to one will not affect the other."),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("h3",{id:"be-aware-of-mutations"},"Be Aware of Mutations"),(0,r.kt)("p",null,"When you're passing around objects and arrays, be aware that these are passed by reference and can be mutated by the functions that receive them."),(0,r.kt)("h3",{id:"use-const-for-variables-that-shouldnt-be-reassigned"},"Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"const")," for Variables That Shouldn't Be Reassigned"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," makes it clear that the variable's value should not be changed once it's been assigned. This can help prevent bugs."),(0,r.kt)("h3",{id:"consider-using-immutable-data-structures"},"Consider Using Immutable Data Structures"),(0,r.kt)("p",null,"Immutable data structures can be incredibly useful in programming, as they help prevent unexpected changes to data, which can lead to bugs and difficult-to-maintain code."),(0,r.kt)("p",null,"You can achieve immutability by using methods that return new instances rather than modifying existing ones."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="BasicImmutability.ts"',title:'"BasicImmutability.ts"'},"// Function to add an element to the array in an immutable way\nfunction addElement(arr: number[], element: number) {\n// highlight-next-line\n  return [...arr, element]; // Returns a new array with the added element\n}\n\n// Original array\nconst originalArray = [1, 2, 3];\n\n// Adding an element using our immutable function\nconst newArray = addElement(originalArray, 4);\n\nconsole.log(originalArray); // Output: [1, 2, 3]\nconsole.log(newArray);      // Output: [1, 2, 3, 4]\n")),(0,r.kt)("p",null,"In TypeScript, you can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," and other mechanisms to create immutable data structures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="InterfaceImmutability.ts"',title:'"InterfaceImmutability.ts"'},"// Define an immutable interface\ninterface ImmutablePerson {\n  // highlight-start\n  readonly name: string;\n  readonly age: number;\n  // highlight-end\n}\n\n// Create an object that implements the immutable interface\nconst person: ImmutablePerson = {\n  name: 'Alice',\n  age: 25\n};\n\n// Trying to modify the object's properties will result in a TypeScript error\n// This will error\nperson.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.\n\n// To update the object, you can create a new object with the modified values\nconst updatedPerson: ImmutablePerson = {\n  ...person,\n  name: 'Bob'\n};\n\nconsole.log(updatedPerson); // Output: { name: 'Bob', age: 25 }\n")),(0,r.kt)("p",null,"In this example, we've defined an ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutablePerson")," interface with ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," properties. Attempting to change these properties will result in a TypeScript compile-time error, enforcing immutability."),(0,r.kt)("p",null,'If you need to "update" an immutable object, the typical approach is to create a new object that contains the modified values, as shown with the ',(0,r.kt)("inlineCode",{parentName:"p"},"updatedPerson")," constant. The spread operator (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") is used to copy all the existing properties from the ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," object, and the modified values are provided afterward."),(0,r.kt)("p",null,"This ensures that the original object remains unchanged, and the new object reflects the desired changes, adhering to the principles of immutability."),(0,r.kt)("admonition",{title:"Use Immer for Immutable State Management",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Immer simplifies handling immutable data in state management by allowing you to write code that appears to mutate objects directly. Under the hood, it creates new immutable objects that reflect those changes. It's an efficient way to manage complex state updates, reducing verbosity and error risk.")))}m.isMDXComponent=!0}}]);