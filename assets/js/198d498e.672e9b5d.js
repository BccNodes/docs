"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[30634],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82706:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="Untitled string in okp4-law-stone Schema",p={unversionedId:"okp4-law-stone-instantiatemsg-definitions-binary",id:"okp4-law-stone-instantiatemsg-definitions-binary",title:"Untitled string in okp4-law-stone Schema",description:"Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.",source:"@site/contracts/okp4-law-stone-instantiatemsg-definitions-binary.md",sourceDirName:".",slug:"/okp4-law-stone-instantiatemsg-definitions-binary",permalink:"/contracts/next/okp4-law-stone-instantiatemsg-definitions-binary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ExecuteMsg Schema",permalink:"/contracts/next/okp4-law-stone-executemsg"},next:{title:"Untitled undefined type in okp4-law-stone Schema",permalink:"/contracts/next/okp4-law-stone-instantiatemsg-definitions"}},c={},d=[{value:"Binary Type",id:"binary-type",level:2}],u={toc:d};function f(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"untitled-string-in-okp4-law-stone-schema"},"Untitled string in okp4-law-stone Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/Binary\n")),(0,i.kt)("p",null,"Binary is a wrapper around ",(0,i.kt)("code",null,"Vec","<","u8",">")," to add base64 de/serialization with serde. It also adds some helper methods to help encode inline."),(0,i.kt)("p",null,"This is only needed as serde-json-{core,wasm} has a horrible encoding for ",(0,i.kt)("code",null,"Vec","<","u8",">"),". See also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"},"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:n(70611).Z,title:"open original schema"},"okp4-law-stone.json*"))))),(0,i.kt)("h2",{id:"binary-type"},"Binary Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")))}f.isMDXComponent=!0},70611:function(t,e,n){e.Z=n.p+"assets/files/okp4-law-stone-fc5a56972536fb4b64def7637db9b2f6.json"}}]);