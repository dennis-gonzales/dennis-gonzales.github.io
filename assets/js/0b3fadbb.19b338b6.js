"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[7110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Functional (FP)",s={unversionedId:"programming/paradigm/functional",id:"programming/paradigm/functional",title:"Functional (FP)",description:"Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It's a declarative type of programming, which means programming is done with expressions or declarations instead of statements.",source:"@site/docs/programming/paradigm/functional.md",sourceDirName:"programming/paradigm",slug:"/programming/paradigm/functional",permalink:"/programming/paradigm/functional",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/paradigm/functional.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Paradigm",permalink:"/programming/paradigm/"},next:{title:"Object-Oriented (OOP)",permalink:"/programming/paradigm/object-oriented"}},c={},l=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functional-fp"},"Functional (FP)"),(0,r.kt)("p",null,"Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It's a ",(0,r.kt)("strong",{parentName:"p"},"declarative type of programming"),", which means programming is done with expressions or declarations instead of statements."),(0,r.kt)("p",null,"In simpler words, it's a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data."),(0,r.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("p",null,"Key concepts in functional programming include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"First-class and higher-order functions:")," In functional programming, functions are treated as first-class citizens, meaning that they can be passed as arguments to other functions, returned as values from other functions, and assigned to variables. Higher-order functions are a direct result of this: they are functions that take other functions as their arguments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pure functions:")," A function is considered pure if it always produces the same result given the same arguments, and its execution doesn't cause any side effects. This idea helps make your program more predictable and easier to understand and debug.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Immutability and statelessness:")," Functional programming emphasizes immutability, meaning that once a data value is created, it cannot be changed. This ties into the concept of statelessness - the idea that a program's state should not have to be tracked or depend on the output of other functions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Recursion:")," Without the ability to change state or declare variables, iteration in functional programming is accomplished through recursion. Recursive functions call themselves until a base case is reached.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Functional composition:")," This is the process of building complex functions by gluing together simpler ones. The result of each function feeds into the input of the next."))),(0,r.kt)("p",null,"Functional programming languages include Haskell, Erlang, and Clojure, among others. Some languages like JavaScript, Python, and Ruby have functional capabilities even though they are not purely functional languages."),(0,r.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,r.kt)("p",null,"Functional programming is great for tasks that require concurrent processing, real-time updates, and where the output is a simple transformation of the input. It can make your code more concise, easier to test, and more predictable. However, it can also have a steep learning curve for programmers coming from an imperative background and may not be the best fit for all types of problems."))}u.isMDXComponent=!0}}]);