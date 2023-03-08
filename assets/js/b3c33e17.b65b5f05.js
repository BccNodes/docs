"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[88501],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},d=void 0,c={unversionedId:"okp4d_tx_authz_grant",id:"okp4d_tx_authz_grant",title:"okp4d_tx_authz_grant",description:"okp4d tx authz grant",source:"@site/commands/okp4d_tx_authz_grant.md",sourceDirName:".",slug:"/okp4d_tx_authz_grant",permalink:"/commands/okp4d_tx_authz_grant",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_authz_exec",permalink:"/commands/okp4d_tx_authz_exec"},next:{title:"okp4d_tx_authz_revoke",permalink:"/commands/okp4d_tx_authz_revoke"}},l={},u=[{value:"okp4d tx authz grant",id:"okp4d-tx-authz-grant",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"okp4d-tx-authz-grant"},"okp4d tx authz grant"),(0,o.kt)("p",null,"Grant authorization to an address"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"create a new grant authorization to an address to execute a transaction on your behalf:"),(0,o.kt)("p",null,"Examples:\n$ okp4d tx authz grant cosmos1skjw.. send /cosmos.bank.v1beta1.MsgSend --spend-limit=1000stake --from=cosmos1skl..\n$ okp4d tx authz grant cosmos1skjw.. generic --msg-type=/cosmos.gov.v1.MsgVote --from=cosmos1sk.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'okp4d tx authz grant &lt;grantee&gt; <authorization_type="send"|"generic"|"delegate"|"unbond"|"redelegate"> --from &lt;granter&gt; [flags]\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint          The account number of the signing account (offline mode only)\n      --allowed-validators strings   Allowed validators addresses separated by ,\n      --aux                          Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string        Transaction broadcasting mode (sync|async|block) (default "sync")\n      --deny-validators strings      Deny validators addresses separated by ,\n      --dry-run                      ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration int               Expire time as Unix timestamp. Set zero (0) for no expiry. Default is 0.\n      --fee-granter string           Fee granter grants fees for the transaction\n      --fee-payer string             Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                  Fees to pay along with transaction; eg: 10uatom\n      --from string                  Name or address of private key with which to sign\n      --gas string                   gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float         adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string            Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                         help for grant\n      --keyring-backend string       Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string           The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                       Use a connected Ledger device\n      --msg-type string              The Msg method name for which we are creating a GenericAuthorization\n      --node string                  &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                  Note to add a description to the transaction (previously --memo)\n      --offline                      Offline mode (does not allow any online functionality)\n  -o, --output string                Output format (text|json) (default "json")\n  -s, --sequence uint                The sequence number of the signing account (offline mode only)\n      --sign-mode string             Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --spend-limit string           SpendLimit for Send Authorization, an array of Coins allowed spend\n      --timeout-height uint          Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                   Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                          Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_authz"},"okp4d tx authz"),"\t - Authorization transactions subcommands")))}m.isMDXComponent=!0}}]);