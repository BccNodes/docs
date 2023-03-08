"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[82534],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="Binary Schema",l={unversionedId:"cw-storage-responses-binary",id:"cw-storage-responses-binary",title:"Binary Schema",description:"Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.",source:"@site/contracts/cw-storage-responses-binary.md",sourceDirName:".",slug:"/cw-storage-responses-binary",permalink:"/contracts/cw-storage-responses-binary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"QueryMsg Schema",permalink:"/contracts/cw-storage-querymsg"},next:{title:"Untitled undefined type in cw-storage Schema",permalink:"/contracts/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins-anyof-0"}},p={},u=[{value:"object_data Type",id:"object_data-type",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"binary-schema"},"Binary Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/object_data\n")),(0,o.kt)("p",null,"Binary is a wrapper around ",(0,o.kt)("code",null,"Vec","<","u8",">")," to add base64 de/serialization with serde. It also adds some helper methods to help encode inline."),(0,o.kt)("p",null,"This is only needed as serde-json-{core,wasm} has a horrible encoding for ",(0,o.kt)("code",null,"Vec","<","u8",">"),". See also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"},"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"none"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{target:"_blank",href:n(55804).Z,title:"open original schema"},"cw-storage.json*"))))),(0,o.kt)("h2",{id:"object_data-type"},"object","_","data Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")," (",(0,o.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-binary"},"Binary"),")"))}m.isMDXComponent=!0},55804:function(e,t,n){t.Z=n.p+"assets/files/cw-storage-fe646dcd675f7f4967cb5e6b69bbbea4.json"}}]);