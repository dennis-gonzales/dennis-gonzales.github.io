"use strict";(self.webpackChunkmy_learning_paths=self.webpackChunkmy_learning_paths||[]).push([[9632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,d=m["".concat(l,".").concat(p)]||m[p]||g[p]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(6010),o=n(2802),i=n(9960),s=n(3919),l=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer)},n)}function m(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:i},i))}function g(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function d(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return a.createElement(h,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(d,{item:e})))))}},7211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(2991);const i={sidebar_position:2},s="Languages",l={unversionedId:"programming/languages/index",id:"programming/languages/index",title:"Languages",description:"Programming languages are formal languages designed to express instructions to a machine, particularly a computer. These languages are a way for us to communicate with computers and tell them what to do. They consist of a set of rules (syntax) that define how programs written in the language should be structured.",source:"@site/docs/programming/languages/index.mdx",sourceDirName:"programming/languages",slug:"/programming/languages/",permalink:"/programming/languages/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming/languages/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Procedural (PP)",permalink:"/programming/paradigm/procedural"},next:{title:"Python",permalink:"/programming/languages/python/"}},c={},u=[{value:"Types of Programming Languages",id:"types-of-programming-languages",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],m={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"languages"},"Languages"),(0,r.kt)("p",null,"Programming languages are formal languages designed to express instructions to a machine, particularly a computer. These languages are a way for us to ",(0,r.kt)("strong",{parentName:"p"},"communicate with computers and tell them what to do"),". They consist of a set of rules (syntax) that define how programs written in the language should be structured."),(0,r.kt)("h2",{id:"types-of-programming-languages"},"Types of Programming Languages"),(0,r.kt)("p",null,"There are hundreds of different programming languages, and they can be classified into several types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"High-Level Languages:")," These languages are closer to human languages and easier to understand. They provide a higher level of abstraction from the hardware. Examples include Python, Java, C++, and JavaScript.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Low-Level Languages:")," These languages are closer to machine languages (binary code) and harder to understand and use, but they offer more control over the hardware. Examples include Assembly and Machine languages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compiled Languages:")," These are languages where the code you write is translated into machine code by a compiler before it's run. Examples include C and C++.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interpreted Languages:"),"  These are languages where the code is translated into machine code one line at a time as it's run. Examples include Python and JavaScript."))),(0,r.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,r.kt)("p",null,"Each programming language has its own strengths and weaknesses, and is ",(0,r.kt)("strong",{parentName:"p"},"often designed with a specific use case in mind"),"."),(0,r.kt)("p",null,"For example, Python is often used for data analysis and machine learning, while JavaScript is used for web development."),(0,r.kt)("p",null,"The choice of a programming language can depend on many factors, including the problem you're trying to solve, the environment in which the program will run, the resources available, and personal preference or comfort with a particular language's syntax and semantics."),(0,r.kt)(o.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);