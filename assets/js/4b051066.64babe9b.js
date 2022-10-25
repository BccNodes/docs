"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[481],{7196:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var o=a(7462),n=a(3366),s=(a(7294),a(3905)),i=(a(1839),["components"]),r={sidebar_position:7},l="OKP4 Development Kit",p={unversionedId:"whitepaper/okp4-development-kit",id:"whitepaper/okp4-development-kit",title:"OKP4 Development Kit",description:"OKP4 Design System",source:"@site/docs/whitepaper/okp4-development-kit.md",sourceDirName:"whitepaper",slug:"/whitepaper/okp4-development-kit",permalink:"/docs/whitepaper/okp4-development-kit",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/okp4-development-kit.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Dataverse Gateway",permalink:"/docs/whitepaper/dataverse-gateway"},next:{title:"Roles",permalink:"/docs/whitepaper/roles"}},c={},m=[{value:"OKP4 Design System",id:"okp4-design-system",level:2},{value:"Data Space governance templates",id:"data-space-governance-templates",level:2},{value:"OKP4 Kafka Components",id:"okp4-kafka-components",level:2}],d={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"okp4-development-kit"},"OKP4 Development Kit"),(0,s.kt)("h2",{id:"okp4-design-system"},"OKP4 Design System"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/okp4/ui"},"OKP4 Design System")," is an open-source set of components and resources created to facilitate the design and development of web interfaces in the OKP4 Ecosystem for everyone. This design system serves as a reference for teams working around the OKP4 Ecosystem, enabling them to design and develop web interfaces with speed, consistency and quality."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"OKP4 Design System",src:a(8774).Z,width:"3104",height:"1974"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"OKP4 Design System",src:a(1402).Z,width:"3104",height:"1974"})),(0,s.kt)("p",null,"The OKP4 Design System follows the ",(0,s.kt)("a",{parentName:"p",href:"https://atomicdesign.bradfrost.com/"},"Atomic Design methodology"),", a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner."),(0,s.kt)("div",{className:"text--center"},(0,s.kt)("p",null,(0,s.kt)("img",{src:"/img/content/whitepaper/atomic-design.png",alt:"Atomic Design",width:"600"}))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Atoms"),": are the smallest possible components. The OKP4 Design System offers the basic building blocks for building interfaces such as: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/98"},"typography"),", ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/96"},"themes"),", language, ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/119"},"buttons"),", ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/179"},"toaster"),", ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/120"},"cards"),", etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Molecules"),": are the composition of one or more components of atoms."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Organisms"),": are the combination of molecules that work together or, if necessary, with atoms, to form more elaborate interfaces. The OKP4 Design System offers advanced organisms for the OKP4 Ecosystem like a Token Faucet, a Web Wallet, a Dataverse Explorer...")),(0,s.kt)("h2",{id:"data-space-governance-templates"},"Data Space governance templates"),(0,s.kt)("p",null,"As the Dataverse will contain more and more Data Spaces, governance templates will be more and more available to create a Data Space quickly."),(0,s.kt)("p",null,"A user will able to use a template and create his own library of templates."),(0,s.kt)("h2",{id:"okp4-kafka-components"},"OKP4 Kafka Components"),(0,s.kt)("p",null,"The traditional approach to data processing is to save all the data in a data warehouse and analyze it using a nightly batch process. If we consider blockchains as a data source, then the classical approach would be to regularly extract this information and store it in a data warehouse. This works, but has many limitations: reactivity, scalability, extensibility, to name a few."),(0,s.kt)("p",null,"Instead, at OKP4, we believe in real-time data processing in the form of event streaming. Event streaming is the practice of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"capturing real-time data from event sources such as databases, cloud services, sensors and software applications in the form of event streams;"),(0,s.kt)("li",{parentName:"ul"},"storing these event streams in a durable manner for later retrieval;"),(0,s.kt)("li",{parentName:"ul"},"transforming data in real-time and react to the event streams;"),(0,s.kt)("li",{parentName:"ul"},"routing the event streams to different destination technologies as needed: database, cloud services...")),(0,s.kt)("p",null,"We adoped ",(0,s.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka")," as our distributed event streaming platform for high-performance data pipelines, streaming analytics and data integration, and ",(0,s.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/index.html"},"Kafka Connect")," as a free, open-source framework for connecting Kafka with external systems such as databases, key-value stores, search indexes, and file systems, using so-called Connectors."),(0,s.kt)("p",null,"As part of its Development Kit, OKP4 provides a set of open-source bricks allowing the data processing in real-time from a Cosmos blockchain, integrated in a Kafka platform:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"Kafka Connect Cosmos Source")," connector is a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/connect/concepts.html#connect-connectors"},"Kafka connector")," used to move blocks from a Cosmos blockchain into an Apache Kafka\xae topic."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"Kafka Connect Ontology Sink")," connector is a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/connect/concepts.html#connect-connectors"},"Kafka connector")," used to populate a triplestore with the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/ontology"},"OKP4 ontology fragments")," through a ",(0,s.kt)("a",{parentName:"li",href:"https://jena.apache.org/documentation/fuseki2/soh.html"},"SPARQL endpoint")," from Apache Kafka topic messages contains JSON transactions."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"Cosmos Block To Tx")," Kafka Processor is a Stream Processor which continuously reads ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/intro/sdk-app-architecture.html"},"Cosmos blocks")," from an ",(0,s.kt)("inlineCode",{parentName:"li"},"input")," Kafka topic, unwraps the Cosmos transactions and sends them to an ",(0,s.kt)("inlineCode",{parentName:"li"},"output")," topic."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"Cosmos Tx to Json")," Kafka Streams Processor is a Stream Processor which consumes ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos")," and ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/okp4/okp4d"},"OKP4"),(0,s.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers"},"Protobuf")," messages from an ",(0,s.kt)("inlineCode",{parentName:"li"},"input")," Kafka topic and sends a ",(0,s.kt)("a",{parentName:"li",href:"https://www.json.org/json-en.html"},"JSON")," decoded message in the ",(0,s.kt)("inlineCode",{parentName:"li"},"output")," topic."),(0,s.kt)("li",{parentName:"ul"},"...")))}h.isMDXComponent=!0},8774:function(e,t,a){t.Z=a.p+"assets/images/okp4-design-system-overview-1-e9c93e08f3d3ff6132bc8f8a79cdb2bc.png"},1402:function(e,t,a){t.Z=a.p+"assets/images/okp4-design-system-overview-2-dd03ace17269c71ed9ba11e954f969dd.png"}}]);