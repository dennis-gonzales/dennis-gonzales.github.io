"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[3073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(g,o(o({ref:t},l),{},{components:r})):a.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(7294),n=r(6010),i=r(2802),o=r(9960),c=r(3919),s=r(5999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:r}=e;return a.createElement(o.Z,{href:t,className:(0,n.Z)("card padding--lg",p.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:o}=e;return a.createElement(l,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",p.cardTitle),title:i},r," ",i),o&&a.createElement("p",{className:(0,n.Z)("text--truncate",p.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?a.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(u,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,i.jA)();return a.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return a.createElement(f,e);const o=(0,i.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}},7412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905)),i=r(2991);const o={sidebar_position:3},c="TypeScript",s={unversionedId:"programming/languages/typescript/index",id:"programming/languages/typescript/index",title:"TypeScript",description:"TypeScript is an open-source programming language developed and maintained by Microsoft. It was first introduced in 2012 as a statically typed superset of JavaScript that compiles to plain JavaScript. TypeScript was designed to bring static type-checking to JavaScript, along with other features like interfaces, classes, and modules, to make it easier to develop and maintain large-scale applications.",source:"@site/docs/programming/languages/typescript/index.mdx",sourceDirName:"programming/languages/typescript",slug:"/programming/languages/typescript/",permalink:"/programming/languages/typescript/",draft:!1,editUrl:"https://github.com/dennis-gonzales/dennis-gonzales.github.io/blob/main/docs/programming/languages/typescript/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Android Practices",permalink:"/programming/languages/kotlin/coroutines/android-practices"},next:{title:"Variables",permalink:"/programming/languages/typescript/variables/"}},p={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],d={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"typescript"},"TypeScript"),(0,n.kt)("p",null,"TypeScript is an open-source programming language developed and maintained by Microsoft. It was first introduced in 2012 as a ",(0,n.kt)("strong",{parentName:"p"},"statically typed superset of JavaScript")," that compiles to plain JavaScript. TypeScript was designed to bring static type-checking to JavaScript, along with other features like interfaces, classes, and modules, to make it easier to develop and maintain large-scale applications."),(0,n.kt)("h2",{id:"key-features"},"Key Features"),(0,n.kt)("p",null,"Here are some key features of TypeScript:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Static Type-Checking:")," TypeScript introduces optional static type-checking, which can catch errors at compile-time rather than at run-time. You can specify types for variables, function parameters, and function return values. This provides a level of safety and robustness to the code.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ECMAScript Compatibility:")," TypeScript is a superset of JavaScript. Any valid JavaScript code can be safely copied into a TypeScript file and it will still compile correctly. This means you can gradually migrate a JavaScript codebase to TypeScript.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Object-Oriented Language:")," TypeScript supports object-oriented programming concepts like classes, interfaces, inheritance, etc. It even includes features from ES6 and future versions of JavaScript.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tooling and Integration:")," TypeScript offers excellent tooling support with IntelliSense, which provides active hints as a code is added. It also has strong integration with build tools and supports JavaScript libraries and frameworks.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cross-Platform:")," TypeScript is cross-platform, and can be installed through the Node.js package manager (npm) and run on any environment that JavaScript runs on."))),(0,n.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,n.kt)("p",null,"TypeScript is especially beneficial in large codebases where the type-checking can prevent potential bugs and make the code easier to understand and to refactor. However, there are some downsides. The addition of types and the need for compilation add an extra step compared to JavaScript. Furthermore, not all JavaScript libraries have TypeScript definitions out of the box, although this situation has improved a lot with the community-driven DefinitelyTyped project."),(0,n.kt)("p",null,"Despite these, TypeScript has seen wide adoption in the JavaScript community for its ability to offer the flexibility of JavaScript while providing the tools needed to build large-scale applications."),(0,n.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);