"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[58133],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),s=o,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={},c=void 0,l={unversionedId:"okp4d_tx_ibc-fee",id:"okp4d_tx_ibc-fee",title:"okp4d_tx_ibc-fee",description:"okp4d tx ibc-fee",source:"@site/commands/okp4d_tx_ibc-fee.md",sourceDirName:".",slug:"/okp4d_tx_ibc-fee",permalink:"/commands/okp4d_tx_ibc-fee",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_group_withdraw-proposal",permalink:"/commands/okp4d_tx_group_withdraw-proposal"},next:{title:"okp4d_tx_ibc-fee_pay-packet-fee",permalink:"/commands/okp4d_tx_ibc-fee_pay-packet-fee"}},u={},f=[{value:"okp4d tx ibc-fee",id:"okp4d-tx-ibc-fee",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:f};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-tx-ibc-fee"},"okp4d tx ibc-fee"),(0,a.kt)("p",null,"IBC relayer incentivization transaction subcommands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d tx ibc-fee [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for ibc-fee\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_tx"},"okp4d tx"),"\t - Transactions subcommands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_ibc-fee_pay-packet-fee"},"okp4d tx ibc-fee pay-packet-fee"),"\t - Pay a fee to incentivize an existing IBC packet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_ibc-fee_register-counterparty-payee"},"okp4d tx ibc-fee register-counterparty-payee"),"\t - Register a counterparty payee address on a given channel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_ibc-fee_register-payee"},"okp4d tx ibc-fee register-payee"),"\t - Register a payee on a given channel.")))}s.isMDXComponent=!0}}]);