"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[3002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,c=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(c,r(r({ref:t},h),{},{components:a})):n.createElement(c,r({ref:t},h))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:1},r="Variables",o={unversionedId:"programming/languages/python/variables",id:"programming/languages/python/variables",title:"Variables",description:"A variable is a named location used to store data in the memory. It is a way of referring to the memory location used by a computer program. Here is an example:",source:"@site/docs/programming/languages/python/variables.md",sourceDirName:"programming/languages/python",slug:"/programming/languages/python/variables",permalink:"/programming/languages/python/variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming/languages/python/variables.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/programming/languages/python/"},next:{title:"Data Types",permalink:"/programming/languages/python/data-types/"}},s={},p=[{value:"Mutable vs Immutable Types",id:"mutable-vs-immutable-types",level:2},{value:"Hashability in Python",id:"hashability-in-python",level:3},{value:"Hashability of Tuples",id:"hashability-of-tuples",level:3},{value:"How the <code>hash()</code> Function Works",id:"how-the-hash-function-works",level:3},{value:"<strong>Related Links:</strong>",id:"related-links",level:4},{value:"Common Pitfalls",id:"common-pitfalls",level:2},{value:"Dynamically Typed",id:"dynamically-typed",level:3},{value:"Uninitialized Variables",id:"uninitialized-variables",level:3},{value:"Mutable Default Argument",id:"mutable-default-argument",level:3},{value:"Immutability",id:"immutability",level:3},{value:"Variable Name Shadowing",id:"variable-name-shadowing",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Descriptive Naming",id:"descriptive-naming",level:3},{value:"Avoid Using Reserved Words",id:"avoid-using-reserved-words",level:3},{value:"Avoid Global Variables",id:"avoid-global-variables",level:3},{value:"One Variable per Line",id:"one-variable-per-line",level:3}],h={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variables"},"Variables"),(0,i.kt)("p",null,"A variable is a named location used to store data in the memory. It is a way of referring to the memory location used by a computer program. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'name = "John Doe"\nage = 30\n')),(0,i.kt)("p",null,"In the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," are variables that hold values ",(0,i.kt)("inlineCode",{parentName:"p"},'"John Doe"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," respectively."),(0,i.kt)("h2",{id:"mutable-vs-immutable-types"},"Mutable vs Immutable Types"),(0,i.kt)("p",null,"Some Python objects like lists, dictionaries, and sets are mutable, meaning their contents or state can be changed after they are created. On the other hand, some Python objects like integers, floats, strings, and tuples are immutable, meaning their content can't be changed after they are created."),(0,i.kt)("h3",{id:"hashability-in-python"},"Hashability in Python"),(0,i.kt)("p",null,'In Python, "hashability" refers to the ability of an object to be used as a key in a dictionary or as an element in a set. Both of these data structures require their elements or keys to be unique and immutable (unchanging over their lifetime).'),(0,i.kt)("p",null,'The term "hashable" essentially describes any object that can have a fixed integer representation, calculated by a hash function, that is unique for that object and does not change over its lifetime. In Python, the built-in ',(0,i.kt)("inlineCode",{parentName:"p"},"hash()")," function is used to calculate this integer representation."),(0,i.kt)("p",null,"A hashable object has two requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"It should have a hash value that remains constant throughout its lifetime.")," This is why immutable types (like integers, floats, strings, and tuples) are hashable, while mutable types (like lists, dictionaries, and sets) are not. Mutable types can change their values, which means their hash value could also change."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"It should be able to be compared to other objects.")," This means the object needs an ",(0,i.kt)("inlineCode",{parentName:"li"},"__eq__()")," method, which is used for equality comparison. If two objects compare equal (i.e., ",(0,i.kt)("inlineCode",{parentName:"li"},"a == b")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"), their hash values must also be equal.")),(0,i.kt)("h3",{id:"hashability-of-tuples"},"Hashability of Tuples"),(0,i.kt)("p",null,"In Python, tuples are immutable, but this doesn't automatically make all tuples hashable. A tuple is only hashable if all its elements are also hashable."),(0,i.kt)("p",null,"Consider the following examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A tuple of integers is hashable because integers are immutable and therefore hashable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"t = (1, 2, 3)\nprint(hash(t))  # This will print a hash value\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A tuple of strings is also hashable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"t = ('apple', 'banana', 'cherry')\nprint(hash(t))  # This will print a hash value\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"But a tuple that contains a list is not hashable because lists are mutable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"t = (1, 2, [3, 4, 5])\nprint(hash(t))  # This will raise a TypeError\n")))),(0,i.kt)("p",null,"In the last example, ",(0,i.kt)("inlineCode",{parentName:"p"},"hash(t)")," raises a ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeError")," because the tuple contains a list, which is not hashable."),(0,i.kt)("h3",{id:"how-the-hash-function-works"},"How the ",(0,i.kt)("inlineCode",{parentName:"h3"},"hash()")," Function Works"),(0,i.kt)("p",null,"When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"hash()")," on an object, Python internally calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"__hash__()")," method for that object. For a tuple, this method works by iterating over all the elements of the tuple and calling their ",(0,i.kt)("inlineCode",{parentName:"p"},"__hash__()")," methods. It then combines these hash values in a certain way to generate a new hash value."),(0,i.kt)("p",null,"If any element of the tuple does not have a ",(0,i.kt)("inlineCode",{parentName:"p"},"__hash__()")," method (i.e., if it is not hashable), Python will raise a ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeError"),"."),(0,i.kt)("p",null,"To summarize, a Python object is hashable if it is immutable and if it can be compared to other objects for equality. For tuples, all elements also have to be hashable for the tuple itself to be hashable. Hashable objects are mainly used as dictionary keys and set elements because these data structures require their elements to be unique and immutable."),(0,i.kt)("h4",{id:"related-links"},(0,i.kt)("strong",{parentName:"h4"},"Related Links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./variables#immutability"},"Immutability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-types/tuple#hashability"},"Tuple Hashability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-types/dict#immutable-keys"},"Dictionary Immutable Keys"))),(0,i.kt)("h2",{id:"common-pitfalls"},"Common Pitfalls"),(0,i.kt)("h3",{id:"dynamically-typed"},"Dynamically Typed"),(0,i.kt)("p",null,"Here's the thing about Python that you might not expect coming from other languages: variables in Python are dynamically typed. This means that a variable can change its type over the course of a program's execution."),(0,i.kt)("p",null,"For instance, x can start off as an integer and later become a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'x = 5  # x is an integer\nx = "Hello"  # x is now a string\n')),(0,i.kt)("h3",{id:"uninitialized-variables"},"Uninitialized Variables"),(0,i.kt)("p",null,"If you try to use a variable before you've assigned it a value, you'll get a ",(0,i.kt)("inlineCode",{parentName:"p"},"NameError"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"print(my_var)  # NameError: name 'my_var' is not defined\n")),(0,i.kt)("h3",{id:"mutable-default-argument"},"Mutable Default Argument"),(0,i.kt)("p",null,"Setting a mutable object like a list or dictionary as a default value for a function argument."),(0,i.kt)("p",null,"This object is created once when the function is defined, not each time the function is called. This can lead to unexpected behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'def add_employee(name, department, employee_list=[]):\n    employee_list.append((name, department))\n    return employee_list\n\nprint(add_employee("John", "Sales"))  # Prints: [("John", "Sales")]\nprint(add_employee("Jane", "Marketing"))  # Prints: [("John", "Sales"), ("Jane", "Marketing")]\n\n')),(0,i.kt)("p",null,'Even though "John" and "Jane" were added in different calls to ',(0,i.kt)("inlineCode",{parentName:"p"},"add_employee()"),", they ended up in the same list because the same default list object was used in both calls."),(0,i.kt)("p",null,"If you want to avoid this pitfall, a common practice is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," as the default value and create a new object in the function if the argument is ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"def append_to(num, target=None):\n    if target is None:\n        target = []\n    target.append(num)\n    return target\n\nprint(append_to(1))  # Prints: [1]\nprint(append_to(2))  # Prints: [2]\n\n")),(0,i.kt)("p",null,"In this version of the function, a new list is created every time append_to() is called without a target argument, thus avoiding the problem."),(0,i.kt)("h3",{id:"immutability"},"Immutability"),(0,i.kt)("p",null,"Some Python objects, like strings and tuples, are immutable. This means that they can't be changed after they're created. If you try to change them, Python will create a new object instead. This can lead to unexpected behavior if you're not aware of it."),(0,i.kt)("p",null,"Consider this example with strings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'s = "hello"\ns[0] = "y"  # TypeError: \'str\' object does not support item assignment\n\n')),(0,i.kt)("p",null,"If you run this code, Python will give you an error message, because you're trying to change the first character of the string ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),", and strings are immutable in Python."),(0,i.kt)("p",null,"With a tuple, it's the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"t = (1, 2, 3)\nt[0] = 5  # TypeError: 'tuple' object does not support item assignment\n\n")),(0,i.kt)("p",null,"In this code, we're trying to change the first element of the tuple ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", but tuples are also immutable, so Python won't allow it."),(0,i.kt)("p",null,"It's important to note that when you \"change\" an immutable object in Python, what actually happens is that Python creates a new object with the new data, and the variable now refers to this new object. The old object remains the same. This can be confusing if you're not expecting it."),(0,i.kt)("p",null,"For example, if you try to concatenate a new string onto the end of an existing one, it might look like the original string is changing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'s = "hello"\ns = s + ", world"\n\n')),(0,i.kt)("p",null,"After this code runs, ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"hello, world"'),". However, the original ",(0,i.kt)("inlineCode",{parentName:"p"},'"hello"')," string is still in memory, unchanged. Python created a new string ",(0,i.kt)("inlineCode",{parentName:"p"},'"hello, world"')," and made ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," refer to this new object."),(0,i.kt)("p",null,"So, even though it may look like you're changing an immutable object, you're really just creating a new one."),(0,i.kt)("h3",{id:"variable-name-shadowing"},"Variable Name Shadowing"),(0,i.kt)("p",null,"This happens when a variable inside a function has the same name as a global variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"my_var = 10  # global variable\n\ndef my_func():\n    my_var = 5  # local variable\n    print(my_var)\n\nmy_func()  # prints 5\nprint(my_var)  # prints 10\n")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"descriptive-naming"},"Descriptive Naming"),(0,i.kt)("p",null,"Variables should be lowercase, with words separated by underscores. They should be descriptive to improve readability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"customer_count = 5 # Good\ncc = 5 # Bad\n")),(0,i.kt)("h3",{id:"avoid-using-reserved-words"},"Avoid Using Reserved Words"),(0,i.kt)("p",null,"Do not use Python keywords as variable names. E.g. print, list, etc."),(0,i.kt)("h3",{id:"avoid-global-variables"},"Avoid Global Variables"),(0,i.kt)("p",null,"Global variables can be changed anywhere in the program, which can lead to confusing code."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There may be situations where global variables are necessary or useful, such as when sharing data across multiple modules or when implementing certain design patterns. In such cases, it is important to use global variables judiciously and consider the potential impacts on code clarity and maintainability.")),(0,i.kt)("h3",{id:"one-variable-per-line"},"One Variable per Line"),(0,i.kt)("p",null,"Declare each variable on a new line. This increases readability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"# Good\nx = 5 \ny = 10 \n\n# Bad\nx, y = 5, 10\n")))}u.isMDXComponent=!0}}]);