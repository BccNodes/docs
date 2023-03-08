"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[74463],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),u=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(o),f=r,m=c["".concat(a,".").concat(f)]||c[f]||d[f]||i;return o?n.createElement(m,p(p({ref:t},l),{},{components:o})):n.createElement(m,p({ref:t},l))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,p=new Array(i);p[0]=c;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var u=2;u<i;u++)p[u]=o[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},85796:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),p=["components"],s={},a=void 0,u={unversionedId:"okp4d_query_gov_deposits",id:"okp4d_query_gov_deposits",title:"okp4d_query_gov_deposits",description:"okp4d query gov deposits",source:"@site/commands/okp4d_query_gov_deposits.md",sourceDirName:".",slug:"/okp4d_query_gov_deposits",permalink:"/commands/okp4d_query_gov_deposits",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_gov_deposit",permalink:"/commands/okp4d_query_gov_deposit"},next:{title:"okp4d_query_gov_param",permalink:"/commands/okp4d_query_gov_param"}},l={},d=[{value:"okp4d query gov deposits",id:"okp4d-query-gov-deposits",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:d};function f(e){var t=e.components,o=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-gov-deposits"},"okp4d query gov deposits"),(0,i.kt)("p",null,"Query deposits on a proposal"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,'Query details for all deposits on a proposal.\nYou can find the proposal-id by running "okp4d query gov proposals".'),(0,i.kt)("p",null,"Example:\n$ okp4d query gov deposits 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query gov deposits [proposal-id] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in deposits to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for deposits\n      --limit uint         pagination limit of deposits to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of deposits to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of deposits to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of deposits to query for\n      --reverse            results are sorted in descending order\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/okp4d_query_gov"},"okp4d query gov"),"\t - Querying commands for the governance module")))}f.isMDXComponent=!0}}]);