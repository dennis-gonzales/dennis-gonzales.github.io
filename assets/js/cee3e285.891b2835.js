"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[1182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,g=c["".concat(o,".").concat(d)]||c[d]||p[d]||s;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const s={},r="Sets",i={unversionedId:"programming/languages/kotlin/data-types/collections/sets",id:"programming/languages/kotlin/data-types/collections/sets",title:"Sets",description:"A Set in Kotlin is an unordered collection of items. In a set, all elements are unique. Kotlin provides two types of sets: immutable (read-only) and mutable.",source:"@site/docs/programming/languages/kotlin/data-types/collections/sets.md",sourceDirName:"programming/languages/kotlin/data-types/collections",slug:"/programming/languages/kotlin/data-types/collections/sets",permalink:"/programming/languages/kotlin/data-types/collections/sets",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/languages/kotlin/data-types/collections/sets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maps",permalink:"/programming/languages/kotlin/data-types/collections/maps"},next:{title:"Numbers",permalink:"/programming/languages/kotlin/data-types/numbers"}},o={},u=[{value:"Defining a Set",id:"defining-a-set",level:2},{value:"Accessing Elements",id:"accessing-elements",level:2},{value:"Modifying a MutableSet",id:"modifying-a-mutableset",level:2},{value:"Common Pitfalls and Best Practices",id:"common-pitfalls-and-best-practices",level:2},{value:"Set vs List",id:"set-vs-list",level:3},{value:"Mutable vs Immutable Sets",id:"mutable-vs-immutable-sets",level:3},{value:"Null Safety",id:"null-safety",level:3},{value:"Design Patterns",id:"design-patterns",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sets"},"Sets"),(0,l.kt)("p",null,"A Set in Kotlin is an unordered collection of items. In a set, all elements are unique. Kotlin provides two types of sets: immutable (read-only) and mutable."),(0,l.kt)("h2",{id:"defining-a-set"},"Defining a Set"),(0,l.kt)("p",null,"A set is defined using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setOf")," function for an immutable set or the ",(0,l.kt)("inlineCode",{parentName:"p"},"mutableSetOf")," function for a mutable set."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="DefineSet.kt"',title:'"DefineSet.kt"'},"val immutableSet = setOf(1, 2, 3, 4, 5)\nval mutableSet = mutableSetOf(1, 2, 3, 4, 5)\n")),(0,l.kt)("h2",{id:"accessing-elements"},"Accessing Elements"),(0,l.kt)("p",null,"While the elements in a set are unordered, you can still iterate over a set using a loop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="AccessElements.kt"',title:'"AccessElements.kt"'},"val numbers = setOf(1, 2, 3, 4, 5)\nfor (number in numbers) {\n    println(number)\n}\n")),(0,l.kt)("h2",{id:"modifying-a-mutableset"},"Modifying a MutableSet"),(0,l.kt)("p",null,"You can add or remove elements in a MutableSet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ModifyMutableSet.kt"',title:'"ModifyMutableSet.kt"'},"val numbers = mutableSetOf(1, 2, 3, 4, 5)\nnumbers.add(6)\nnumbers.remove(1)\nprintln(numbers) // Prints: [2, 3, 4, 5, 6]\n")),(0,l.kt)("h2",{id:"common-pitfalls-and-best-practices"},"Common Pitfalls and Best Practices"),(0,l.kt)("h3",{id:"set-vs-list"},"Set vs List"),(0,l.kt)("p",null,"While a list can contain duplicate elements and maintain their order, a set contains only unique elements and does not maintain any specific order. Be sure to choose the right type of collection based on your requirements."),(0,l.kt)("h3",{id:"mutable-vs-immutable-sets"},"Mutable vs Immutable Sets"),(0,l.kt)("p",null,"A mutable set allows for modification after its creation (adding, removing elements), while an immutable set does not. Using an immutable set can make your code safer from bugs and easier to reason about, since you know it cannot be changed after it's created."),(0,l.kt)("h3",{id:"null-safety"},"Null Safety"),(0,l.kt)("p",null,"Kotlin's null safety features also apply to sets. If a set can contain null elements, you need to declare the type as nullable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="NullableSet.kt"',title:'"NullableSet.kt"'},"val numbers: Set<Int?> = setOf(1, 2, null, 4, 5)\n")),(0,l.kt)("h2",{id:"design-patterns"},"Design Patterns"),(0,l.kt)("p",null,"In the context of design patterns, sets are used in various ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the Flyweight pattern, a set can be used to store and retrieve shared flyweights."),(0,l.kt)("li",{parentName:"ul"},"In the Composite pattern, a set can be used to store child components in a composite."),(0,l.kt)("li",{parentName:"ul"},"In the Builder pattern, a set can be used to collect components that make up a product.")),(0,l.kt)("p",null,"Sets are a useful tool when you need to store multiple items but want to ensure that all items in the collection are unique."))}p.isMDXComponent=!0}}]);