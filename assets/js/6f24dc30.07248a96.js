"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[9107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),y=i,h=d["".concat(o,".").concat(y)]||d[y]||c[y]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={},l="Dictionary",s={unversionedId:"programming/languages/python/data-types/dict",id:"programming/languages/python/data-types/dict",title:"Dictionary",description:"In Python, a dictionary is a mutable, unordered collection of items. Each item stored in a dictionary has a key and a value. Dictionaries are optimized for retrieving the value when we know the key, but not the other way around.",source:"@site/docs/programming/languages/python/data-types/dict.md",sourceDirName:"programming/languages/python/data-types",slug:"/programming/languages/python/data-types/dict",permalink:"/programming/languages/python/data-types/dict",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/languages/python/data-types/dict.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/programming/languages/python/data-types/"},next:{title:"List",permalink:"/programming/languages/python/data-types/list"}},o={},u=[{value:"Understanding Dictionary",id:"understanding-dictionary",level:2},{value:"Immutable Keys",id:"immutable-keys",level:3},{value:"Unhashable",id:"unhashable",level:3},{value:"<strong>Related Links:</strong>",id:"related-links",level:4},{value:"Common Pitfalls",id:"common-pitfalls",level:2},{value:"KeyError",id:"keyerror",level:3},{value:"Unhashable Keys",id:"unhashable-keys",level:3},{value:"Modifying During Iteration",id:"modifying-during-iteration",level:3},{value:"Mutable Default Arguments",id:"mutable-default-arguments",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Use for Lookups",id:"use-for-lookups",level:3},{value:"Dictionary Comprehensions",id:"dictionary-comprehensions",level:3},{value:"Using <code>defaultdict</code>",id:"using-defaultdict",level:3},{value:"Design Patterns",id:"design-patterns",level:2},{value:"Factory Pattern",id:"factory-pattern",level:3},{value:"Flyweight Pattern",id:"flyweight-pattern",level:3},{value:"State/Strategy Pattern",id:"statestrategy-pattern",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dictionary"},"Dictionary"),(0,i.kt)("p",null,"In Python, a dictionary is a mutable, unordered collection of items. Each item stored in a dictionary has a key and a value. Dictionaries are optimized for retrieving the value when we know the key, but not the other way around."),(0,i.kt)("p",null,"Here's an example of a dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'my_dict = {"name": "John", "age": 30, "city": "New York"}\n')),(0,i.kt)("p",null,"You can access elements of a dictionary by their key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'print(my_dict["name"])  # Outputs "John"\n')),(0,i.kt)("h2",{id:"understanding-dictionary"},"Understanding Dictionary"),(0,i.kt)("p",null,"In Python, a dictionary can hold any type of data as its values including, but not limited to, integers, floats, strings, lists, sets, tuples, and other dictionaries. It can also hold objects and user-defined classes. However, the keys must be of an immutable data type such as strings, numbers, or tuples."),(0,i.kt)("p",null,"Here is a code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'class MyClass:\n    def __init__(self, x):\n        self.x = x\n\nobj = MyClass(10)\n\nmy_dict = {\n    "integer": 10,\n    "float": 3.14,\n    "string": "hello",\n    "list": [1, 2, 3],\n    "set": {1, 2, 3},\n    "tuple": (1, 2, 3),\n    "nested_dict": {"key": "value"},\n    "object": obj\n}\n\nprint(my_dict["integer"])  # Outputs: 10\nprint(my_dict["float"])  # Outputs: 3.14\nprint(my_dict["string"])  # Outputs: "hello"\nprint(my_dict["list"])  # Outputs: [1, 2, 3]\nprint(my_dict["set"])  # Outputs: {1, 2, 3}\nprint(my_dict["tuple"])  # Outputs: (1, 2, 3)\nprint(my_dict["nested_dict"])  # Outputs: {"key": "value"}\nprint(my_dict["object"].x)  # Outputs: 10\n')),(0,i.kt)("h3",{id:"immutable-keys"},"Immutable Keys"),(0,i.kt)("p",null,"For dictionary keys, they need to be immutable types because dictionaries use these keys' hash value for faster lookup. In Python, strings, numbers, tuples, and frozensets are examples of immutable types that can be used as keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'my_dict = {\n    "string": "value",\n    10: "value",\n    (1, 2): "value",\n    frozenset([1, 2, 3]): "value"\n}\n')),(0,i.kt)("h3",{id:"unhashable"},"Unhashable"),(0,i.kt)("p",null,"Dictionaries themselves are not hashable because they are mutable i.e., they can be changed after they are created. This means you can't use a dictionary as a key to another dictionary. However, if you need a hashable version of a dictionary, consider using a ",(0,i.kt)("inlineCode",{parentName:"p"},"frozenset")," or create a custom class and define a ",(0,i.kt)("inlineCode",{parentName:"p"},"__hash__")," method."),(0,i.kt)("h4",{id:"related-links"},(0,i.kt)("strong",{parentName:"h4"},"Related Links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../data-types#hashability-in-python"},"Hashability in Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tuple#hashability"},"Tuple Hashability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./dict#unhashable-keys"},"Unhashable Keys"))),(0,i.kt)("h2",{id:"common-pitfalls"},"Common Pitfalls"),(0,i.kt)("h3",{id:"keyerror"},"KeyError"),(0,i.kt)("p",null,"Attempting to access a non-existent key will raise a ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyError"),". You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dict.get(key, default)")," method to avoid this error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'print(my_dict.get("country", "USA"))  # Outputs "USA"\n')),(0,i.kt)("h3",{id:"unhashable-keys"},"Unhashable Keys"),(0,i.kt)("p",null,"In Python, an object is hashable if it has a hash value which never changes during its lifetime. It needs a ",(0,i.kt)("inlineCode",{parentName:"p"},"__hash__()")," method and an ",(0,i.kt)("inlineCode",{parentName:"p"},"__eq__()"),' method. The object is then "hashable" and can be used as a key in a dictionary or as an element in a set.'),(0,i.kt)("p",null,"The basic types like integers, floating-point numbers, and strings are hashable."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"d = {}  # Create an empty dictionary\n\n# Integer key\nd[1] = \"one\"\nprint(d)  # Outputs: {1: 'one'}\n\n# String key\nd[\"two\"] = 2\nprint(d)  # Outputs: {1: 'one', 'two': 2}\n\n# Floating-point number key\nd[3.0] = \"three\"\nprint(d)  # Outputs: {1: 'one', 'two': 2, 3.0: 'three'}\n\n# Tuple key (must contain only hashable types itself)\nd[(1, 2, 3)] = \"tuple\"\nprint(d)  # Outputs: {1: 'one', 'two': 2, 3.0: 'three', (1, 2, 3): 'tuple'}\n")),(0,i.kt)("p",null,"However, lists, sets, and dictionaries are not hashable because their contents can change over time (they are mutable). If you try to use a list as a dictionary key, you will get a TypeError:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'# This will raise a TypeError\nd[[1, 2, 3]] = "list"\n')),(0,i.kt)("p",null,"The error message will be \"TypeError: unhashable type: 'list'\"."),(0,i.kt)("p",null,"Tuples are an exception. They are immutable so they are hashable, but they can only be used as dictionary keys if they contain only strings, numbers, or tuples, all of which are hashable themselves."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Related Links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./dict#unhashable"},"Unhashable"))),(0,i.kt)("h3",{id:"modifying-during-iteration"},"Modifying During Iteration"),(0,i.kt)("p",null,"Modifying the size of a dictionary while iterating over it can lead to unexpected results or errors."),(0,i.kt)("h3",{id:"mutable-default-arguments"},"Mutable Default Arguments"),(0,i.kt)("p",null,"Default arguments in functions are created once at function definition. If a mutable object like a list is used as a default argument, it can retain changes between function calls."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Related Links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../variables#mutable-default-argument"},"Mutable Default Arguments"))),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"use-for-lookups"},"Use for Lookups"),(0,i.kt)("p",null,"Dictionaries are best used when you frequently need to look up values based on some key, as they offer O(1) lookup time."),(0,i.kt)("p",null,'"O(1)" is a way of expressing the efficiency of an algorithm in computer science. It\'s known as Big O notation, and "O(1)" specifically means that the operation takes constant time. In other words, no matter how large the dictionary is, the time it takes to look up a value based on its key remains constant.'),(0,i.kt)("p",null,"In the context of a Python dictionary, this is possible because it's implemented as a hash table. When you insert a key-value pair into a dictionary, a hash function computes the hash of the key and uses it to determine where in the table to store the value. Then, when you need to look up a value, the dictionary uses the key's hash to go directly to its location in the table. This process is very fast and doesn't depend on the size of the dictionary."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'# Creating a dictionary\nd = {"apple": 1, "banana": 2, "cherry": 3}\n\n# Look up the value associated with the key "banana"\nprint(d["banana"])  # Outputs: 2\n')),(0,i.kt)("p",null,"In this code, regardless of how many key-value pairs are in the dictionary ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),', looking up the value for "banana" will take approximately the same amount of time. This is what makes dictionaries excellent for tasks where you need to frequently retrieve values based on their associated keys.'),(0,i.kt)("h3",{id:"dictionary-comprehensions"},"Dictionary Comprehensions"),(0,i.kt)("p",null,"Just like ",(0,i.kt)("a",{parentName:"p",href:"./list#list-comprehensions"},"lists"),", dictionaries also support dictionary comprehensions. They allow you to express creation of dictionaries in a concise way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"squares = {x: x**2 for x in range(6)}\n")),(0,i.kt)("h3",{id:"using-defaultdict"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"defaultdict")),(0,i.kt)("p",null,"If you need a dictionary with a default value for non-existent keys, consider using ",(0,i.kt)("inlineCode",{parentName:"p"},"collections.defaultdict"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"from collections import defaultdict\ncount = defaultdict(int)\nfor x in 'hello':\n   count[x] += 1\nprint(count)  # Outputs defaultdict(<class 'int'>, {'h': 1, 'e': 1, 'l': 2, 'o': 1})\n")),(0,i.kt)("h2",{id:"design-patterns"},"Design Patterns"),(0,i.kt)("p",null,"Dictionaries, being versatile and powerful data structures, are used in various design patterns:"),(0,i.kt)("h3",{id:"factory-pattern"},"Factory Pattern"),(0,i.kt)("p",null," Dictionaries are often used in the Factory pattern, where the dictionary keys are used to create and recall specific object types."),(0,i.kt)("h3",{id:"flyweight-pattern"},"Flyweight Pattern"),(0,i.kt)("p",null,"The Flyweight pattern uses dictionaries to prevent creation of large number of similar immutable objects, thereby saving memory."),(0,i.kt)("h3",{id:"statestrategy-pattern"},"State/Strategy Pattern"),(0,i.kt)("p",null,"The State or Strategy patterns can use dictionaries to determine which behavior/state should be activated."),(0,i.kt)("p",null,"Remember that although dictionaries are widely used and extremely useful, they may not always be the best tool for the job, depending on your specific use case."))}c.isMDXComponent=!0}}]);