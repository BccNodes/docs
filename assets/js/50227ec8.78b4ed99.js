"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[15654],{3905:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},f=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),u=c(n),s=a,d=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(d,o(o({ref:e},f),{},{components:n})):r.createElement(d,o({ref:e},f))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56674:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},p="DataFormat Schema",c={unversionedId:"okp4-cognitarium-querymsg-definitions-dataformat",id:"version-v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat",title:"DataFormat Schema",description:"Represents the format in which the data are serialized, for example when returned by a query or when inserted in the store.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-querymsg-definitions-dataformat.md",sourceDirName:".",slug:"/okp4-cognitarium-querymsg-definitions-dataformat",permalink:"/contracts/okp4-cognitarium-querymsg-definitions-dataformat",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Turtle Schema",permalink:"/contracts/okp4-cognitarium-querymsg-definitions-dataformat-oneof-turtle"},next:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-querymsg-definitions-describequery-properties-prefixes-items"}},f={},m=[{value:"DataFormat Type",id:"dataformat-type",level:2}],u={toc:m};function s(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dataformat-schema"},"DataFormat Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/query/definitions/DataFormat\n")),(0,i.kt)("p",null,"Represents the format in which the data are serialized, for example when returned by a query or when inserted in the store."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:n(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,i.kt)("h2",{id:"dataformat-type"},"DataFormat Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-dataformat"},"DataFormat"),")"),(0,i.kt)("p",null,"one (and only one) of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-dataformat-oneof-rdf-xml",title:"check type definition"},"RDF XML"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-dataformat-oneof-turtle",title:"check type definition"},"Turtle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-triples",title:"check type definition"},"N-Triples"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-dataformat-oneof-n-quads",title:"check type definition"},"N-Quads")))))}s.isMDXComponent=!0},26730:function(t,e,n){e.Z=n.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);