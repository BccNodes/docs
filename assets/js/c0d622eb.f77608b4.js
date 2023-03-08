"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[82205],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return s}});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(o),s=a,g=m["".concat(u,".").concat(s)]||m[s]||c[s]||p;return o?r.createElement(g,n(n({ref:t},l),{},{components:o})):r.createElement(g,n({ref:t},l))}));function s(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=o.length,n=new Array(p);n[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var d=2;d<p;d++)n[d]=o[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},41041:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=o(87462),a=o(63366),p=(o(67294),o(3905)),n=["components"],i={},u=void 0,d={unversionedId:"okp4d_tx_group",id:"okp4d_tx_group",title:"okp4d_tx_group",description:"okp4d tx group",source:"@site/commands/okp4d_tx_group.md",sourceDirName:".",slug:"/okp4d_tx_group",permalink:"/commands/okp4d_tx_group",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_weighted-vote",permalink:"/commands/okp4d_tx_gov_weighted-vote"},next:{title:"okp4d_tx_group_create-group-policy",permalink:"/commands/okp4d_tx_group_create-group-policy"}},l={},c=[{value:"okp4d tx group",id:"okp4d-tx-group",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:c};function s(e){var t=e.components,o=(0,a.Z)(e,n);return(0,p.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"okp4d-tx-group"},"okp4d tx group"),(0,p.kt)("p",null,"Group transaction subcommands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"okp4d tx group [flags]\n")),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"  -h, --help   help for group\n")),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx"},"okp4d tx"),"\t - Transactions subcommands"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_create-group"},"okp4d tx group create-group"),"\t - Create a group which is an aggregation of member accounts with associated weights and an administrator account."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_create-group-policy"},"okp4d tx group create-group-policy"),"\t - Create a group policy which is an account associated with a group and a decision policy. Note, the '--from' flag is ignored as it is implied from ","[admin]","."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_create-group-with-policy"},"okp4d tx group create-group-with-policy"),"\t - Create a group with policy which is an aggregation of member accounts with associated weights, an administrator account and decision policy."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_draft-proposal"},"okp4d tx group draft-proposal"),"\t - Generate a draft proposal json file. The generated proposal json contains only one message (skeleton)."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_exec"},"okp4d tx group exec"),"\t - Execute a proposal"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_leave-group"},"okp4d tx group leave-group"),"\t - Remove member from the group"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_submit-proposal"},"okp4d tx group submit-proposal"),"\t - Submit a new proposal"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_update-group-admin"},"okp4d tx group update-group-admin"),"\t - Update a group's admin"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_update-group-members"},"okp4d tx group update-group-members"),"\t - Update a group's members. Set a member's weight to \"0\" to delete it."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_update-group-metadata"},"okp4d tx group update-group-metadata"),"\t - Update a group's metadata"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_update-group-policy-admin"},"okp4d tx group update-group-policy-admin"),"\t - Update a group policy admin"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_update-group-policy-decision-policy"},"okp4d tx group update-group-policy-decision-policy"),"\t - Update a group policy's decision policy"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_update-group-policy-metadata"},"okp4d tx group update-group-policy-metadata"),"\t - Update a group policy metadata"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_vote"},"okp4d tx group vote"),"\t - Vote on a proposal"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_group_withdraw-proposal"},"okp4d tx group withdraw-proposal"),"\t - Withdraw a submitted proposal")))}s.isMDXComponent=!0}}]);