(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(t,e,c){},62:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(30),a=c.n(s),i=c(3),r=(c(37),c(8)),o=c(9),l=c(11),j=c(10),h=c(5),d=c(0),b=Object(i.f)((function(){return Object(d.jsx)("nav",{className:"nav-wrapper blue darken-3",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h.b,{className:"brand-logo",children:"Ellectify"}),Object(d.jsxs)("ul",{className:"right",children:[Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{to:"/Home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{to:"About",children:"Vote"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{to:"/Contact",children:"Party List"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{to:"/BlockApp",children:"Blockchain"})})]})]})})})),p=c.p+"static/media/voting.8db9f47c.png",O=function(t){return Object(d.jsxs)("div",{className:"container home",children:[Object(d.jsx)("h4",{className:"center",children:"Home"}),Object(d.jsx)("h1",{className:"center",children:"Wellcome!"}),Object(d.jsx)("h3",{className:"center",children:"Today is ellection day!"}),Object(d.jsx)("img",{src:p,alt:"voting"}),Object(d.jsx)("h6",{children:"Hadas Israeli, Inbar Israeli, Ohad Edry"})]})},u=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"center",children:"Ballot Box"}),Object(d.jsx)("p",{children:Object(d.jsx)("h4",{children:"Chose your Party here:"})}),Object(d.jsx)("input",{type:"text",id:"txtName"}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})},x=c(17),m=c.n(x),v=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={posts:[]},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;m.a.get("https://jsonplaceholder.typicode.com/posts/").then((function(e){console.log(e),t.setState({posts:e.data.slice(0,10)})}))}},{key:"render",value:function(){var t=this.state.posts,e=t.length?t.map((function(t){return Object(d.jsx)("div",{className:"post card",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)(h.b,{to:"/"+t.id,children:Object(d.jsx)("span",{className:"card-title",children:t.title})}),Object(d.jsx)("p",{children:t.body})]})},t.id)})):Object(d.jsx)("div",{className:"center",children:"Loading, Please wait..."});return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"center",children:"Party List"}),Object(d.jsx)("p",{children:Object(d.jsx)("h4",{children:"The competing parties:"})}),e]})}}]),c}(n.Component),f=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={post:null},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.post_id;m.a.get("https://jsonplaceholder.typicode.com/posts/"+e).then((function(e){t.setState({post:e.data}),console.log(e.data)}))}},{key:"render",value:function(){var t=this.state.post?Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)("h4",{className:"center",children:this.state.post.title}),Object(d.jsx)("p",{children:this.state.post.body})]}):Object(d.jsx)("div",{className:"center",children:"Loading data..."});return Object(d.jsx)("div",{className:"container",children:t})}}]),c}(n.Component),y=c.p+"static/media/blockchain.05eb92aa.png",g=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={walletInfo:{}},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:3000/api/wallet-info").then((function(t){return t.json()})).then((function(e){return t.setState({walletInfo:e})}))}},{key:"render",value:function(){var t=this.state.walletInfo,e=t.address,c=t.balance;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"nav-wrapper blue darken-3",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("ul",{className:"right",children:Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{to:"/Blocks",children:"Blocks"})})})})})}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{alt:"blockchain",src:y}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"WalletInfo",children:[Object(d.jsxs)("div",{children:["Adress: ",e]}),Object(d.jsxs)("div",{children:["Balance: ",c]})]})]})}}]),c}(n.Component),k=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/BlockApp",component:g}),Object(d.jsx)(i.a,{path:"/Home",component:O}),Object(d.jsx)(i.a,{path:"/About",component:u}),Object(d.jsx)(i.a,{path:"/Contact",component:v}),Object(d.jsx)(i.a,{path:"/:post_id",component:f})]})]})})}}]),c}(n.Component),N=function(t){var e=t.transaction,c=e.input,n=e.outputMap,s=Object.keys(n);return Object(d.jsxs)("div",{className:"Transaction",children:[Object(d.jsxs)("div",{children:["From: ","".concat(c.address.substring(0,20),"...")," | Balance: ",c.amount]}),s.map((function(t){return Object(d.jsxs)("div",{children:["To: ","".concat(t.substring(0,20),"...")," | Sent: ",n[t]]},t)}))]})},w=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={displayTransaction:!1},t.toggleTransaction=function(){t.setState({displayTransaction:!t.state.displayTransaction})},t}return Object(o.a)(c,[{key:"displayTransaction",get:function(){var t=this.props.block.data,e=JSON.stringify(t),c=e.length>35?"".concat(e.substring(0,35),"..."):e;return this.state.displayTransaction?Object(d.jsxs)("div",{children:[t.map((function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(N,{transaction:t})]},t.id)})),Object(d.jsx)("br",{}),Object(d.jsx)("bottun",{onClick:this.toggleTransaction,children:"Show Less"})]}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Data:",c]}),Object(d.jsx)("bottun",{onClick:this.toggleTransaction,children:"Show More"})]})}},{key:"render",value:function(){console.log("this.displayTransaction",this.displayTransaction);var t=this.props.block,e=t.timestamp,c=t.hash,n="".concat(c.substring(0,15),"...");return Object(d.jsxs)("div",{className:"Block",children:[Object(d.jsxs)("div",{children:["Hash:",n]}),Object(d.jsxs)("div",{children:["Timestemp:",new Date(e).toLocaleString()]}),this.displayTransaction]})}}]),c}(n.Component),T=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={blocks:[]},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:3000/api/blocks").then((function(t){return t.json()})).then((function(e){return t.setState({blocks:e})}))}},{key:"render",value:function(){return console.log("this.state",this.state),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"nav-wrapper blue darken-3",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("ul",{className:"right",children:Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{to:"/BlockApp",children:"Blockchain"})})})})})}),Object(d.jsx)("h3",{children:"Blocks"}),this.state.blocks.map((function(t){return Object(d.jsx)(w,{block:t},t.hash)}))]})}}]),c}(n.Component),B=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),s(t),a(t),i(t)}))},C=c(32),A=Object(C.a)();a.a.render(Object(d.jsx)(i.b,{history:A,children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:k}),Object(d.jsx)(i.a,{path:"/",component:T})]})}),document.getElementById("root")),B()}},[[62,1,2]]]);
//# sourceMappingURL=main.df46b7e7.chunk.js.map