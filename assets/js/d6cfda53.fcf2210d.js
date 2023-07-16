"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[1986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),l=n(6010),r=n(2802),i=n(9960),o=n(3919),s=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,l.Z)("card padding--lg",c.cardContainer)},n)}function u(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",c.cardTitle),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",c.cardDescription),title:i},i))}function m(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?a.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??l?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(d,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,r.jA)();return a.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return a.createElement(y,e);const i=(0,r.MN)(t);return a.createElement("section",{className:(0,l.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}},8541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(2991);const i={sidebar_position:2},o="Data Types",s={unversionedId:"programming/languages/kotlin/data-types/index",id:"programming/languages/kotlin/data-types/index",title:"Data Types",description:"Kotlin is a statically typed programming language developed by JetBrains. It is officially supported by Google for Android application development and has gained massive popularity due to its interoperability with Java, modern syntax, and null safety.",source:"@site/docs/programming/languages/kotlin/data-types/index.mdx",sourceDirName:"programming/languages/kotlin/data-types",slug:"/programming/languages/kotlin/data-types/",permalink:"/programming/languages/kotlin/data-types/",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/languages/kotlin/data-types/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deep Dive",permalink:"/programming/languages/kotlin/variables/deep-dive"},next:{title:"Collections",permalink:"/programming/languages/kotlin/data-types/collections/"}},c={},p=[{value:"Numeric Types",id:"numeric-types",level:2},{value:"Char and Boolean",id:"char-and-boolean",level:2},{value:"String",id:"string",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Nullable Types",id:"nullable-types",level:2},{value:"Collections",id:"collections",level:2},{value:"Common Pitfalls and Best Practices",id:"common-pitfalls-and-best-practices",level:2},{value:"Overflows",id:"overflows",level:3},{value:"Null Safety",id:"null-safety",level:3},{value:"Immutable Collections",id:"immutable-collections",level:3},{value:"String Concatenation",id:"string-concatenation",level:3},{value:"Design Patterns",id:"design-patterns",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,"Kotlin is a statically typed programming language developed by JetBrains. It is officially supported by Google for Android application development and has gained massive popularity due to its interoperability with Java, modern syntax, and null safety."),(0,l.kt)("p",null,"Kotlin supports a variety of data types that make it powerful and flexible. Let's dive into these data types one by one."),(0,l.kt)("h2",{id:"numeric-types"},"Numeric Types"),(0,l.kt)("p",null,"Numeric types in Kotlin are similar to most other languages. The numeric types include Byte, Short, Int, Long, Float, and Double."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="NumericTypes.kt"',title:'"NumericTypes.kt"'},"fun main() {\n    val byte: Byte = 127\n    val short: Short = 32767\n    val int: Int = 2147483647\n    val long: Long = 9223372036854775807\n    val float: Float = 3.14F\n    val double: Double = 3.141592653589793\n}\n")),(0,l.kt)("h2",{id:"char-and-boolean"},"Char and Boolean"),(0,l.kt)("p",null,"Char represents a single character and Boolean represents either true or false."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="CharBooleanTypes.kt"',title:'"CharBooleanTypes.kt"'},"fun main() {\n    val char: Char = 'A'\n    val boolean: Boolean = true\n}\n")),(0,l.kt)("h2",{id:"string"},"String"),(0,l.kt)("p",null,"A String in Kotlin is an immutable sequence of characters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="StringType.kt"',title:'"StringType.kt"'},'fun main() {\n    val string: String = "Hello, World!"\n}\n')),(0,l.kt)("h2",{id:"arrays"},"Arrays"),(0,l.kt)("p",null,"An Array in Kotlin is a container that holds data (elements) of the same type. Array size is defined at the time of creation, and it can't be changed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ArrayTypes.kt"',title:'"ArrayTypes.kt"'},'fun main() {\n    val intArray: Array<Int> = arrayOf(1, 2, 3)\n    val stringArray: Array<String> = arrayOf("Kotlin", "Java", "Python")\n}\n')),(0,l.kt)("h2",{id:"nullable-types"},"Nullable Types"),(0,l.kt)("p",null,'One of Kotlin\'s most distinguishing features is its built-in null safety. By default, variables cannot hold a null value. To allow nulls, we can declare a variable as nullable by appending a "?" to the type.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="NullableTypes.kt"',title:'"NullableTypes.kt"'},'fun main() {\n    var nullableString: String? = "Hello, World!"\n    nullableString = null\n}\n')),(0,l.kt)("h2",{id:"collections"},"Collections"),(0,l.kt)("p",null,"Kotlin has rich support for collections, and it distinguishes between mutable and immutable collections (read-only). The most commonly used collections are List, Set, and Map."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="CollectionTypes.kt"',title:'"CollectionTypes.kt"'},'fun main() {\n    val list: List<Int> = listOf(1, 2, 3)\n    val set: Set<Int> = setOf(1, 2, 3)\n    val map: Map<Int, String> = mapOf(1 to "Kotlin", 2 to "Java", 3 to "Python")\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Related Links:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./variables/deep-dive#immutable-primitive-types"},"Immutable Primitive Types")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./variables/deep-dive#treating-primitive-types-as-objects"},"Treating Primitive Types as Objects")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./functions/deep-dive#pass-by-sharing-in-kotlin"},"Pass by Sharing (Functions)"))),(0,l.kt)("h2",{id:"common-pitfalls-and-best-practices"},"Common Pitfalls and Best Practices"),(0,l.kt)("h3",{id:"overflows"},"Overflows"),(0,l.kt)("p",null,"For numeric types, a common pitfall is the overflow and underflow problem."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Overflow.kt"',title:'"Overflow.kt"'},"fun main() {\n    val a: Int = Int.MAX_VALUE\n    println(a + 1) // It will overflow\n}\n")),(0,l.kt)("p",null,"To avoid overflows, always be aware of the range of data types and handle edge cases properly."),(0,l.kt)("h3",{id:"null-safety"},"Null Safety"),(0,l.kt)("p",null,"For nullable types, the most common pitfall is NullPointerException, which occurs when you try to access a property or function on a null object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="NullSafety.kt"',title:'"NullSafety.kt"'},"fun main() {\n    var nullableString: String? = null\n    println(nullableString!!.length) // It will throw NullPointerException\n}\n")),(0,l.kt)("p",null,"To avoid NullPointerException, always check for null before accessing properties or functions, or use safe calls (",(0,l.kt)("inlineCode",{parentName:"p"},"?."),"), Elvis operator (",(0,l.kt)("inlineCode",{parentName:"p"},"?:"),"), etc."),(0,l.kt)("h3",{id:"immutable-collections"},"Immutable Collections"),(0,l.kt)("p",null,"Using mutable collections when not necessary can lead to errors. It's a good practice to use immutable collections to preserve immutability."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ImmutableCollections.kt"',title:'"ImmutableCollections.kt"'},"fun main() {\n    val list = listOf(1, 2, 3)\n    // list.add(4) // This will throw an error\n}\n")),(0,l.kt)("h3",{id:"string-concatenation"},"String Concatenation"),(0,l.kt)("p",null,"It's better to use string templates or the ",(0,l.kt)("inlineCode",{parentName:"p"},"StringBuilder")," class for string concatenation instead of using the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," operator, especially inside loops. This is because strings are immutable, and concatenation creates new objects, which can lead to memory inefficiency."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="StringConcatenation.kt"',title:'"StringConcatenation.kt"'},'fun main() {\n    val name = "Kotlin"\n    val message = "Hello, $name"\n}\n')),(0,l.kt)("h2",{id:"design-patterns"},"Design Patterns"),(0,l.kt)("p",null,"While there are no specific design patterns solely for data types, understanding and using data types effectively is crucial in many design patterns. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Factory Method pattern can have different methods for creating different data types."),(0,l.kt)("li",{parentName:"ul"},"The Strategy pattern may use different data types as part of its strategy interface."),(0,l.kt)("li",{parentName:"ul"},"The State pattern may use a data type (like an enum) to represent different states.")),(0,l.kt)("p",null,"Understanding data types is the first step towards mastering Kotlin and Android development. They provide the foundation for understanding the language's more advanced features, like classes and functions."),(0,l.kt)(r.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);