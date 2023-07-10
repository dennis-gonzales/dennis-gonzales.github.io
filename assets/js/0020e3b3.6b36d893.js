"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[8918],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>g});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(i),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return i?n.createElement(g,o(o({ref:t},m),{},{components:i})):n.createElement(g,o({ref:t},m))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6272:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const r={},o="Deep Dive",l={unversionedId:"programming/languages/kotlin/variables/deep-dive",id:"programming/languages/kotlin/variables/deep-dive",title:"Deep Dive",description:"Immutable Primitive Types",source:"@site/docs/programming/languages/kotlin/variables/deep-dive.md",sourceDirName:"programming/languages/kotlin/variables",slug:"/programming/languages/kotlin/variables/deep-dive",permalink:"/programming/languages/kotlin/variables/deep-dive",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/languages/kotlin/variables/deep-dive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/programming/languages/kotlin/variables/"},next:{title:"Data Types",permalink:"/programming/languages/kotlin/data-types/"}},s={},p=[{value:"Immutable Primitive Types",id:"immutable-primitive-types",level:2},{value:"Compilation to JVM",id:"compilation-to-jvm",level:2},{value:"Treating Primitive Types as Objects",id:"treating-primitive-types-as-objects",level:2},{value:"Optimization by Kotlin Compiler",id:"optimization-by-kotlin-compiler",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deep-dive"},"Deep Dive"),(0,a.kt)("h2",{id:"immutable-primitive-types"},"Immutable Primitive Types"),(0,a.kt)("p",null," In Kotlin, all primitive data types are immutable. Immutable means once you've assigned a value to a variable, you can't change that value. If you try to modify the value of the variable, what actually happens is that a new variable is created with the new value. The original variable still holds its initial value. This is in contrast to mutable variables, where the value can change after it's been assigned."),(0,a.kt)("p",null,"For instance, consider this Kotlin code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Main.kt"',title:'"Main.kt"'},"var a = 5\na = 6  // This doesn't change `a`, but creates a new `a` with value 6.\n")),(0,a.kt)("h2",{id:"compilation-to-jvm"},"Compilation to JVM"),(0,a.kt)("p",null," Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM). When Kotlin code is compiled, it's turned into bytecode that the JVM can understand and execute. Because JVM also treats its primitive types as immutable, Kotlin's immutable primitive types can be directly translated to JVM primitive types. This translation is efficient in terms of memory usage and performance."),(0,a.kt)("h2",{id:"treating-primitive-types-as-objects"},"Treating Primitive Types as Objects"),(0,a.kt)("p",null," In Kotlin, you can treat primitive types as objects. This means you can call methods on them just like you would with objects. For instance, you can do something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Main.kt"',title:'"Main.kt"'},"val a = 5\nprintln(a.plus(3))  // This will print 8.\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"plus")," is a method that can be called on the integer ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),". This is similar to how you can call methods on objects in object-oriented programming languages."),(0,a.kt)("h2",{id:"optimization-by-kotlin-compiler"},"Optimization by Kotlin Compiler"),(0,a.kt)("p",null," When compiling the Kotlin code to Java bytecode, the Kotlin compiler optimizes these types to be JVM primitive types whenever possible. Although in your Kotlin code you treat them as objects, under the hood they often get compiled to JVM primitives for better performance."))}u.isMDXComponent=!0}}]);