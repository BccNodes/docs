"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[28644],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(a,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],c={},a=void 0,u={unversionedId:"okp4d_query_ibc_client_consensus-state-heights",id:"okp4d_query_ibc_client_consensus-state-heights",title:"okp4d_query_ibc_client_consensus-state-heights",description:"okp4d query ibc client consensus-state-heights",source:"@site/commands/okp4d_query_ibc_client_consensus-state-heights.md",sourceDirName:".",slug:"/okp4d_query_ibc_client_consensus-state-heights",permalink:"/commands/okp4d_query_ibc_client_consensus-state-heights",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_client",permalink:"/commands/okp4d_query_ibc_client"},next:{title:"okp4d_query_ibc_client_consensus-state",permalink:"/commands/okp4d_query_ibc_client_consensus-state"}},l={},p=[{value:"okp4d query ibc client consensus-state-heights",id:"okp4d-query-ibc-client-consensus-state-heights",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"okp4d-query-ibc-client-consensus-state-heights"},"okp4d query ibc client consensus-state-heights"),(0,s.kt)("p",null,"Query the heights of all consensus states of a client."),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Query the heights of all consensus states associated with the provided client ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"okp4d query ibc client consensus-state-heights [client-id] [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"okp4d query ibc client consensus-state-heights [client-id]\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in consensus state heights to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for consensus-state-heights\n      --limit uint         pagination limit of consensus state heights to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of consensus state heights to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of consensus state heights to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of consensus state heights to query for\n      --reverse            results are sorted in descending order\n')),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client"},"okp4d query ibc client"),"\t - IBC client query subcommands")))}f.isMDXComponent=!0}}]);