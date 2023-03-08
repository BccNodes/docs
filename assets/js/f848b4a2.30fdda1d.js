"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[60957],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={},l=void 0,u={unversionedId:"okp4d_tx_multi-sign",id:"okp4d_tx_multi-sign",title:"okp4d_tx_multi-sign",description:"okp4d tx multi-sign",source:"@site/commands/okp4d_tx_multi-sign.md",sourceDirName:".",slug:"/okp4d_tx_multi-sign",permalink:"/commands/okp4d_tx_multi-sign",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_logic",permalink:"/commands/okp4d_tx_logic"},next:{title:"okp4d_tx_sign-batch",permalink:"/commands/okp4d_tx_sign-batch"}},c={},d=[{value:"okp4d tx multi-sign",id:"okp4d-tx-multi-sign",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-multi-sign"},"okp4d tx multi-sign"),(0,r.kt)("p",null,"Generate multisig signatures for transactions generated offline"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Sign transactions created with the --generate-only flag that require multisig signatures."),(0,r.kt)("p",null,"Read one or more signatures from one or more ","[signature]"," file, generate a multisig signature compliant to the\nmultisig key ","[name]",", and attach the key name to the transaction read from ","[file]","."),(0,r.kt)("p",null,"Example:\n$ okp4d tx multisign transaction.json k1k2k3 k1sig.json k2sig.json k3sig.json"),(0,r.kt)("p",null,"If --signature-only flag is on, output a JSON representation\nof only the generated signature."),(0,r.kt)("p",null,"If the --offline flag is on, the client will not reach out to an external node.\nAccount number or sequence number lookups are not performed so you must\nset these parameters manually."),(0,r.kt)("p",null,"The current multisig implementation defaults to amino-json sign mode.\nThe SIGN_MODE_DIRECT sign mode is not supported.'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx multi-sign [file] [name] [[signature]...] [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --amino                    Generate Amino-encoded JSON suitable for submitting to the txs REST endpoint\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --chain-id string          network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for multi-sign\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --output-document string   The document is written to the given file instead of STDOUT\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --signature-only           Print only the generated signature, then exit\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx"},"okp4d tx"),"\t - Transactions subcommands")))}m.isMDXComponent=!0}}]);