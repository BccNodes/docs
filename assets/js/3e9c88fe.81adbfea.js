"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[4672],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=m(a),k=r,g=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55474:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={},u=void 0,m={unversionedId:"mint",id:"mint",title:"mint",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/modules/mint.md",sourceDirName:".",slug:"/mint",permalink:"/modules/next/mint",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"logic",permalink:"/modules/next/logic"},next:{title:"vesting",permalink:"/modules/next/vesting"}},o={},s=[{value:"Purpose",id:"purpose",level:2},{value:"\ud83e\uddee Calculation",id:"-calculation",level:3},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"mint/v1beta1/mint.proto",id:"mintv1beta1mintproto",level:2},{value:"Minter",id:"minter",level:3},{value:"Params",id:"params",level:3},{value:"mint/v1beta1/genesis.proto",id:"mintv1beta1genesisproto",level:2},{value:"GenesisState",id:"genesisstate",level:3},{value:"mint/v1beta1/query.proto",id:"mintv1beta1queryproto",level:2},{value:"QueryAnnualProvisionsRequest",id:"queryannualprovisionsrequest",level:3},{value:"QueryAnnualProvisionsResponse",id:"queryannualprovisionsresponse",level:3},{value:"QueryInflationRequest",id:"queryinflationrequest",level:3},{value:"QueryInflationResponse",id:"queryinflationresponse",level:3},{value:"QueryParamsRequest",id:"queryparamsrequest",level:3},{value:"QueryParamsResponse",id:"queryparamsresponse",level:3},{value:"Query",id:"query",level:3},{value:"mint/v1beta1/tx.proto",id:"mintv1beta1txproto",level:2},{value:"MsgUpdateParams",id:"msgupdateparams",level:3},{value:"MsgUpdateParamsResponse",id:"msgupdateparamsresponse",level:3},{value:"MsgService",id:"msgservice",level:3},{value:"Scalar Value Types",id:"scalar-value-types",level:2}],d={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"protobuf-documentation"},"Protobuf Documentation"),(0,l.kt)("a",{name:"top"}),(0,l.kt)("h2",{id:"purpose"},"Purpose"),(0,l.kt)("p",null,"This module is designed to calculate an inflation rewards each years based on static params. Each block rewards is\nthe same over the year."),(0,l.kt)("h3",{id:"-calculation"},"\ud83e\uddee Calculation"),(0,l.kt)("p",null,"The initial inflation is set to 15%, ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_provisions")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," will set at the beginning of the chain (on the first block).\nIt's based on the initial total supply. For example, with a total supply of 200M token, annual_provisions will be configured to 30M and target_supply 230M."),(0,l.kt)("p",null,"At the end of the year (the last block of the year, to be more precise), due to rounding imprecision, if the distributed\ntokens for the last block of the year added with the actual tokens total supply is bigger than the ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply"),",\nonly the difference to reach the ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," will be minted. Conversely, in some case, due to rounding also,\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," is not reached at the last block, but at the next block."),(0,l.kt)("p",null,"The new inflation, ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_provisions")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," is recalculated at the next block after the block that\nreach the ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply"),". To calculate the new inflation, get the current inflation multiplied by (",(0,l.kt)("inlineCode",{parentName:"p"},"1 - annual_reduction_factor"),"),\nthen the new ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_provisions")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," is deducted based on the current total supply (that is the old ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply"),")"),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint/v1beta1/mint.proto"},"mint/v1beta1/mint.proto")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mint.v1beta1.Minter"},"Minter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mint.v1beta1.Params"},"Params")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint/v1beta1/genesis.proto"},"mint/v1beta1/genesis.proto")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mint.v1beta1.GenesisState"},"GenesisState")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint/v1beta1/query.proto"},"mint/v1beta1/query.proto")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryAnnualProvisionsRequest"},"QueryAnnualProvisionsRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryAnnualProvisionsResponse"},"QueryAnnualProvisionsResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryInflationRequest"},"QueryInflationRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryInflationResponse"},"QueryInflationResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryParamsRequest"},"QueryParamsRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryParamsResponse"},"QueryParamsResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.Query"},"Query"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint/v1beta1/tx.proto"},"mint/v1beta1/tx.proto")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.MsgUpdateParams"},"MsgUpdateParams"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.MsgUpdateParamsResponse"},"MsgUpdateParamsResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#mint.v1beta1.MsgService"},"MsgService"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#scalar-value-types"},"Scalar Value Types")))),(0,l.kt)("a",{name:"mint/v1beta1/mint.proto"}),(0,l.kt)("p",{align:"right"},(0,l.kt)("a",{href:"#top"},"Top")),(0,l.kt)("h2",{id:"mintv1beta1mintproto"},"mint/v1beta1/mint.proto"),(0,l.kt)("a",{name:"mint.v1beta1.Minter"}),(0,l.kt)("h3",{id:"minter"},"Minter"),(0,l.kt)("p",null,"Minter represents the minting state."),(0,l.kt)("p",null,"At the beginning of the chain (first block) the mint module will recalculate the ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_provisions")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," based on the genesis total token supply and the inflation configured.\nBy default inflation is set to 15%. If the genesis total token supply is 200M token, the ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_provision")," will be 30M\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"target_supply")," 230M."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inflation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"current annual inflation rate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"annual_provisions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"current annual expected provisions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"target_supply")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"target supply at end of period")))),(0,l.kt)("a",{name:"mint.v1beta1.Params"}),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("p",null,"Params holds parameters for the mint module."),(0,l.kt)("p",null,"Configure the annual reduction factor will update at the each end of year the new token distribution rate by reducing\nthe actual inflation by the ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_reduction_factor")," configured.\nBy default, ",(0,l.kt)("inlineCode",{parentName:"p"},"annual_reduction_factor")," is 20%. For example, with an initial inflation of 15%, at the end of the year,\nnew inflation will be 12%."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mint_denom")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"type of coin to mint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"annual_reduction_factor")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"annual reduction factor inflation rate change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blocks_per_year")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#uint64"},"uint64")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"expected blocks per year")))),(0,l.kt)("a",{name:"mint/v1beta1/genesis.proto"}),(0,l.kt)("p",{align:"right"},(0,l.kt)("a",{href:"#top"},"Top")),(0,l.kt)("h2",{id:"mintv1beta1genesisproto"},"mint/v1beta1/genesis.proto"),(0,l.kt)("a",{name:"mint.v1beta1.GenesisState"}),(0,l.kt)("h3",{id:"genesisstate"},"GenesisState"),(0,l.kt)("p",null,"GenesisState defines the mint module's genesis state."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.Minter"},"Minter")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"minter is a space for holding current inflation information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.Params"},"Params")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"params defines all the paramaters of the module.")))),(0,l.kt)("a",{name:"mint/v1beta1/query.proto"}),(0,l.kt)("p",{align:"right"},(0,l.kt)("a",{href:"#top"},"Top")),(0,l.kt)("h2",{id:"mintv1beta1queryproto"},"mint/v1beta1/query.proto"),(0,l.kt)("a",{name:"mint.v1beta1.QueryAnnualProvisionsRequest"}),(0,l.kt)("h3",{id:"queryannualprovisionsrequest"},"QueryAnnualProvisionsRequest"),(0,l.kt)("p",null,"QueryAnnualProvisionsRequest is the request type for the\nQuery/AnnualProvisions RPC method."),(0,l.kt)("a",{name:"mint.v1beta1.QueryAnnualProvisionsResponse"}),(0,l.kt)("h3",{id:"queryannualprovisionsresponse"},"QueryAnnualProvisionsResponse"),(0,l.kt)("p",null,"QueryAnnualProvisionsResponse is the response type for the\nQuery/AnnualProvisions RPC method."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"annual_provisions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#bytes"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"annual_provisions is the current minting annual provisions value.")))),(0,l.kt)("a",{name:"mint.v1beta1.QueryInflationRequest"}),(0,l.kt)("h3",{id:"queryinflationrequest"},"QueryInflationRequest"),(0,l.kt)("p",null,"QueryInflationRequest is the request type for the Query/Inflation RPC method."),(0,l.kt)("a",{name:"mint.v1beta1.QueryInflationResponse"}),(0,l.kt)("h3",{id:"queryinflationresponse"},"QueryInflationResponse"),(0,l.kt)("p",null,"QueryInflationResponse is the response type for the Query/Inflation RPC\nmethod."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inflation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#bytes"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"inflation is the current minting inflation value.")))),(0,l.kt)("a",{name:"mint.v1beta1.QueryParamsRequest"}),(0,l.kt)("h3",{id:"queryparamsrequest"},"QueryParamsRequest"),(0,l.kt)("p",null,"QueryParamsRequest is the request type for the Query/Params RPC method."),(0,l.kt)("a",{name:"mint.v1beta1.QueryParamsResponse"}),(0,l.kt)("h3",{id:"queryparamsresponse"},"QueryParamsResponse"),(0,l.kt)("p",null,"QueryParamsResponse is the response type for the Query/Params RPC method."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.Params"},"Params")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"params defines the parameters of the module.")))),(0,l.kt)("a",{name:"mint.v1beta1.Query"}),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"Query provides defines the gRPC querier service."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Request Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Verb"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Params")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryParamsRequest"},"QueryParamsRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryParamsResponse"},"QueryParamsResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"Params returns the total set of minting parameters."),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"/cosmos/mint/v1beta1/params")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Inflation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryInflationRequest"},"QueryInflationRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryInflationResponse"},"QueryInflationResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"Inflation returns the current minting inflation value."),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"/cosmos/mint/v1beta1/inflation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AnnualProvisions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryAnnualProvisionsRequest"},"QueryAnnualProvisionsRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryAnnualProvisionsResponse"},"QueryAnnualProvisionsResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"AnnualProvisions current minting annual provisions value."),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"/cosmos/mint/v1beta1/annual_provisions")))),(0,l.kt)("a",{name:"mint/v1beta1/tx.proto"}),(0,l.kt)("p",{align:"right"},(0,l.kt)("a",{href:"#top"},"Top")),(0,l.kt)("h2",{id:"mintv1beta1txproto"},"mint/v1beta1/tx.proto"),(0,l.kt)("a",{name:"mint.v1beta1.MsgUpdateParams"}),(0,l.kt)("h3",{id:"msgupdateparams"},"MsgUpdateParams"),(0,l.kt)("p",null,"MsgUpdateParams defines a Msg for updating the x/mint module parameters."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"authority")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"authority is the address of the governance account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.Params"},"Params")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"params defines the x/mint parameters to update. NOTE: All parameters must be supplied.")))),(0,l.kt)("a",{name:"mint.v1beta1.MsgUpdateParamsResponse"}),(0,l.kt)("h3",{id:"msgupdateparamsresponse"},"MsgUpdateParamsResponse"),(0,l.kt)("p",null,"MsgUpdateParamsResponse defines the response structure for executing a\nMsgUpdateParams message."),(0,l.kt)("a",{name:"mint.v1beta1.MsgService"}),(0,l.kt)("h3",{id:"msgservice"},"MsgService"),(0,l.kt)("p",null,"MsgService defines the service for the logic module.\nDo nothing for now as the service is without any side effects."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Request Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Verb"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UpdateParams")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.MsgUpdateParams"},"MsgUpdateParams")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mint.v1beta1.MsgUpdateParamsResponse"},"MsgUpdateParamsResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateParams defined a governance operation for updating the x/mint module parameters. The authority is hard-coded to the Cosmos SDK x/gov module account"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"scalar-value-types"},"Scalar Value Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},".proto Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"C++"),(0,l.kt)("th",{parentName:"tr",align:null},"Java"),(0,l.kt)("th",{parentName:"tr",align:null},"Python"),(0,l.kt)("th",{parentName:"tr",align:null},"Go"),(0,l.kt)("th",{parentName:"tr",align:null},"C#"),(0,l.kt)("th",{parentName:"tr",align:null},"PHP"),(0,l.kt)("th",{parentName:"tr",align:null},"Ruby"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"double"})," double"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"float"})," float"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float32"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"int32"})," int32"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint32 instead."),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"int64"})," int64"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint64 instead."),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"uint32"})," uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding."),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"uint64"})," uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding."),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"ulong"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sint32"})," sint32"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s."),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sint64"})," sint64"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s."),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"fixed32"})," fixed32"),(0,l.kt)("td",{parentName:"tr",align:null},"Always four bytes. More efficient than uint32 if values are often greater than 2^28."),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"fixed64"})," fixed64"),(0,l.kt)("td",{parentName:"tr",align:null},"Always eight bytes. More efficient than uint64 if values are often greater than 2^56."),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"ulong"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sfixed32"})," sfixed32"),(0,l.kt)("td",{parentName:"tr",align:null},"Always four bytes."),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"sfixed64"})," sfixed64"),(0,l.kt)("td",{parentName:"tr",align:null},"Always eight bytes."),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"int/long"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,l.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"bool"})," bool"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"TrueClass/FalseClass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"string"})," string"),(0,l.kt)("td",{parentName:"tr",align:null},"A string must always contain UTF-8 encoded or 7-bit ASCII text."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"str/unicode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String (UTF-8)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"bytes"})," bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"May contain any arbitrary sequence of bytes."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,l.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String (ASCII-8BIT)")))))}k.isMDXComponent=!0}}]);