"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[36871],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var c=2;c<i;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26490:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),p=["components"],u={},a=void 0,c={unversionedId:"okp4d_query_group_group-policies-by-admin",id:"okp4d_query_group_group-policies-by-admin",title:"okp4d_query_group_group-policies-by-admin",description:"okp4d query group group-policies-by-admin",source:"@site/commands/okp4d_query_group_group-policies-by-admin.md",sourceDirName:".",slug:"/okp4d_query_group_group-policies-by-admin",permalink:"/commands/okp4d_query_group_group-policies-by-admin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_group-members",permalink:"/commands/okp4d_query_group_group-members"},next:{title:"okp4d_query_group_group-policies-by-group",permalink:"/commands/okp4d_query_group_group-policies-by-group"}},l={},s=[{value:"okp4d query group group-policies-by-admin",id:"okp4d-query-group-group-policies-by-admin",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-group-group-policies-by-admin"},"okp4d query group group-policies-by-admin"),(0,i.kt)("p",null,"Query for group policies by admin account address with pagination flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query group group-policies-by-admin [admin] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for group-policies-by-admin\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}m.isMDXComponent=!0}}]);